import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import SEO from "../components/SEO"

interface Props {
  data: {
      siteMetadata: {
        title: string
      }
  }
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.siteMetadata.title

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage;

// export const pageQuery = graphql`
//   query NotFoundQuery {
//     siteMetadata {
//       title
//     }
//   }
// `;
