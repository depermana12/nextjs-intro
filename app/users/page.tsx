type UsersType = {
    id: number;
    name: string;
    email: string;
};

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: UsersType[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <table className="table-bordered table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default UsersPage;
//13.10
