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
        position: 'absolute', left: '33.5%', top: '37.5%', fontSize: "3em", color: 'white'
        
      }}>
         A m r i t  &nbsp;    M a h e n d r a n
        </span>
        </div>
        <a href="https://www.twitter.com/amritmahendrn/">
        <FaTwitter color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '30%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }} />
          </a>
        <a href="https://www.linkedin.com/in/amritmahendran/?originalSubdomain=au">
        <FaLinkedin color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '40%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>

        </a>
        
        
        <a href="https://www.youtube.com/channel/UCISkKBVX9FYeXCm6LqdxxdQ">
        <FaYoutube color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '50%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>
        </a>
        
        <a href="https://www.github.com/amritmahendran/">
        <FaGithub color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '60%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>
          </a>
<a href="https://www.instagram.com/amrit.mahendran/">

<FaInstagram color="grey" fontSize= "2em" style={{
        position: 'absolute', left: '70%', top: '92.5%',
        transform: 'translate(-50%, -50%)'
      }}/>
</a>
       



       

        
        
        
        
    </div>
}

export default HomePage;