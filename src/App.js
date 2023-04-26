import './App.css';
import UserService from "./service/UserService";
import User from "./components/User";
import {useState} from "react";
import {useNavigate, Routes, Route} from 'react-router-dom';
import Groups from "./components/Groups";
import GroupsService from "./service/GroupsService";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Welcome to online financial groups</h2>
            <button className="btn btn-success" onClick={() => navigate("/groups")}>Groups</button>
            <span>&nbsp;</span>
            <button className="btn btn-success" onClick={() => navigate("/users")}>Users</button>
        </div>
    );
}

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const userHandler = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data.responseData);
        });
    }
    const addUser = () => {
        UserService.addUser().then((response) => {
            setUsers((prev) => {
                return [...prev, response.data.responseData]
            })
        });
    }
    return (
        <div>
            <h2>Users</h2>
            <div>
                <button onClick={userHandler} className="btn btn-success">Show Users</button>
                <span>&nbsp;</span>
                <button onClick={addUser} className="btn btn-primary">Add User</button>
            </div>
            <User user={users}/>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>Go Back Home</button>
        </div>
    );
}

const Group = () => {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);

    const groupHandler = () => {
        // eslint-disable-next-line no-unused-expressions
        GroupsService.getAllGroups().then((response) => {
            setGroups(response.data.responseData);
        });
    }
    const deleteGroup=(id)=>{
        const filteredGroups = groups.filter((group) => group.groupId !== id);
        setGroups(filteredGroups);
    };
    return (
        <div>
            <h2>Groups</h2>
            <div>
                <button onClick={groupHandler} className="btn btn-success">Show Groups</button>
                <span>&nbsp;</span>
                <button className="btn btn-primary">Add Group</button>
            </div>
            <Groups removeDeletedGroup={deleteGroup} group={groups}/>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>Go Back Home</button>
        </div>
    );
}

function App() {

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/groups" element={<Group/>}/>
                <Route path="/users" element={<Users/>}/>
            </Routes>

        </div>
    );
}

export default App;
