import "./footer.css";

export default function Footer(){
  return <div className="footer">
    <div className="footer-content flex">
      <div className="hr"></div>

      <div className="left flex-d-col">
        <div className="font-20 medium-bold">Transforming education, making it accessible and immersive for all.</div>
        <div className="font-14">We struggled so thought of doing something about it because why not...</div>
      </div>
      <div className="right flex">
        <div className="one flex-d-col">
          <div className="head font-24 medium-bold">Contact Us</div>
          <div className="flex-d-col contact-details">
            <div className="item">solutions@gmail.com</div>
            <div className="item">+91-8957581834</div>
          </div>
        </div>
        <div className="two flex-d-col">
          <div className="head font-24 medium-bold">Social</div>
          <div className="socials flex">
            <a href="">i</a><a href="">a</a><a href="">l</a><a href="">m</a>
          </div>
        </div>
      </div>

    </div>
    <div className="copyright flex-a-cen-j-spbet font-16">
      <div className="left">Edarma</div>
      <div className="right">Privacy Policy</div>
    </div>
  </div>
}