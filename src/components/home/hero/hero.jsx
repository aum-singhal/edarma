import "./hero.css";
import home from "../../../assets/home.png";

export default function HeroSection(){
  return <div className="hero-section flex">
    <div className="left flex-d-col flex-j-cen">
      <div className="title flex-d-col">
        <div className="head font-40 font-orbitron">
        Empowering Accessible  <span className="text-gradient bold font-orbitron">Immersive Learning</span>
        </div>
        <div className="sub-head font-14">
        Breaking barriers, EdArma brings immersive education to all, transcending limitations.
        </div>
      </div>

      <div className="download flex-d-col">
        <div className="font-16 medium-bold">Download</div>

        <div className="flex">
          
        </div>
      </div>
    </div>
    <div className="right">
      <img src={home} width={"100%"} alt="" />
    </div>  
  </div>
}