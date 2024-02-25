import Contact from "../components/common/contact/contact";
import Footer from "../components/common/footer/footer";
import Experience from "../components/home/experience/experience";
import Learning from "../components/home/learning/learning";
import Prototype from "../components/home/prototype/prototype";

export default function Home (){
    return <div className="home-page">
        <Learning />
        <Prototype />
        <Experience />
        <Contact />
        <Footer />
    </div>
}