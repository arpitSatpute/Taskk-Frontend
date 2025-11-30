// src/components/Contact.jsx
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  MessageCircle,
  Send,
  MapPin,
  Phone,
  Globe,
  ExternalLink,
  X,
  TwitchIcon,
  TwitterIcon
} from 'lucide-react';

function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/arpitSatpute',
      username: '@arpitSatpute',
      description: 'Check out my open source projects and contributions',
      color: '#ffffff',
      bgColor: 'rgba(255, 255, 255, 0.1)',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/arpitsatpute/',
      username: 'arpitsatpute',
      description: 'Connect with me professionally and view my experience',
      color: '#0077b5',
      bgColor: 'rgba(0, 119, 181, 0.1)',
    },
    {
      name: 'X',
      icon: TwitterIcon,
      url: 'https://x.com/arpits_jsx',
      username: '@arpits_jsx',
      description: 'Follow for updates and behind-the-scenes content',
      color: '#2d479bff',
      bgColor: 'rgba(0, 119, 181, 0.1)',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:arpitrameshsatpute6986@gmail.com',
      username: 'arpitrameshsatpute6986@gmail.com',
      description: 'Send me an email for business inquiries',
      color: '#ea4335',
      bgColor: 'rgba(234, 67, 53, 0.1)',
    },
    
    
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nagpur, Maharashtra, India',
      color: '#10b981',
    },
    {
      icon: Phone,
      title: 'Availability',
      value: 'Open to opportunities',
      color: '#3b82f6',
    },
    {
      icon: Globe,
      title: 'Languages',
      value: 'English, Hindi, Marathi',
      color: '#8b5cf6',
    },
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            color: '#3b82f6',
            marginBottom: '1.5rem',
          }}
        >
          Get In Touch
        </div>
        
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            color: '#ffffff',
          }}
        >
          Let's Connect &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Collaborate
          </span>
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            color: '#a0a0a0',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          I'm always excited to connect with fellow developers, potential collaborators, 
          and anyone interested in technology. Reach out through any of these platforms!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1.5rem 4rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${info.color}33`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: `${info.color}15`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: info.color,
                  }}
                >
                  <Icon size={28} />
                </div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {info.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#a0a0a0',
                  }}
                >
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social Links Grid */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.75rem',
            }}
          >
            Connect With Me
          </h2>
          <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>
            Choose your preferred platform to get in touch
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .social-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <div
          className="social-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '2rem',
                  background: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 200ms',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${social.color}66`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${social.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: social.bgColor,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: social.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: '#ffffff',
                        }}
                      >
                        {social.name}
                      </h3>
                      <ExternalLink
                        size={16}
                        style={{
                          color: '#666666',
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: social.color,
                        fontFamily: 'monospace',
                      }}
                    >
                      {social.username}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#a0a0a0',
                    lineHeight: 1.6,
                  }}
                >
                  {social.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >
        <div
          style={{
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '1.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <Mail size={32} style={{ color: '#ffffff' }} />
            </div>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Have a Project in Mind?
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#a0a0a0',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem',
              }}
            >
              Whether it's a collaboration, job opportunity, or just a friendly chat, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <button
              onClick={() => window.location.href = 'mailto:arpitrameshsatpute6986@gmail.com'}
              style={{
                padding: '1rem 2.5rem',
                background: '#3b82f6',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 150ms',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#2563eb';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#3b82f6';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={20} />
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >
        <div
          style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '0.75rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.9375rem',
              color: '#a0a0a0',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: '#3b82f6', fontWeight: 600 }}>Quick Response:</span>{' '}
            I typically respond to messages within 24-48 hours. For urgent matters, 
            please use email or LinkedIn for the fastest response.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;