import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const AddUser = (props) => {
    const navigate = useNavigate();

    const [enteredName, setName] = useState("");
    const [enteredCity, setCity] = useState("");
    const [enteredSalary, setSalary] = useState("");
    const [enteredEmail, setEmail] = useState("");
    const [enteredPassword, setPassword] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const cityHandler = (event) => {
        setCity(event.target.value);
    }

    const salaryHandler = (event) => {
        setSalary(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }


    const submit = (event) => {
        event.preventDefault();

        const userData = {
            name: enteredName,
            salary: enteredSalary,
            city: enteredCity,
            email: enteredEmail,
            password: enteredPassword
        }
        console.log(userData);

        props.newUser(userData);

        setCity("");
        setEmail("");
        setName("");
        setPassword("");
        setSalary("");
    }

    return (
        <div>

            <br/>

            <h2 style={{
                margin: "auto",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "xxx-large",
                color: "darkblue"
            }}>Register</h2><br/>

            {props.registerResult==="Success" ?
                <p style={{
                    backgroundColor: "green", color: "white", margin: "auto",
                    textAlign: "center", width: "20%", padding: "10px"
                }}>User Registered Successfully</p>
                : props.registerResult==="Failed" ? <p style={{
                    backgroundColor: "red", color: "white", margin: "auto",
                    textAlign: "center", width: "20%", padding: "10px"
                }}>User Registration Failed</p>
                    : <span></span>
            }<br/>

            <hr style={{width: "50%", margin: "auto"}}/>


            <form style={{padding: "50px"}}>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                                placeholder="Name"
                                value={enteredName} onChange={nameHandler}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form3Example2"
                                className="form-control"
                                placeholder="City"
                                value={enteredCity} onChange={cityHandler}
                            />
                        </div>
                    </div>
                </div>
                <br/>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="number"
                                id="form3Example3"
                                className="form-control"
                                placeholder="Salary"
                                value={enteredSalary} onChange={salaryHandler}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="email"
                                id="form3Example3"
                                className="form-control"
                                placeholder="Email"
                                value={enteredEmail} onChange={emailHandler}
                            />
                        </div>
                    </div>
                </div>
                <br/>


                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="password"
                                id="form3Example4"
                                className="form-control"
                                placeholder="Password"
                                value={enteredPassword} onChange={passwordHandler}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={submit}>Add
                            </button>
                            <span>&nbsp;</span>
                            <button type="button" className="btn btn-danger btn-block mb-4"
                                    onClick={() => navigate("/users")}>Go Back
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default AddUser;