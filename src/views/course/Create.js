import React, { useEffect, useState, Component } from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CFormText, CLabel,CRow } from '@coreui/react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import MandatoryIndicator from '../form-components/MandatoryIndicator';

import SchoolService from '../../api/SchoolService';
import CourseService from '../../api/CourseService';

const CreateCourseComponent = () => {  
    const { register, handleSubmit, errors, getValues, watch, formState } = useForm();
    const history = useHistory();
    const saveOrUpdateCourse = (data, e) => {
        const course = data;
        if(formState)
        {
            console.log(course)
            CourseService.createCourse(course).then(res =>{
                e.target.reset();
                history.push('/course/list');
            });
        }
    }
    const [state, setState] = useState([]);
    useEffect(() => {
        SchoolService.getSchools().then((res) => {
            console.log(res.data.data)
            setState(res.data.data)
        });
    }, []);


    return (
        <CRow>
            <CCol xs="12" md="12">
                <CCard accentColor="primary">
                    <CCardHeader>
                        Course Creation Form
                    </CCardHeader>
                    <CCardBody>
                        <form onSubmit={handleSubmit(saveOrUpdateCourse)} className="form-horizontal">
                            <CFormGroup row>
                                <CCol xs="12" md="6">
                                    <CLabel>Course Full Name <MandatoryIndicator/></CLabel>
                                    <input name="course_full_name" className="form-control" ref={register({ required: true, minLength: 4, maxLength: 50 })} />
                                    <span className="text-danger">
                                        {errors.course_full_name && errors.course_full_name.type === 'required' && ('First Name is required.')}
                                        {errors.course_full_name && errors.course_full_name.type === 'minLength' && ('First Name required min length of 4.')}
                                        {errors.course_full_name && errors.course_full_name.type === 'maxLength' && ('First Name required min length of 50.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="6">
                                    <CLabel>Course Short Name </CLabel>
                                    <input name="course_short_name" className="form-control" ref={register} />
                                </CCol>
                            </CFormGroup>
                            { (<CFormGroup row>                            
                                    <CCol xs="12" md="6">
                                        <CLabel>School <MandatoryIndicator/></CLabel>    
                                        <select name="school_id" className="form-control" ref={register({ required: true })}>
                                            <option>Select</option>
                                            {state.length > 0 && state.map((item, i) => (
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
                                </CFormGroup>)
                            }
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

export default CreateCourseComponent;