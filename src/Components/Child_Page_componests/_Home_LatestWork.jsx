import React, { Component } from "react";
import { ImageViewer } from "react-image-viewer-dv";
import img_1 from "../Image/work-1.png";

export default class _Home_LatestWork extends Component {
  render() {
    return (
      <div class="col-md-3">
          <ImageViewer>
        <img class="img-fluid" src={img_1} alt="" />
      </ImageViewer>
      
      </div>
    );
  }
}
