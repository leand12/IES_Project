import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormCheckbox,
  Button,
} from "shards-react";

const LoginForm = () => (
  <ListGroup flush>
    <ListGroupItem className="p-6">
      <Row>
        <Col>
          <Form>
            <Row form className="form-group">
                <label htmlFor="feUsername">Username</label>
                <FormInput
                    id="feUsername"
                    placeholder="Username"
                    required
                />
            </Row>
            <Row form className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  required
                  placeholder="Email"
                />
            </Row>
            <Row form className="form-group">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  required
                  placeholder="Password"
                />
            </Row>


            
            <Row form className="py-3">
              <Col className="text-sm-center py-1">
                  <span>Don't have an account yet?</span>
              </Col>
            </Row>
            <Row form >
              <Col className="text-sm-center py-1">
                  <a href="/register" underline="always">
                      Create Account
                  </a>
              </Col>
            </Row>
            <Row form>
                <Col className="text-sm-center py-3">
                    <Button className="bg-primary text-white text-center rounded p-3"
                     style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", fontSize: "16px", width:  "100px" }}
                     type="submit">
                        <span>Log In</span>
                    </Button>
                </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default LoginForm;
