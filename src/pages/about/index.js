import React from "react";
import "./style.css";
import Screenshot from "../../images/screenshot.jpeg";
import Resume from "./RESUME.pdf";

function About(){
    return (
        <>
        <h2>About</h2>
        <main className="container container-fluid">
        <section className="card mt-3 ml-5 border cardProfile w-75">
            <div className="card-header">
                <h5 className="card-title">Joshua Homer</h5>
            </div>
            <img src={Screenshot} className="img-fluid card-img-top image" alt="Josh" />

            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Personal Summary</h6>
                <p className="card-text">I am a 30 year old, aspiring Web Developer - Currently 
                    enrolled in Penn LPS coding bootcamp at the University of Pennsylvania.
                    A bulk of my previous experience includes sales, customer service and banking.
                    A life in coding perfectly compliments my outdoor lifestyle!
                </p>
                <a href="https://github.com/Jchomer90" className="card-link">Github</a>
                <a href="mailto:Joshuachomer@gmail.com" className="card-link">Email</a>
                <a href={Resume} className="card-link">Resume</a>
                <a href="https://www.linkedin.com/in/josh-homer-b217221ab/" className="card-link">linkedin</a>
            </div>
        </section>
        </main>
        </>
    )
};
export default About;