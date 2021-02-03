import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

import StudentsService from '../../api/StudentService';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'


// const fields = [
//     'first_name', 
//     'middle_name', 
//     'last_name', 
//     'role',
//     'age', 
//     'gender', 
//     'phone_number', 

//     {
//         key: 'add_students',
//         label: 'Action',
//         sorter: false,
//         filter: false
//     }
// ]

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const columns = ["Shifts","Condition","Action"];

const options = {
  filter: true,
  filterType: "dropdown",
 

};

const data = [
["Shift Division", "Each Day Is Divided Into Three 8-Hour Shifts",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span>],
["Each Shift", "Each Shift Is Assigned To A Single Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span>],
["#", "Each Nurse Is Assigned To At Least Two Shifts During The Three-Day Period", <span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span>],

["Night", "No 3 Night Shifts In A Row", <span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span>],
["Early", "No Early Shift After Night",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span>],



];





class StudentList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
    this.selectedStudentsList = [];
  }


  componentDidMount() {
    StudentsService.getStudents().then((res) => {
      console.log(res.data.data)
      this.setState({ data: res.data.data });
    });
  }

  selectStudent = (object) => {
    this.selectedStudentsList.push(object.id);
    console.log(this.selectedStudentsList)
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" lg="12">
            <CCard accentColor="primary">
           


              <MUIDataTable
                // title={"ACME Employee list"}
                data={data}
                columns={columns}
                options={options}
              />
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default StudentList