import React, { Component, ProtoTypes } from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CFormText, CLabel,CRow } from '@coreui/react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import MandatoryIndicator from '../form-components/MandatoryIndicator';

import StudentService from '../../api/StudentService';


export default function CreateStudentComponent()
{  
    const { register, handleSubmit, errors, getValues, watch, formState, reset } = useForm();
    //const watchGender = watch("gender");
    //const showPhoneNumber = (watchGender === 'Male') ? true : false;
    const history = useHistory();
    const saveOrUpdateStudent = (data, e) => {
        const student = data;
        if(formState)
        {
            StudentService.createStudent(student).then(res =>{
                e.target.reset();
                history.push('/student/list');
            });
        }
    }
    return (
        <CRow>
            <CCol xs="12" md="12">
                <CCard accentColor="primary">
                    <CCardHeader>
                        Employee Creation Form
                    </CCardHeader>
                    <CCardBody>
                        <form onSubmit={handleSubmit(saveOrUpdateStudent)} className="form-horizontal">
                            <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>First Name <MandatoryIndicator/></CLabel>
                                    <input type="text" name="first_name" className="form-control" ref={register({ required: true, minLength: 4, maxLength: 30 })} />
                                    <span className="text-danger">
                                        {errors.first_name && errors.first_name.type === 'required' && ('First Name is required.')}
                                        {errors.first_name && errors.first_name.type === 'minLength' && ('First Name required min length of 4.')}
                                        {errors.first_name && errors.first_name.type === 'maxLength' && ('First Name required min length of 30.')}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Middle Name </CLabel>
                                    <input type="text" name="middle_name" className="form-control" ref={register} />
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Last Name <MandatoryIndicator/></CLabel>
                                    <input type="text" name="last_name" className="form-control" ref={register({ required: true, minLength: 1, maxLength: 30 })} />
                                    <span className="text-danger">
                                        {errors.last_name && errors.last_name.type === 'required' && ('Last Name is required.')}
                                        {errors.last_name && errors.last_name.type === 'minLength' && ('Last Name required min length of 1.')}
                                        {errors.last_name && errors.last_name.type === 'maxLength' && ('Last Name required min length of 30.')}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>Date of Birth <MandatoryIndicator/></CLabel>
                                    <input type="date" name="dob" className="form-control" ref={register({ required: true})} />
                                    <span className="text-danger">
                                        {errors.dob && 'DOB is required.'}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Age <MandatoryIndicator/></CLabel>
                                    <input type="number" name="age" className="form-control" ref={register({ required: true})} />
                                    <span className="text-danger">
                                        {errors.age && 'Age is required.'}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Gender <MandatoryIndicator/></CLabel><br/>
                                    <label htmlFor="male" variant="custom-radio" inline="true">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="gender" className="form-checkbox" id="male" value="Male" 
                                            ref={register({ required: true})}/>
                                        &nbsp;Male
                                    </label>
                                    <label htmlFor="female" variant="custom-radio" inline="true">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="gender" className="form-checkbox" id="female" value="Female" 
                                            ref={register({ required: true})}/>
                                        &nbsp;Female
                                    </label>
                                    <label htmlFor="other" variant="custom-radio" inline="true">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="gender" className="form-checkbox" id="other" value="Other" 
                                            ref={register({ required: true})}/>
                                        &nbsp;Other
                                    </label>
                                    <span className="text-danger"><br/>
                                        {errors.gender && 'Gender is required.'}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                {/* ref={register({ required: showPhoneNumber })} */}
                                <CCol xs="12" md="4">
                                    <CLabel>Phone Number <MandatoryIndicator /></CLabel>
                                    <input type="number" name="phone_number" className="form-control" 
                                        ref={register({ required: true, maxLength: 10, minLength: 10 })}/>
                                    <span className="text-danger">
                                        {errors.phone_number && errors.phone_number.type === 'required' && 'Phone Number is required.'}
                                        {errors.phone_number && (errors.phone_number.type === 'maxLength' || errors.phone_number.type === 'minLength') && 'Phone Number must be 10 digits.'}
                                    </span>
                                </CCol>
                                {/* <CCol xs="12" md="4">
                                    <CLabel>Whatsapp Number <MandatoryIndicator /></CLabel>
                                    <input type="number" name="whatsapp_number" className="form-control" 
                                        ref={register({ required: true, maxLength: 10, minLength: 10 })}/>
                                    <span className="text-danger">
                                        {errors.whatsapp_number && errors.whatsapp_number.type === 'required' && 'Whatsapp Number is required.'}
                                        {errors.whatsapp_number && (errors.whatsapp_number.type === 'maxLength' || errors.whatsapp_number.type === 'minLength') && 'Whatsapp Number must be 10 digits.'}
                                    </span>
                                </CCol> */}
                                <CCol xs="12" md="4">
                                    <CLabel>Email <MandatoryIndicator /></CLabel>
                                    <input type="email" name="email" className="form-control" 
                                        ref={register({ required: true })}/>
                                    <span className="text-danger">
                                        {errors.email && errors.email.type === 'required' && 'Email is required.'}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" md="12">
                                    <CLabel>Address <MandatoryIndicator /></CLabel>
                                    <textarea name="address" className="form-control" ref={register({ required: true})}></textarea>
                                    <span className="text-danger">
                                        {errors.address && errors.address.type === 'required' && 'Address is required.'}
                                    </span>
                                </CCol>
                            </CFormGroup><hr/>
                            {/* <CFormGroup row>
                                <CCol xs="12" md="12">
                                    <CLabel>Primary Contact <MandatoryIndicator/></CLabel><br/>
                                    <label htmlFor="Father" variant="custom-radio" inline="true">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="primary_contact" className="form-checkbox" id="father" value="Father" 
                                            ref={register({ required: true})}/>
                                        &nbsp;Father
                                    </label>
                                    <label htmlFor="mother" variant="custom-radio" inline="true">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="primary_contact" className="form-checkbox" id="mother" value="Mother" 
                                            ref={register({ required: true})}/>
                                        &nbsp;Mother
                                    </label>
                                    <label htmlFor="guardian" variant="custom-radio" inline="true">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="primary_contact" className="form-checkbox" id="guardian" value="Guardian" 
                                            ref={register({ required: true})}/>
                                        &nbsp;Guardian
                                    </label>
                                    <span className="text-danger"><br/>
                                        {errors.primary_contact && 'Primary Contact is required.'}
                                    </span>
                                </CCol>
                            </CFormGroup> */}
                            {/* <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>Father Name <MandatoryIndicator /></CLabel>
                                    <input name="father_name" className="form-control" 
                                        ref={register({ required: true, minLength: 4 })}/>
                                    <span className="text-danger">
                                        {errors.father_name && errors.father_name.type === 'required' && 'Father Name is required.'}
                                        {errors.father_name && errors.father_name.type === 'minLength' && 'Father Name must be minimum 4 characters.'}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Father Contact Number <MandatoryIndicator /></CLabel>
                                    <input type="number" name="father_contact_number" className="form-control" 
                                        ref={register({ required: true, maxLength: 10, minLength: 10 })}/>
                                    <span className="text-danger">
                                        {errors.father_contact_number && errors.father_contact_number.type === 'required' && 'Father Contact Number is required.'}
                                        {errors.father_contact_number && (errors.father_contact_number.type === 'maxLength' || errors.father_contact_number.type === 'minLength') && 'Father Contact Number must be 10 digits.'}
                                    </span>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Father Email <MandatoryIndicator /></CLabel>
                                    <input type="email" name="father_email" className="form-control" 
                                        ref={register({ required: true })}/>
                                    <span className="text-danger">
                                        {errors.father_email && errors.father_email.type === 'required' && 'Father Email is required.'}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>Mother Name </CLabel>
                                    <input name="mother_name" className="form-control" ref={register}/>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Mother Contact Number </CLabel>
                                    <input name="mother_contact_number" className="form-control" ref={register}/>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Mother Email </CLabel>
                                    <input type="email" name="mother_email" className="form-control" ref={register}/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>Guardian Name </CLabel>
                                    <input name="guardian_name" className="form-control" ref={register}/>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Guardian Contact Number </CLabel>
                                    <input name="guardian_contact_number" className="form-control" ref={register}/>
                                </CCol>
                                <CCol xs="12" md="4">
                                    <CLabel>Guardian Email </CLabel>
                                    <input type="email" name="guardian_email" className="form-control" ref={register}/>
                                </CCol>
                            </CFormGroup> */}
                            <CFormGroup row>
                                <CCol xs="12" md="4">
                                    <CLabel>Role <MandatoryIndicator /></CLabel>
                                    <select name="role" className="form-control" ref={register({ required: true })}>
                                        <option value="1">Doctor </option>
                                        <option value="2">Nurse </option>
                                        <option value="3">Supervisor </option>
                                       
                                    </select>
                                    <span className="text-danger">
                                        {errors.role && errors.role.type === 'required' && 'Role is required.'}
                                    </span>
                                </CCol>
                            </CFormGroup>
                            <CCardFooter className="text-right">
                                <button type="reset" className="btn btn-sm btn-danger"><i name="cil-ban" /> Reset</button> &nbsp;
                                <input type="submit" className="btn btn-sm btn-primary float-right" value="Submit"/><i name="cil-scrubber" />
                            </CCardFooter>
                            </form>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}