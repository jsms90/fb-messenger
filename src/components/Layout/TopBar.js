import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'
import { withRouter } from 'react-router-dom'
import { logOut, getSession } from '../../auth'
import colours from '../../styles/export/colours.css'

const TopBarWrapper = styled.div`
  background: ${colours.darkBlue};
  padding: 1em;
  text-align: center;
  border-bottom: 1px solid #29487d;
  color: ${colours.white};
`

const StyledList = styled.ul`
  list-style: none;
  position: absolute;
  top: 20px;
  display: block;
  ${props => props.userPosition==="right" ? "right: 20px;" : "left: 20px;"}
`

const StyledListItem = styled.li`
  display: inline-block;
  padding-right: 8px;
  padding-left: 8px;
    &: last-child {
    padding-right: 0;
  }
    &: first-child {
    padding-left: 0;
  }
`

const WhiteLink = styled(Link)`
  color: ${colours.white};
  
  > .icon {
    color: ${colours.white};
  }
`

const StyledImage = styled.img`
  border-radius: 50%;
  height: 50px;
  height: 30px;
  margin-top: -5px;
`

const TopBar = ({userPosition}) => {
  const session = getSession()

  return (
    <TopBarWrapper>
      <WhiteLink to="/messages"><i className="icon fab fa-facebook-messenger" /></WhiteLink>
      <StyledList userPosition={userPosition}>
        <StyledListItem>
          <WhiteLink to="/login" onClick={logOut}>log out</WhiteLink>
        </StyledListItem>
        <StyledListItem>
          <WhiteLink to="/profile">
            {session ? session.username : ''} <StyledImage src="/images/default.jpg" />
          </WhiteLink>
        </StyledListItem>
      </StyledList>
    </TopBarWrapper>
  )
}

export default withRouter(TopBar)
