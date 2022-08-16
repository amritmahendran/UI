import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaGithub, FaTwitter, FaMailBulk, FaMap, FaMapMarker, FaMapSigns, FaChevronUp } from "react-icons/fa";
import '../index.css';

const style = { color: "black", fontSize: "2em"}

function LandingFrame() {
    const style = {
        "background-image": `url("images/landing_page.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}></div>
}




function HomePage() {

    return <div>
        
      
        <LandingFrame></LandingFrame>
        <div>
        <span className="font-link"  style={{
        position: 'absolute', left: '37.5%', top: '7.5%', fontSize: "3em", color: 'white'
        
      }}>
         Amrit Mahendran
        </span>
        </div>
        <FaTwitter color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '30%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }} />
        <a href="https://www.linkedin.com/in/amritmahendran/?originalSubdomain=au">
        <FaLinkedin color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '40%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>

        </a>
        
        
        <a href="https://www.youtube.com/channel/UCbHXiF07W3OWygOZuRaDxwg">
        <FaYoutube color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '50%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>
        </a>
        
        <FaGithub color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '60%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>
<a href="https://www.instagram.com/amrit.mahendran/">

<FaInstagram color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '70%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>
</a>
       



       

        
        
        
        
    </div>
}

export default HomePage;