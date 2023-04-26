import React from "react";


const UserShow = (props) =>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.salary}</td>
            <td>
                <button className="btn btn-danger">Delete</button>
                <span>&nbsp;</span>
                <button className="btn btn-primary">Update</button>
            </td>
        </tr>
    );
}

export default UserShow;