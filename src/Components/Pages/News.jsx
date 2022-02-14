import axios from "axios";
import React, { Component } from "react";
import Footer from "../Child_Page_componests/Footer";
import Header from "../Child_Page_componests/Header";
import Home_LogoSection from "../Child_Page_componests/Home_LogoSection";
import PageLink from "../Child_Page_componests/PageLink";
import PageName from "../Child_Page_componests/PageName";
import _News_Card from "../Child_Page_componests/_News_Card";
import _News_SideBar from "../Child_Page_componests/_News_SideBar";

class News extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const data = "DataBase/NewsData.json";
    axios.get(data).then((res) => {
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

        <PageName name="News"></PageName>

        {/* Page Link */}

        <PageLink name="News"> </PageLink>

        {/* News Items */}

        <section id="our_news">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                {this.state.data.map((data) => (
                  <_News_Card key={data._id} data={data}>
                    {" "}
                  </_News_Card>
                ))}
              </div>

              {/* SideBar */}

              <_News_SideBar></_News_SideBar>
            </div>
            <div class="row">
              <div class="col">
                <div class="pagination">
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">
                          Previous
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#!">
                          1
                        </a>
                      </li>
                      <li class="page-item ">
                        <a class="page-link" href="#!">
                          2 <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#!">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#!">
                          4
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#!">
                          5
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#!">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logo */}

        <Home_LogoSection></Home_LogoSection>

        {/* Footer Section */}

        <Footer></Footer>
      </>
    );
  }
}

export default News;
