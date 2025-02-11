import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE-1 (Fronend)</h4>
                <h5>Axelor</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              <ul>
                <li>
                  Contributed to the development of a cutting-edge designer tool
                  for the French Ministry of Defence, optimizing the creation of
                  low-code ERP modules for complex operations, enhancing
                  workflow efficiency by 40%.
                </li>
                <li>
                  Proposed and developed the Axi AI tool to automatically
                  generate models and BPMN processes by integrating OpenAI and
                  Gemini APIs, saving 30+ hours weekly and increasing
                  productivity by 40%. Recognized by top leadership for
                  innovative contributions.
                </li>
                <li>
                  Created and optimized RESTful services in Node.js, integrating
                  them with the frontend, achieving a 30% reduction in server
                  response time.
                </li>
                <li>
                  Designed and implemented a standalone permission management
                  tool, increasing role management speed by 70%.
                </li>
                <li>
                  Led the R&D and development of a BPMN merge-split tool,
                  enhancing usability with seamless splitting and merging
                  capabilities.
                </li>
                <li>
                  Migrated JavaScript to TypeScript, integrating Axelor UI and
                  resulting in 25% faster development cycles.
                </li>
                <li>
                  Optimized code to reduce page load times by 20% through custom
                  UI components, improving overall user experience.
                </li>
                <li>
                  Engaged in debugging and implementing new features, which led
                  to a 15% increase in application stability and user
                  satisfaction.
                </li>
                <li>
                  Provided technical support, conducted code reviews for
                  interns, and fostered team skill growth through mentorship and
                  knowledge sharing.
                </li>
              </ul>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer Intern</h4>
                <h5>SlinkUp(Wedmist)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              <ul>
                <li>
                  {" "}
                  Developed Java-based android apps and assisted senior
                  developers. Followed development standards and best practices.
                </li>
                <li>
                  Worked with Firebase, REST API, SQL, Maps API, Payment
                  Gateways, Git, Figma, and MVC architecture.
                </li>
                <li>
                  Led a team, gaining experience in team management, code
                  maintenance, debugging, and deployment
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
