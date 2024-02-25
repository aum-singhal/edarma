import "./prototype.css";

export default function Prototype(){
  return <div className="prototype text-center flex-d-col">
    <div className="head font-28 medium-bold">
      Our <span className="text-gradient">Prototypes</span> are Ready!
    </div>

    <div className="card-holder flex-d-col">
      <div className="card flex">
        <div className="left">
          <div className="font-24 medium-bold">Rocket Simulation</div>
          <div className="font-16">At EdArma, we believe that education has the power to transform the way we learn. Our
          mission is to make quality learning accessible to everyone. Through the fusion of 
          innovative technology and educational content, we're ushering in a new era of interactive
          and engaging learning experiences. With EdArma, you're not just reading about 
          concepts you're stepping into them. Our commitment to affordability ensures that 
          immersive learning is within reach for all curious minds.</div>
        </div>
        <div className="right">
          <img src="" alt="" />
        </div>
      </div>

      <div className="card flex">
        <div className="right">
          <img src="" alt="" />
        </div>
        <div className="left">
          <div className="font-24 medium-bold">Human Heart Visualisation</div>
          <div className="font-16">
          Understanding the complexities of the human heart can be challenging through 
traditional methods. Our prototype uses augmented reality to provide an unparalleled
 insight into how the human heart functions. Learners can explore a detailed 3D 
representation of the heart, witness the flow of blood through its chambers, and even 
witness real-time simulations of heartbeat variations
          </div>
        </div>
      </div>
    </div>
  </div>
}