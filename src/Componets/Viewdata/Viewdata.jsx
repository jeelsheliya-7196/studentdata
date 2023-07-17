import React, { useState } from 'react'
import { Button, Container, Dropdown, Row, Table } from 'react-bootstrap'
import { json, useNavigate } from 'react-router';


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

    const navigate = useNavigate();
    const [studentdet, setstudentdet] = useState(null);
    const handleedit = (id, index) => {
        let u_data = getdata();
        let updata = u_data.filter((ustud) => {
            return ustud.id == id;
        })
        navigate("/edit", { state: { single: updata[0], index: index } });
    }
    const handledelete = (id) => {
        console.log(id, "de-id")
        let de_data = getdata();
        let deletedata = de_data.filter((d) => {
            return d.id != id;
        })
        console.log("....",deletedata );
        localStorage.setItem("stu_data", JSON.stringify(deletedata));
        setstudentdet(deletedata);
    } 
    const handleview = (d) =>{
        // console.log(d);
        navigate ('/studentview',{state: d});
    }
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
                                <th>course</th>
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
                                            <td>{d.course}</td>
                                            <td>{d.password}</td>
                                            <td>{d.gender}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle className='moredata'>
                                                       ...
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => { handleedit(d.id, index) }}>Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => { handledelete(d.id) }}>Delete</Dropdown.Item>
                                                        <Dropdown.Item onClick={()=>{handleview(d)}}>Student View Data</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </td>
                                            {/* <td>
                                                <Button className='me-2' onClick={() => { handleedit(d.id, index) }}>Edit</Button>
                                                <Button className='btn-danger' onClick={() => { handledelete(d.id) }}>Delete</Button>
                                            </td> */}
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
