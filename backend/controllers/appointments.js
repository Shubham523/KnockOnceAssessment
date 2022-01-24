const Appointments = require("../models/appointments");


exports.createAppointment = ( req, res ) => {

    const appointment = new Appointments(req.body);

    appointment.save(( err, createdAppointment ) => {

        if( err ) {
            console.log(err);
            return res.status(400).json({
                err : "Failed to Create Appointment"
            })
        }
        else { 
            res.json({message: "Appointment Created Successfully"}); 
        }
    })
}