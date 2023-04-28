// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";


const BaseURL = "http://localhost:8080/api/groups"

export class GroupsService {

    getAllGroups = () => {
        return axios.get(BaseURL);
    }

    deleteGroup = (id) => {
        return axios.delete(BaseURL+"/"+id);
    }

    addGroup = () => {
        const newGroup = {
            "price": 15000,
            "numMembers": 10,
            "creator": "Admin",
            "stDate": "2022-6-2",
            "endDate": "2023-7-2"
        }
        return axios.post(BaseURL, newGroup);
    }


}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GroupsService();