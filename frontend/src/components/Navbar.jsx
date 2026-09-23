import { useState } from "react";
import { Moon, ArrowRight, Menu, X } from "lucide-react";

function Navbar({
  onCreate,
  currentUser,
  onSignIn,
  onSignUp,
  onSignOut
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCreate = () => {
    setMenuOpen(false);
    onCreate();
  };

  const handleSignIn = () => {
    setMenuOpen(false);
    onSignIn();
  };

  const handleSignUp = () => {
    setMenuOpen(false);
    onSignUp();
  };

  const handleSignOut = () => {
    setMenuOpen(false);
    onSignOut();
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>CV</span>Forge
        <b>✦</b>
      </div>

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>
          Home
        </a>

        <a href="#templates" onClick={handleLinkClick}>
          Templates
        </a>

        <a href="#features" onClick={handleLinkClick}>
          Features
        </a>

        <a href="#tips" onClick={handleLinkClick}>
          Tips
        </a>

        <a href="#faq" onClick={handleLinkClick}>
          FAQ
        </a>

        <div className="mobile-auth-actions">
          {currentUser ? (
            <>
              <div className="mobile-user">
                <div className="user-avatar">
                  {currentUser.name?.charAt(0).toUpperCase()}
                </div>

                <span>{currentUser.name}</span>
              </div>

              <button
                type="button"
                className="mobile-signout-button"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="mobile-signin-button"
                onClick={handleSignIn}
              >
                Sign In
              </button>

              <button
                type="button"
                className="mobile-signup-button"
                onClick={handleSignUp}
              >
                Create Account
              </button>
            </>
          )}

          <button
            type="button"
            className="mobile-create-button"
            onClick={handleCreate}
          >
            Create My CV
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="nav-actions">
        <button className="icon-button" type="button">
          <Moon size={17} />
        </button>

        {currentUser ? (
          <div className="user-menu">
            <div className="user-avatar">
              {currentUser.name?.charAt(0).toUpperCase()}
            </div>

            <span>{currentUser.name}</span>

            <button
              type="button"
              className="signout-button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            className="sign-button"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        )}

        <button
          className="primary-button"
          type="button"
          onClick={handleCreate}
        >
          Create My CV
          <ArrowRight size={16} />
        </button>
      </div>

      <button
        className="mobile-menu-button"
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
}

export default Navbar;