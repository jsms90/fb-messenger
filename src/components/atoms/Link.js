import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colours from '../../styles/export/colours.css'

const StyledLink = styled(Link)`
  color: ${colours.lightBlue};
  cursor: pointer;

  > .icon {
    color: ${colours.lightBlue};
    cursor: pointer;
  }
`

export default StyledLink