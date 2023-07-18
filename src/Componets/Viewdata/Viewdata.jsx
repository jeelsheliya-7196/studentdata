import React, { useState } from 'react'
import { Button, Container, Dropdown, Form, Row, Table } from 'react-bootstrap'
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
const filterdata = () => {
    const newfildata = getdata();
    const newdatafilter = newfildata.map((f) => {
        return f.course
    })
    // console.log("newdatafilter",newdatafilter);
    const filter_data = newdatafilter.filter((f, index) => {
        // console.log("f",f);
        return newdatafilter.indexOf(f) == index;
    })
    return filter_data;
    // console.log("filter_data",filter_data);
}
function Viewdata() {
    const [inputList, setInputList] = useState({
        search: ""
    })
    const navigate = useNavigate();
    const [studentdet, setstudentdet] = useState(getdata());
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
    const handlefilter = (e) => {
        // console.log(e.target.value);
        let value = e.target.value;

        if (value != -1) {
            let f_data = getdata();
            // console.log("f_data",f_data);

            let fil_data = f_data.filter((f) => {
                return f.course == value;
            })
            // console.log("val",fil_data);
            setstudentdet(fil_data);
        }
        else {
            setstudentdet(getdata());
        }
    }
    const handleSearch = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputList({ [name]: value })

        let s_data = getdata();

        let set_data = s_data.filter((s) => {
            return s.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        })
        // console.log("se",set_data);
        setstudentdet(set_data);
    }
    const handleSort = (type) => {
        let so_data = getdata()

        if (type == "aec") {
            let sort_data = so_data.sort((stuA, stuB) => {
                // console.log("stu",stuA.fname,stuB.fname);
                return stuA["name"].localeCompare(stuB["name"]);
            })
            // console.log("sort_data",sort_data);
            setstudentdet(sort_data);
        }
        else {
            let sort_data = so_data.sort((stuA, stuB) => {
                // console.log("stu",stuA.fname,stuB.fname);
                return stuB["name"].localeCompare(stuA["name"]);
            })
            // console.log("sort_data",sort_data);
            setstudentdet(sort_data);
        }

    }

    return (
        <>
            <Container>
                <Row>
                    <div className='col-4 mb-3'>
                        <select onChange={(e) => { handlefilter(e) }}>
                            <option value={"-1"}>ALL</option>
                            {
                                filterdata().map((ai) => {
                                    // console.log("ai", ai);
                                    return (
                                        <option value={ai}>{ai}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='col-4'>
                        <Button className='btn btn-primary me-2' onClick={() => handleSort("aec")}>
                            A-Z
                        </Button>
                        <Button className='btn btn-primary' onClick={() => handleSort("dec")}>
                            Z-A
                        </Button>
                    </div>
                    <div className='col-4'>
                        <Form >
                            <Form.Group className='mb-3'>
                                <Form.Control type="text" placeholder="search" name='city' value={inputList.search} onChange={handleSearch} />
                            </Form.Group>
                        </Form>
                    </div>
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
                                studentdet.map((d, index) => {

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
