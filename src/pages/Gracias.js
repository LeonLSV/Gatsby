import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function Gracias() {
  return (
    <div>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>Espero disfrutes</p>
        <p>Te esperamos de vuelta</p>
        <span role="img" aria-label="emoji">
          🛹
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
