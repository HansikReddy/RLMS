import React from 'react'
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

const fields = [
    'first_name', 
    'middle_name', 
    'last_name', 
    'role',
    'age', 
    'gender', 
    'phone_number', 
    
    {
        key: 'add_students',
        label: 'Action',
        sorter: false,
        filter: false
    }
]

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

class StudentList extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
            data : null
        };
        this.selectedStudentsList = [];
    }
    
    
    componentDidMount(){
        StudentsService.getStudents().then((res) => {
            console.log(res.data.data)
            this.setState({ data: res.data.data});
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
                <CCardHeader>
                    Employee List
                </CCardHeader>
                <CCardBody>
                <CDataTable
                    items={this.state.data}
                    fields={fields}
                    itemsPerPage={10}
                    pagination
                    tableFilter
                    itemsPerPageSelect
                    hover
                    sorter
                    scopedSlots = {{
                        'add_students':
                            (item, index)=>{
                            return (
                                <td>
                                    <input type="checkbox" name="select_student" id={index} onClick={this.selectStudent(item)}/>
                                </td>
                                )
                            },
                        }
                    }
                />
                </CCardBody>
                </CCard>
            </CCol>
            </CRow>
        </>
        );
    }
}

export default StudentList