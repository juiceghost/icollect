import React, { Component } from "react";
import klocka2 from './klocka2.jpg'
class About extends Component {

    render () {       
        let name1="iCollect" ;
       
        return (
            <div className="information">
          <div className="info">         
       <div className="info"><img src ={klocka2}className="app-klocka2"alt="klocka2"/><article><h3>{name1}</h3>
       <p>Do you have a collection of something you love. Then iCollect is the best program for you. Here you can organize your collection in a gallery of pictures and information. You check all the information you want to add. Want to share an open gallery of like-minded people? No problem, then you can have a public gallery and invite people to it
Do you think that sounds good !? <br /><b> Contact us and let us tell you more.</b></p></article> </div>
  
         
        </div></div>
        );
          
     
          
    }

}
export default About