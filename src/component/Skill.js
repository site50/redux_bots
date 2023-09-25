import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, skills, showArray } from "../slice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function Show() {
    const [skill, setSkill] = useState("")
    const [box_skill, setBox_skill] = useState(false)
    const arr = useSelector(showArray);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(add(skill))
        setSkill("")
    }
    return (<div>
        <Container>
            <Row>
                <Col>
                    <h3 className="col-md-5 mx-auto">Page skills</h3>
                    <Button variant="secondary" onClick={() => { dispatch(skills()); setBox_skill(!box_skill) }}>show skills </Button>{' '}
                    <div>{arr.map(arr => (<div key={arr}>{arr}
                        <div>
                            {arr.f}
                        </div>
                    </div>))}
                    </div>
                    {box_skill ?
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={e => setSkill(e.target.value)} value={skill} />
                            <Button variant="warning" type="submit">add new skills</Button>{' '}
                            <div>{skill}</div>
                        </form>
                        :
                        ''}
                </Col>
            </Row>
        </Container>
    </div>
    );
}