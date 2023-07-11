import React from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'


function getdata() {
    let data = JSON.parse(localStorage.getItem("stu_data"));
    if (data != null) {
        return data;
    }
    else {
        return [];
    }
}

function Viewdata() {
    return (
        <>
            <Container>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getdata().map((d, index) => {
                                    return (
                                        <tr>
                                            <td>{d.id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.email}</td>
                                            <td>{d.password}</td>
                                            <td>{d.gender}</td>
                                            <td>
                                                <Button className='me-2'>Edit</Button>
                                                <Button className='btn-danger'>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default Viewdata
