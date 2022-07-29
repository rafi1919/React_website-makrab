import React from 'react'
import {Col,Button, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import about1 from './img/about.JPG'

const About = () => {
    return (
        <>
            <div id='about'>
                <Container className='about'>
                    <Row>
                        <Col md={6}>
                            <img src={about1} className='aboutpict' />
                        </Col>
                        <Col md={6}>
                            <h1>About</h1>
                            <p>
                                Adapun tujuan diadakan Penyelenggaraan Makrab Kelas ini adalah : Menciptakan kenyamanan bersosial diantara individu. Mempererat hubungan pertemanan mahasiswa tua D3 Manajemen Informatika 02. Meningkatkan rasa kekeluargaan dan kebersamaan.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default About
