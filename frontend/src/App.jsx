import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Templates from "./components/Template";
import Features from "./components/Features";
import CVBuilder from "./components/CVBuilder";
import MyCVs from "./components/MyCVs";
import Tips from "./components/Tips";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollReveal from "./ScrollReveal";
import AuthModal from "./components/AuthModal";
import "./App.css";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState("ats");
  const [editingCV, setEditingCV] = useState(null);
  const [authMode, setAuthMode] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const createCV = (template = "ats") => {
    setEditingCV(null);
    setSelectedTemplate(template);

    setTimeout(() => {
      document.getElementById("builder")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 50);
  };

  const editCV = (cv) => {
    setEditingCV(cv);

    setTimeout(() => {
      document.getElementById("builder")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  }

  return (
    <div>
      <Navbar
        onCreate={createCV}
        currentUser={currentUser}
        onSignIn={() => setAuthMode("signin")}
        onSignUp={() => setAuthMode("signup")}
        onSignOut={handleSignOut}
      />

      <ScrollReveal>
        <Hero onCreate={createCV} />
      </ScrollReveal>

      <ScrollReveal>
        <Templates onCreate={createCV} />
      </ScrollReveal>

      <ScrollReveal>
        <Features />
      </ScrollReveal>

      <ScrollReveal>
        <CVBuilder
          selectedTemplate={selectedTemplate}
          editingCV={editingCV}
        />
      </ScrollReveal>

      <ScrollReveal>
        <MyCVs onEdit={editCV} />
      </ScrollReveal>

      <ScrollReveal>
        <Tips />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <Footer />

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onLogin={(user) => setCurrentUser(user)}
        />
      )}
    </div>
  );
}

export default App;