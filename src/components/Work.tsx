import "./styles/Work.css";
// import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLink } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Potoba POS",
    description:
      "A powerful and intuitive Point of Sale (POS) system designed for small and medium-sized businesses. Features include inventory management, billing, reporting, and user authentication.",
    githubLink: "https://github.com/yourusername/potoba-pos",
    url: "https://potoba-pos.example.com",
    image: "https://example.com/images/potoba-pos.png",
    category: "Retail & POS",
    skills: [
      "React Native",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "UI Kitten",
      "Expo",
    ],
  },
  {
    name: "Axi AI BPMN Generator",
    description:
      "An AI-powered tool that automatically generates BPMN processes and models by integrating OpenAI and Gemini APIs, improving workflow automation and efficiency.",
    githubLink: "https://github.com/yourusername/axi-ai-bpmn",
    url: "https://axi-ai.example.com",
    image: "https://example.com/images/axi-ai.png",
    category: "AI & Automation",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "BPMN.js",
      "OpenAI API",
      "Gemini API",
    ],
  },
  // {
  //   name: "BuildMart360",
  //   description:
  //     "An e-commerce platform for construction materials, enabling businesses to browse, compare, and purchase materials with an integrated quotation system.",
  //   githubLink: "https://github.com/yourusername/buildmart360",
  //   url: "https://buildmart360.example.com",
  //   image: "https://example.com/images/buildmart360.png",
  //   category: "E-commerce",
  //   skills: [
  //     "React Native",
  //     "Firebase",
  //     "Expo",
  //     "Redux",
  //     "UI Kitten",
  //     "Stripe API",
  //   ],
  // },
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
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map(
            (
              { name, description, githubLink, url, category, skills },
              index
            ) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{name}</h4>
                      <p>{category}</p>
                    </div>
                  </div>

                  <p className="work-description">{description}</p>

                  <h4>Tools & Features</h4>
                  <ul className="work-skills">
                    {skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>

                  <div className="work-links">
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      <FaLink /> Live Demo
                    </a>
                  </div>
                </div>

                {/* <WorkImage image={image} alt={name} /> */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
