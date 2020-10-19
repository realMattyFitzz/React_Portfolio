import React from 'react';
import BSCarousel from './Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Project = ({ stuff }) => {
    return (
        <div>
            <h3>Projects</h3>
            <div>
           <BSCarousel />
            </div>
        </div>
    )
}

export default Project