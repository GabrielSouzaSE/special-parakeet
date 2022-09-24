import React, { useState, useEffect } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"
import UserDataService from "../services/user.services"

const AddUser = ({ id, setUserId }) => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === "" || date === "") {
            return;
        }
        const newUser = {
            name,
            date,
        };

        try {
            if (id !== undefined && id !== "") {
                await UserDataService.updateUser(id, newUser)
                setUserId("")

            } else {
                await UserDataService.addUsers(newUser)

            }
        } catch (err) {
            console.log(err)
        }

        setName("")
        setDate("")
    };

    const editHandler = async () => {

        try {
            const docSnap = await UserDataService.getUser(id)
            setName(docSnap.data().name)
            setDate(docSnap.data().date)

        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler()
        }
    }, [id])
    return (
        <>
            <div className="p-4 box">

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <InputGroup>
                            <InputGroup.Text id="formUserName">NOME:</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="INSIRA O NOME"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserDate">
                        <InputGroup>
                            <InputGroup.Text id="formUserDate">DATA:</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="INSIRA A DATA"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            ADICIONAR
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AddUser