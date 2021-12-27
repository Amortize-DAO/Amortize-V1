import React from "react";
import { myStxAddress } from "../../components/auth";

import { useState } from "react";

// import { Dropdown } from "react-bootstrap";

// import { Dropdown, Selection } from 'react-dropdown-now';
// import 'react-dropdown-now/style.css';

// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";

function Profile() {

    const [state, setState] = useState({
        AgentName: "",
        PropID: ""
    })

    // let submitted = false;

    const handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        // submitted = true;
        e.preventDefault()
        console.log(state);
    };

    // const dropdown = {
    //     color: 'white',
    //     FontFace: 
    // };

    return (
        <>
            <UserHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>

                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Selecting Agent</h3>
                                    </Col>

                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Selecting Agent before minting
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="9">
                                                <FormGroup>


                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Agent Name
                                                    </label>
                                                    <Row>
                                                        {/* <Col lg="12">
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Enter name of agent whom to transfer the rights of the property"
                                                                type="text"
                                                                name="Username"
                                                                onChange={handleChange}
                                                            />
                                                        </Col> */}
                                                        <Col lg="12">
                                                            <select style={{ width: "100%", }} name="AgentName" onChange={handleChange}>
                                                                <option value="" disabled selected>Enter name of agent whom to transfer the rights of the property</option>
                                                                <option value="volvo">Volvo</option>
                                                                <option value="saab">Saab</option>
                                                                <option value="opel">Opel</option>
                                                                <option value="audi">Audi</option>

                                                            </select>
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                            </Col>
                                            {/* <Col lg="8">
                                                <select name="cars" id="input" className="form-control-alternative">
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="opel">Opel</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </Col> */}
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        ID of Property/Equity
                                                    </label>

                                                    <Col lg="13">
                                                        <select style={{ width: "100%", }} name="PropID" onChange={handleChange}>
                                                            <option value="" disabled selected>PROP-12345</option>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="opel">Opel</option>
                                                            <option value="audi">Audi</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-right" xs="10">
                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={handleSubmit}
                                                    size="sm"
                                                >
                                                    MINT!
                                                </Button>
                                            </Col>
                                        </Row>

                                    </div>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

Profile.layout = Admin;

export default Profile;
