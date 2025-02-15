import React from "react";
import "./Certifications.css";
import "../../index.css";

import fast__complete from '../../assets/Certifications/fast__complete.png'
import fast__webAPI from '../../assets/Certifications/fast__webAPI.png'
import fast__react from '../../assets/Certifications/fast__react.png'
import fiap__ux from '../../assets/Certifications/fiap__ux.png'
import formation__javascriptdeveloper from '../../assets/Certifications/formation__javascriptdeveloper.png'
import formation__htmldeveloper from '../../assets/Certifications/formation__htmldeveloper.png'
import simulator__mariokart from '../../assets/Certifications/simulator__mariokart.png'
import simulator__shopeekart from '../../assets/Certifications/simulator__shopeekart.png'
import aspire__leaders from '../../assets/Certifications/aspire__leaders.jpeg'

const Certifications = () => (
    <div className="certificados section swiper" id="certificados">
        <h2 className="Certifications__title lightfont">Educação</h2>

        <div className="certificados-container">
            {/* <!-- cards --> */}
            <div className="certf-cards cCarousel">
                {/* <!-- geral FAST --> */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={fast__complete} alt="fast complete" />
                    <div className="card-body">
                    <p className="card-text">[FAST - Aceleração] Bootcamp Frontend </p>
                    <span>72 horas</span>
                    </div>
                </div>
                
                {/* <!-- webapi FAST --> */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={fast__webAPI} alt="fast webAPI " />
                    <div className="card-body">
                        <p className="card-text">Web API</p>
                        <span>Microcertificado</span>
                    </div>
                </div>

                {/* <!-- REACT FAST --> */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={fast__react} alt="fast react" />
                    <div className="card-body">
                        <p className="card-text">REACT e Testes Automatizados</p>
                        <span>Microcertificado</span>
                    </div>
                </div>

                {/* User Experience FIAP  */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={fiap__ux} alt="fiap ux" />
                    <div className="card-body">
                        <p className="card-text">User Experience</p>
                        <span>60 horas</span>
                    </div>
                </div>

                {/* <!-- Formação Javascript DIO --> */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={formation__javascriptdeveloper} alt="formation__javascriptdeveloper" />
                    <div className="card-body">
                        <p className="card-text">Formação Javascript Developer</p>
                        <span>39 horas</span>
                    </div>
                </div>

                {/* <!-- Formação HTML DIO --> */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={formation__htmldeveloper} alt="formation htmldeveloper" />
                    <div className="card-body">
                        <p className="card-text">Formação HTML Web Developer</p>
                        <span>21 horas</span>
                    </div>
                </div>

                {/* Mario Kart DIO */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={simulator__mariokart} alt="simulator mariokart" />
                    <div className="card-body">
                        <p className="card-text">Mario Kart em NODEJS</p>
                        <span>Desafio de Codigo</span>
                    </div>
                </div>

                {/* Shopee Cart DIO */}
                <div className="card cCarousel-item">
                    <img className="card-img-top" src={simulator__shopeekart} alt="simulator shopeekart" />
                    <div className="card-body">
                        <p className="card-text">Shopee Cart em NODEJS</p>
                        <span>Desafio de Codigo</span>
                    </div>
                </div>

                {/* aspire__leaders 
                <div className="card cCarousel-item" style={{width: 18}}>
                    <img className="card-img-top" src={aspire__leaders} alt="aspire leaders" />
                    <div className="card-body">
                        <p className="card-text">Aspire - Harvad Business School</p>
                        <span>Leadership Development Program</span>
                    </div>
                </div>*/}
            </div>  
        </div>  
    </div>
);

export default Certifications;