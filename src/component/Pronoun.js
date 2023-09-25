import React from "react";
import { useSelector } from "react-redux";
import { showPronouns } from "../slice";
import Table from 'react-bootstrap/Table';

export function Pronoun() {
    const arr_pr = useSelector(showPronouns);
    return (
        <div className="pronon">
            <h3 className="col-md-5 mx-auto">Pronouns</h3>
            <Table striped bordered hover  >
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Franch</th>
                    </tr>
                </thead>
                <tbody>
                    {arr_pr.map((x) => (<tr key={x.id}><td>{x.e}</td>
                        <td>{x.f}</td>
                    </tr>))}
                </tbody>
            </Table>
        </div>
    );
}