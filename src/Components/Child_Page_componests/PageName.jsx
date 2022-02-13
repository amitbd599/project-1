import React, { Component } from "react";

export default class PageName extends Component {
  render() {
      const {name}= this.props;
    return (
      <section id="pageName">
        <div>
          <h2 class="pageName">{name}</h2>
        </div>
      </section>
    );
  }
}
