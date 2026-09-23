import html2pdf from "html2pdf.js";
import { useEffect, useState } from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  Code2,
  FolderKanban,
  Plus,
  Trash2,
  Palette,
  GripVertical
} from "lucide-react";
const API_URL = "http://localhost:8080/api/cvs";

function CVBuilder({ selectedTemplate = "ats", editingCV = null }) {
  const [template, setTemplate] = useState(selectedTemplate);
  const [saving, setSaving] = useState(false);
const [savedCVId, setSavedCVId] = useState(null);

  useEffect(() => {
    setTemplate(selectedTemplate);
  }, [selectedTemplate]);

  useEffect(() => {
  if (!editingCV) {
    return;
  }

  setTemplate(editingCV.template || "ats");

  setPersonal({
    name: editingCV.name || "",
    role: editingCV.professionalTitle || "",
    email: editingCV.email || "",
    phone: editingCV.phone || "",
    location: editingCV.location || "",
    linkedin: editingCV.linkedin || "",
    portfolio: editingCV.portfolio || ""
  });

  setSummary(editingCV.summary || "");

  setExperiences(
    editingCV.experiences
      ? JSON.parse(editingCV.experiences)
      : []
  );

  setEducation(
    editingCV.education
      ? JSON.parse(editingCV.education)
      : []
  );

  setProjects(
    editingCV.projects
      ? JSON.parse(editingCV.projects)
      : []
  );

  setSkills(
    editingCV.skills
      ? JSON.parse(editingCV.skills)
      : []
  );

  setCustomSections(
    editingCV.customSections
      ? JSON.parse(editingCV.customSections)
      : []
  );

  setDesign(
    editingCV.design
      ? JSON.parse(editingCV.design)
      : {
          color: "#4f8cff",
          font: "Arial",
          fontSize: "normal",
          spacing: "normal",
          showPhoto: true,
          photo: ""
        }
  );

  setSavedCVId(editingCV.id);
  }, [editingCV]);

  const [design, setDesign] = useState({
    color: "#4f8cff",
    font: "Arial",
    fontSize: "normal",
    spacing: "normal",
    showPhoto: true,
    photo: ""
  });

  const [personal, setPersonal] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: ""
  });

  const [summary, setSummary] = useState("");

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "",
      company: "",
      location: "",
      start: "",
      end: "",
      description: ""
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      institution: "",
      degree: "",
      start: "",
      end: "",
      description: ""
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "",
      role: "",
      description: "",
      link: ""
    }
  ]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      name: ""
    }
  ]);

  const [customSections, setCustomSections] = useState([]);
  

  const updatePersonal = (field, value) => {
    setPersonal((current) => ({
      ...current,
      [field]: value
    }));
  };

  const handlePhotoUpload = (event) => {
  const file = event.target.files?.[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("File harus berupa gambar");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Ukuran foto maksimal 2 MB");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    setDesign((current) => ({
      ...current,
      photo: reader.result
    }));
  };

  reader.readAsDataURL(file);
  };

  const updateExperience = (id, field, value) => {
    setExperiences((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    );
  };

  const addExperience = () => {
    setExperiences((current) => [
      ...current,
      {
        id: Date.now(),
        position: "",
        company: "",
        location: "",
        start: "",
        end: "",
        description: ""
      }
    ]);
  };

  const removeExperience = (id) => {
    setExperiences((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const updateEducation = (id, field, value) => {
    setEducation((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    );
  };

  const addEducation = () => {
    setEducation((current) => [
      ...current,
      {
        id: Date.now(),
        institution: "",
        degree: "",
        start: "",
        end: "",
        description: ""
      }
    ]);
  };

  const removeEducation = (id) => {
    setEducation((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const updateProject = (id, field, value) => {
    setProjects((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    );
  };

  const addProject = () => {
    setProjects((current) => [
      ...current,
      {
        id: Date.now(),
        name: "",
        role: "",
        description: "",
        link: ""
      }
    ]);
  };

  const removeProject = (id) => {
    setProjects((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const updateSkill = (id, value) => {
    setSkills((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              name: value
            }
          : item
      )
    );
  };

  const addSkill = () => {
    setSkills((current) => [
      ...current,
      {
        id: Date.now(),
        name: ""
      }
    ]);
  };

  const removeSkill = (id) => {
    setSkills((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const addCustomSection = () => {
    setCustomSections((current) => [
      ...current,
      {
        id: Date.now(),
        title: "Custom Section",
        content: ""
      }
    ]);
  };

  const updateCustomSection = (id, field, value) => {
    setCustomSections((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    );
  };

  const removeCustomSection = (id) => {
    setCustomSections((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const saveCV = async () => {
    try {
      setSaving(true);

      const cvData = {
        name: personal.name,
        professionalTitle: personal.role,
        email: personal.email,
        phone: personal.phone,
        location: personal.location,
        linkedin: personal.linkedin,
        portfolio: personal.portfolio,
        summary,
        experiences: JSON.stringify(experiences),
        education: JSON.stringify(education),
        projects: JSON.stringify(projects),
        skills: JSON.stringify(skills),
        customSections: JSON.stringify(customSections),
        design: JSON.stringify(design),
        template
      };

      const response = await fetch(
        editingCV ? `${API_URL}/${editingCV.id}` : API_URL, 
        {
        method: editingCV ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cvData)
      });

      if (!response.ok) {
        throw new Error("Failed to save CV");
      }

      const savedCV = await response.json();

      setSavedCVId(savedCV.id);

      alert(
        editingCV
        ? "CV  berhasil diperbarui"
        : "CV berhasil disimpan"
      );
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan CV");
    } finally {
      setSaving(false);
    }
  };

const downloadCV = () => {
  const element = document.querySelector(".builder-cv");

  if (!element) {
    alert("CV preview tidak ditemukan");
    return;
  }

  const options = {
    margin: [8, 8, 8, 8],
    filename: `${personal.name || "CV"}-CV.pdf`,
    image: {
      type: "jpeg",
      quality: 0.98
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff"
    },
    pagebreak: {
      mode: ["css", "legacy"],
      avoid: [
        ".builder-cv-section",
        ".preview-repeatable"
      ]
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  html2pdf()
    .set(options)
    .from(element)
    .save();
};
  return (
    <section className="builder-section" id="builder">
      <div className="builder-header">
        <span className="section-label">CV BUILDER</span>

        <h2>
          Build your <span>professional CV.</span>
        </h2>

        <p>
          Customize your information, sections and design while
          previewing your CV in real time.
        </p>
      </div>

      <div className="builder-layout">
        <div className="builder-form">

          <div className="builder-template">
            <div>
              <strong>Choose Template</strong>
              <span>Select your CV style</span>
            </div>

            <div className="template-switch">
              <button
                className={template === "ats" ? "active" : ""}
                onClick={() => setTemplate("ats")}
              >
                ATS
              </button>

              <button
                className={template === "modern" ? "active" : ""}
                onClick={() => setTemplate("modern")}
              >
                Modern
              </button>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <User size={18} />

              <div>
                <h3>Personal Information</h3>
                <span>Your basic contact information</span>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>

                <input
                  placeholder="John Anderson"
                  value={personal.name}
                  onChange={(e) =>
                    updatePersonal("name", e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label>Professional Title <span className="optional-table">(Optional)</span></label>

                <input
                  placeholder="Frontend Developer"
                  value={personal.role}
                  onChange={(e) =>
                    updatePersonal("role", e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  placeholder="john@email.com"
                  value={personal.email}
                  onChange={(e) =>
                    updatePersonal("email", e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label>Phone</label>

                <input
                  placeholder="+62 812 3456 7890"
                  value={personal.phone}
                  onChange={(e) =>
                    updatePersonal("phone", e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label>Location</label>

                <input
                  placeholder="Jakarta, Indonesia"
                  value={personal.location}
                  onChange={(e) =>
                    updatePersonal("location", e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label>LinkedIn</label>

                <input
                  placeholder="linkedin.com/in/username"
                  value={personal.linkedin}
                  onChange={(e) =>
                    updatePersonal("linkedin", e.target.value)
                  }
                />
              </div>

              <div className="form-group full">
                <label>Portfolio</label>

                <input
                  placeholder="portfolio.com"
                  value={personal.portfolio}
                  onChange={(e) =>
                    updatePersonal("portfolio", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <User size={18} />

              <div>
                <h3>Professional Summary</h3>
                <span>Introduce yourself professionally</span>
              </div>
            </div>

            <div className="form-group">
              <textarea
                rows="5"
                placeholder="Write a short professional summary..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <Briefcase size={18} />

              <div>
                <h3>Work Experience</h3>
                <span>Add as many experiences as you need</span>
              </div>
            </div>

            {experiences.map((experience, index) => (
              <div className="repeatable-item" key={experience.id}>
                <div className="repeatable-header">
                  <span>Experience {index + 1}</span>

                  {experiences.length > 1 && (
                    <button
                      className="remove-button"
                      onClick={() =>
                        removeExperience(experience.id)
                      }
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Position</label>

                    <input
                      placeholder="Frontend Developer"
                      value={experience.position}
                      onChange={(e) =>
                        updateExperience(
                          experience.id,
                          "position",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Company</label>

                    <input
                      placeholder="Company Name"
                      value={experience.company}
                      onChange={(e) =>
                        updateExperience(
                          experience.id,
                          "company",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Start Date</label>

                    <input
                      placeholder="Jan 2025"
                      value={experience.start}
                      onChange={(e) =>
                        updateExperience(
                          experience.id,
                          "start",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>End Date</label>

                    <input
                      placeholder="Present"
                      value={experience.end}
                      onChange={(e) =>
                        updateExperience(
                          experience.id,
                          "end",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group full">
                    <label>Location</label>

                    <input
                      placeholder="Jakarta, Indonesia"
                      value={experience.location}
                      onChange={(e) =>
                        updateExperience(
                          experience.id,
                          "location",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group full">
                    <label>Description</label>

                    <textarea
                      rows="4"
                      placeholder="Describe your responsibilities and achievements..."
                      value={experience.description}
                      onChange={(e) =>
                        updateExperience(
                          experience.id,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              className="add-section-button"
              onClick={addExperience}
            >
              <Plus size={16} />
              Add Experience
            </button>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <GraduationCap size={18} />

              <div>
                <h3>Education</h3>
                <span>Add your academic background</span>
              </div>
            </div>

            {education.map((item, index) => (
              <div className="repeatable-item" key={item.id}>
                <div className="repeatable-header">
                  <span>Education {index + 1}</span>

                  {education.length > 1 && (
                    <button
                      className="remove-button"
                      onClick={() =>
                        removeEducation(item.id)
                      }
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Institution</label>

                    <input
                      placeholder="University Name"
                      value={item.institution}
                      onChange={(e) =>
                        updateEducation(
                          item.id,
                          "institution",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Degree / Major</label>

                    <input
                      placeholder="Information Systems"
                      value={item.degree}
                      onChange={(e) =>
                        updateEducation(
                          item.id,
                          "degree",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Start Date</label>

                    <input
                      placeholder="2024"
                      value={item.start}
                      onChange={(e) =>
                        updateEducation(
                          item.id,
                          "start",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>End Date</label>

                    <input
                      placeholder="Present"
                      value={item.end}
                      onChange={(e) =>
                        updateEducation(
                          item.id,
                          "end",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group full">
                    <label>Description</label>

                    <textarea
                      rows="3"
                      placeholder="GPA, achievements, relevant coursework..."
                      value={item.description}
                      onChange={(e) =>
                        updateEducation(
                          item.id,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              className="add-section-button"
              onClick={addEducation}
            >
              <Plus size={16} />
              Add Education
            </button>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <Code2 size={18} />

              <div>
                <h3>Skills</h3>
                <span>Add individual skills</span>
              </div>
            </div>

            <div className="skills-editor">
              {skills.map((skill, index) => (
                <div className="skill-input" key={skill.id}>
                  <GripVertical size={15} />

                  <input
                    placeholder={`Skill ${index + 1}`}
                    value={skill.name}
                    onChange={(e) =>
                      updateSkill(skill.id, e.target.value)
                    }
                  />

                  {skills.length > 1 && (
                    <button
                      className="remove-button"
                      onClick={() =>
                        removeSkill(skill.id)
                      }
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              className="add-section-button"
              onClick={addSkill}
            >
              <Plus size={16} />
              Add Skill
            </button>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <FolderKanban size={18} />

              <div>
                <h3>Projects</h3>
                <span>Showcase your relevant projects</span>
              </div>
            </div>

            {projects.map((project, index) => (
              <div className="repeatable-item" key={project.id}>
                <div className="repeatable-header">
                  <span>Project {index + 1}</span>

                  {projects.length > 1 && (
                    <button
                      className="remove-button"
                      onClick={() =>
                        removeProject(project.id)
                      }
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Project Name</label>

                    <input
                      placeholder="CVForge"
                      value={project.name}
                      onChange={(e) =>
                        updateProject(
                          project.id,
                          "name",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Role</label>

                    <input
                      placeholder="Frontend Developer"
                      value={project.role}
                      onChange={(e) =>
                        updateProject(
                          project.id,
                          "role",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group full">
                    <label>Project Link</label>

                    <input
                      placeholder="github.com/username/project"
                      value={project.link}
                      onChange={(e) =>
                        updateProject(
                          project.id,
                          "link",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group full">
                    <label>Description</label>

                    <textarea
                      rows="4"
                      placeholder="Describe your project..."
                      value={project.description}
                      onChange={(e) =>
                        updateProject(
                          project.id,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              className="add-section-button"
              onClick={addProject}
            >
              <Plus size={16} />
              Add Project
            </button>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <Palette size={18} />

              <div>
                <h3>Customize Design</h3>
                <span>Adjust your CV appearance</span>
              </div>
            </div>

            <div className="design-grid">
              <div className="form-group full">
                <label>Profile Photo</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />

                {design.photo && (
                  <button
                    type="button"
                    className="remove-photo-button"
                    onClick={() =>
                      setDesign((current) => ({
                        ...current,
                    photo: ""
                      }))
                    }
                  >
                  Remove Photo
              </button>
            )}
          </div>
              <div className="form-group">
                <label>Accent Color</label>

                <div className="color-options">
                  {[
                    "#4f8cff",
                    "#8b5cf6",
                    "#10b981",
                    "#ef4444",
                    "#111827"
                  ].map((color) => (
                    <button
                      key={color}
                      className={
                        design.color === color
                          ? "color-option active"
                          : "color-option"
                      }
                      style={{ background: color }}
                      onClick={() =>
                        setDesign((current) => ({
                          ...current,
                          color
                        }))
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Font</label>

                <select
                  value={design.font}
                  onChange={(e) =>
                    setDesign((current) => ({
                      ...current,
                      font: e.target.value
                    }))
                  }
                >
                  <option value="Arial">Arial</option>
                  <option value="Inter">Inter</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Calibri">Calibri</option>
                </select>
              </div>

              <div className="form-group">
                <label>Font Size</label>

                <select
                  value={design.fontSize}
                  onChange={(e) =>
                    setDesign((current) => ({
                      ...current,
                      fontSize: e.target.value
                    }))
                  }
                >
                  <option value="small">Small</option>
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                </select>
              </div>

              <div className="form-group">
                <label>Spacing</label>

                <select
                  value={design.spacing}
                  onChange={(e) =>
                    setDesign((current) => ({
                      ...current,
                      spacing: e.target.value
                    }))
                  }
                >
                  <option value="compact">Compact</option>
                  <option value="normal">Normal</option>
                  <option value="relaxed">Relaxed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <Plus size={18} />

              <div>
                <h3>Custom Sections</h3>
                <span>Create your own CV sections</span>
              </div>
            </div>

            {customSections.map((section) => (
              <div className="repeatable-item" key={section.id}>
                <div className="repeatable-header">
                  <span>Custom Section</span>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeCustomSection(section.id)
                    }
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                <div className="form-group">
                  <label>Section Title</label>

                  <input
                    value={section.title}
                    onChange={(e) =>
                      updateCustomSection(
                        section.id,
                        "title",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Content</label>

                  <textarea
                    rows="4"
                    value={section.content}
                    onChange={(e) =>
                      updateCustomSection(
                        section.id,
                        "content",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}

            <button
              className="add-section-button"
              onClick={addCustomSection}
            >
              <Plus size={16} />
              Add Custom Section
            </button>
          </div>
        </div>

        <div className="builder-preview">
          <div className="preview-header">
            <div>
              <span>LIVE PREVIEW</span>

              <strong>
                {template === "ats"
                  ? "ATS Professional"
                  : "Modern Creative"}
              </strong>
            </div>

            <div className="preview-actions">
              <button
                className="save-cv-button"
                onClick={saveCV}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save CV"}
              </button>

              <button className="download-button"
              onClick={downloadCV}>
                Download CV
              </button>
            </div>
          </div>

          <div className="preview-paper">
            <div className="preview-scale">
              <div
            className={`builder-cv ${
              template === "ats" ? "ats-builder" : "modern-builder"
            } cv-font-${design.fontSize} cv-spacing-${design.spacing}`}
            style={{
              fontFamily: design.font
            }}
          >
            {template === "ats" ? (
              <>
                <div
                  className="builder-cv-name"
                  style={{ color: design.color }}
                >
                  {personal.name || "Your Name"}
                </div>

                {personal.role && (
                <div className="builder-cv-role">
                    {personal.role}
                    </div>
                )}

                <div className="builder-cv-contact">
                  {[
                    personal.email,
                    personal.phone,
                    personal.location,
                    personal.linkedin,
                    personal.portfolio
                  ]
                    .filter(Boolean)
                    .join(" · ") || "Contact information"}
                </div>

                <div className="builder-cv-line"></div>

                {summary && (
                  <div className="builder-cv-section">
                    <h4 style={{ color: design.color }}>
                      SUMMARY
                    </h4>

                    <p>{summary}</p>
                  </div>
                )}

                {experiences.some(
                  (item) =>
                    item.position ||
                    item.company ||
                    item.description
                ) && (
                  <div className="builder-cv-section">
                    <h4 style={{ color: design.color }}>
                      WORK EXPERIENCE
                    </h4>

                    {experiences.map((item) => (
                      <div
                        className="preview-repeatable"
                        key={item.id}
                      >
                        <div className="builder-cv-row">
                          <strong>
                            {item.position || "Position"}
                          </strong>

                          <span>
                            {item.start || ""}
                            {item.start || item.end ? " - " : ""}
                            {item.end || ""}
                          </span>
                        </div>

                        <div className="preview-company">
                          {item.company}
                          {item.company && item.location
                            ? ` · ${item.location}`
                            : item.location}
                        </div>

                        {item.description && (
                          <p>{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {education.some(
                  (item) =>
                    item.institution ||
                    item.degree ||
                    item.description
                ) && (
                  <div className="builder-cv-section">
                    <h4 style={{ color: design.color }}>
                      EDUCATION
                    </h4>

                    {education.map((item) => (
                      <div
                        className="preview-repeatable"
                        key={item.id}
                      >
                        <div className="builder-cv-row">
                          <strong>
                            {item.institution || "Institution"}
                          </strong>

                          <span>
                            {item.start || ""}
                            {item.start || item.end ? " - " : ""}
                            {item.end || ""}
                          </span>
                        </div>

                        <div className="preview-company">
                          {item.degree}
                        </div>

                        {item.description && (
                          <p>{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {skills.some((item) => item.name) && (
                  <div className="builder-cv-section">
                    <h4 style={{ color: design.color }}>
                      SKILLS
                    </h4>

                    <p>
                      {skills
                        .filter((item) => item.name)
                        .map((item) => item.name)
                        .join(" · ")}
                    </p>
                  </div>
                )}

                {projects.some(
                  (item) =>
                    item.name ||
                    item.description
                ) && (
                  <div className="builder-cv-section">
                    <h4 style={{ color: design.color }}>
                      PROJECTS
                    </h4>

                    {projects.map((item) => (
                      <div
                        className="preview-repeatable"
                        key={item.id}
                      >
                        <strong>
                          {item.name || "Project"}
                        </strong>

                        {item.role && (
                          <div className="preview-company">
                            {item.role}
                          </div>
                        )}

                        {item.description && (
                          <p>{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {customSections.map((section) => (
                  <div
                    className="builder-cv-section"
                    key={section.id}
                  >
                    <h4 style={{ color: design.color }}>
                      {section.title.toUpperCase()}
                    </h4>

                    <p>{section.content}</p>
                  </div>
                ))}
              </>
            ) : (
              <div
                className="modern-template"
                style={{
                  "--modern-accent": design.color
                }}
              >
                <aside className="modern-sidebar">
                  {design.showPhoto && (
                    <div className="modern-photo">
                      {design.photo ? (
                        <img src={design.photo} 
                        alt="Profile" />
                      
                      ) : (
                      <User size={42} />
                      )}
                    </div>
                  )}

                  <div className="modern-sidebar-section">
                    <div className="modern-sidebar-title">
                      DATA DIRI
                    </div>

                    {personal.location && (
                      <div className="modern-side-field">
                        <strong>Lokasi</strong>
                        <span>{personal.location}</span>
                      </div>
                    )}

                    {personal.phone && (
                      <div className="modern-side-field">
                        <strong>Telepon</strong>
                        <span>{personal.phone}</span>
                      </div>
                    )}

                    {personal.email && (
                      <div className="modern-side-field">
                        <strong>Email</strong>
                        <span>{personal.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="modern-sidebar-divider"></div>

                  <div className="modern-sidebar-section">
                    <div className="modern-sidebar-title">
                      KONTAK
                    </div>

                    {personal.phone && <p>{personal.phone}</p>}
                    {personal.email && <p>{personal.email}</p>}
                    {personal.location && <p>{personal.location}</p>}
                  </div>

                  <div className="modern-sidebar-divider"></div>

                  <div className="modern-sidebar-section">
                    <div className="modern-sidebar-title">
                      SOSIAL MEDIA
                    </div>

                    {personal.linkedin && <p>{personal.linkedin}</p>}
                    {personal.portfolio && <p>{personal.portfolio}</p>}
                  </div>
                </aside>

                <main className="modern-main">
                  <header className="modern-header">
                    <h1>{personal.name || "YOUR NAME"}</h1>

                    {personal.role && (
                      <div className="modern-role">
                        {personal.role}
                      </div>
                    )}
                  </header>

                  {summary && (
                    <section className="modern-section">
                      <h2>TENTANG SAYA</h2>
                      <div className="modern-divider"></div>
                      <p>{summary}</p>
                    </section>
                  )}

                  {education.some(
                    (item) =>
                      item.institution ||
                      item.degree ||
                      item.start ||
                      item.end ||
                      item.description
                  ) && (
                    <section className="modern-section">
                      <h2>PENDIDIKAN</h2>
                      <div className="modern-divider"></div>

                      {education.map((item) => {
                        if (
                          !item.institution &&
                          !item.degree &&
                          !item.start &&
                          !item.end &&
                          !item.description
                        ) {
                          return null;
                        }

                        return (
                          <div className="modern-education-item" key={item.id}>
                            <div className="modern-education-info">
                              <strong>{item.degree || "Degree"}</strong>
                              <span>{item.institution}</span>
                              {item.description && <p>{item.description}</p>}
                            </div>

                            {(item.start || item.end) && (
                              <div className="modern-date">
                                {item.start}
                                {item.start && item.end ? " - " : ""}
                                {item.end}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </section>
                  )}

                  {experiences.some(
                    (item) =>
                      item.position ||
                      item.company ||
                      item.description
                  ) && (
                    <section className="modern-section">
                      <h2>PENGALAMAN KERJA</h2>
                      <div className="modern-divider"></div>

                      {experiences.map((item) => {
                        if (
                          !item.position &&
                          !item.company &&
                          !item.description
                        ) {
                          return null;
                        }

                        return (
                          <div className="modern-experience-item" key={item.id}>
                            <div className="modern-experience-header">
                              <strong>{item.company || "Company"}</strong>

                              {(item.start || item.end) && (
                                <span className="modern-date">
                                  {item.start}
                                  {item.start && item.end ? " - " : ""}
                                  {item.end}
                                </span>
                              )}
                            </div>

                            {item.position && (
                              <div className="modern-position">
                                {item.position}
                              </div>
                            )}

                            {item.description && (
                              <ul>
                                {item.description
                                  .split("\n")
                                  .filter(Boolean)
                                  .map((text, index) => (
                                    <li key={index}>{text}</li>
                                  ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </section>
                  )}

                  {skills.some((item) => item.name) && (
                    <section className="modern-section">
                      <h2>KEMAMPUAN</h2>
                      <div className="modern-divider"></div>

                      <ul className="modern-skills">
                        {skills
                          .filter((item) => item.name)
                          .map((item) => (
                            <li key={item.id}>{item.name}</li>
                          ))}
                      </ul>
                    </section>
                  )}

                  {projects.some(
                    (item) =>
                      item.name ||
                      item.role ||
                      item.description
                  ) && (
                    <section className="modern-section">
                      <h2>PROJECT</h2>
                      <div className="modern-divider"></div>

                      {projects.map((item) => {
                        if (
                          !item.name &&
                          !item.role &&
                          !item.description
                        ) {
                          return null;
                        }

                        return (
                          <div className="modern-project-item" key={item.id}>
                            <strong>{item.name || "Project"}</strong>
                            {item.role && <span>{item.role}</span>}
                            {item.description && <p>{item.description}</p>}
                          </div>
                        );
                      })}
                    </section>
                  )}

                  {customSections.map((section) => (
                    <section className="modern-section" key={section.id}>
                      <h2>{section.title}</h2>
                      <div className="modern-divider"></div>
                      <p>{section.content}</p>
                    </section>
                  ))}
                </main>
              </div>
            )}
          </div>
        </div>
      </div>
            </div>
          </div>
    </section>
  );
}

export default CVBuilder;
