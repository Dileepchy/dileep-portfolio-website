import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Fusemachines AI Fellow 2025 Program",
      company: "Fusemachines  Company",
      location: "Kathmandu, Nepall",
      period: "2025 - Present",
      type: "Fellowship",
      description: "Selected for an intensive AI/ML fellowship program, focusing on advanced machine learning techniques, deep learning, and practical AI applications.",
      highlights: [
        "Advanced machine learning and deep learning training",
        "Real-world AI project development",
        "Collaboration with industry experts",
        "Exposure to cutting-edge AI technologies",
        "Networking opportunities with AI professionals"
      ]
    },
    {
      "title": "Nobel Fundamentals Program",
      "company": "NOBEL LEARNING PBC",
      "location": "USA",
      "period": "Completed: September 9, 2025",
      "type": "Internship",
      "description": "An international Learner-to-Leader program where learners reinforce technical and leadership skills by actively helping others master those same skills.The internship successfully completed 60 hours.",
      "highlights": [
        "Completed courses in: Introduction to Web Design, Pitch and Presentation, Basics of Internet Troubleshooting and Communication, and Leadership",
        "Led a course on: Introduction to Web Design ",
        "Gained practical experience in leadership and communication"
      ]
    },
    {
      title: "Cloud Apprentice",
      company: "Adex International",
      location: "Nepal",
      period: "2025 - Present",
      type: "Apprenticeship",
      description: "Comprehensive cloud computing apprenticeship program focusing on AWS services, cloud architecture, and DevOps practices.",
      highlights: [
        "AWS cloud services implementation",
        "Learning about different AWS services",
        "Cloud architecture design",
        "DevOps and MLOps practices"
      ]
    },
    {
      title: "Web Application Developer",
      company: "National Innovation Center",
      location: "Kathmandu, Nepal",
      period: "June 2022 - August 2024",
      type: "Full-time",
      description: "Developed and maintained web applications for government and educational institutions, focusing on scalable solutions and user experience.",
      highlights: [
        "Electronic Billing System development",
        "Learning Management System for government schools",
        "Full-stack web application development"
      ]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "National Innovation Center",
      location: "Nepal",
      period: "2022",
      type: "Internship",
      description: "Gained hands-on experience in software development processes and contributed to educational technology projects.",
      highlights: [
        "Software development fundamentals",
        "Team collaboration and agile methodologies",
        "Educational technology solutions"
      ]
    }
  ];

  const certifications = [
    {
      "title": "Soft Skills Training",
      "provider": "Skill Lab",
      "year": "2024 AD",
      "description": "A practical training environment for developing essential non-technical skills.It provides hands-on experience and tools for activities to prepare individuals for the workforce. The program focuses on personal growth, including self-management, emotional intelligence, and interpersonal awareness. Key skills developed include communication, teamwork, adaptability, negotiation, and professionalism[cite: 1]."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey from web development to AI and cloud computing
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="portfolio-card">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-accent font-medium">
                              <Building2 className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{exp.description}</p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="hero-text">Professional Development</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                  <p className="text-accent font-medium mb-2">{cert.provider}</p>
                  <p className="text-muted-foreground text-sm mb-3">{cert.year}</p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;