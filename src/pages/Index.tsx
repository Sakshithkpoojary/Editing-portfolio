import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Play, 
  Camera, 
  Palette, 
  Film, 
  Mail, 
  MapPin, 
  Phone,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from "lucide-react";
import heroImage from "@/assets/dog.webp";
import aboutMePhoto from "@/assets/prad.jpg";
import caterpillarImage from "@/assets/Caterpillar.webp";
import carImage from "@/assets/car.webp";
import flower1Image from "@/assets/flower1.jpg";
// Import videos directly from assets
import iphoneVideo from "@/assets/temple.mp4";
import sudeerVideo from "@/assets/ve2.mp4";
import templeVideo from "@/assets/ve3.mp4";
// Import vertical video styles
import "@/components/VerticalVideo.css";

// Define the interface for portfolio items
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  isVideo: boolean;
  videoSrc?: string;
}

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const portfolioItems: PortfolioItem[] = [
   
    {
      id: 7,
      title: "Nature Photography",
      category: "Photo Editing",
      image: caterpillarImage,
      isVideo: false
    },
    {
      id: 8,
      title: "Automotive Photography",
      category: "Photo Editing",
      image: carImage,
      isVideo: false
    },
    {
      id: 9,
      title: "Flower Photography",
      category: "Photo Editing",
      image: flower1Image,
      isVideo: false
    },
    {
      id: 10,
      title: "Mahamastakabhisheka 2024", 
      category: "Video Editing",
      image: "https://res.cloudinary.com/djrcyva0f/video/upload/v1757405417/temple_xpgk8a.mp4",
      isVideo: true,
      videoSrc: iphoneVideo
    },
    {
      id: 11,
      title: "When you’re still buffering life at age 2",
      category: "Video Editing",
      image: "https://res.cloudinary.com/djrcyva0f/video/upload/v1758515502/ve2_bbwdl0.mp4",
      isVideo: true,
      videoSrc: sudeerVideo
    },
    {
      id: 12,
      title: "When the party starts hitting different",
      category: "Video Editing",
      image: "https://res.cloudinary.com/djrcyva0f/video/upload/v1758515499/ve3_nobacq.mp4",
      isVideo: true,
      videoSrc: templeVideo
    }
  ];

  const services = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Professional video editing with seamless transitions, color grading, and storytelling."
    },
    {
      icon: Camera,
      title: "Photo Retouching",
      description: "Expert photo editing and retouching for portraits, products, and events."
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Advanced color correction and grading to enhance the mood and tone of your content."
    },
    {
      icon: Play,
      title: "Motion Graphics",
      description: "Engaging motion graphics and animations to bring your content to life."
    }
  ];

  // Testimonials section removed as requested

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">PRADHII</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Creative
                <span className="text-gradient block">Video & Photo</span>
                Editor
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforming your vision into stunning visual stories through expert video editing and photo retouching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary rounded-lg px-8 py-4 text-lg">
                  <a href="#portfolio" className="">View My Work</a>
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary rounded-lg px-8 py-4 text-lg">
                  <a href="#contact" className="">Contact Me</a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                              <div className="relative w-full max-w-2xl mx-auto">
                <img 
                  src={heroImage} 
                  alt="Yellow flower - Grow with understanding"
                  className="rounded-2xl shadow-hover w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white text-center">
            
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={aboutMePhoto}
                  alt="Alex Rivera - Video and Photo Editor"
                  className="rounded-2xl shadow-elegant w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hi, I'm pradvith, a passionate video and photo editor with over 3 years of experience creating compelling visual content. I specialize in transforming raw footage and photos into polished, professional content that tells your story.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From wedding highlights to corporate videos, fashion photography to product shots, I bring creativity and technical expertise to every project. My goal is to exceed your expectations and bring your vision to life.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Years of Experience</h4>
                  <p className="text-3xl font-bold text-primary">3+</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Projects Completed</h4>
                  <p className="text-3xl font-bold text-primary">300+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in video editing and photo retouching
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="card-elegant rounded-2xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  {item.videoSrc ? (
                    <div className="vertical-video-container">
                        <video 
                          src={item.videoSrc}
                          controls
                          autoPlay
                          loop
                          muted
                          className="vertical-video"
                        />
                      </div>
                  ) : (
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {item.isVideo && !item.videoSrc && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.isVideo ? "Video project with cinematic editing" : "Professional photo editing and retouching"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional editing services tailored to your creative needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant rounded-2xl p-8 text-center group">
                <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section removed as requested */}

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">acharyapradvith@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+917204944946</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Venur</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/pradhii.___?igsh=bzRibjhxY3R0ZXpl" className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="card-elegant rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="rounded-lg"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="rounded-lg"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="rounded-lg min-h-32"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-primary rounded-lg py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient mb-4">PRADHII</div>
            <p className="text-muted-foreground mb-6">
              Creating stunning visual stories through expert video editing and photo retouching.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Deepak. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <div id="root"></div>
    </div>
  );
};

export default Index;