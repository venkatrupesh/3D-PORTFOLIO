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
                <h4>Aspiring Backend Engineer</h4>
                <h5>Self-Learning & Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started my journey in backend development, focusing on building scalable applications with clean architecture. Developed multiple projects including chatbot systems, disease predictors, and agriculture tech solutions using Python, Node.js, and modern databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Development Focus</h4>
                <h5>Personal Projects & Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Deepened expertise in RESTful APIs, data pipelines, and server-side logic. Passionate about identifying and fixing backend bugs to ensure robust system performance. Integrated machine learning models with backend systems and explored AI chatbot integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack & Backend Engineer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech and actively seeking opportunities to contribute as a backend engineer. Passionate about creating scalable, maintainable applications and solving complex backend challenges. Continuously exploring new technologies and best practices in API design, databases, and system architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
