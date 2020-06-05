import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayCard from "./GameInfo";





function ApiDisplayCall() {    

    const [CardInfo, setInfo] = useState([]);	
    let { id } = useParams();
    const apiUrl = "https://api.rawg.io/api/games/"+id;

        useEffect(() => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(json => {
                    setInfo(json)
                    console.log(json)
                    })
                .catch(error => console.log(error))			
        }, [apiUrl]);
      
      return (             
        <DisplayCard   name = {CardInfo.name} image = {CardInfo.background_image} description={CardInfo.description} link={CardInfo.website} />  
       
    );
 
    
    


        
}
export default ApiDisplayCall;

