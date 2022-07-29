import React from 'react'
import { Col,Button, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import title from './img/title.png'
import frame1 from './img/frame1.png'
import frame2 from './img/frame2.png'

 const Home = () => {
    return (
        <>
            <div id='home'>
                <div className='polka1 dot' />
                <div className='polka2 dot' />
                <div className='polka3 dot' />
                <div className='polka4 dot' />
                    <img src={title} className='title1'/>
                <img src={frame1} className='frame1' />
                <img src={frame2} className='frame2' />
                
                
            {/* <div className='title'>
                <Col>
                   <h1>20</h1>
                   <h1>22</h1>
                </Col>
                <Col>
                    <h2>D3MI02</h2>
                    <h2>MALAM</h2>
                    <h2>KEAKRABAN</h2>
                </Col>
            </div> */}

            </div>
        </>
    )
}

export default Home