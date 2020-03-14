import React from "react";
import API from "../Util/API";
import Navbar from "../Components/Navbar";
import Card from 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            {/* <body background="../assets/background-blur-clean-clear-531880.jpg"></body> */}
            <Navbar></Navbar>
            <Card style={{ width: '30rem' }}>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Blah blah blah
            </Card.Text>
            </Card>
        </div>
    )
}

export default Home;