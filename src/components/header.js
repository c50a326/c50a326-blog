import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const Header = ({ siteTitle }) => (
  <nav css={`
      display: flex;
      justify-content: space-evenly;
      flex-flow: row wrap;
      background-color: blue;
      height: 1.5rem;
      width: 100%;
    `}>
    <ul css={`
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
        list-style: none;
        font-family: Lato;
        font-weight: 300;
        font-style: normal;
        font-size: 14px;
        color: rgb(17, 188, 198);
        letter-spacing: 0.182em;
        text-transform: uppercase;
      `}>
      <li>Home</li>
      <li>Posts</li>
      <li>About</li>
    </ul>
    <input css={`
        width: 20%;
        height: 80%;
        margin: 0.1rem;
      `} type="text" />
  </nav>
)

export default Header
