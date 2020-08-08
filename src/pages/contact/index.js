import React from "react";
import "./style.css";

function Contact() {
    return (
        <>
            <div>
                <h1>Contact</h1>
            </div>
            <main className="container-fluid mt-3 contactForm">
                <form>
                    <h2>Contact Info</h2>
                    <section className="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
                    </section>
                        <section className="form-group">
                            <label for="formGroupExampleInput2">Email</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example@email.com" />
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <br />
                                    <button type="submit" className="btn btn-primary">Submit</button>
        
                    </section>
                </form>
            </main>
    </>
    )
};
export default Contact;