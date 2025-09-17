import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Code,
  Brain,
  Cloud,
  Sparkles,
  Star,
} from "lucide-react";
import profileImage from "@/assets/profile-dileep.jpg";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 hero-gradient relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl"></div>

        {/* Floating orbital elements */}
        <div className="hero-orbital top-1/4 left-1/4 w-4 h-4 bg-accent/30 hero-orbital-reverse"></div>
        <div className="hero-orbital top-3/4 right-1/4 w-6 h-6 bg-primary/40"></div>
        <div className="hero-orbital top-1/2 right-1/3 w-3 h-3 bg-accent/50 hero-orbital-reverse"></div>
        <div className="hero-orbital bottom-1/3 left-1/3 w-5 h-5 bg-primary/30"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Greeting with floating animation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 py-2 floating-animation">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-shimmer">Dileep</span>
              <span className="block hero-text">Chaudhary</span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                <span className="text-foreground/90">From </span>
                <span className="accent-text">Web Development</span>
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                <span className="text-foreground/90">to </span>
                <span className="hero-text">AI/ML & Cloud</span>
              </h2>
            </div>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A passionate developer transitioning from web development to the
            exciting realms of
            <span className="text-accent font-medium">
              {" "}
              artificial intelligence
            </span>{" "}
            and
            <span className="text-accent font-medium"> cloud computing</span>.
            Currently a
            <span className="text-accent font-medium">
              {" "}
              Fusemachines AI Fellow
            </span>{" "}
            and
            <span className="text-accent font-medium">
              {" "}
              Adex International Cloud Apprentice
            </span>
            .
          </p>

          {/* Action Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent hover:scale-105 transition-all duration-300 group"
              onClick={() => onSectionChange("projects")}
            >
              <Star className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="https://drive.google.com/file/d/1F_90milrb6eAtsCfbc_yHRfSr9oh9H6U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-morphism border-foreground/20 text-foreground hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Floating Tech Stack Icons */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="glass-morphism p-3 rounded-full floating-animation">
                <Code className="w-5 h-5 text-accent" />
              </div>
              <div className="glass-morphism p-3 rounded-full floating-animation-delay">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div className="glass-morphism p-3 rounded-full floating-animation">
                <Cloud className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center lg:text-left group">
              <div className="bg-white p-4 rounded-xl mb-2 group-hover:scale-105 transition-transform">
                <div className="text-3xl sm:text-4xl font-bold text-shimmer text-white">
                  2+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Years Experience
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left group">
              <div className="bg-white p-4 rounded-xl mb-2 group-hover:scale-105 transition-transform">
                <div className="text-3xl sm:text-4xl font-bold text-shimmer text-white">
                  10+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left group">
              <div className="bg-white p-4 rounded-xl mb-2 group-hover:scale-105 transition-transform">
                <div className="text-3xl sm:text-4xl font-bold text-shimmer text-white">
                  5+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Profile Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main profile container with enhanced effects */}
            <div className="relative w-80 h-80 rounded-full">
              {/* Animated border rings */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin opacity-75"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute inset-1 rounded-full bg-gradient-to-r from-accent via-primary to-accent animate-spin opacity-50"
                style={{
                  animationDuration: "2s",
                  animationDirection: "reverse",
                }}
              ></div>

              {/* Profile image container */}
              <div className="absolute inset-2 rounded-full bg-background p-2 group">
                <img
                  src={profileImage}
                  alt="Dileep Chaudhary - AI/ML Developer"
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating status badge */}
            <div className="absolute -bottom-6 -right-6 glass-morphism rounded-2xl px-4 py-3 floating-animation">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">
                    Available
                  </div>
                  <div className="text-xs text-muted-foreground">
                    for projects
                  </div>
                </div>
              </div>
            </div>

            {/* Floating skill badges */}
            <div className="absolute -top-8 -left-8 glass-morphism rounded-xl px-3 py-2 floating-animation-delay">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">AI/ML</span>
              </div>
            </div>

            <div className="absolute top-1/4 -right-12 glass-morphism rounded-xl px-3 py-2 floating-animation">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">Cloud</span>
              </div>
            </div>

            <div className="absolute bottom-1/4 -left-12 glass-morphism rounded-xl px-3 py-2 floating-animation-delay">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">Full-Stack</span>
              </div>
            </div>

            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl scale-150 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
