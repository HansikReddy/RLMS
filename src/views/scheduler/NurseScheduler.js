import { render } from 'react-dom';
import '.././scheduler/Scheduler.css';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, TimelineViews, Inject, ResourcesDirective, ResourceDirective, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';
import { extend, Internationalization, isNullOrUndefined } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
/**
 * schedule room scheduler sample
 */
export class WorkHours extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.roomData, null, true);
    this.instance = new Internationalization();
    this.ownerData = [
      { text: 'Hansik Reddy', id: 1, color: '#ea7a57', type: 'Conference' },
      { text: 'Dr.shama', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
      { text: 'Reddy', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
      { text: 'Roa', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
      { text: 'Chowdary', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
      { text: 'Jain', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
      { text: 'Raj', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
      { text: 'Shetty', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
      { text: 'ARedd', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
      { text: 'Nimhans', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
    ];
  }

  globalSearch(args) {
    let searchString = args.target.value;
    if (searchString !== '') {
      new DataManager(this.scheduleObj.getEvents(null, null, true)).executeQuery(new Query().
        search(searchString, ['Subject', 'Location', 'Description'], null, true, true)).then((e) => {
          if (e.result.length > 0) {
            this.showSearchEvents('show', e.result);
          }
          else {
            this.showSearchEvents('hide');
          }
        });
    }
    else {
      this.showSearchEvents('hide');
    }
  }

  searchOnclick() {
    let searchObj = [];
    let startDate;
    let endDate;
    let formElements = [].slice.call(document.querySelectorAll('.event-search .search-field'));
    formElements.forEach((node) => {
      let fieldOperator;
      let predicateCondition;
      let fieldValue;
      let fieldInstance;
      if (node.value && node.value !== '' && !node.classList.contains('e-datepicker')) {
        fieldOperator = 'contains';
        predicateCondition = 'or';
        fieldValue = node.value;
        searchObj.push({
          field: node.getAttribute('data-name'), operator: fieldOperator, value: fieldValue, predicate: predicateCondition,
          matchcase: true
        });
      }
      if (node.classList.contains('e-datepicker') && node.ej2_instances[0].value) {
        fieldInstance = node.ej2_instances[0];
        fieldValue = fieldInstance.value;
        if (node.classList.contains('e-start-time')) {
          fieldOperator = 'greaterthanorequal';
          predicateCondition = 'and';
          startDate = new Date(+fieldValue);
        }
        else {
          fieldOperator = 'lessthanorequal';
          predicateCondition = 'and';
          let date = new Date(+fieldInstance.value);
          fieldValue = new Date(date.setDate(date.getDate() + 1));
          endDate = fieldValue;
        }
        searchObj.push({
          field: node.getAttribute('data-name'), operator: fieldOperator, value: fieldValue, predicate: predicateCondition,
          matchcase: false
        });
      }
    });
    if (searchObj.length > 0) {
      let filterCondition = searchObj[0];
      let predicate = new Predicate(filterCondition.field, filterCondition.operator, filterCondition.value, filterCondition.matchcase);
      for (let i = 1; i < searchObj.length; i++) {
        predicate = predicate.and(searchObj[i].field, searchObj[i].operator, searchObj[i].value, searchObj[i].matchcase);
      }
      let result = new DataManager(this.scheduleObj.getEvents(startDate, endDate, true)).
        executeLocal(new Query().where(predicate));
      this.showSearchEvents('show', result);
    }
    else {
      this.showSearchEvents('hide');
    }
  }
  clearOnClick() {
    document.getElementById('schedule').style.display = 'block';
    document.getElementById('form-search').reset();
    this.showSearchEvents('hide');
  }
  showSearchEvents(type, data) {
    if (type === 'show') {
      if (document.getElementById('grid').classList.contains('e-grid')) {
        let gridObj = document.querySelector('#grid').ej2_instances[0];
        gridObj.dataSource = data;
        gridObj.dataBind();
      }
      else {
        let gridObj = new GridComponent({
          dataSource: data,
          height: 505,
          width: 'auto',
          columns: [
            { field: 'Subject', headerText: 'Subject', width: 120 },
            { field: 'Location', headerText: 'Location', width: 120 },
            { field: 'StartTime', headerText: 'StartTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
            { field: 'EndTime', headerText: 'EndTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
          ]
        });
        gridObj.appendTo(document.querySelector('#grid'));
        this.scheduleObj.element.style.display = 'none';
      }
    }
    else {
      let gridObj = document.querySelector('#grid').ej2_instances;
      if (gridObj && gridObj.length > 0 && !gridObj[0].isDestroyed) {
        gridObj[0].destroy();
      }
      this.scheduleObj.element.style.display = 'block';
    }
  }
  getRoomName(value) {
    return value.resourceData[value.resource.textField];
  }
  getRoomType(value) {
    return value.resourceData.type;
  }
  getRoomCapacity(value) {
    return value.resourceData.capacity;
  }
  isReadOnly(endDate) {
    return (endDate < new Date(2018, 6, 31, 0, 0));
  }
  resourceHeaderTemplate(props) {
    return (<div className="template-wrap">
      <div className="room-name">{this.getRoomName(props)}</div>
      {/* <div className="room-type">{this.getRoomType(props)}</div>
            <div className="room-capacity">{this.getRoomCapacity(props)}</div> */}
    </div>);
  }
  onActionBegin(args) {
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      let data;
      if (args.requestType === 'eventCreate') {
        data = args.data[0];
      }
      else if (args.requestType === 'eventChange') {
        data = args.data;
      }
      if (!this.scheduleObj.isSlotAvailable(data)) {
        args.cancel = true;
      }
    }
  }
  onEventRendered(args) {
    let data = args.data;
    if (this.isReadOnly(data.EndTime)) {
      args.element.setAttribute('aria-readonly', 'true');
      args.element.classList.add('e-read-only');
    }
  }
  onRenderCell(args) {
    if (args.element.classList.contains('e-work-cells')) {
      if (args.date < new Date(2018, 6, 31, 0, 0)) {
        args.element.setAttribute('aria-readonly', 'true');
        args.element.classList.add('e-read-only-cells');
      }
    }
    // if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
    //     let target = args.element.querySelector('.e-resource-text');
    //     target.innerHTML = '<div></div>';
    // }
  }
  onPopupOpen(args) {
    let data = args.data;
    if (args.type === 'QuickInfo' || args.type === 'Editor' || args.type === 'RecurrenceAlert' || args.type === 'DeleteAlert') {
      let target = (args.type === 'RecurrenceAlert' ||
        args.type === 'DeleteAlert') ? args.element[0] : args.target;
      if (!isNullOrUndefined(target) && target.classList.contains('e-work-cells')) {
        if ((target.classList.contains('e-read-only-cells')) ||
          (!this.scheduleObj.isSlotAvailable(data))) {
          args.cancel = true;
        }
      }
      else if (!isNullOrUndefined(target) && target.classList.contains('e-appointment') &&
        (this.isReadOnly(data.EndTime))) {
        args.cancel = true;
      }
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-9">
          <div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
              <div className='control-wrapper'>
                <ScheduleComponent cssClass='timeline-resource' ref={schedule => this.scheduleObj = schedule} width='100%' height='650px' selectedDate={new Date(2021, 0, 12)} workHours={{ start: '08:00', end: '18:00' }} timeScale={{ interval: 60, slotCount: 1 }} resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)} eventSettings={{
                  dataSource: this.data,
                  fields: {
                    id: 'Id',
                    subject: { title: 'Summary', name: 'Subject' },
                    location: { title: 'Location', name: 'Location' },
                    description: { title: 'Comments', name: 'Description' },
                    startTime: { title: 'From', name: 'StartTime' },
                    endTime: { title: 'To', name: 'EndTime' }
                  }
                }} eventRendered={this.onEventRendered.bind(this)} popupOpen={this.onPopupOpen.bind(this)} actionBegin={this.onActionBegin.bind(this)} renderCell={this.onRenderCell.bind(this)} group={{ enableCompactView: false, resources: ['MeetingRoom'] }}>
                  <ResourcesDirective>
                    <ResourceDirective field='RoomId' title='Room Type' name='MeetingRoom' allowMultiple={true} dataSource={this.ownerData} textField='text' idField='id' colorField='color'>
                    </ResourceDirective>
                  </ResourcesDirective>
                  <ViewsDirective>
                    <ViewDirective option='TimelineDay' />
                    <ViewDirective option='TimelineWeek' />
                  </ViewsDirective>
                  <Inject services={[TimelineViews, Resize, DragAndDrop]} />
                </ScheduleComponent>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className='col-lg-12 property-section property-customization'>
          <div className="property-panel-section">
            <p className="property-panel-header header-customization" style={{ width: '100%' }}>Search by all event fields</p>
            <div className="property-panel-content">
              <input className="e-input" type="text" placeholder="Enter the Search text" onKeyUp={this.globalSearch.bind(this)} />
            </div>
            <form className="event-search" id="form-search">
              <p className="property-panel-header header-customization" style={{ width: '100%' }}>Search by specific event fields</p>
              <table id="property-specific" style={{ width: '100%' }}>
                <tbody>
                  <tr className="row">
                    <td className="property-panel-content" colSpan={2}>
                      <input type="text" className="e-input search-field" id="searchEventName" data-name="Subject" placeholder="Subject" />
                    </td>
                  </tr>
                  <tr className="row" style={{ height: '45px' }}>
                    <td className="property-panel-content" colSpan={2}>
                      <input type="text" className="e-input search-field" id="searchEventLocation" data-name="Location" placeholder="Location" />
                    </td>
                  </tr>
                  <tr className="row" style={{ height: '45px' }}>
                    <td className="property-panel-content" colSpan={2}>
                      <DatePickerComponent className="search-field e-start-time" value={null} data-name="StartTime" showClearButton={false} placeholder="Start Time"></DatePickerComponent>
                    </td>
                  </tr>
                  <tr className="row" style={{ height: '45px' }}>
                    <td className="property-panel-content" colSpan={2}>
                      <DatePickerComponent className="search-field e-end-time" value={null} data-name="EndTime" showClearButton={false} placeholder="End Time"></DatePickerComponent>
                    </td>
                  </tr>
                  <tr className="row" style={{ height: '45px' }}>
                    <td className="e-field button-customization" style={{ width: '50%', padding: '15px' }}>
                      <ButtonComponent title='Search' type='button' onClick={this.searchOnclick.bind(this)}>Search</ButtonComponent>
                    </td>
                    <td className="e-field button-customization" style={{ width: '50%', padding: '15px' }}>
                      <ButtonComponent title='Clear' type='button' onClick={this.clearOnClick.bind(this)}>Clear</ButtonComponent>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default WorkHours;