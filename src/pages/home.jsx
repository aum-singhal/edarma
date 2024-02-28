import Contact from "../components/common/contact/contact";
import Footer from "../components/common/footer/footer";
import Experience from "../components/home/experience/experience";
import HeroSection from "../components/home/hero/hero";
import HeroExtended from "../components/home/heroExtended/heroExtended";
import Learning from "../components/home/learning/learning";
import Prototype from "../components/home/prototype/prototype";

export default function Home (){
    return <div className="home-page">
        <HeroSection />
        <HeroExtended />
        <Learning />
        <Prototype />
        <Experience />
        <Contact />
        <Footer />
    </div>
}