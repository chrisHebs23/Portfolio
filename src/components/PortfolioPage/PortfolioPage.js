import React, { Component, useState } from "react";
import dog1 from "../../../public/dog1.jpg";
import dog2 from "../../../public/dog2.jpg";
import dog3 from "../../../public/dog3.jpg";
import dog4 from "../../../public/dog4.jpg";
import dog5 from "../../../public/dog5.jpg";
import Next from "../../../public/Next.png";
import Previous from "../../../public/Previous.png";
import "./Portfolio.css";

export default class PortfolioPage extends Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      images: [dog1, dog2, dog3, dog4, dog5],
      arrowNext: Next,
      arrowPrev: Previous,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;
    // check if we need to start over from the last index again
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    // assign the logical index to currentImageIndex that will use in render method
    this.setState({
      currentImageIndex: index,
    });
  }

  nextSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;
    // check if we need to start over from the first index
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    // assign the logical index to currentImageIndex that will use in render method
    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    // get current image index
    const index = this.state.currentImageIndex;
    // create a new array with 5 videos from the source images
    let firstFiveVideo = this.state.images.slice(index, index + 5);
    // check the length of the new array (it’s less than 5 when index is near the end of the array)
    if (firstFiveVideo.length < 5) {
      // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array
      firstFiveVideo = firstFiveVideo.concat(
        this.state.images.slice(0, 5 - firstFiveVideo.length)
      );
    }

    return (
      <div className="layout">
        <h1 className="portfolio-title layout-align title">Portfolio</h1>
        <img
          className="arrows left"
          src={this.state.arrowPrev}
          onClick={this.prevSlide}
        />
        <div className="carousel-layout ">
          {firstFiveVideo.map((image, index) => (
            <img className="sliderimg" key={index} src={image} alt="" />
          ))}
        </div>
        <img
          className="arrows right"
          src={this.state.arrowNext}
          onClick={this.nextSlide}
        />
      </div>
    );
  }
}
