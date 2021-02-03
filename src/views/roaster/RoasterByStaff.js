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

function getDateFormat(number){
  var previousDate = new Date();
 previousDate.setDate(new Date().getDate() - number)
  var date = previousDate.getDate();
  var month = previousDate.getMonth()+1;
  var year = previousDate.getFullYear();
  return date+"-"+month+"-"+year;
}

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const columns = ["Name","Roles", getDateFormat(7), getDateFormat(6),getDateFormat(5),getDateFormat(4),getDateFormat(3),getDateFormat(2),getDateFormat(1),getDateFormat(0)];

const options = {
  filter: true,
  filterType: "dropdown",
 

};

const data = [
  [ "Reddy","Nurse","early","early","mid","mid","night","night","mid"],
  [ "jain","Nurse","mid","mid","night","night","mid","mid","early"],
  [ "Rao","Nurse","night","mid","early","early","early","early","early"]
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