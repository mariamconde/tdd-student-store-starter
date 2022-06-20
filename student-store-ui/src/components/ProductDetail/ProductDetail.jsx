import * as React from "react"

import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";

export default function ProductDetail(props) {
    
    const [product, setProduct] = useState()

    let { productId } = useParams();

    return (
        <div className="product-detail">
        <h1>
            Product Details Page 
            Product ID: {productId}
        </h1>
        </div>
    )
} 