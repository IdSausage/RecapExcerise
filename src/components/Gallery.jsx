import React from "react";
import '../styles/Gallery.css'

function Gallery()
{
    return(
        <section>
            <h2>Gallery</h2>
            <ul>
                <li><img width={200} src="assets\pic1.png" alt="sky" /></li>
                <li><img width={200} src="assets\pic1.png" alt="sky" /></li>
                <li><img width={200} src="assets\pic1.png" alt="sky" /></li>
            </ul>
        </section>
    )
}
export default Gallery