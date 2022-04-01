import React, { useState } from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Home() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleSubmit (event) {
        fetch("/" + firstName)
            .then((response) => response.json())
            .then((data) => {
              setLastName(data.lastName);
            })
            .catch((error) => {
              console.log(error);
            });
    }


    return (
        <d>
            <Container>
                <Row style={{justifyContent: "center", margin: 0}}>
                    <Col style={{maxWidth: "fit-content", margin: 0}}>
                    Your Input <br />
                    Request to Server
                        <form onSubmit={handleSubmit(this)}>
                        <input type="name" onChange={(e) => setFirstName(e.target.value)} name="name" placeholder="Enter name"/>
                        </form>
                    </Col>
                    <Col style={{maxWidth: "fit-content", margin: 0}}>
                    <br />
                    Response from Server<br />
                        <input type="ans" value={lastName} name="ans"/>
                    </Col>
                </Row>
            </Container>
        </d>
        
    );
}

