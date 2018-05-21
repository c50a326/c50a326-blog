import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { keyframes } from 'react-emotion'
import AirplaneLogo from './airplane-logo.svg'

const rotate = keyframes`
  from {
    transform: translate(-1rem,-1rem) rotate(90deg);
  }

  15% {
    transform: translate(0rem, 0rem) rotate(70deg);
  }

  30% {
    transform: translate(1rem, -1rem) rotate(40deg);
  }

  45% {
    transform: translate(0rem, 0rem) rotate(70deg);
  }

  66% {
    transform: translate(-1rem, -0.5rem) rotate(90deg);
  }

  to {
    transform: translate(0rem,0rem) rotate(-1080deg);
  }
`

const Header = () => (
  <nav css={`
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0.1rem 1rem;
    `}>
    <AirplaneLogo css={`
        width: 2rem;
        height: 2rem;
        animation: ${rotate} 2s ease-in-out 1;
        transform-origin: 35% 15%;
      `}/>
    <ul css={`
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
        list-style: none;
        list-style-type: none;
        width: 75%;

        a {
          font-family: Lato;
          font-weight: 300;
          font-style: normal;
          font-size: 0.9rem;
          color: rgb(17, 188, 198);
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          text-decoration: none;
        }

        li {
          padding: 0.4rem 0.7rem;
          border: 0.05rem solid transparent;
          border-radius: 90rem;
        }

        li:hover {
          border: 0.05rem solid rgba(0,0,0,0.075);
          border-radius: 100em;
        }
      `}>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/posts/">Posts</Link></li>
      <li><Link to="/about/">About</Link></li>
    </ul>
    <input css={`
        background-color: blue;
      `} type="search" />
  </nav>
)

export default Header
