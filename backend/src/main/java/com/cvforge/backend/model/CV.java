package com.cvforge.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class CV {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String professionalTitle;
    private String email;
    private String phone;
    private String location;
    private String linkedin;
    private String portfolio;
    private String summary;

    @Lob
    private String experiences;

    @Lob
    private String education;

    @Lob
    private String projects;

    @Lob
    private String skills;

    @Lob
    private String customSections;

    @Lob
    private String design;

    private String template;

    public CV() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfessionalTitle() {
        return professionalTitle;
    }

    public void setProfessionalTitle(String professionalTitle) {
        this.professionalTitle = professionalTitle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(String portfolio) {
        this.portfolio = portfolio;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getExperiences() {
    return experiences;
}

public void setExperiences(String experiences) {
    this.experiences = experiences;
}

public String getEducation() {
    return education;
}

public void setEducation(String education) {
    this.education = education;
}

public String getProjects() {
    return projects;
}

public void setProjects(String projects) {
    this.projects = projects;
}

public String getSkills() {
    return skills;
}

public void setSkills(String skills) {
    this.skills = skills;
}

public String getCustomSections() {
    return customSections;
}

public void setCustomSections(String customSections) {
    this.customSections = customSections;
}

public String getDesign() {
    return design;
}

public void setDesign(String design) {
    this.design = design;
}

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }
}