import { FileText, Palette, Check, ArrowRight } from "lucide-react";

function Templates({ onCreate }) {
  return (
    <section className="templates-section" id="templates">
      <div className="section-heading">
        <span className="section-label">CV TEMPLATES</span>

        <h2>
          Choose the <span>right style</span> for you.
        </h2>

        <p>
          Start with a professionally designed template and customize it
          with your own information.
        </p>
      </div>

      <div className="template-grid">

        <div className="template-card">
          <div className="template-preview ats-preview">

            <div className="ats-document">
              <div className="ats-name">
                JOHN ANDERSON
              </div>

              <div className="ats-contact">
                john@email.com · +62 812 3456 7890 · Jakarta, Indonesia
              </div>

              <div className="ats-line"></div>

              <div className="ats-section">
                <h4>PROFESSIONAL SUMMARY</h4>
                <p>
                  Information Systems student with experience in
                  web development, UI/UX design and project management.
                </p>
              </div>

              <div className="ats-section">
                <h4>EXPERIENCE</h4>

                <div className="ats-row">
                  <strong>Frontend Developer</strong>
                  <span>2025 - Present</span>
                </div>

                <p>
                  Developed responsive web interfaces using React,
                  JavaScript and modern CSS.
                </p>
              </div>

              <div className="ats-section">
                <h4>EDUCATION</h4>

                <div className="ats-row">
                  <strong>Tarumanagara University</strong>
                  <span>2023 - Present</span>
                </div>
              </div>

              <div className="ats-section">
                <h4>SKILLS</h4>
                <p>
                  React · JavaScript · Java · SQL · UI/UX · Git
                </p>
              </div>
            </div>

          </div>

          <div className="template-info">
            <div className="template-title">
              <div className="template-icon">
                <FileText size={20} />
              </div>

              <div>
                <h3>ATS Professional</h3>
                <span>Best for corporate applications</span>
              </div>
            </div>

            <ul>
              <li>
                <Check size={16} />
                ATS-friendly structure
              </li>

              <li>
                <Check size={16} />
                Clean & professional layout
              </li>

              <li>
                <Check size={16} />
                No unnecessary graphics
              </li>
            </ul>

            <button
              className="template-button"
              onClick={() => onCreate("ats")}
            >
              Use this template
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="template-card modern-card">
          <div className="template-preview modern-preview">

            <div className="modern-document">

              <div className="modern-sidebar">

                <div className="profile-placeholder">
                  JA
                </div>

                <h4>JOHN</h4>
                <h4>ANDERSON</h4>

                <span className="modern-role">
                  UI/UX Designer
                </span>

                <div className="modern-side-section">
                  <small>CONTACT</small>
                  <p>john@email.com</p>
                  <p>+62 812 3456</p>
                  <p>Jakarta, Indonesia</p>
                </div>

                <div className="modern-side-section">
                  <small>SKILLS</small>
                  <p>UI/UX Design</p>
                  <p>Figma</p>
                  <p>React</p>
                  <p>Prototyping</p>
                </div>

              </div>

              <div className="modern-content">

                <div className="modern-content-section">
                  <h4>PROFILE</h4>

                  <p>
                    Creative designer focused on creating
                    intuitive and engaging digital experiences.
                  </p>
                </div>

                <div className="modern-content-section">
                  <h4>EXPERIENCE</h4>

                  <strong>UI/UX Designer</strong>
                  <span>2025 — Present</span>

                  <p>
                    Designed interfaces and prototypes for
                    web and mobile applications.
                  </p>
                </div>

                <div className="modern-content-section">
                  <h4>EDUCATION</h4>

                  <strong>Tarumanagara University</strong>
                  <span>2023 — Present</span>
                </div>

              </div>

            </div>

          </div>

          <div className="template-info">
            <div className="template-title">
              <div className="template-icon modern-icon">
                <Palette size={20} />
              </div>

              <div>
                <h3>Modern Creative</h3>
                <span>Best for creative professionals</span>
              </div>
            </div>

            <ul>
              <li>
                <Check size={16} />
                Modern visual design
              </li>

              <li>
                <Check size={16} />
                Two-column layout
              </li>

              <li>
                <Check size={16} />
                Profile photo support
              </li>
            </ul>

            <button
              className="template-button"
              onClick={() => onCreate("modern")}
            >
              Use this template
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Templates;