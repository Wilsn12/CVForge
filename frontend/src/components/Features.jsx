import {
  Zap,
  ShieldCheck,
  Palette,
  Download,
  Sparkles,
  FileCheck
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Zap,
      title: "Create in Minutes",
      description:
        "Fill in your information and build a professional CV without starting from scratch."
    },
    {
      icon: ShieldCheck,
      title: "ATS-Friendly",
      description:
        "Use a clean CV structure designed to make your information easier for ATS systems to read."
    },
    {
      icon: Palette,
      title: "Modern Templates",
      description:
        "Choose between professional ATS templates and modern visual designs."
    },
    {
      icon: Download,
      title: "Download for Free",
      description:
        "Create and download your CV without subscriptions or hidden costs."
    },
    {
      icon: Sparkles,
      title: "Easy Customization",
      description:
        "Customize your personal information, experience, education and skills with ease."
    },
    {
      icon: FileCheck,
      title: "Professional Structure",
      description:
        "Keep your CV organized with structured sections designed for job applications."
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-heading">
        <span className="section-label">WHY CVFORGE</span>

        <h2>
          Everything you need to build a{" "}
          <span>better CV.</span>
        </h2>

        <p>
          Simple tools, professional templates and everything you need
          to create a CV that represents you.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <Icon size={22} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;