import "./styles/Work.css";
// import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLink } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "RentVastu – PG Management Platform (PWA)",
    description:
      "A SaaS platform to manage PG's and rented properties. Developed a mobile-first PG management PWA using Next.js and Firebase for seamless tenant/landlord interaction. Streamlined rent, bill, and invoice tracking with dynamic Firestore schema and modular design. Onboarded 3 paying clients via Razorpay-integrated SaaS subscription model.",
    githubLink: "https://github.com/Prathamesh-Kulkarni01/rentvastu",
    url: "https://rentvastu.example.com",
    image: "https://example.com/images/rentvastu.png",
    category: "SaaS & Property Management",
    skills: [
      "Next.js",
      "Firebase",
      "Firestore",
      "PWA",
      "Razorpay",
      "TypeScript",
    ],
  },
  {
    name: "Potoba POS – Restaurant POS System",
    description:
      "A full-stack, offline-capable POS platform powering real-time restaurant operations, adopted by 15+ cafés across Bengaluru and Maharashtra. Launched an end-to-end ordering system with QR-based digital menus, real-time KOT/KDS workflows, and bill generation. Streamlined order coordination with real-time notifications and table session tracking.",
    githubLink: "https://github.com/Prathamesh-Kulkarni01/potoba-pos",
    url: "https://potoba-pos.example.com",
    image: "https://example.com/images/potoba-pos.png",
    category: "Retail & POS",
    skills: [
      "React Native",
      "Node.js",
      "Firebase",
      "QR Code",
      "Real-time",
      "Offline-capable",
    ],
  },
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
