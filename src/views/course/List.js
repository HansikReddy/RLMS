import React from 'react'
import CourseService from '../../api/CourseService';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react'

const fields = ['course_full_name', 'course_short_name'];

class CourseList extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
            data : null
        };
    }
    
    componentDidMount(){
        CourseService.getCourses().then((res) => {
            this.setState({ data: res.data.data});
        });
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
        <>
            <CRow>
                <CCol xs="12" lg="12">
                    <CCard accentColor="primary">
                    <CCardHeader>
                        Courses List
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                        items={this.state.data}
                        fields={fields}
                        itemsPerPage={10}
                        pagination
                    />
                    </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
        );
    }
}

export default CourseList