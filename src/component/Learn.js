import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Component.css";
import { useSelector } from "react-redux";
import { showArrU } from "../slice";
import Table from 'react-bootstrap/Table'
import { Pronoun } from './Pronoun';


function Learn() {
    const [box, setBox] = useState(false)
    const arrU = useSelector(showArrU);
    return (
        <div>
            <Container>
                <Row>
                    <Col><h3 className="col-md-5 mx-auto">Learn useful phrases!</h3></Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm" >
                            <thead>
                                <tr>
                                    <th>English</th>
                                    <th>Franch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrU.map((x) => (<tr key={x.id}><td>{x.e}</td>
                                    <td>{x.f}</td>
                                </tr>))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={() => setBox(!box)}>Learn pronouns</button>
                        {box ? <Pronoun /> : ''}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Learn;
