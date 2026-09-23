import { useState } from "react";
import { ArrowRight, Eye, EyeOff, X } from "lucide-react";

const API_URL = "http://localhost:8080/api/auth";

function AuthModal({ mode, onClose, onLogin }) {
  const [activeMode, setActiveMode] = useState(mode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const isSignup = activeMode === "signup";

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  };

  const switchMode = (newMode) => {
    setActiveMode(newMode);
    setError("");
    setShowPassword(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/${isSignup ? "signup" : "signin"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (isSignup) {
        setForm({
          name: "",
          email: form.email,
          password: ""
        });

        setActiveMode("signin");
        setError("");
        return;
      }
      onLogin(data.user);
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay" onMouseDown={onClose}>
      <div
        className="auth-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="auth-close"
          onClick={onClose}
          type="button"
        >
          <X size={19} />
        </button>

        <div className="auth-brand">
          <div className="logo">
            <span>CV</span>Forge
            <b>✦</b>
          </div>
        </div>

        <div className="auth-heading">
          <span className="auth-label">
            {isSignup ? "CREATE ACCOUNT" : "WELCOME BACK"}
          </span>

          <h2>
            {isSignup ? (
              <>
                Build your career
                <span> smarter.</span>
              </>
            ) : (
              <>
                Welcome back to
                <span> CVForge.</span>
              </>
            )}
          </h2>

          <p>
            {isSignup
              ? "Create your free account and start building professional CVs."
              : "Sign in to access your saved CVs and continue building."}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <div className="auth-field">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="John Anderson"
                value={form.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                required
              />
            </div>
          )}

          <div className="auth-field">
            <label>Email</label>

            <input
              type="email"
              placeholder="john@email.com"
              value={form.email}
              onChange={(event) =>
                updateField("email", event.target.value)
              }
              required
            />
          </div>

          <div className="auth-field">
            <label>Password</label>

            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(event) =>
                  updateField("password", event.target.value)
                }
                minLength={6}
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((current) => !current)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Create Account"
              : "Sign In"}

            {!loading && <ArrowRight size={17} />}
          </button>
        </form>

        <div className="auth-switch">
          <span>
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}
          </span>

          <button
            type="button"
            onClick={() =>
              switchMode(isSignup ? "signin" : "signup")
            }
          >
            {isSignup ? "Sign In" : "Create Account"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;