import React from 'react';
import "../styles/FavouriteSite.css"

function FavouriteSite()
{
    return(

        <section>
            <h2>Favourite Sites</h2>
            <nav className='FavouriteSite'>
                <ul>
                    <li><a href="">Google</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Youtube</a></li>
                </ul>
            </nav>
        </section>

    )
}
export default FavouriteSite;