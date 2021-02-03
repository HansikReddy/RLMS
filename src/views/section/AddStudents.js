import React, { useEffect, useState, Component } from 'react';
import { useForm } from "react-hook-form";
import { useParams} from "react-router";

import SchoolService from '../../api/SchoolService';
import CourseService from '../../api/CourseService';
import ClassService from '../../api/ClassService';
import SectionService from '../../api/SectionService';
import StudentsService from '../../api/StudentService';


const AddStudents = () => {
    const { register, handleSubmit, errors, getValues, setValue, watch, formState } = useForm();
    let params = useParams();
    let section = {};
    let sectionId = params.section_id;
    let studentsList = [];
    
    useEffect(() => {
        if(sectionId)
        {
            getSectionById(sectionId);
        }    
    }, []);

    const getSectionById = () => {
        SectionService.getSectionById(sectionId).then(res => {
            section = Object.assign({}, res.data.data);
            getStudentsBySchoolId(section);
        });
    }

    const getStudentsBySchoolId = (section) =>{
        StudentsService.getStudentsBySchoolId(section.school_id).then(res => {
            studentsList = res.data.data;
        });
    }
    
    return (
        <form>
        </form>
    );
    
}

export default AddStudents;