import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        con amor
        {` `}
        <a href="https://www.leonsonidovirtual.com">LSV</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
