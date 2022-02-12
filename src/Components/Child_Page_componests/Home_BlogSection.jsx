/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home_BlogSection extends Component {
  //    state= {
  //        data : []
  //    }
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = "DataBase/BlogData.json";
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }



  render() {
    return (
      <section id="blog">
        <div class="container">
          <div class="row">
            <div class="col">
              <hgroup>
                <h2>
                  We work with the world’s leading organizations to provide
                  collaborative solutions to your business
                </h2>
              </hgroup>
            </div>
          </div>
          <div class="row">


            {this.state.data.map((data) => (
              <div class="col-md-6 col-lg-3" key={data._id}>
                <div class="card">
                  <img
                    class="card-img-top img-fluid"
                    src={data.picture}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <Link to={''}><h4 className="card-title">{data.title}</h4></Link>
                    <p class="card-text text-justify">
                    
                     {data.des}
                    </p>
                    <div className="overlay"></div>
                    
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
    );
  }
}
