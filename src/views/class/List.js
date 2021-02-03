import React from 'react'
import ClassService from '../../api/ClassService';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react'

const fields = ['class_full_name', 'class_short_name', 'class_code'];

class ClassList extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
            data : null
        };
    }
    
    componentDidMount(){
        ClassService.getClasses().then((res) => {
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
                        Classes List
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

export default ClassList