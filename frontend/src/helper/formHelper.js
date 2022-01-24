

export const createAppointmentHelper = (data) => {
    return fetch(`${process.env.REACT_APP_BACKEND_API_LINK}/Add/Appointment`,{
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}