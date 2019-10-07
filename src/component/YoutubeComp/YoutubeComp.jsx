import React from "react";
import "./YoutubeComp.css";
import Img from "./1.jpg";

const YoutubeComp = props => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={Img} alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "000,0000",
  title: "Anak Ayam",
  desc: "ini coba untung belajar aja?"
};

export default YoutubeComp;
