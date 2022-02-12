import axios from "axios";
import React, { Component } from "react";
import _Service_Card_data from "./_Service_Card_data";

export default class _Service_Card extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = "DataBase/ServicesData.json";
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }
  render() {
    return (
      <>
        <section id="Service_Card">
          <div class="container pb-110">
            <div class="row">
              {this.state.data.map((data) => (
                <_Service_Card_data
                  key={data._id}
                  data={data}
                ></_Service_Card_data>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
