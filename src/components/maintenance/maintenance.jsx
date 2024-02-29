import "./maintenance.css";
import male from "../../assets/male.png";

export default function Maintenance(){
  return <div className="maintenance text-center flex">
    <div className="big-container flex">
      <div className="image">
        <img src={male} alt="" />
      </div>
      <div className="container flex-d-col">
        <div className="top flex-d-col">
          <div className="sorry extra-bold">Sorry!</div>
          <div className="font-24 medium-bold">Our website is under maintenance</div>
          <div className="font-16 medium-bold gray-text">
            We are preparing something amazing and exciting for you . Till the
            <br /> maintenance is over you may access our apps on Playstore.  
          </div>
        </div>

        <div className="flex-j-cen button-holder">
          <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.ARMA" className="button">
            ARMA  
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.RABEDANSH.HeartAR" className="button">
            Heart AR
          </a>
        </div>

        <div className="bottom flex-d-col">
          <div className="font-12 medium-bold">
            To See our AR animations please refer to this link for scanning the images via our app.
          </div>
          <a href="https://drive.google.com/drive/folders/1tUICgmU6Np_DPOrl-K700Xyh8ivRLinU?usp=sharing" className="font-12 medium-bold">
          https://drive.google.com/drive/folders/1tUICgmU6Np_DPOrl-K700Xyh8ivRLinU?usp=sharing
          </a>
        </div>
      </div>
    </div>
  </div>
}