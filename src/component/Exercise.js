import React from "react";
import { useSelector} from "react-redux";
import { showArrU } from "../slice";
import Check from './Check';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export function Exercise() {
    const arrU = useSelector(showArrU);
    return (
        <div >
            <Container>
                <Row>
                    <Col>
                        <h3>Test your knowledge:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="exer">{arrU.map((x) => (<Row key={x.id}>
                            {[
                                'primary',
                            ].map((variant) => (
                                <Alert key={variant} variant={variant}>
                                    {x.e} {" "} {" "}
                                    <Check arrU={x.f} />
                                </Alert>
                            ))}
                        </Row>))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}