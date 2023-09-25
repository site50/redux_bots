import React from "react";
import { Exercise } from './component/Exercise';
import Learn from './component/Learn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Show } from './component/Skill';
import { Pronoun } from './component/Pronoun';


function App() {
    return (
        <div >
            <div>
                <Router>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <Link to={"/"} className="navbar-brand">
                            Learn
                        </Link>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/Exercise"} className="navbar-brand">
                                    Exercise
                                </Link>
                            </li>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/Show"} className="navbar-brand">
                                    Show skills
                                </Link>
                            </li>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/Pronoun"} className="navbar-brand">
                                    Pronoun
                                </Link>
                            </li>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/exercise" element={<Exercise />} />
                        <Route path="/" element={<Learn />} />
                        <Route path="/show" element={<Show />} />
                        <Route path="/pronoun" element={<Pronoun />} />
                    </Routes>
                </Router>
            </div >
        </div >
    );
}
export default App;
