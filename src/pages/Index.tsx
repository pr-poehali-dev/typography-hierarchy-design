import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen wood-texture">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-script text-3xl text-foreground">Jalsone</div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                CONTACT US
              </button>
            </div>
            <div className="flex gap-4">
              <Icon name="Facebook" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Mail" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4a35d3f4-550d-485e-ab92-7f625e90507c.jpg"
            alt="Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-8xl md:text-9xl font-bold mb-6 tracking-tight leading-none">
              I AM
              <br />
              DESIGNER
            </h1>
            <p className="font-script text-4xl md:text-5xl text-primary mb-8">
              I Make Wonderful Things
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm uppercase tracking-widest">
              READ MORE
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-6xl font-bold mb-8 uppercase tracking-tight">
                CREATIVE AND
                <br />
                PROFESSIONAL
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { name: 'John Johnson', role: 'Manager', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
                { name: 'Anna Anderson', role: 'Designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
                { name: 'Peter Peterson', role: 'Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
              ].map((member, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={32} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">OUR SERVICES</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide professional design and development services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Palette', title: 'Graphic Design', description: 'Creating stunning visual identities and brand materials that make your business stand out.' },
              { icon: 'Code', title: 'Web Development', description: 'Building responsive and modern websites with cutting-edge technologies and best practices.' },
              { icon: 'Smartphone', title: 'Mobile Apps', description: 'Developing intuitive mobile applications for iOS and Android platforms.' },
              { icon: 'Search', title: 'SEO Optimization', description: 'Improving your website visibility and rankings in search engines.' },
              { icon: 'PenTool', title: 'UI/UX Design', description: 'Designing user-friendly interfaces that provide excellent user experience.' },
              { icon: 'Megaphone', title: 'Marketing', description: 'Strategic marketing campaigns to grow your business and reach new audiences.' },
            ].map((service, index) => (
              <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl transition-all group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} size={40} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">SELECTED WORK</h2>
            <p className="text-muted-foreground text-lg">A showcase of our best projects</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4a35d3f4-550d-485e-ab92-7f625e90507c.jpg', title: 'Workspace Design', category: 'Interior / Photography' },
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4fb342cc-4a6b-408a-b8a9-db516a382255.jpg', title: 'Creative Studio', category: 'Web Design / Branding' },
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/cafb4c6b-640a-47fe-8327-adda6762b68b.jpg', title: 'Professional Portrait', category: 'Photography / Branding' },
              { img: 'https://cdn.poehali.dev/projects/9846e494-419c-4a9b-a3eb-35dadb666347/files/4a35d3f4-550d-485e-ab92-7f625e90507c.jpg', title: 'Modern Workspace', category: 'Web Design / UI/UX' },
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">GET IN TOUCH</h2>
              <p className="text-muted-foreground text-lg">
                Let's discuss your next project
              </p>
            </div>
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Name</label>
                    <Input placeholder="Your Name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Subject</label>
                  <Input placeholder="Project inquiry" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={6} className="bg-background/50" />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-sm uppercase tracking-widest">
                  SEND MESSAGE
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-script text-3xl text-foreground">Jalsone</div>
            <p className="text-muted-foreground text-sm">
              © 2025 Jalsone. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Icon name="Facebook" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;