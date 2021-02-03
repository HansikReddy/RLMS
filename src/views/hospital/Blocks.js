import React from 'react'
import SchoolService from '../../api/SchoolService';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react'

const fields = ['Block Name', 'Contact Number', 'Supervisor', 'Landmark'];

class SchoolList extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
            data : null
        };
    }
    
    componentDidMount(){
        SchoolService.getSchools().then((res) => {
            console.log(res.data.data)
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
                        Block List
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

export default SchoolList