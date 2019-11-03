//lebralies
import React, { Component, Fragment } from "react";
//pages
import Product from '../pages/Product/Product';
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import './Home.css'
import {
  BrowserRouter,

  Route,
  Link
} from "react-router-dom";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

class Home extends Component {
  state = {
    showComp: true
  }

  render() {
    return (
      <BrowserRouter>

        <Fragment>

          <div className='navbar'>
            <ul>
              <li>

                <Link to="/">Blog post</Link>
              </li>
              <li>

                <Link to="/product">Product</Link>
              </li>
              <li>

                <Link to="/lifecycle">Life Cycle</Link>
              </li>
              <li>

                <Link to="/youtube-component">Youtube Component</Link>
              </li>
            </ul>
          </div>
          <div className="clearboth"></div>


          <Route path="/" exact component={BlogPost}></Route>
          <Route path="/detail-post/:postID" component={DetailPost}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/lifecycle" component={LifeCycleComp}></Route>
          <Route path="/youtube-component" component={YoutubeCompPage}></Route>
        </Fragment>

      </BrowserRouter>

    );
  }
}

export default Home;
