import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure
  } from '@chakra-ui/react'
import Hire from '../../components/Hire/Hire';

import "./Home.css";
import Social from "../../components/Social";
import Experience from "../../components/Experience/Experience";

export default function Home(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    const update = ()=>{
        onOpen();
    }

    return(
        <section className="Home">
            <div className="introduction">
                <div className="container">
                    <h1>Jubemi Pajiah</h1>
                    <div className="sec-1">
                        <div>
                            <div className="describe align">
                                    <p>jubemipajiah@gmail.com</p>
                                    <img className='icon' src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_gmail-64.png" alt="Email" />
                            </div>
                            <div className="describe align">
                                <p>Web Developer</p>
                                <img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_Laptop-Web_Design-Web_development-Coding-64.png" alt="Web Developer" className="icon" />
                            </div>
                            <div className="describe align">
                                <p>Geologist</p>
                                <img src="https://cdn2.iconfinder.com/data/icons/business-filled-outline-style-1-set-1/256/23-64.png" alt="Geologist" className="icon" />
                            </div>
                        </div>
                        <div className="align describe">
                            <p>Nigeria</p>
                            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Nigeria-2-64.png" alt="Nigeria" />
                        </div>
                    </div>
                    <div className="sec-2">
                        <Social/>
                        <div onClick={update} className="hire">
                            <p>HIRE ME!</p>
                        </div>
                    </div>
                    <div className="about">
                        <h5>About</h5>
                        <div>
                        <p>Detailed Web Developer with advanced coding abilities and enthusiasm for new enhancements. 2 years of learning and building projects. Expert in the construction of efficient and upgradeable structures to meet client requirements. Open to learning and new experiences. Advanced in HTML, CSS, BOOTSTRAP, Sass, Vanilla JS, React JS. Currently solidifying my backend with Node Js and PHP, also solidifying my knowledge in Database with Mongo DB and My SQL.</p>
                        <span>Also an</span>
                        <p>Aspiring Environmental Geologist, currently a student and trying my best to be the change I want to see in the world.</p>
                        </div>
                    </div>
                </div>
                <a href="https://flowcv.com/resume/fdfwbtoafg" target='blank' className="mobile-cv">View my Cv</a>
            </div>
            <Experience/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <Hire
                    close={onClose}
                />
                </ModalContent>
            </Modal>
        </section>
    )
}