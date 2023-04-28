import UserShow from "./UserShow";

const User = (props) => {
    const deleteUser = (id) => {
      props.removeUser(id);
    }

    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">City</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {props.user.map((u, index) => (
                    <UserShow
                        key={index}
                        id={u.id}
                        name={u.name}
                        salary={u.salary}
                        city={u.city}
                        popUser={deleteUser}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;