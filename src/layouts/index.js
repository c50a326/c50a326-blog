import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import Header from '../components/header'
import favicon from './latg-icon-16x16.png'

require("typeface-sansita-one");
require("typeface-raleway");

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}>
      <link rel="shortcut icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div css={`
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      max-width: 40rem;
      margin: auto;
      `}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
