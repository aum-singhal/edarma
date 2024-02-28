import './kids.css';
import kid from "../../../assets/kid.jpg";

export default function Kids(){
  const data= [
    {name: "Arnav Sharma", year: 12, loc: "California", img: kid},
    {name: "Arnav Sharma", year: 12, loc: "California", img: kid},
    {name: "Arnav Sharma", year: 12, loc: "California", img: kid},
  ]

  return <div className="kids text-center flex-d-col">
    <div className="head font-32 font-orbitron">
      Witness  kids enjoying the new learning  
    </div>

    <div className="big-holder flex-d-col">
      <div className="card-holder flex-a-cen">
        {
          data.map((item, index)=>{
            return <div key={index} className="card flex-d-col flex-a-cen">
              <div className="image">
                <img src={item.img} alt="" />
              </div>

              <div className="text flex-d-col">
                <div className="font-16 medium-bold name">{item.name}</div>
                <div className="font-12 semi-bold flex about-advisor">
                  <div className="year">{item.year} yrs,</div>
                  <div className="location">{item.loc}</div>
                </div>
              </div>
            </div>
          })
        }
      </div>

      <div className="upload flex-a-cen">
        <div className="font-12">Upload more kid’s experience</div>
        <div className="upload-button font-12 semi-bold cursor-pointer">Upload</div>
      </div>
    </div>
  </div>
}