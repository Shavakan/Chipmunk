import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SampleVX from "../components/SampleVX";
import config from "../../data/SiteConfig";

class SampleVXPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="SampleVX">
        <div className="about-container">
          <Helmet>
            <title>{`Sample | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/samplevx/`} />
          </Helmet>
          <SampleVX />
        </div>
      </Layout>
    );
  }
}

export default SampleVXPage;