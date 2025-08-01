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
                <h4>SDE-1 Frontend Developer</h4>
                <h5>Axelor</h5>
              </div>
              <h3>02/2023 - Present</h3>
            </div>
            <p>
              <ul>
                <li>
                  Developed Axelor Designer, the flagship low-code workflow automation product, leveraging React DnD-Kit to cut ERP module development time by 70% for 500+ enterprise users.
                </li>
                <li>
                  Designed the Axi AI interface in Next.js and built AI-driven workflow automation tools, reducing ERP module design time by 70-80%.
                </li>
                <li>
                  Created a self-serve permission management tool with React & Redux, reducing admin workload by 70%.
                </li>
                <li>
                  Led the migration of a 50K+ LOC frontend codebase from JavaScript to TypeScript, cutting errors by 60% and speeding up releases 20%.
                </li>
                <li>
                  Contributed to the Axelor UI component library with Storybook & Tailwind, replacing Material UI with a custom library, reducing bundle size by 20% and improving reusability across teams.
                </li>
                <li>
                  Refactored Redux state management, cutting re-renders by 25% and boosting API efficiency by 25% through backend collaboration.
                </li>
                <li>
                  Enhanced frontend performance by 35% using React Suspense, lazy loading, and Webpack optimizations, reducing page load times.
                </li>
                <li>
                  Optimized API interactions, reducing over-fetching by 50% and improving frontend-backend collaboration.
                </li>
                <li>
                  Conducted R&D on a BPMN merge-split tool, leveraging Camunda.js and BPMN.js in collaboration with the backend team.
                </li>
                <li>
                  Mentored 5+ junior developers, led code reviews, and promoted best practices for scalability & performance.
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
                  Developed Java-based android apps and assisted senior developers. Followed development standards and best practices.
                </li>
                <li>
                  Worked with Firebase, REST API, SQL, Maps API, Payment Gateways, Git, Figma, and MVC architecture.
                </li>
                <li>
                  Led a team, gaining experience in team management, code maintenance, debugging, and deployment.
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
