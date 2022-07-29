import React, {Component} from 'react'
import { Col,Button, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Fix from './video/fix2.mp4';


import img1 from './img/gallery/img1.JPG'
import img2 from './img/gallery/img2.JPG'
import img3 from './img/gallery/img3.JPG'
import img4 from './img/gallery/img4.JPG'
import img5 from './img/gallery/img5.JPG'
import img6 from './img/gallery/img6.JPG'
import img7 from './img/gallery/img7.JPG'
import img8 from './img/gallery/img8.JPG'
import img9 from './img/gallery/img9.JPG'
import img10 from './img/gallery/img10.JPG'
import img11 from './img/gallery/img11.JPG'
import img12 from './img/gallery/img12.JPG'
import img13 from './img/gallery/img13.JPG'
import img14 from './img/gallery/img14.JPG'
import img15 from './img/gallery/img15.JPG'
import img16 from './img/gallery/img16.JPG'
import img17 from './img/gallery/img17.JPG'
import img18 from './img/gallery/img18.JPG'
import img19 from './img/gallery/img19.JPG'
import img20 from './img/gallery/img20.JPG'
import img21 from './img/gallery/img21.JPG'
import img22 from './img/gallery/img22.jpg'
import img23 from './img/gallery/img23.jpg'
import img24 from './img/gallery/img24.jpg'
import img25 from './img/gallery/img25.jpg'
import img26 from './img/gallery/img26.jpg'
import img29 from './img/gallery/img29.JPG'
import img28 from './img/gallery/img28.JPG'
import img32 from './img/gallery/img32.JPG'



const Gallery = () => {

    return (
        <>
            <div id='gallery'>
                <div className='video'>
                    <video src={Fix} controls autoPlay loop  />
                </div>
                
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,250.7C672,224,768,160,864,122.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className='photo container-fluid'>
                <Row>
                    <div className='column'>
                        <img src={img1} alt="img" />
                        <img src={img7} alt="img" />
                        <img src={img3} alt="img" />
                        <img src={img17} alt="img" />
                        <img src={img8} alt="img" />
                        <img src={img14} alt="img" />
                        <img src={img21} alt="img" />
                        <img src={img23} alt="img" />
                        <img src={img29} alt="img" />
                    </div>

                    <div className='column'>
                        <img src={img5} alt="img" />
                        <img src={img10} alt="img" />
                        <img src={img11} alt="img" />
                        <img src={img15} alt="img" />
                        <img src={img4} alt="img" />
                        <img src={img19}alt="img"  />
                        <img src={img20} alt="img" />
                        <img src={img24} alt="img" />
                        <img src={img26} alt="img" />
                        <img src={img28} alt="img" />
                    </div>

                    <div className='column'>
                        <img src={img18} alt="img" />
                        <img src={img16}alt="img" />
                        <img src={img6} alt="img" />
                        <img src={img13} alt="img" />
                        <img src={img12} alt="img" />
                        <img src={img2} alt="img" />
                        <img src={img22} alt="img" />
                        <img src={img25} alt="img" />
                        <img src={img9} alt="img" />
                        <img src={img32} alt="img"/>

                    </div>
                    
                </Row>

            </div>
            <div className='foot'>
                <p>&copy; dokumentasi 2022</p>
            </div>
                
            </div>
        </>
    )
}

export default Gallery
