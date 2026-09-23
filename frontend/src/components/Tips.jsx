import { Lightbulb, FileText, Target, Sparkles } from "lucide-react";

function Tips() {
  const tips = [
    {
      icon: FileText,
      number: "01",
      title: "Keep It Concise",
      description:
        "Keep your CV focused and easy to scan. Highlight the experience and skills that are most relevant to the position you are applying for."
    },
    {
      icon: Target,
      number: "02",
      title: "Use Relevant Keywords",
      description:
        "Read the job description carefully and include relevant skills, tools, and keywords naturally throughout your CV."
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Show Your Impact",
      description:
        "Instead of only listing responsibilities, describe what you achieved and use numbers whenever you can."
    },
    {
      icon: Lightbulb,
      number: "04",
      title: "Keep It Updated",
      description:
        "Update your CV regularly with new projects, certifications, experiences, and skills so it is always ready when an opportunity comes."
    }
  ];

  return (
    <section className="tips-section" id="tips">
      <div className="section-heading">
        <span className="section-label">CV TIPS</span>

        <h2>
          Make your CV <span>stand out.</span>
        </h2>

        <p>
          Simple tips to help you create a clearer and more effective CV.
        </p>
      </div>

      <div className="tips-grid">
        {tips.map((tip) => {
          const Icon = tip.icon;

          return (
            <div className="tip-card" key={tip.number}>
              <div className="tip-top">
                <div className="tip-icon">
                  <Icon size={21} />
                </div>

                <span className="tip-number">{tip.number}</span>
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tips;