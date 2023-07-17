import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';


function getdata(){
  let data = JSON.parse(localStorage.getItem("stu_data"));
  if(data != null){
    return data;
  }
  else{
    return [];
  }
}


function Edit() {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [inputvalue, setinputvalue] = useState(
    location.state.single

  )
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputvalue({ ...inputvalue, [name]: value })
  }

  const handlesubmit = (e) =>{
    e.preventDefault();

    const gdata = getdata();
    gdata[location.state.index]=inputvalue

    // const ne_data = ([...gdata, n_data]);
    localStorage.setItem("stu_data", JSON.stringify(gdata));
    navigate("/view");
  }


  return (
    <>
      {/* <form > */}
      <Container>
        <Row>
          <Form onSubmit={handlesubmit}>
            <div className='d-flex'>

              <div className="mb-3 col-6" >
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={inputvalue.name} onChange={handleChange} />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' value={inputvalue.email} onChange={handleChange} />
              </div>
            </div>
            <div className='d-flex'>
              <div className="mb-3 col-6">
                <label className="form-label">Course</label>
                <input type="text" className="form-control" name='course' value={inputvalue.course} onChange={handleChange} />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={inputvalue.password} onChange={handleChange} />
              </div>

            </div>
              <div className="mb-3 form-check col-2">
                <label className="form-check-label">Gender</label>
                {
                  ["Male", "Female"].map((label) => {
                    return (
                      <Form.Check type="radio" label={label} name='gender' value={label} onChange={handleChange} checked={label==inputvalue.gender} />
                    )
                  })
                }
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>

            </Form>

        </Row>

      </Container>
      {/* </form> */}
    </>
  )
}

export default Edit
