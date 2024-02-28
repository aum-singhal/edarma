import './testimonials.css';
import testimonial from "../../../assets/testimonial.png";

export default function Testimonials(){
  return <div className="testimonials flex-d-col">
    <div className="font-32 medium-bold head font-orbitron">Testimonials</div>

    <div className="content flex-a-cen-j-spbet">
      <div className="left">
        <img src={testimonial} alt="" />
      </div>
      <div className="right">
        <div className="slider-holder">
          <div className="card-holder flex">
            
          </div>
        </div>
      </div>
    </div>
  </div>
}