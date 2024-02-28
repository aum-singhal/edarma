import Contact from "../components/common/contact/contact";
import Footer from "../components/common/footer/footer";
import Kids from "../components/video/kids/kids";
import Parents from "../components/video/parents/parents";
import Testimonials from "../components/video/testimonials/testimonials";

export default function Videos(){
    return <div className="videos-page">
        <Kids />
        <Parents />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
}