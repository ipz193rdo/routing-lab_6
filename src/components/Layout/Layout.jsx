import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'

const Layout = () => {
    const Header = styled.nav`
    height:80px;
    background:grey;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `;
  return (
    <>
    <Header><Navigation/></Header>
    <section><Outlet/></section>
    </>
  )
}

export default Layout