import UserShow from "./UserShow";

const User = (props) => {

    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {props.user.map((u, index) => (
                    <UserShow
                        key={index}
                        name={u.name}
                        salary={u.salary}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;