import "./aboutus.css"
import about from "../../../assets/about.jpg";

export default function AboutUsSection(){
  return <div className="about-us flex-a-cen-j-spbet">
    <div className="left flex-d-col">
      <div className="font-32 medium-bold font-orbitron">About Us</div>
      <div className="font-24 text-gradient">Crafting Interactive AR Books for Modern Minds</div>
      <div className="font-14 gray-text">
      At EdArma, we believe that education has the power to transform the way we learn. Our 
mission is to make quality learning accessible to everyone. Through the fusion of 
innovative technology and educational content, we're ushering in a new era of 
interactive and engaging learning experiences. With EdArma, you're not just reading 
about concepts – you're stepping into them. Our commitment to affordability ensures 
that immersive learning is within reach for all curious minds.
      </div>
    </div>
    <div className="right">
      <div className="image">
        <img src={about} alt="" />
      </div>
    </div>
  </div>
}