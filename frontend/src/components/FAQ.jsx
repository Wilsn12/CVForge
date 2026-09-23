import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is CVForge free to use?",
      answer:
        "Yes. CVForge is designed to be completely free to use. You can create, save, edit, and download your CV without a subscription."
    },
    {
      question: "What is an ATS-friendly CV?",
      answer:
        "An ATS-friendly CV uses a simple structure, clear section headings, readable formatting, and text-based content that can be easily processed by Applicant Tracking Systems."
    },
    {
      question: "Can I edit my CV after saving it?",
      answer:
        "Yes. Saved CVs are available in the My CVs section, where you can open an existing CV, make changes, and save the updated version."
    },
    {
      question: "Can I download my CV as a PDF?",
      answer:
        "Yes. Once your CV is ready, use the Download CV button in the live preview to export it as a PDF."
    },
    {
      question: "What is the difference between ATS and Modern templates?",
      answer:
        "ATS templates prioritize simple, text-focused layouts that are easier for applicant tracking systems to process. Modern templates use a more visual layout for a stronger personal presentation."
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No account is required to start creating your CV. You can directly use the CV builder and save your CV through the application."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <span className="section-label">FAQ</span>

        <h2>
          Frequently asked <span>questions.</span>
        </h2>

        <p>
          Everything you need to know about creating your CV with CVForge.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              className={`faq-item ${isOpen ? "active" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <span className="faq-toggle">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;