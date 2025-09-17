import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Palette, Figma, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onSectionChange: (section: string) => void;
}

const ServicesSection = ({ onSectionChange }: ServicesSectionProps) => {
  const services = [
    {
      title: "Web App Template Design",
      description: "Custom web application templates built with modern frameworks like React, Next.js, and Django. Responsive, scalable, and optimized for performance.",
      icon: Globe,
      features: [
        "Responsive design across all devices",
        "Modern UI/UX principles",
        "Performance optimized",
        "Clean, maintainable code",
        "SEO-friendly structure"
      ],
      color: "text-primary"
    },
    {
      title: "Logo Creation",
      description: "Professional logo design that captures your brand identity. From concept to final delivery, creating memorable visual identities.",
      icon: Palette,
      features: [
        "Brand identity consultation",
        "Multiple design concepts",
        "Vector-based designs",
        "Brand guidelines included",
        "Various file formats provided"
      ],
      color: "text-accent"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions using Figma. Creating intuitive interfaces that provide exceptional user experiences.",
      icon: Figma,
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Interactive design systems",
        "Usability testing",
        "Design handoff documentation"
      ],
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional design and development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="portfolio-card h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  
                  <div className="space-y-3 flex-1">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => onSectionChange("contact")}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">
            <span className="hero-text">My Working Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Design", description: "Creating wireframes and visual concepts" },
              { step: "03", title: "Develop", description: "Building with clean, efficient code" },
              { step: "04", title: "Deliver", description: "Testing, optimization, and final delivery" }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="font-semibold text-lg mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.description}</p>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="hero-text">Ready to Start Your Project?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's work together to create something amazing. Get in touch to discuss your ideas and requirements.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent"
                onClick={() => onSectionChange("contact")}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;