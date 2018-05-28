import React from 'react';
import {Row, Col} from "react-bootstrap";


export default class Footer extends React.Component {


    render() {
        return (
            <footer className="container-fluid">
                <div className="smallerFooter">
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4157.819104948783!2d19.20257406545422!3d50.02753922812748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716958605e8ce0f%3A0xd3b3d6e6a755d0b6!2sUczelnia+Pa%C5%84stwowa+Wy%C5%BCsza+Szko%C5%82a+Zawodowa+im.+rtm.+Witolda+Pileckiego+w+O%C5%9Bwi%C4%99cimiu!5e0!3m2!1sen!2spl!4v1527526628662" width="400" height="300" frameborder="0" allowfullscreen></iframe>                    
                        </Col>
                        <Col md={6} mdPull={6}>
                            <section>
                                <h4>Contact us</h4>
                                <h5>Państwowa Wyższa Szkoła Zawodowa im. rtm. Witolda Pileckiego w Oświęcimiu</h5>
                                <h6>32-600 Oświęcim, ul. Kolbego 8</h6>
                                <p>
                                Dojazd do Uczelni zapewniają także busy jadące z Wadowic i okolic, Krakowa, Bierunia, Kęt, Chełmka.
                                </p>
                                <p>Oświęcim leży na skrzyżowaniu tranzytowych ciągów komunikacyjnych o znaczeniu krajowym i wojewódzkim, co znacznie ułatwia dotarcie do miasta. 
                                    Blisko jest stąd do Krakowa (ok. 70 km), Wadowic (ok. 30 km), Katowic (ok. 35 km) czy Bielska-Białej (ok. 35 km), a także w Beskidy.
                                </p>
                            </section>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}