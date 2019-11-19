import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ pageContext }) =>
  console.log(pageContext) || (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2, open the console</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

export default SecondPage
