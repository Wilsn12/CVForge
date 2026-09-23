import { ArrowUp, Mail } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <span>CV</span>Forge
            <b>✦</b>
          </div>

          <p>
            Build a professional CV that helps you move closer to your next
            opportunity.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="GitHub">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.04 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.24 9.24 0 0 1 12 7.04c.85 0 1.7.12 2.5.35 1.9-1.31 2.74-1.04 2.74-1.04.56 1.4.21 2.44.1 2.7.65.71 1.04 1.62 1.04 2.73 0 3.9-2.34 4.77-4.57 5.03.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 1 0 5.25 7a2.01 2.01 0 0 0 0-4ZM20.44 13.42c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.33-6.58Z" />
              </svg>
            </a>

            <a href="#" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#templates">Templates</a>
            <a href="#features">Features</a>
            <a href="#builder">CV Builder</a>
            <a href="#my-cvs">My CVs</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#tips">CV Tips</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            <h4>Create</h4>
            <a href="#builder">Create ATS CV</a>
            <a href="#builder">Create Modern CV</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CVForge. All rights reserved.</p>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;