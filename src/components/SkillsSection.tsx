import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "PHP"],
      color: "text-primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      skills: [
        "Django", "Flask", "FastAPI", "Express.js", "Next.js", "React.js", 
        "Node.js", "NumPy", "Pandas", "Matplotlib", "PyTorch", "TensorFlow", 
        "Scikit-learn", "LangChain"
      ],
      color: "text-accent"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (S3, Lambda)", "Git", "Docker", "MLOps"],
      color: "text-primary"
    },
    {
      title: "Databases & NLP",
      icon: Database,
      skills: [
        "MySQL", "MongoDB", "PostgreSQL", "spaCy", "NLTK", 
        "Hugging Face Transformers"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning web development, AI/ML, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="portfolio-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag px-3 py-1 rounded-full text-sm font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="hero-text">Current Focus Areas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Artificial Intelligence</h4>
                <p className="text-muted-foreground">Machine Learning, Deep Learning, NLP, and AI model development</p>
              </CardContent>
            </Card>
            <Card className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Cloud Computing</h4>
                <p className="text-muted-foreground">AWS services, cloud architecture, and scalable solutions</p>
              </CardContent>
            </Card>
            <Card className="portfolio-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Full-Stack Development</h4>
                <p className="text-muted-foreground">End-to-end web applications with modern frameworks</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;