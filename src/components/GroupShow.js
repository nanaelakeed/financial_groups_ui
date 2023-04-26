import React from "react";
import GroupsService from "../service/GroupsService";

const GroupShow = (props) => {

    const deleteHandler = (id) => {
      GroupsService.deleteGroup(id).then(response => {
          props.popDeletedGroup(id);
      } );
    }

    return(
            <tr>
                <td>{props.price}</td>
                <td>{props.members}</td>
                <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(props.stDate)}</td>
                <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(props.endDate)}</td>
                <td>
                    <button onClick={() => deleteHandler(props.id)} className="btn btn-danger">Delete</button>
                    <span>&nbsp;</span>
                    <button className="btn btn-primary">Update</button>
                </td>
            </tr>
    );
}

export default GroupShow;