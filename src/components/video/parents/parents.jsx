import './parents.css';
import parent1 from "../../../assets/parent1.png";
import parent2 from "../../../assets/parent2.png";

export default function Parents(){
  const data= [
    {name: "Aarnav Sharma", loc: "california", img: parent1 },
    {name: "Aarnav Sharma", loc: "california", img: parent2 },
    {name: "Aarnav Sharma", loc: "california", img: parent1 },
    {name: "Aarnav Sharma", loc: "california", img: parent2 },
    {name: "Aarnav Sharma", loc: "california", img: parent1 },
    {name: "Aarnav Sharma", loc: "california", img: parent2 },
  ]
  return <div className="parents text-center flex-d-col flex-a-cen">
    <div className="font-32 head font-orbitron">
      Hear what Parents are saying
    </div>

    <div className="card-holder flex">
      {
        data.map((item, index)=>{
          return <div key={index} className="card">
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="text">
              <div className="name font-16 medium-bold">{item.name}</div>
              <div className="location font-12 medium-bold">{item.loc}</div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}