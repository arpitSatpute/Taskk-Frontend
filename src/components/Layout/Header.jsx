import React, { useState, useEffect } from "react";
import { Menu, X, Home, CheckSquare, BarChart2, LogOut, Info, Mail } from "lucide-react";

function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Tasks", path: "/task", icon: CheckSquare },
    { name: "Dashboard", path: "/dashboard", icon: BarChart2 },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <nav style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#ffffff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
              }}
            >
              T
            </div>
            <span>Taskk</span>
          </a>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              gap: "0.25rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = window.location.pathname === link.path;
              
              return (
                <a
                  key={link.path}
                  href={link.path}
                  style={{
                    padding: "0.625rem 1rem",
                    color: isActive ? "#ffffff" : "#a0a0a0",
                    backgroundColor: isActive ? "#1a1a1a" : "transparent",
                    textDecoration: "none",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    transition: "all 150ms",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    border: isActive ? "1px solid rgba(59, 130, 246, 0.2)" : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.color = "#ffffff";
                      e.target.style.backgroundColor = "#1a1a1a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = "#a0a0a0";
                      e.target.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <Icon size={16} />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button & User Menu */}
          <div
            style={{
              display: "none",
              gap: "0.5rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {localStorage.getItem('accessToken') ? (
              <button
                onClick={handleLogout}
                style={{
                  padding: "0.625rem 1.25rem",
                  background: "transparent",
                  color: "#a0a0a0",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 150ms",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ef4444";
                  e.target.style.borderColor = "rgba(239, 68, 68, 0.3)";
                  e.target.style.backgroundColor = "rgba(239, 68, 68, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#a0a0a0";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => (window.location.href = "/login")}
                  style={{
                    padding: "0.625rem 1.25rem",
                    background: "transparent",
                    color: "#a0a0a0",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 150ms",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.backgroundColor = "#1a1a1a";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#a0a0a0";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => (window.location.href = "/signup")}
                  style={{
                    padding: "0.625rem 1.25rem",
                    background: "#3b82f6",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 150ms",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#2563eb";
                    e.target.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#3b82f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
              background: "transparent",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem 0",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = window.location.pathname === link.path;
              
              return (
                <a
                  key={link.path}
                  href={link.path}
                  style={{
                    padding: "0.75rem 1rem",
                    color: isActive ? "#ffffff" : "#a0a0a0",
                    backgroundColor: isActive ? "#1a1a1a" : "transparent",
                    textDecoration: "none",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    transition: "all 150ms",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    border: isActive ? "1px solid rgba(59, 130, 246, 0.2)" : "1px solid transparent",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  {link.name}
                </a>
              );
            })}
            
            <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.06)", margin: "0.5rem 0" }} />
            
            {localStorage.getItem('accessToken') ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  padding: "0.75rem 1rem",
                  background: "transparent",
                  color: "#ef4444",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  backgroundColor: "rgba(239, 68, 68, 0.05)",
                }}
              >
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    window.location.href = "/login";
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "transparent",
                    color: "#a0a0a0",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/signup";
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "#3b82f6",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

export default ModernHeader;