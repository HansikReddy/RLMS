import React, { Component } from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CFormText, CLabel,CRow } from '@coreui/react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import MandatoryIndicator from '../form-components/MandatoryIndicator';

import SchoolService from '../../api/SchoolService';

export default function CreateSchoolComponent()
{  
    const { register, handleSubmit, errors, getValues, watch, formState } = useForm();
    const history = useHistory();
    const saveOrUpdateSchool = (data, e) => {
        const school = data;
        if(formState)
        {
            SchoolService.createSchool(school).then(res =>{
                e.target.reset();
                history.push('/school/list');
            });
        }
    }
    return (
        <CRow>
            <CCol xs="12" md="12">
                <CCard accentColor="primary">
                    <CCardHeader>
                        School Creation Form
                    </CCardHeader>
                    <CCardBody>
                        <form onSubmit={handleSubmit(saveOrUpdateSchool)} className="form-horizontal">
                            <CFormGroup row>
                                <CCol xs="12" md="6">
                                    <CLabel>School Full Name <MandatoryIndicator/></CLabel>
                                    <input name="school_full_name" className="form-control" ref={register({ required: true, minLength: 4, maxLength: 50 })} />
                                    <span className="text-danger">
                                        {errors.school_full_name && errors.school_full_name.type === 'required' && ('First Name is required.')}
                                        {errors.school_full_name && errors.school_full_name.type === 'minLength' && ('First Name required min length of 4.')}
                                        {errors.school_full_name && errors.school_full_name.type === 'maxLength' && ('First Name required min length of 50.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="6">
                                    <CLabel>School Short Name </CLabel>
                                    <input name="school_short_name" className="form-control" ref={register({ required: true, minLength: 3, maxLength: 20 })} />
                                    <span className="text-danger">
                                        {errors.school_short_name && errors.school_short_name.type === 'required' && ('Last Name is required.')}
                                        {errors.school_short_name && errors.school_short_name.type === 'minLength' && ('Last Name required min length of 3.')}
                                        {errors.school_short_name && errors.school_short_name.type === 'maxLength' && ('Last Name required min length of 20.')}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>Phone Number<MandatoryIndicator/></CLabel>
                                    <input type="number" name="phone_number" className="form-control" ref={register({ required: true, minLength: 10, maxLength: 12 })} />
                                    <span className="text-danger">
                                        {errors.phone_number && errors.phone_number.type === 'required' && ('Phone Number is required.')}
                                        {errors.phone_number && errors.phone_number.type === 'minLength' && ('Phone Number must be min length of 10.')}
                                        {errors.phone_number && errors.phone_number.type === 'maxLength' && ('Phone Number must be max length of 12.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Email <MandatoryIndicator/></CLabel>
                                    <input type="email" name="email" className="form-control" ref={register({ required: true })} />
                                    <span className="text-danger">
                                        {errors.email && ('Email is required.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Site URL <MandatoryIndicator/></CLabel>
                                    <input name="site_url" className="form-control" ref={register({ required: true })} />
                                    <span className="text-danger">
                                        {errors.site_url && ('Site URL is required.')}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" md="12">
                                    <CLabel>School Address <MandatoryIndicator /></CLabel>
                                    <textarea name="address" className="form-control" ref={register({ required: true})}></textarea>
                                    <span className="text-danger">
                                        {errors.address  && 'Address is required.'}
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