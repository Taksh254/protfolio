import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>IILM University, Greater Noida</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Currently in the 2nd year of Computer Science Engineering, focusing 
              on AI, full-stack development, and 3D web technologies. Maintaining 
              a strong academic record while building real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Innopire Hackathon</h4>
                <h5>Winner · Noida</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Won the Innopire Hackathon for developing an AI-powered educational 
              platform designed to personalize learning experiences for students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Projects</h4>
                <h5>Self-Initiated</h5>
              </div>
              <h3>Continuous</h3>
            </div>
            <p>
              Developed and deployed multiple AI-driven projects including 
              Tatvam (Spiritual AI) and Edith (Personal Assistant), exploring 
              the intersection of LLMs and interactive 3D interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
