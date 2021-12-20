import React from "react";
// import { myStxAddress  } from "../../components/auth";

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

function HomeReg() {
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
                    <h3 className="mb-0">Home Registration</h3>
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
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Home Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="8">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="House no. 23, UC Berkley, USA"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="8">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-phoneno"
                          >
                            Phone no.
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-phoneno"
                            placeholder="+2135454544"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="8">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-zipcode"
                          >
                            Zip Code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-zipcode"
                            placeholder="21100"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="8">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="New York"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="8">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-estate"
                          >
                            Estate
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-estate"
                            placeholder="Albama"
                            type="text"
                          />
                        </FormGroup>
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

HomeReg.layout = Admin;

export default HomeReg;


// Address, phone no, zip code, city, estate, 

// math: TermLen, ValOfHom, curMortBalance