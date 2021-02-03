import React from 'react'
import SectionService from '../../api/SectionService';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CButtonGroup
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { withRouter  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fields = [
    'section_name', 
    'section_code',
    {
        key: 'add_students',
        label: 'Action',
        _style: { width: '17%' },
        sorter: false,
        filter: false
    }
];

class SectionList extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
            data : null
        };
        this.editSection = this.editSection.bind(this);
    }
    
    componentDidMount(){
        SectionService.getSections().then((res) => {
            this.setState({ data: res.data.data});
        });
    }

    addStudents = (section) => {
        console.log(section)
        this.props.history.push('/section/add-students-to-section/'+section.id);
    }
    
    editSection = (section) => {
        this.props.history.push('/section/update/'+section.id);
    }

    viewSection = (section) => {
        console.log(section)
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
        <>
            <CRow>
                <CCol xs="12" lg="12">
                    <CCard accentColor="primary">
                    <CCardHeader>
                        Sections List
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
                                    <td className="py-2">
                                        <CButtonGroup>
                                            <button
                                                className="btn btn-primary"
                                                size="sm"
                                                title="Add Students to this Section"
                                                onClick={()=>{this.addStudents(item)}}>
                                                <FontAwesomeIcon icon={['fas', 'plus']} />
                                            </button>
                                            <button
                                                className="btn btn-warning"
                                                size="sm"
                                                title="Edit Section"
                                                onClick={()=>{this.editSection(item)}}
                                            >
                                                <FontAwesomeIcon icon={['fas', 'edit']} />
                                            </button>
                                            <button
                                                className="btn btn-success"
                                                size="sm"
                                                title="View Students"
                                                onClick={()=>{this.viewSection(item)}}>
                                                <FontAwesomeIcon icon={['far', 'eye']} />
                                            </button>
                                        </CButtonGroup>
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

export default SectionList