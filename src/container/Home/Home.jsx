import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from '../Product/Product';


class Home extends Component {
  render() {
    return (
      <div>
        <p>Youtube omponentC</p>
        <hr />
        <YoutubeComp
          desc="abang kamu maau ngengek"
          time="12121212"
          title="Tahie"
        />
        <YoutubeComp
          desc="Aku cinta sama kamu"
          time="33333"
          title="Yayswhehwe"
        />
        <YoutubeComp
          desc="Calom Sarjana daftar populer"
          time="1111"
          title="Ujwejiwei"
        />
        <YoutubeComp
          desc="Belajar Instant via online marketing"
          time="4444"
          title="wiweiwewewiei"
        />
        <YoutubeComp />
        <p>Counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
