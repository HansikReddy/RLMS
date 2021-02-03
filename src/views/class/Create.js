import React, { useEffect, useState, Component } from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CFormText, CLabel,CRow } from '@coreui/react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import MandatoryIndicator from '../form-components/MandatoryIndicator';

import SchoolService from '../../api/SchoolService';
import CourseService from '../../api/CourseService';
import ClassService from '../../api/ClassService';

const CreateClassComponent = () => {  
    const { register, handleSubmit, errors, getValues, watch, formState } = useForm();
    const history = useHistory();
    const saveOrUpdateClass = (data, e) => {
        const courseClass = data;
        if(formState)
        {
            ClassService.createClass(courseClass).then(res =>{
                e.target.reset();
                history.push('/class/list');
            });
        }
    }

    const [schools, setSchools] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        SchoolService.getSchools().then((res) => {
            setSchools(res.data.data)
        });
    }, []);

    const getCourses = (event) => {
        CourseService.getAllCoursesBySchoolId(event.target.value).then((res) => {
            setCourses(res.data.data)
        });
    }

    return (
        <CRow>
            <CCol xs="12" md="12">
                <CCard accentColor="primary">
                    <CCardHeader>
                        Class Creation Form
                    </CCardHeader>
                    <CCardBody>
                        <form onSubmit={handleSubmit(saveOrUpdateClass)} className="form-horizontal">
                            <CFormGroup row>
                                <CCol xs="12" md="6">
                                    <CLabel>Class Full Name <MandatoryIndicator/></CLabel>
                                    <input name="class_full_name" className="form-control" ref={register({ required: true, minLength: 4, maxLength: 50 })} />
                                    <span className="text-danger">
                                        {errors.class_full_name && errors.class_full_name.type === 'required' && ('First Name is required.')}
                                        {errors.class_full_name && errors.class_full_name.type === 'minLength' && ('First Name required min length of 4.')}
                                        {errors.class_full_name && errors.class_full_name.type === 'maxLength' && ('First Name required min length of 50.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="3">
                                    <CLabel>Class Short Name </CLabel>
                                    <input name="class_short_name" className="form-control" ref={register} />
                                </CCol>
                                <CCol xs="12" md="3">
                                    <CLabel>Class Code <MandatoryIndicator/></CLabel>
                                    <input name="class_code" className="form-control" ref={register({ required: true })} />
                                    <span className="text-danger">
                                        {errors.class_code && errors.class_code.type === 'required' && ('Class Code is required.')}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>                            
                                <CCol xs="12" md="6">
                                    <CLabel>School <MandatoryIndicator/></CLabel>    
                                    <select name="school_id" className="form-control" onChange={getCourses} ref={register({ required: true })}>
                                        <option>Select</option>
                                        {schools.length > 0 && schools.map((item, i) => (
                                            <option
                                            key={i}
                                            value={item?.id}
                                            >
                                            {item?.school_full_name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="text-danger">
                                        {errors.school_id && errors.school_id.type === 'required' && ('School is required.')}
                                    </span>                                    
                                </CCol>                    
                                <CCol xs="12" md="6">
                                    <CLabel>Course <MandatoryIndicator/></CLabel>    
                                    <select name="course_id" className="form-control" ref={register({ required: true })}>
                                        <option>Select</option>
                                        {courses.length > 0 && courses.map((item, i) => (
                                            <option
                                            key={i}
                                            value={item?.id}
                                            >
                                            {item?.course_full_name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="text-danger">
                                        {errors.school_id && errors.school_id.type === 'required' && ('School is required.')}
                                    </span>                                    
                                </CCol>
                            </CFormGroup>
                            <CCardFooter className="text-right">
                                <button type="reset" className="btn btn-sm btn-danger"><i name="cil-ban" />Reset</button>
                                <input type="submit" className="btn btn-sm btn-primary float-right" value="Save"/><i name="cil-scrubber" />
                            </CCardFooter>
                            </form>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CreateClassComponent;