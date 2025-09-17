import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Dileepchy",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dileep-chaudhary/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:dileepchau3@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 section-bg border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="hero-text">Dileep Chaudhary</span>
            </h3>
            <p className="text-muted-foreground">
              AI/ML enthusiast and full-stack developer creating innovative solutions 
              for the future of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["About", "Skills", "Experience", "Projects", "Services"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-card hover:bg-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Dileep Chaudhary. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;