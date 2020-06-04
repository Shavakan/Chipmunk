import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import TopMenu from "../components/TopMenu";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <TopMenu>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children}
        </div>
      </TopMenu>
    );
  }
}
