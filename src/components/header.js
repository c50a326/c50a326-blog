import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { keyframes } from 'react-emotion'
import AirplaneLogo from './airplane-logo.svg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

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

      a, input, input::placeholder, faSearch {
        font-family: Lato;
        font-weight: 300;
        font-style: normal;
        font-size: 0.9rem;
        color: rgb(17, 188, 198);
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        text-decoration: none;
      }

      ul {
        -webkit-padding-start: 0;
      }

      ul>li, input {
        padding: 0.4rem 0.7rem;
        border: 0.05rem solid transparent;
        border-radius: 90rem;
      }

      ul>li:hover, input:hover {
        border: 0.05rem solid rgba(0,0,0,0.075);
        border-radius: 100em;
      }

      input:focus {
        outline: none;
      }
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

      `}>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/posts/">Posts</Link></li>
      <li><Link to="/about/">About</Link></li>
    </ul>
    <FontAwesomeIcon icon={faSearch} css={`color:rgb(17, 188, 198)`}/>
  </nav>
)

export default Header
