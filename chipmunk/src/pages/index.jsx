import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

import { Provider } from 'react-redux';
import configure from '../store';
const store = configure({});

class Index extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
        </div>
      </Layout>
      </Provider>
    );
  }
}

export default Index;
