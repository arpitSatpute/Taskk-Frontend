// src/components/ModernFooter.jsx
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import taskkLogo from '../../assets/taskkLogo.png';

function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Home', href: '/' },
      { label: 'Tasks', href: '/task' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/arpitSatpute', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/arpits_jsx', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arpitsatpute/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:arpitrameshsatpute6986@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 1.5rem 1.5rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <img
                src={taskkLogo}
                alt="Taskk Logo"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                }}
              />
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
              }}>
                Taskk
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#a0a0a0',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}>
              Your minimal, focus-friendly task management solution
            </p>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
            }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#141414',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '0.5rem',
                      color: '#a0a0a0',
                      textDecoration: 'none',
                      transition: 'all 150ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#3b82f6';
                      e.currentTarget.style.borderColor = '#3b82f6';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#a0a0a0';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Product
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#a0a0a0',
                      textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#a0a0a0';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Company
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#a0a0a0',
                      textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#a0a0a0';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#666666',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Made with <Heart size={14} style={{ color: '#ef4444' }} /> by Arpit Satpute
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#666666',
          }}>
            © {currentYear} Taskk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ModernFooter;
