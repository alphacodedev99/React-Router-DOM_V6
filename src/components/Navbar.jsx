import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    let pathName = window.location.pathname.slice(1);
    let items = ['Products', 'About', 'Contact'];


    return (
        <div className='navbar'>
            <h2>Logo</h2>

            <div className='navbar_items'>
                {items.map((el, i) => {
                    return <Link to={`/${el.toLowerCase()}`} key={i}>{el}</Link>
                })}
            </div>
        </div>
    )
}

export default Navbar