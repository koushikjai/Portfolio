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
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>Amrita Vishwa Vidyapeetham, Chennai</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Pursuing Bachelor's degree in Computer Science Engineering with
              focus on DSA, OOP, DBMS, and Operating Systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>Defence Research and Development Organisation (DRDO)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a real-time face recognition system using Python and OpenCV
              for live CCTV monitoring. Improved detection accuracy and reduced
              false positives through iterative testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Hexagon R&D India, Hyderabad</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed scalable features in C++ across UI and backend systems.
              Optimized data handling and application logic to improve
              performance and reduce latency. Debugged complex cross-layer
              issues in Agile teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
