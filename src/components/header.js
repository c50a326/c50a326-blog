import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { keyframes } from 'react-emotion'
import AirplaneLogo from './airplane-logo.svg'

const rotate = keyframes`
  from {
    transform: translate(-10px,-10px) rotate(90deg);
  }

  15% {
    transform: translate(0px, 0px) rotate(70deg);
  }

  30% {
    transform: translate(10px, -10px) rotate(40deg);
  }

  45% {
    transform: translate(0px, 0px) rotate(70deg);
  }

  66% {
    transform: translate(-10px, -5px) rotate(90deg);
  }

  to {
    transform: translate(0px,0px) rotate(-1080deg);
  }
`

const Header = () => (
  <nav css={`
      display: flex;
      flex-flow: row wrap;
      /* background-color: rgb(0,0,0,0.2); */
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
        font-family: Lato;
        font-weight: 300;
        font-style: normal;
        font-size: 1rem;
        color: rgb(17, 188, 198);
        letter-spacing: 0.182em;
        text-transform: uppercase;
        width: 75%;
      `}>
      <li>Home</li>
      <li>Posts</li>
      <li>About</li>
    </ul>
    <input css={`
        background-color: blue;
      `} type="search" />
  </nav>
)

export default Header
