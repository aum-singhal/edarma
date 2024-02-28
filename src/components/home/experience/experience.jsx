import "./experience.css";
import kid from "../../../assets/kid.jpg";
import { useActionData, useNavigate } from "react-router-dom";

export default function Experience(){
  const nav = useNavigate();

  return <div className="experience text-center flex-d-col">
    <div className="head font-28 medium-bold font-orbitron">
    See what people say about their  <span className="text-gradient font-orbitron">Experience</span>
    </div>

    <div className="card-holder flex-j-cen">
      <div className="card"><img src={kid} alt="" /></div>
      <div className="card"><img src={kid} alt="" /></div>
      <div className="card"><img src={kid} alt="" /></div>
      <div onClick={()=>{nav("/video")}} className="more font-12 semi-bold cursor-pointer">More</div>
    </div>
  </div>
}