import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";
import profileImage from "@/assets/profile-dileep.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer on a journey from web development to the cutting-edge fields of AI and cloud computing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <img
                  src={profileImage}
                  alt="Dileep Chaudhary"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Designing Solutions, Not Just Visuals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Dileep Chaudhary, a dedicated developer with a passion for continuous learning and innovation. 
                My journey began in web development, where I honed my skills in creating robust applications and 
                user-friendly interfaces. Now, I'm transitioning into the exciting realms of artificial intelligence 
                and cloud computing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm privileged to be a <span className="accent-text font-medium">Fusemachines AI Fellow</span> and 
                an <span className="accent-text font-medium">Adex International Cloud Apprentice</span>, where I'm expanding 
                my expertise in machine learning, AI technologies, and cloud infrastructure.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="portfolio-card">
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Passion</h4>
                  <p className="text-sm text-muted-foreground">For continuous learning and innovation</p>
                </CardContent>
              </Card>
              <Card className="portfolio-card">
                <CardContent className="p-4 text-center">
                  <Lightbulb className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Creating solutions that matter</p>
                </CardContent>
              </Card>
              <Card className="portfolio-card">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Growth</h4>
                  <p className="text-sm text-muted-foreground">Always learning new technologies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="hero-text">Education</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Master's in Information Technology</h4>
                    <p className="text-muted-foreground mb-1">Institute of Science and Technology (IOST)</p>
                    <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bachelor of Science in CSIT</h4>
                    <p className="text-muted-foreground mb-1">National Infotech College</p>
                    <p className="text-sm text-muted-foreground">Computer Science and Information Technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;