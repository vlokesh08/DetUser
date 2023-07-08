import React from 'react'
import image from "../images/icons8-users-100.png"
function Navigation() {
  return (
    
    <nav class="nav_bar">
        <div class="nav_div">
            <a href="/" class="nav_a">
                <img src={image} class="nav_image" alt="Flowbite Logo" />
                <span class="nav_span">DetUser</span>
            </a>
        </div>
    </nav>

  )
}

export default Navigation