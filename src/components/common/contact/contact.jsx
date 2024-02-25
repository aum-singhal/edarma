import "./contact.css";

export default function Contact(){
  return <div className="contact flex">
    <div className="left flex-d-col">
      <div className="font-40">
        Welcome to the future of  <br />
         <span className="text-gradient bold">learning with EdArma!</span>
      </div>
      <div className="font-14">Join us on this exciting journey as we reshape education, one augmented page at a time.</div>
      <img src="" alt="" />
    </div>
    <div className="right">
      <form autoComplete={true} className="flex-d-col flex-a-cen-j-cen" action="" method="post">
        <div className="font-20 medium-bold">Connect with Us</div>

        <div className="item name-group flex">
          <input placeholder="First Name" type="text" name="fname" id="fname" />
          <input placeholder="First Name" type="text" name="lname" id="lname" />
        </div>
        <div className="item"><input type="email" placeholder="Email" name="email" id="email" /></div>
        <div className="item"><input type="text" placeholder="Phone Number" name="phone" id="phone" /></div>
        <button type="submit font-16 semi-bold">Book</button>
      </form>
    </div>
  </div>
}