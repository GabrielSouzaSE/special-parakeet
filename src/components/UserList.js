import React, { useEffect, useState } from "react"
import { Table, Button } from "react-bootstrap"
import UserDataService from "../services/user.services"

const UsersList = ({ getUserId }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const data = await UserDataService.getAllUsers()
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    const deleteHandler = async (id) => {
        await UserDataService.deleteUser(id)
        getUsers();
    };
    return (
        <div>
            <div className="mb-2">
                <Button variant="dark edit" onClick={getUsers}>
                    RECARREGAR
                </Button>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>DATA</th>
                        <th>AÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.date}</td>
                                <td>
                                    {/* <Button
                                        variant="secondary"
                                        className="edit"
                                        onClick={(e) => getUserId(user.id)}
                                    >
                                        Edit
                                    </Button> */}
                                    <Button
                                        variant="danger"
                                        className="delete"
                                        onClick={(e) => deleteHandler(user.id)}
                                    >
                                        APAGAR
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersList