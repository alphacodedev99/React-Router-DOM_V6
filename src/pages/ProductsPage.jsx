import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductsPage() {
    let id = useParams();
    let navigation = useNavigate();

    console.log(id);
    return (
        <div>
            product pages

            <button onClick={() => navigation('/')}>
                home
            </button>
        </div>
    )
}

export default ProductsPage