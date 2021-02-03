// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Form } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { Image, Col, Row, Table } from 'react-bootstrap'
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component, ProtoTypes } from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CFormText, CLabel, CRow } from '@coreui/react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import MandatoryIndicator from '../form-components/MandatoryIndicator';

import StudentService from '../../api/StudentService';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Leave Balance', 'Details', 'Review'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Leave Type</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            /></td>
                            <td>Medical Leave</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            /></td>
                            <td>Earned Leave</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td><Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            /></td>
                            <td>Privilage Leave</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        case 1:
            // return <>
            //     <Card><Form style={{ 'alignContent': 'center', 'paddingBottom': '50px', 'paddingTop': '50px' }}>


            //         <Form.Group>
            //             {/* <Form.Label>Leave Type</Form.Label>
            //             <Form.Control as="select">
            //                 <option>Medical Leave</option>
            //                 <option>Earned Leave</option>
            //                 <option>Privilage Leave</option>

            //             </Form.Control> */}
            //         </Form.Group>
            //         <Form.Group controlId="formBasicEmail">
            //             <Form.Label>Reason</Form.Label>
            //             <Form.Control type="text" placeholder="Reason" />

            //         </Form.Group>

            //     </Form>
            //     </Card></>;

            return (
                <CRow>
                    <CCol xs="12" md="12">
                        <CCard accentColor="primary">
                            {/* <CCardHeader>
                                Employee Creation Form
                            </CCardHeader> */}
                            <CCardBody>
                                <form className="form-horizontal">
                                    {/* <CFormGroup row>
                                        <CCol xs="12" md="4">
                                            <CLabel>First Name <MandatoryIndicator/></CLabel>
                                            <input type="text" name="first_name" className="form-control" />
                                            
                                        </CCol>
                                        <CCol xs="12" md="4">
                                            <CLabel>Middle Name </CLabel>
                                            <input type="text" name="middle_name" className="form-control" />
                                        </CCol>
                                        <CCol xs="12" md="4">
                                            <CLabel>Last Name <MandatoryIndicator/></CLabel>
                                            <input type="text" name="last_name" className="form-control" />
                                            
                                        </CCol>
                                    </CFormGroup> */}
                                    <CFormGroup row>
                                        <CCol xs="12" md="4">
                                            <CLabel>From Date</CLabel>
                                            <input type="date" name="fdate" className="form-control" />

                                        </CCol>
                                        <CCol xs="12" md="4">
                                            <CLabel>To Date</CLabel>
                                            <input type="date" name="tdate" className="form-control" />

                                        </CCol>
                                        {/* <CCol xs="12" md="4">
                                            <CLabel>From Time</CLabel>
                                            <input type="time" name="ftime" className="form-control" />
                                            <Form.Text className="text-muted">
                                                If required.
    </Form.Text>

                                        </CCol> */}
                                        {/* <CCol xs="12" md="4">
                                            <CLabel>Select Area <MandatoryIndicator/></CLabel><br/>
                                            <label htmlFor="Area1" variant="custom-radio" inline="true">
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="gender" className="form-checkbox" id="area1" value="area1" 
                                                  />
                                                &nbsp;Male
                                            </label>
                                            <label htmlFor="female" variant="custom-radio" inline="true">
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="gender" className="form-checkbox" id="female" value="Female" 
                                                   />
                                                &nbsp;Female
                                            </label>
                                            <label htmlFor="other" variant="custom-radio" inline="true">
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="gender" className="form-checkbox" id="other" value="Other" 
                                                   />
                                                &nbsp;Other
                                            </label>
                                          
                                        </CCol> */}

                                    </CFormGroup>
                                    <CFormGroup row>
                                        {/* <CCol xs="12" md="4">
                                            <CLabel>To Time</CLabel>
                                            <input type="time" name="ftime" className="form-control" />
                                            <Form.Text className="text-muted">
                                                If required.
    </Form.Text>

                                        </CCol> */}
                                        <CCol xs="12" md="4">
                                            <CLabel>Select Area</CLabel>
                                            <select name="selectarea" className="form-control">
                                                <option value="1">Area 1 </option>
                                                <option value="2">Area 2  </option>
                                                <option value="3">Area 3  </option>

                                            </select>

                                        </CCol>

                                        <CCol xs="12" md="4">
                                            <CLabel>Select Block </CLabel>
                                            <select name="selectarea" className="form-control">
                                                <option value="1">Block 1 </option>
                                                <option value="2">Block 2  </option>
                                                <option value="3">Block 3  </option>

                                            </select>

                                        </CCol>
                                        {/* <CCol xs="12" md="4">
                                            <CLabel>Select Ward </CLabel>
                                            <select name="selectarea" className="form-control">
                                                <option value="1">Ward 1 </option>
                                                <option value="2">Ward 2  </option>
                                                <option value="3">Ward 3  </option>

                                            </select>

                                        </CCol>
                                        <CCol xs="12" md="4">
                                            <Form.Group style={{ 'alignContent': 'center' }} >
                                                <Form.File id="exampleFormControlFile1" label="Attachment" />

                                            </Form.Group>

                                        </CCol> */}
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol xs="12" md="4">
                                            <CLabel>Select Ward </CLabel>
                                            <select name="selectarea" className="form-control">
                                                <option value="1">Ward 1 </option>
                                                <option value="2">Ward 2  </option>
                                                <option value="3">Ward 3  </option>

                                            </select>

                                        </CCol>
                                        <CCol xs="12" md="4">
                                            <Form.Group style={{ 'alignContent': 'center' }} >
                                                <Form.File id="exampleFormControlFile1" label="Attachment" />
                                                <Form.Text className="text-muted">
                                                If required.
    </Form.Text>

                                            </Form.Group>

                                        </CCol>

                                    </CFormGroup >
                                    <CFormGroup row>
                                        <CCol xs="12" md="12">
                                            <CLabel>Reason</CLabel>
                                            <textarea name="reason" className="form-control"></textarea>

                                        </CCol>
                                    </CFormGroup><hr />
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
                                    {/* <CFormGroup row>
                                        <CCol xs="12" md="4">
                                            <CLabel>Role <MandatoryIndicator /></CLabel>
                                            <select name="role" className="form-control">
                                                <option value="1">Doctor </option>
                                                <option value="2">Nurse </option>
                                                <option value="3">Supervisor </option>
                                               
                                            </select>
                                          
                                        </CCol>
                                    </CFormGroup> */}
                                    {/* <CCardFooter className="text-right">
                                        <button type="reset" className="btn btn-sm btn-danger"><i name="cil-ban" /> Reset</button> &nbsp;
                                        <input type="submit" className="btn btn-sm btn-primary float-right" value="Submit"/><i name="cil-scrubber" />
                                    </CCardFooter> */}
                                </form>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            )
        //         case 2:

        //             return <>
        //                 <Card responsive variant="dark"><Form style={{ 'alignContent': 'center', 'padding': '10px' }}>
        //                     <Form.Group controlId="formBasicEmail">
        //                         <TextField
        //                             id="date"
        //                             label="From Date"
        //                             type="date"
        //                             // defaultValue="2017-05-24"
        //                             // className={classes.textField}
        //                             InputLabelProps={{
        //                                 shrink: true,
        //                             }}

        //                         />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //    <TextField
        //                             id="date"
        //                             label="To Date"
        //                             type="date"
        //                             // defaultValue="2017-05-24"
        //                             // className={classes.textField}
        //                             InputLabelProps={{
        //                                 shrink: true,
        //                             }}
        //                         />
        //                     </Form.Group>


        //                     <Form.Group style={{ 'alignContent': 'center', 'paddingTop': '30px' }} >
        //                         <Form.File id="exampleFormControlFile1" label="Attachment" />

        //                     </Form.Group>


        //                 </Form>
        //                 </Card></>;
        case 2:
            return <>
                <div class="card ">
                    <h5 class="card-header text-center">Leave Details</h5>
                    <div class="card-body">

                        <div class="row">

                            <div class="col-6">
                                <strong>Leave Type: </strong>Earned Leave<br />
                                <strong>From Date: </strong>&nbsp;2020-11-25 <br />
                                <strong>To Date: </strong>2020-11-25 <br />
                            </div>
                        </div>


                        <hr class="my-4" />
                        <strong>Attachments: </strong><br /><br />
                        <Row>
                            <Col>
                                <Image src="data:image/png;base64,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" rounded height="171" width="180" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </>


        default:
            return 'Unknown step';
    }
}

export default function Leave() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption"></Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
            </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
            </Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
              </Button>
                                {isStepOptional(activeStep) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSkip}
                                        className={classes.button}
                                    >
                                        Skip
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
