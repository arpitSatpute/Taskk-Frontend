// src/components/About.jsx
import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  BarChart3, 
  Bell, 
  Shield, 
  Zap,
  Target,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

function About() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Task Management',
      description: 'Create, update, and organize your tasks with an intuitive interface. Mark tasks as pending, ongoing, or completed to track your progress effectively.',
      color: '#10b981',
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'All changes are reflected instantly across your dashboard. Your task status, daily score, and weekly performance update in real-time as you work.',
      color: '#f59e0b',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'View detailed insights into your productivity with daily and weekly scores. Track your completion rates and identify patterns in your work habits.',
      color: '#3b82f6',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay on top of your tasks with timely reminders. Never miss a deadline with our intelligent notification system that keeps you informed.',
      color: '#8b5cf6',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with industry-standard encryption. We use JWT authentication and secure APIs to ensure your information stays safe.',
      color: '#ef4444',
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Built with modern technologies for lightning-fast performance. React frontend with optimized API calls ensures a smooth, responsive experience.',
      color: '#06b6d4',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Create Your Account',
      description: 'Sign up with your email and create a secure account. Your personalized dashboard is ready instantly.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Add Your Tasks',
      description: 'Create tasks with titles and descriptions. Organize your work and set your priorities for the day.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Track Progress',
      description: 'Update task status as you work. Move tasks from pending to ongoing to completed as you make progress.',
      icon: TrendingUp,
    },
    {
      step: '04',
      title: 'Analyze Performance',
      description: 'View your daily and weekly scores on the dashboard. Get insights into your productivity patterns and improve over time.',
      icon: Award,
    },
  ];

  const techStack = [
    { name: 'React', description: 'Modern UI framework for building interactive interfaces' },
    { name: 'Spring Boot', description: 'Backend runtime for handling API requests' },
    { name: 'PostgreSQL', description: 'Database for storing user data and tasks' },
    { name: 'JWT', description: 'Secure authentication and authorization' },
    { name: 'Axios', description: 'HTTP client for API communication' },
    { name: 'React Router', description: 'Client-side routing and navigation' },
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
          About Taskk
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
          Simple Task Management,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Powerful Results
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
          Taskk is designed to help you organize your life with minimal effort and maximum efficiency. 
          Our focus-friendly interface and smart tracking features make productivity effortless.
        </p>
      </section>

      {/* Features Grid */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
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
            Core Features
          </h2>
          <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>
            Everything you need to manage your tasks effectively
          </p>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .features-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '1rem',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${feature.color}33`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: `${feature.color}15`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: feature.color,
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#a0a0a0',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
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
            How Taskk Works
          </h2>
          <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>
            Get started in four simple steps
          </p>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .howitworks-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .howitworks-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <div
          className="howitworks-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          {howItWorks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '1rem',
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                  }}
                >
                  {item.step}
                </div>
                <div
                  style={{
                    marginTop: '1.5rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3b82f6',
                    }}
                  >
                    <Icon size={28} />
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#a0a0a0',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
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
            Built With Modern Technology
          </h2>
          <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>
            Powered by industry-leading tools and frameworks
          </p>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .tech-stack-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .tech-stack-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <div
          className="tech-stack-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              style={{
                padding: '2rem',
                background: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '0.75rem',
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.background = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.background = '#141414';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h4
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#3b82f6',
                  marginBottom: '0.75rem',
                }}
              >
                {tech.name}
              </h4>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#a0a0a0',
                  lineHeight: 1.6,
                }}
              >
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
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
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Start Your Productivity Journey
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
              Join us today and experience a better way to manage your tasks
            </p>
            <button
              onClick={() => (window.location.href = '/signup')}
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
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;