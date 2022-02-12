import axios from "axios";
import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import _Project_Data from "../Child_Page_componests/_Project_Data";

export default class Our_Projects extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = "DataBase/ProjectData.json";
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }
  render() {
    return (
      <>
        {/* Header section */}

        <Header></Header>

        {/* Page Name */}

        <PageName name="Our Project"></PageName>

        {/* Page Link */}

        <PageLink name="Our Project"> </PageLink>

        {/* <!-- Project  Card --> */}
        <section id="our-project-card">
          <div class="container">
            <div class="row part-1">
              {this.state.data.map((data) => (
                <_Project_Data key={data._id} data={data}></_Project_Data>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <div className="mt-100"></div>

        <Home_LogoSection></Home_LogoSection>

        {/* Footer */}

        

        <Footer></Footer>
      </>
    );
  }
}
