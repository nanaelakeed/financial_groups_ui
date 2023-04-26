import React from "react";
import GroupShow from "./GroupShow";


const Groups = (props) => {
    const popDeletedGroup=(id)=>{
        props.removeDeletedGroup(id);
    }
    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Price</th>
                    <th scope="col">Number of Members</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {props.group.map((g, index) => (
                    <GroupShow
                        key={index}
                        id={g.groupId}
                        price={g.price}
                        members={g.numMembers}
                        stDate={g.stDate}
                        endDate={g.endDate}
                        popDeletedGroup={popDeletedGroup}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Groups;