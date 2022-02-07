import React, { Component } from 'react'

export default class Header_HeroSection extends Component {
  render() {
    return (
        <section id="hero">
        <div class="container">
            <div class="row">
                <div class="col">
                    <hgroup>
                        <h2>Right plan can <br/>
                            give you <span class="type"></span> </h2>
                        <p>We help our clients make lasting improvements their performance and realize their most
                            important business goals.</p>
                        <div class="all-btn">
                            <button class="btn-1 mr-20"><a href="#">Sing Up..</a></button>
                            <button class="btn-2"><a href="#">More Service</a></button>
                        </div>
                    </hgroup>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
