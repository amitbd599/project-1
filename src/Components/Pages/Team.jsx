import axios from "axios";
import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import _TeamData from "../Child_Page_componests/_TeamData";

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = "DataBase/TeamData.json";
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }
  render() {
    return (
      <>
        {/* Header */}

        <Header></Header>

        {/* Page Name */}

        <PageName name="Our Team"></PageName>

        {/* Page Link */}

        <PageLink name="Our Team"> </PageLink>

        {/* Data Load */}

        <section id="Team">
          <div class="container pb-110">
            <div class="row">
              <div class="col">
                <h2></h2>
              </div>
            </div>
            <div class="row">
              {this.state.data.map((data) => (
                <_TeamData key={data._id} data={data}></_TeamData>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Section */}

        <Home_LogoSection></Home_LogoSection> 

        {/* Footer */}

        <Footer></Footer>
      </>
    );
  }
}
