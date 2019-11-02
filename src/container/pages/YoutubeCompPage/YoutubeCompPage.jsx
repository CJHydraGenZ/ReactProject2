import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp'


class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>

                <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="41231313.3"
                    title="qweqeqeq"
                    desc="eqeqeeqe" />
                <YoutubeComp
                    time="4.3"
                    title="qw344424eewqe"
                    desc="eaaaaaa" />
                <YoutubeComp
                    time="4.3343434"
                    title="qaa"
                    desc="eaae" />
                <YoutubeComp
                    time="4.3222"
                    title="q413eq2e" />

                <YoutubeComp />
            </Fragment>



        )
    }


}


export default YoutubeCompPage