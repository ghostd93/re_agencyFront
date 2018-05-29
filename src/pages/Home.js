import React from 'react';
import LazyHero from 'react-lazy-hero';
import CountUp from 'react-countup';
import {Row, Col, Table, Glyphicon, Image} from "react-bootstrap";

export default class Home extends React.Component {

    render() {
        return (
        <main>
            <LazyHero imageSrc="https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_1280.jpg">
                <h1>It’s your Journey. We’re Here to Help.</h1>
            </LazyHero>
            <h2>WELCOME</h2>
                <hr/>
            <Row className="show-grid">
                            <Col md={6} mdPush={6}>
                                <Image src="https://cdn.pixabay.com/photo/2018/01/29/07/55/modern-minimalist-bathroom-3115450_1280.jpg" alt="" className="homePhoto"/>                            
                            </Col>
                            <Col md={6} mdPull={6}>
                                <section>
                                <h3>OFFICE OPENING TIME</h3>
                                <Table striped bordered condensed hover>
                                    <tbody>
                                        <tr>
                                            <td>Daily</td>      
                                            <td><Glyphicon glyph="time"/> 10:00 AM TO 6:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td><Glyphicon glyph="time"/> 10:00 AM TO 1:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td><Glyphicon glyph="time"/> 10:00 AM TO 1:00 PM</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <hr/>
                                <h3>Save up to 30% with <strong>REAgency</strong></h3>
                                <p>With our huge experiance in sales we will optimize your price so you could save a upto 30% in taxes! We will also take care about all the paper work. Sounds cool, doesn't it?</p>
                                <Row className="show-grid">
                                    <Col xs={6} md={4}>
                                        <h4><Glyphicon glyph="user"/> CUSTOMERS</h4>
                                        <h2><CountUp start={0} end={653}/></h2>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <h4><Glyphicon glyph="glass"/> EVENTS</h4>
                                        <h2><CountUp start={0} end={823}/></h2>
                                    </Col>
                                    <Col xsHidden md={4}>
                                        <h4><Glyphicon glyph="star"/> AWARDS</h4>
                                        <h2><CountUp start={0} end={45}/></h2>
                                    </Col>
                                </Row>
                                </section>
                            </Col>
                </Row>
        </main>
        )
    }
}