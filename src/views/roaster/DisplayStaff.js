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

const columns = ["Id","FirstName","LastName", "Shifts Per Roaster", "Maximum Shifts If Taken Leave", "Available For Shifts", "Roles", "Action"];

const options = {
  filter: true,
  filterType: "dropdown"
};

const data = [
  ["1","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span>],
  // [
  //   "Aiden Lloyd",
  //   "Business Consultant for an International Company and CEO of Tony's Burger Palace",
  //   "Dallas"
  // ],
  ["2","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span> ],
  ["3","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span> ],

  ["4","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span> ],

  ["5","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span> ],

  ["6","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span> ],

  ["7","Hansik", "Reddy", "10", "True", "True","Nurse",<span><button type="button" class="btn btn">Edit</button><button type="button" class="btn btn">Delete</button></span> ],

 

  // ["Aaren Rose", null, "Toledo"],
  // ["Johnny Jones", "Business Analyst", "St. Petersburg"],
  // ["Jimmy Johns", "Business Analyst", "Baltimore"],
  // ["Jack Jackson", "Business Analyst", "El Paso"],
  // ["Joe Jones", "Computer Programmer", "El Paso"],
  // ["Jacky Jackson", "Business Consultant", "Baltimore"],
  // ["Jo Jo", "Software Developer", "Washington DC"],
  // ["Donna Marie", "Business Manager", "Annapolis"]
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