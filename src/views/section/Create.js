import React, { useEffect, useState, Component } from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CFormText, CLabel,CRow } from '@coreui/react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useParams} from "react-router";

import MandatoryIndicator from '../form-components/MandatoryIndicator';

import SchoolService from '../../api/SchoolService';
import CourseService from '../../api/CourseService';
import ClassService from '../../api/ClassService';
import SectionService from '../../api/SectionService';

const CreateSectionComponent = () => {  
    const { register, handleSubmit, errors, getValues, setValue, watch, formState } = useForm();
    const history = useHistory();
    const params = useParams();
    let flag = false;

    const [schools, setSchools] = useState([]);
    const [courses, setCourses] = useState([]);
    const [courseClass, setClasses] = useState([]);
    
    const [section, setSection] = useState({
        id: "",
        section_name: "",
        section_code: "",
        school_id: "",
        course_id: "",
        class_id: ""
    });

    useEffect(() => {
        SchoolService.getSchools().then((res) => {
            setSchools(res.data.data)
        });
        getSectionById();
    }, []);

    const getSectionById = () => {
        if(params.id)
        {
            SectionService.getSectionById(params.id).then(res => {
                CourseService.getAllCoursesBySchoolId(res.data.data.school_id).then((res) => {
                    setCourses(res.data.data)
                });
                ClassService.getAllClassesByCourseId(res.data.data.course_id).then((res) => {
                    setClasses(res.data.data)
                });
                setSection(res.data.data)
            });
        }
    }

    const getCourses = (event) => {        
        setSection({ ...section, school_id: event.target.value, course_id: 0, class_id: 0 });
        setCourses([]);
        setClasses([]);
        CourseService.getAllCoursesBySchoolId(event.target.value).then((res) => {
            setCourses(res.data.data)
        });
    }

    const getClasses = (event) => { 
        setSection({ ...section, course_id: event.target.value, class_id: 0 });
        setClasses([]);
        ClassService.getAllClassesByCourseId(event.target.value).then((res) => {
            setClasses(res.data.data)
        });
    }

    const saveOrUpdateSection = (data, e) => {
        const section = data;
        if(formState)
        {
            console.log('valid')
            if(params.id)
                updateSection(section, e);
            else
                createSection(section, e);
        }
        else
        {
            console.log('not valid')
        }
    }

    const createSection = (section, event) => {
        SectionService.createSection(section).then(res =>{
            console.log(res)
            event.target.reset();
            history.push('/section/list');
        });
    }

    const updateSection = (section, event) => {
        SectionService.updateSection(section).then(res =>{
            event.target.reset();
            history.push('/section/list');
        });
    }

    return (
        <CRow>
            <CCol xs="12" md="12">
                <CCard accentColor="primary">
                    <CCardHeader>
                        Section Creation Form
                    </CCardHeader>
                    <CCardBody>
                        <form onSubmit={handleSubmit(saveOrUpdateSection)} className="form-horizontal">
                            <CFormGroup row>
                                <CCol xs="12" md="6">
                                    {params.id && <input 
                                        type="hidden"
                                        name="id" 
                                        value={section.id} 
                                        className="form-control" 
                                        ref={register}
                                    />}
                                    <CLabel>Section Full Name <MandatoryIndicator/></CLabel>
                                    <input 
                                        name="section_name" 
                                        value={section.section_name} 
                                        className="form-control" 
                                        ref={register({ required: true, minLength: 4, maxLength: 50 })} 
                                        onChange={e => {
                                            setSection({ ...section, section_name: e.target.value });
                                        }} 
                                    />
                                    <span className="text-danger">
                                        {errors.section_name && errors.section_name.type === 'required' && ('First Name is required.')}
                                        {errors.section_name && errors.section_name.type === 'minLength' && ('First Name required min length of 4.')}
                                        {errors.section_name && errors.section_name.type === 'maxLength' && ('First Name required min length of 50.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="6">
                                    <CLabel>Section Code <MandatoryIndicator/></CLabel>
                                    <input 
                                        name="section_code" 
                                        value={section.section_code} 
                                        className="form-control" 
                                        ref={register({ required: true })} 
                                        onChange={e => {
                                            setSection({ ...section, section_code: e.target.value });
                                        }} 
                                    />
                                    <span className="text-danger">
                                        {errors.section_code && errors.section_code.type === 'required' && ('Section Code is required.')}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>                            
                                <CCol xs="12" md="4">
                                    <CLabel>School <MandatoryIndicator/></CLabel>    
                                    <select     
                                        name="school_id"    
                                        value={section.school_id} 
                                        className="form-control" 
                                        ref={register({ required: true })}
                                        onChange={getCourses}
                                    >
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
                                <CCol xs="12" md="4">
                                    <CLabel>Course <MandatoryIndicator/></CLabel>    
                                    <select 
                                        name="course_id" 
                                        value={section.course_id} 
                                        className="form-control" 
                                        ref={register({ required: true })}
                                        onChange={getClasses} 
                                    >
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
                                        {errors.school_id && errors.school_id.type === 'required' && ('Course is required.')}
                                    </span>                                    
                                </CCol>              
                                <CCol xs="12" md="4">
                                    <CLabel>Class <MandatoryIndicator/></CLabel>    
                                    <select 
                                        name="class_id" 
                                        value={section.class_id} 
                                        className="form-control" 
                                        ref={register({ required: true })}
                                        onChange={e => {
                                            setSection({ ...section, class_id: e.target.value });
                                        }} 
                                    >
                                        <option>Select</option>
                                        {courseClass.length > 0 && courseClass.map((item, i) => (
                                            <option
                                            key={i}
                                            value={item?.id}
                                            >
                                            {item?.class_full_name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="text-danger">
                                        {errors.school_id && errors.school_id.type === 'required' && ('Class is required.')}
                                    </span>                                    
                                </CCol>
                            </CFormGroup>
                            <CCardFooter className="text-right">
                                <button type="reset" className="btn btn-sm btn-danger"><i name="cil-ban" />Reset</button>
                                <input type="submit" disabled={formState.isSubmitting} className="btn btn-sm btn-primary float-right" value={ (params.id) ? 'Update' : 'Save' }/>
                            </CCardFooter>
                            </form>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CreateSectionComponent;