import React, { Component } from 'react'
import document from '../Image/document.png'

export default class Home_Feedback extends Component {
  render() {
    return (
        <section id="feedback-chose">
        <div class="container-fluid">
            <div class="row">
                <div class=" col-lg-6 part-1" id="">
                    <hgroup class="mt-100 ml-80 boost">
                        <h2 class="mb-30">Client Feedback</h2>
                        <img class="mb-30 feed" src="./img/icon/left-quote.png" alt=""/>
                        <div class="bd-example">
                            <div id="carouselExampleCaptions" class="carousel slide pointer-event" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active">
                                        <div class="slider-div"></div>
                                        <div class="carousel-caption  d-md-block">

                                            <p class="text-full">Bonsi business consulting allows me the opportunity to
                                                hear directly from my customer. Sometimes allowing client like me the
                                                opportunity to respond to a problem while they are still in the building
                                            </p>

                                            <hr/>
                                            <img class="img-fluid float-left" src="./img/amit.png" alt=""/>
                                            <h3>Amit Biswas</h3>
                                            <p class="text">CEO - Getmore7.com</p>


                                        </div>
                                    </div>
                                    <div class="carousel-item ">
                                        <div class="slider-div"></div>
                                        <div class="carousel-caption  d-md-block">

                                            <p class="text-full">Bonsi business consulting allows me the opportunity to
                                                hear directly from my customer. Sometimes allowing client like me the
                                                opportunity to respond to a problem while they are still in the building
                                            </p>

                                            <hr/>
                                            <img class="img-fluid float-left" src="./img/amit2.png" alt=""/>
                                            <h3>Moni Biswas</h3>
                                            <p class="text">Communications Coordinator</p>


                                        </div>
                                    </div>
                                    <div class="carousel-item ">
                                        <div class="slider-div"></div>
                                        <div class="carousel-caption d-md-block">

                                            <p class="text-full">Bonsi business consulting allows me the opportunity to
                                                hear directly from my customer. Sometimes allowing client like me the
                                                opportunity to respond to a problem while they are still in the building
                                            </p>

                                            <hr/>
                                            <img class="img-fluid float-left" src="./img/amit3.png" alt=""/>
                                            <h3>Lima Rom</h3>
                                            <p class="text">Sales Officer</p>


                                        </div>
                                    </div>

                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                                    data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button"
                                    data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </hgroup>

                </div>
                <div class=" col-lg-6 part-2">
                    <div class="why-choose">
                        <hgroup>
                            <h2>Why Choose Us</h2>
                            <div>
                                <img class="img-fluid float-left" src={document} alt=""/>
                                <h3>Trsuted Vendor</h3>
                                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags
                                    cowered nearer to the fire, and chuckled heartily.</p>
                            </div>
                        </hgroup>
                        <hgroup>

                            <div>
                                <img class="img-fluid float-left" src={document} alt=""/>
                                <h3>Professional Advisor</h3>
                                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags
                                    cowered nearer to the fire, and chuckled heartily.</p>
                            </div>
                        </hgroup>
                        <hgroup>

                            <div>
                                <img class="img-fluid float-left" src={document} alt=""/>
                                <h3>Award’s Winner</h3>
                                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags
                                    cowered nearer to the fire, and chuckled heartily.</p>
                            </div>
                        </hgroup>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
