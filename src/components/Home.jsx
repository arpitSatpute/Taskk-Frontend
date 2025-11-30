import React from "react";
import { CheckCircle, Shield, BarChart3, Clock, Award, TrendingUp, ArrowRight } from "lucide-react";

function Home() {
  const features = [
    {
      icon: <CheckCircle size={24} />,
      title: "Smart Task Management",
      description: "Create, organize, and track tasks with an intuitive interface designed for productivity.",
      color: "#3b82f6"
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Private",
      description: "Your data is protected with advanced encryption and security protocols.",
      color: "#10b981"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-time Analytics",
      description: "Track your progress with daily and weekly performance insights.",
      color: "#f59e0b"
    },
    {
      icon: <Clock size={24} />,
      title: "Never Miss Deadlines",
      description: "Get timely notifications to stay on top of your important tasks.",
      color: "#06b6d4"
    },
    {
      icon: <Award size={24} />,
      title: "Achievement System",
      description: "Stay motivated with daily and weekly scores that track your productivity.",
      color: "#8b5cf6"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Progress Tracking",
      description: "Visualize your journey with detailed performance metrics over time.",
      color: "#ef4444"
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              color: "#3b82f6",
              marginBottom: "2rem",
            }}
          >
            Productivity Redefined
          </div>
          
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Organize Your Life,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Task at a Time
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#a0a0a0",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            A minimal, focus-friendly task management app that helps you stay productive
            with smart tracking and insightful analytics.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => (window.location.href = "/signup")}
              style={{
                padding: "0.875rem 2rem",
                background: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 150ms",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Start Free Today
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => (window.location.href = "/dashboard")}
              style={{
                padding: "0.875rem 2rem",
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 150ms",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#1a1a1a";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#ffffff",
            }}
          >
            Everything You Need
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#a0a0a0",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Powerful features designed to help you stay organized and productive
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: "2rem",
                background: "#141414",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "1rem",
                transition: "all 200ms",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: `${feature.color}15`,
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  color: "#ffffff",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#a0a0a0",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
        }}
      >
        <div
          style={{
            padding: "4rem 2rem",
            background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "1.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "#ffffff",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#a0a0a0",
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Join thousands of users who are already managing their tasks more efficiently
            </p>
            <button
              onClick={() => (window.location.href = "/signup")}
              style={{
                padding: "1rem 2.5rem",
                background: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 150ms",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Create Your Free Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;