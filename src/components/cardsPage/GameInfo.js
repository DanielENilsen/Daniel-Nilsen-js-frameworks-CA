import React from "react";





function DisplayCard  ({name, image, description,link}) { 
    return (
        <div className = "cardGameDisplay">
                <h1>{name}</h1>
                <img src={image} />
                <div className = "description">{description}</div>
                <button><a href={link}>Link to website</a></button>
        </div>        
    );
}

export default DisplayCard;