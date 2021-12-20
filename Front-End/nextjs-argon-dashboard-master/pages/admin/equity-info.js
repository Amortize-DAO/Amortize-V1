import React from "react";
// import { myStxAddress  } from "../../components/auth";
import { DataProts } from "../../../math";

import { useState } from "react";
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
    Table,
    Row,
    Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";

// function run() {

//     // let HomeOwnerCal = new HomeOwner(50000, 500000, 5, 200000);
//     // let WithDraws = new WithdrawlContract(1);

//     // // Array Initialization

//     // let DataProts = new Array(HomeOwnerCal.TermLength + 1);

//     // for (let N = 0; N < HomeOwnerCal.TermLength + 1; N++) {
//     //     DataProts[N] = new DataForProtocol();
//     // }
// }

function EquityInfo() {
    const init = {
        ValueOfHome: " ",
        TermLength: " ",
        curMortBalance: " ",
    };
    const [formValues, setFormValues] = useState(init);
    const handleSubmit = (e) => {
        e.preventDefault();
        //let TermLength = document.querySelector("input-termlen").textContent;
        console.log(formValues.TermLength);
        //let ValueOfHome = document.querySelector("input-valhome").textContent;
        console.log(formValues.ValueOfHome);
        //let curMortBalance = document.querySelector("input-currMortBal").textContent;
        console.log(formValues.curMortBalance);
    };
    const handleChange = (a) => {
        const { name, value } = a.target;
        setFormValues({...formValues, [name]: value });
    };
    return (
        <>
            {/* <UserHeader /> */}
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>

                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-black border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Equity Information</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Settings
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={ handleSubmit }>
                                    <h6 className="heading-small text-muted mb-4">
                                        Equity Information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="8">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-valhome"
                                                    >
                                                        Value of Home
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-valhome"
                                                        placeholder="$ 230000"
                                                        type="text"
                                                        value={ formValues.ValueOfHome }
                                                        onChange = { handleChange }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="5">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-termlen"
                                                    >
                                                        Term Length
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-termlen"
                                                        placeholder="5, 7, 10"
                                                        type="text"
                                                        value={ formValues.TermLength }
                                                        onChange={ handleChange } 
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="8">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-currMortBal"
                                                    >
                                                        Current Mortgage Balance
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-currMortBal"
                                                        placeholder="$ 400000"
                                                        type="text"
                                                        value={ formValues.curMortBalance }
                                                        onChange={ handleChange }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="text-right" xs="4">
                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    size="sm"
                                                >
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Properties Minted</h3>
                                    </div>

                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Payment</th>
                                        <th scope="col">Balance</th>
                                        <th scope="col">AnuityWithdraw</th>
                                        <th scope="col">TxFee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {DataProts.map(
                                        (item) =>
                                            <tr>
                                                <th scope="row">{item}</th>
                                                <td>{item}</td>
                                                <td>{item}</td>
                                                <td>
                                                    <i className="fas fa-arrow-up text-success mr-3" /> {item}
                                                </td>
                                            </tr>
                                    )} */}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

EquityInfo.layout = Admin;

export default EquityInfo;


// Address, phone no, zip code, city, estate, 

// math: TermLen, ValOfHom, curMortBalance

// function DataForProtocol()
// {
//     this.Payment = 0;
//     this.Balance = HomeOwnerCal.BtcToCot;
//     this.AnuityWithdraw = 0;
//     this.TxFee = 2.5;
//     this.BTCYieldNFT = 0;
//     this.NFTYieldUSD = 0;
//     this.CotAppr = 0;
//     this.NFTRevOptCall = (HomeOwnerCal.HomeEquity * this.CotAppr) + HomeOwnerCal.HomeEquity;
//     this.OptCallFee = 0.05;
//     this.ESTBTCPrice = HomeOwnerCal.PriceBTC;
// }