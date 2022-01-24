import React, { useState } from 'react';
import { createAppointmentHelper } from '../helper/formHelper';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import '../Styles/AppointmentForm.css';

const AppointmentForm = () => {

    const [startDate, setStartDate] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        date: "",
        error: "",
        success: false,
    })

    const { name, email, phoneNumber, date, success } = formData;

    const handleChange = name => event => {
        setFormData({ ...formData, date: startDate })
        setFormData({ ...formData, error: false, [name]: event.target.value })
    }

    const onSubmit = event => {

        event.preventDefault();
        setFormData({ ...formData, error: false })

        createAppointmentHelper(formData)
            .then(response => setFormData({ ...formData, success: true }))
            .catch(err => console.log(err));
    }

    const successMessage = () => (
        <div style={{ display: success ? "" : "none" }} className="row" id="message">

            <div style={{ display: success ? "" : "none" }} className="alert alert-success">
                <h5 id="message"> Appointment Created Successfully

                </h5>

            </div>
        </div>
    );

    return (
        <div className="col-12">
            <div className="row" >
                <div className="col-md-4 offset-sm-4 text-left">
                    <br></br>
                    <center> <h3>KnockOnce Appointment Form</h3> </center>
                    <br></br>

                    <form>

                        <div className="form-group">
                            <label className="text-dark">Name </label>
                            <input value={name} onChange={handleChange("name")} className="form-control" type="text"></input>
                        </div>

                        <div className="form-group">
                            <label className="text-dark">Email</label>
                            <input value={email} onChange={handleChange("email")} className="form-control" type="text"></input>
                        </div>

                        <div className="form-group">
                            <label className="text-dark">Mobile Number </label>
                            <input value={phoneNumber} onChange={handleChange("phoneNumber")} className="form-control" type="text"></input>
                        </div>

                        <div className="form-group">
                            <label className="text-dark">Date </label>
                            <DatePicker className='form-control' selected={date} onChange={(datee) => setFormData({ ...formData, date: datee })} />
                        </div>

                        <br />

                        <div className="form-group">
                            <button onClick={onSubmit} className="btn btn-dark btn-block" id="userSignUpButton">Create Appointment</button>
                            <br />
                        </div>
                        <br />
                        {successMessage()}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;
