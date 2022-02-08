import React, { useContext } from "react"
import styled from "@emotion/styled"
import Linux from "../images/platforms/linux.png"
import RPI from "../images/platforms/rpi.jpg"
import Docker from "../images/platforms/docker.png"
import Avado from "../images/platforms/avado.png"
import DAppNode from "../images/platforms/dappnode.png"
import {
  NavItemsContext,
  NavItemDescription
} from "gatsby-theme-apollo-docs"
import { colors } from "@apollo/space-kit/colors"
import { size } from "polished"
import { MenuWrapper, MenuItem } from "./menu"

function getBoxShadow (opacity, y, blur) {
  return `rgba(18, 21, 26, ${ opacity }) 0 ${ y }px ${ blur }px`
}

const { indigo } = colors
const AppIcon = styled.div({
  ...size("100%"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // padding: "2px",
  color: indigo.lighter
})

const StyledLink = styled.a({
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline"
  }
})

const icons = {
  docker: Docker,
  rpi: RPI,
  linux: Linux,
  avado: Avado,
  dappnode: DAppNode
}

export default function SubPagesMenu ({ items }) {
  return (
    <MenuWrapper>
      { items.map((item, index) => (
        <MenuItem
          key={ item.url }
          icon={ (
            <AppIcon>
              <img alt={ item.title } src={ icons[item.icon] } />
            </AppIcon>
          ) }
          title={ (
            <StyledLink href={ item.url }>
              { item.title }
            </StyledLink>
          ) }
        >
          <NavItemDescription>{ item.description }</NavItemDescription>
        </MenuItem>
      )) }
    </MenuWrapper>
  )
}
