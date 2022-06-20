import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />


      <SubNavbar />

      <ProductGrid 
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemToCart={props.handleRemoveItemToCart}
      />

      <Footer/>

    </div>
  )
}