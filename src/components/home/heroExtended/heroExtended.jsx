import "./heroExtended.css";
import image from "../../../assets/home-extended.png";

export default function HeroExtended(){
  return <div className="hero-extended flex-a-cen-j-spbet">
    <div className="left">
      <img src={image} alt="" />
    </div>
    <div className="right text-center flex-d-col flex-a-cen">
      <div className="font-28 medium-bold font-orbitron">
        Crafting Interactive AR Books for <span className="text-gradient font-orbitron">Mordern Minds</span>
      </div>

      <div className="font-16 gray-text">
      At EdArma, we believe that education has the power to transform the way we learn. Our
 mission is to make quality learning accessible to everyone. Through the fusion of 
innovative technology and educational content, we're ushering in a new era of interactive
 and engaging learning experiences. With EdArma, you're not just reading about 
concepts you're stepping into them. Our commitment to affordability ensures that 
immersive learning is within reach for all curious minds.
      </div>
    </div>
  </div>
}