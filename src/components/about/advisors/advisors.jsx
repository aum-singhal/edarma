import "./advisors.css"
import one from "../../../assets/advisor/one.jpg";
import two from "../../../assets/advisor/two.jpg";
import three from "../../../assets/parent2.png";

export default function Advisors(){
  const data= [
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: one},
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: two},
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: three},
  ]

  return <div className="advisors text-center flex-d-col flex-a-cen">
    <div className="head font-orbitron font-32 medium-bold">
    Our Visionary <span className="text-gradient font-orbitron">Advisors</span>
    </div>

    <div className="card-holder flex">
      {
        data.map((item, index)=>{
          return <div key={index} className="card flex-d-col">
            <div className="image">
              <img src={item.img} alt="" />
            </div>

            <div className="text flex-d-col flex-a-cen text-center">
              <div className="font-16 medium-bold name">{item.name}</div>
              <div className="font-14 flex about-advisor">
                <div className="position">{item.position},</div>
                <div className="uni medium-bold">{item.uni}</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}