import React from "react"

import Layout from "../layout"

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
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage;
