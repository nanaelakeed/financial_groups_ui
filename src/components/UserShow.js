import React from "react";
import UserService from "../service/UserService";


const UserShow = (props) =>{
    const deleteHandler = (id) => {
      UserService.deleteUser(id).then(()=>{
          props.popUser(id);
      })
    }
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.salary}</td>
            <td>{props.city}</td>

            <td>
                <button onClick={()=> deleteHandler(props.id)} className="btn btn-danger">Delete</button>
                <span>&nbsp;</span>
                <button className="btn btn-primary">Update</button>
            </td>
        </tr>
    );
}

export default UserShow;