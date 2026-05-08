import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "AI Chatbot",
    category: "Full Stack",
    description: "A full-featured, hackable Next.js AI chatbot with modern UI and conversational capabilities",
    tools: "TypeScript, Next.js, AI/ML",
    github: "https://github.com/venkatrupesh/ai-chatbot",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
  },
  {
    name: "Chatbot",
    category: "Backend Development",
    description: "Interactive chatbot system with natural language processing capabilities",
    tools: "JavaScript, Node.js, NLP",
    github: "https://github.com/venkatrupesh/chatbot",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
  },
  {
    name: "Disease Predictor",
    category: "Machine Learning",
    description: "ML-driven health prediction system for disease diagnosis and analysis",
    tools: "Python, Machine Learning, Data Science",
    github: "https://github.com/venkatrupesh/disease-predictor",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
  },
  {
    name: "Smart Crop Advisory",
    category: "Agriculture Tech",
    description: "Intelligent crop recommendation system useful for farmers to optimize yields",
    tools: "HTML, JavaScript, Data Analytics",
    github: "https://github.com/venkatrupesh/smart-crop-advisiory",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
  },
  {
    name: "Soil Predictor",
    category: "Agriculture Tech",
    description: "Soil analysis and prediction tool designed to help farmers make informed decisions",
    tools: "Python, Data Science",
    github: "https://github.com/venkatrupesh/soil-predictor",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop"
  },
  {
    name: "Smart Classroom Note Generator",
    category: "Education Tech",
    description: "Automated note generation system for smart classrooms and educational environments",
    tools: "HTML, JavaScript, AI",
    github: "https://github.com/venkatrupesh/smart-classroom-note-generator",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-main-title">
          My <span>Work</span>
        </h2>
        <p className="work-subtitle">Explore my latest projects showcasing backend development, AI/ML integration, and full-stack solutions</p>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-card">
                <div className="work-card-number">0{index + 1}</div>
                <div className="work-image-wrapper">
                  <WorkImage image={project.image} alt={project.name} />
                  <div className="work-overlay"></div>
                </div>
                <div className="work-info">
                  <div className="work-header">
                    <div>
                      <h3>{project.name}</h3>
                      <p className="work-category">{project.category}</p>
                    </div>
                  </div>
                  <p className="work-description">{project.description}</p>
                  <div className="work-tech">
                    <h4>Technologies</h4>
                    <p>{project.tools}</p>
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="work-github-link"
                    data-cursor="disable"
                  >
                    <FaGithub /> View on GitHub <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
