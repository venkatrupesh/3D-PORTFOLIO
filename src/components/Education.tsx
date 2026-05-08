import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>Kalasalingam Academy of Research and Education</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Currently pursuing B.Tech with a focus on Computer Science and Engineering. 
              Actively engaged in building real-world projects, exploring backend technologies, 
              and applying machine learning concepts to solve practical problems.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Intermediate / Higher Secondary</h4>
                <h5>Narayana Junior College, Kadapa, Andhra Pradesh</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed intermediate education with a strong foundation in mathematics and sciences, 
              which sparked interest in technology and software development.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>10th Standard (SSC)</h4>
                <h5>Sri Chaitanya Techno School, Kadapa</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p>
              Completed secondary education with strong academic performance, building a solid 
              foundation in core subjects and developing an early interest in problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
