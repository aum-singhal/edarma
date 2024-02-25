import "./learning.css";

export default function Learning (){
    const data = [
        {title: "Accessibility for All", desc: "Driven by the belief that quality education should be accessible to everyone, regardless of their background, we offer content in multiple languages, ensuring affordability, and providing opportunities for learners from all walks of life."},
        {title: "Tackling Learning Barriers", desc: "Many students struggle with traditional learning methods that can be dry and abstract. We aim to break down these barriers by bridging the  gap between theoretical concepts and real- world applications, making learning more  engaging."},
        {title: "Innovation in Learning", desc: "Aligning with the evolving needs of a digital-savvy generation that seeks more dynamic and engaging learning experiences, let's see a world where learners can step into the subjects  they're studying, making learning an adventure rather than a chore."},
    ]

    return <div className="learning text-center flex-d-col">
        <div className="head flex-d-col">
            <div className="font-28 medium-bold">Be a part of Revolutionized </div>
            <div className="font-28 medium-bold text-gradient">Learning</div>
        </div>

        <div className="card-holder flex-j-cen">
            {
                data.map((item, index)=>{
                    return <div key={index} className="card flex-d-col text-center">
                        <div className="font-24 medium-bold">{item.title}</div>
                        <img src={item.img} alt="" />
                        <div className="font-14 medium-bold">{item.desc}</div>
                    </div>
                })
            }
        </div>
    </div>
}