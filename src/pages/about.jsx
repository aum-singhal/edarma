import AboutUsSection from "../components/about/aboutus/aboutus";
import Advisors from "../components/about/advisors/advisors";
import Members from "../components/about/members/members";
import Contact from "../components/common/contact/contact";
import Footer from "../components/common/footer/footer";

export default function AboutUs (){
    return <div className="about-page">
        <AboutUsSection />
        <Advisors />
        <Members />
        <Contact />
        <Footer />
    </div>
}