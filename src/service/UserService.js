import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React from 'react';


const USER_BASE_URL = "http://localhost:8080/api/users"

export class UserService {

    getAllUsers = () => {
        return axios.get(USER_BASE_URL);
    }

    addUser = () => {
        const userToBeSaved = {
            "name":"Afnan Elakeed",
            "city":"Benha",
            "email":"afnan@gmail.com",
            "password":"elakeed",
            "salary":150000
        }

        return axios.post(USER_BASE_URL, userToBeSaved);
    }


    nbaDataCall = () => {
        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            params: {page: '0', per_page: '25'},
            headers: {
                'X-RapidAPI-Key': '7866eb036dmshaf93c68fb396f94p13c217jsna5afdc7850c8',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }


}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();


//new for using its functions directly