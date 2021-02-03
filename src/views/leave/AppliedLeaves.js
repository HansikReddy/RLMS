import React from "react";
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import StudentsService from '../../api/StudentService';
import {
  CCard,
  CCol,
  CRow
} from '@coreui/react'


const columns = ["Name", "Role", "Leave Type", "From Date", "To Date", "Action"];

const options = {
  filter: true,
  filterType: "dropdown",
  expandableRows: true,
  expandableRowsHeader: false,
  expandableRowsOnClick: true,
 actions:true,
  isRowExpandable: (dataIndex, expandedRows) => {
    if (dataIndex === 3 || dataIndex === 4) return false;

    // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
    if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
    return true;
  },
  renderExpandableRow: (rowData, rowMeta) => {
    const colSpan = rowData.length + 1;
    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          Balances : <br></br>
          <b>Medical Leave: 10</b> <br></br>
          <b>Earned Leave: 10</b> <br></br>
          <b>Privilaged Leave: 10</b> <br></br>
        </TableCell>
      </TableRow>
    );
  },
  onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)

};

const data = [
  ["Reddy", "Senior Nurse", "Medical Leave", "12-01-2021", "13-01-2021"],
  ["Sharma", " Doctor ", "Medical Leave", "12-01-2021", "13-01-2021",<span><button type="button" class="btn btn-success" >Approve </button> <button type="button" class="btn btn-danger" >Sendback </button> </span> ],
  ["Roa", " Junior Nurse", "Earned Leave", "12-01-2021", "13-01-2021",],
  ["Kumar", " Nurse", "Privilage Leave", "12-01-2021", "13-01-2021",],
  ["Chowdary", " Nurse", "Medical Leave", "12-01-2021", "13-01-2021",],
  ["Sai", " Nurse", "Medical Leave", "12-01-2021", "13-01-2021",],
  ["Jain", " Nurse", "Medical Leave", "12-01-2021", "13-01-2021",],
  ["Peter", " Nurse", "Medical Leave", "12-01-2021", "13-01-2021",]
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