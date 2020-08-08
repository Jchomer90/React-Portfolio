import React from "react";
import "./style.css";
import screenShot1 from "../../images/screenShot1.jpeg";
import screenShot2 from "../../images/screenShot2.jpeg";
import screenShot3 from "../../images/screenShot3.jpeg";
import screenShot4 from "../../images/screenShot4.jpeg";
import screenShot5 from "../../images/screenShot5.jpeg";
import screenShot6 from "../../images/screenShot6.jpeg";
import screenShot7 from "../../images/screenShot7.jpeg";
import screenShot8 from "../../images/screenShot8.jpeg";

function Portfolio() {
    return (
        <>
            <header>
                Portfolio
            </header>
            <div className="container">
            
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot7} alt="Movie Mentor" />
                        <div className="card-body">
                            <h5 className="card-title">Movie Mentor</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://movie-mentor.herokuapp.com/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Movie-Mentor" class="card-link">Github</a>
                        </div>

                    </div>
                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot8} alt="Book Nook" />
                        <div className="card-body">
                            <h5 className="card-title">Book Nook</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://jchomer90.github.io/Book-Nook/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Book-Nook" class="card-link">Github</a>
                        </div>
                    </div>

                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot1} alt="Employee Directory" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://jchomer90.github.io/Employee-Directory/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Employee-Directory" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot2} alt="Budget Tracker" />
                        <div className="card-body">
                            <h5 className="card-title">Budget Tracker</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://budget-tracker-27.herokuapp.com/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Budget-Tracker" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot3} alt="Workout Tracker" />
                        <div className="card-body">
                            <h5 className="card-title">Workout Tracker</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://workout-tracker-27.herokuapp.com/?id=5f2241ecaa06d70017bda0b6" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Workout-Tracker" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot4} alt="Eat Da Burger" />
                        <div className="card-body">
                            <h5 className="card-title">Eat Da Burger</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://eat-da-burger8.herokuapp.com/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Eat-Da-Burger" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot5} alt="Express Note Taker" />
                        <div className="card-body">
                            <h5 className="card-title">Express Note Taker</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://express-note-taker1.herokuapp.com/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/Express-Note-Taker" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-20">
                    <div className="card">
                        <img className="card-img-top" src={screenShot6} alt="Good Readme Generator" />
                        <div className="card-body">
                            <h5 className="card-title">Good ReadMe Generator</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="https://jchomer90.github.io/GoodReadMeGenerator/" class="card-link">For deployed link</a>
                            <a href="https://github.com/Jchomer90/GoodReadMeGenerator" class="card-link">Github</a>
                        </div>
                    </div>
                </div>


            </div>

        </>
        )
};


export default Portfolio;