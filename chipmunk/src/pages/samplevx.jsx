import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SampleVX from "../components/SampleVX";
import config from "../../data/SiteConfig";

class SampleVXPage extends Component {

  render() {
    // TODO : set up width and height properly.
    const width = 800;
    const height = width * 0.6;
    return (
      <Layout location={this.props.location} title="SampleVX">
        <div className="about-container">
          <Helmet>
            <title>{`Sample | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/samplevx/`} />
          </Helmet>
          <SampleVX 
            width={width}
            height={height}
          />
        </div>
      </Layout>
    );
  }
}

export default SampleVXPage;