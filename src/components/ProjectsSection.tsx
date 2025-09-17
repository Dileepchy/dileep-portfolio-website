import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, ShoppingCart, Shield, MessageSquare, Receipt, GraduationCap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Chatbot for Mental Health Assistant",
      category: "Current Project",
      description: "Developing an AI-powered chatbot to provide mental health support and assistance using natural language processing and machine learning techniques.",
      technologies: ["Python", "TensorFlow", "NLP", "LangChain", "FastAPI"],
      icon: MessageSquare,
      status: "In Progress",
      type: "AI/ML",
      githubUrl: "https://github.com/Dileepchy/AI-Chatbot-for-Mental-Health-Assistant.git",
      liveUrl: "#"
    },
    {
      title: "Titanic Dataset Analysis",
      category: "Academic Project",
      description: "Comprehensive data visualization and analysis of the Titanic dataset with survival prediction models and insights.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      icon: GraduationCap,
      status: "Completed",
      type: "Data Science",
      githubUrl: "https://github.com/Dileepchy/Titanic_data_visualization",
      liveUrl: "#"
    },
    {
      title: "Exploratory Data Analysis (EDA)",
      category: "Academic Project",
      description: "Comprehensive data analysis of Seattle Department of Transportation (SDOT) vehicle collision data using graphical representations to uncover hidden patterns, trends, and relationships. The project focuses on data cleaning, visualization, and statistical testing to provide insights for road safety.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Folium"],
      icon: Shield,
      status: "Completed",
      type: "Data Science",
      githubUrl: "https://github.com/Dileepchy/Exploratory-Data-Analysis",
      liveUrl: "#"
    },
        {
      title: "SMS Spam Detector",
      category: "Academic Project",
      description: "Natural language processing model to classify SMS messages as spam or legitimate using machine learning techniques.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Pandas"],
      icon: Shield,
      status: "Completed",
      type: "NLP",
      githubUrl: "https://github.com/Dileepchy/SMS-Spam-Detector",
      liveUrl: "#"
    },
    {
      title: "Data Wrangling with Pandas",
      category: "Academic Project",
      description: "A comprehensive project focused on practicing data cleaning, transformation, and analysis using the Pandas and NumPy libraries. This project demonstrates skills in handling structured data, inspecting datasets, and preparing data for further analysis.",
      technologies: ["Python", "Pandas", "Numpy"],
      icon: Shield,
      status: "Completed",
      type: "Data Science",
      githubUrl: "https://github.com/Dileepchy/Data-Wrangling-Pandas-.git",
      liveUrl: "#"
    },
    {
      title: "Liver Cirrhosis Stage Prediction",
      category: "Academic Project",
      description: "Machine learning model to predict liver cirrhosis stages using medical data analysis and classification algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      icon: Brain,
      status: "Completed",
      type: "Machine Learning",
      githubUrl: "https://github.com/Dileepchy/Liver-Cirrhosis-Stage-Prediction",
      liveUrl: "#"
    },
    {
      title: "Electronic Billing System",
      category: "Professional Project",
      description: "Comprehensive billing system for businesses with automated invoice generation, payment tracking, and financial reporting capabilities.",
      technologies: ["React", "MongoDB", "JavaScript", "HTML","CSS","Node.js","Express.js"],
      icon: Receipt,
      status: "Completed",
      type: "Web Development",
      githubUrl: "https://github.com/Dileepchy/Kalpa",
      liveUrl: "#"
    },
    {
      title: "Hamro Garden (E-commerce)",
      category: "Academic Project",
      description: "Full-featured e-commerce web application for gardening products with user authentication, cart functionality, and payment integration.",
      technologies: ["PHP", "MySQL", "CSS", "HTML", "JavaScript"],
      icon: ShoppingCart,
      status: "Completed",
      type: "Web Development",
      githubUrl: "https://github.com/Dileepchy/Hamro-Garden-E-commerce-System.git",
      liveUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "In Progress" ? "text-accent" : "text-green-400";
  };

  const getTypeColor = (type: string) => {
    const colors = {
      "AI/ML": "bg-primary/10 text-primary border-primary/20",
      "Web Development": "bg-accent/10 text-accent border-accent/20",
      "Machine Learning": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "NLP": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Data Science": "bg-green-500/10 text-green-400 border-green-500/20"
    };
    return colors[type as keyof typeof colors] || "bg-muted/10 text-muted-foreground border-muted/20";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, AI/ML, and data science projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="portfolio-card h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="skill-tag px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Github className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                <span className="hero-text">Explore More on GitHub</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my complete collection of projects, contributions, and code samples on GitHub.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => window.open('https://github.com/Dileepchy', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;