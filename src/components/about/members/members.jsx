import "./members.css"
import member from "../../../assets/member.jpg";

export default function Members(){
  const data= [
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: member},
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: member},
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: member},
    {name: "Himanshi Sharma", position: "Advisor", uni: "Harvard University", img: member},
  ]

  return <div className="members flex-d-col flex-a-cen">
    <div className="head font-orbitron font-32 medium-bold">
      Our <span className="text-gradient font-orbitron">Members</span>
    </div>

    <div className="card-holder flex">
      {
        data.map((item, index)=>{
          return <div className="card flex-d-col flex-a-cen">
            <div className="image">
              <img src={item.img} alt="" />
            </div>

            <div className="text flex-d-col">
              <div className="name font-18">{item.name}</div>
              <div className="member-detail font-12 flex">
                <div className="position">{item.position},</div>
                <div className="uni">{item.uni}</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}