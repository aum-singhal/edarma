import "./experience.css";

export default function Experience(){
  return <div className="experience text-center flex-d-col">
    <div className="head font-28 medium-bold">
    See what people say about their  <span className="text-gradient">Experience</span>
    </div>

    <div className="card-holder flex-j-cen">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="more font-12 semi-bold cursor-pointer">More</div>
    </div>
  </div>
}