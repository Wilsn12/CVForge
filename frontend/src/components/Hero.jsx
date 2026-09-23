import { Sparkles, ArrowRight } from "lucide-react";

function Hero({ onCreate }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={14} />
          ATS-Friendly • 100% Free
        </div>

        <h1>
          Create a <span>Standout CV</span>
          <br />
          in Minutes.
        </h1>

        <p className="hero-description">
          Build a professional CV with ATS or modern visual templates.
          Fill in your details, customize, and download your CV for free.
        </p>

        <div className="hero-actions">
          <button
            className="hero-primary-button"
            onClick={() => onCreate()}
          >
            Create My CV
            <ArrowRight size={17} />
          </button>

          <a href="#templates" className="hero-secondary-button">
            View Templates
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="fake-cv">
            <div className="fake-cv-header">
              <div>
                <div className="fake-cv-name">JOHN ANDERSON</div>
                <div className="fake-cv-role">Frontend Developer</div>
              </div>

              <div className="fake-cv-photo"></div>
            </div>

            <div className="fake-cv-line"></div>

            <div className="fake-cv-section">
              <div className="fake-cv-section-title">
                PROFESSIONAL SUMMARY
              </div>
              <p>
                Information Systems student with experience in frontend
                development, UI/UX design and web application development.
              </p>
            </div>

            <div className="fake-cv-section">
              <div className="fake-cv-section-title">EXPERIENCE</div>
              <h4>Frontend Developer</h4>
              <p>
                Developed responsive web interfaces using React, JavaScript
                and modern CSS.
              </p>
            </div>

            <div className="fake-cv-section">
              <div className="fake-cv-section-title">EDUCATION</div>
              <h4>Tarumanagara University</h4>
              <p>Information Systems • 2023 - Present</p>
            </div>

            <div className="fake-cv-section">
              <div className="fake-cv-section-title">SKILLS</div>
              <p>React • JavaScript • Java • SQL • UI/UX • Git</p>
            </div>
          </div>
        </div>

        <div className="ats-score">
          <div className="ats-score-label">ATS Score</div>
          <div className="ats-score-value">95/100</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;