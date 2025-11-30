// src/components/ModernDashboard.jsx
import React, { useEffect, useState } from 'react';
import { User, Mail, CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import apiClient from '../auth/ApiClient';

function Dashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [taskSummary, setTaskSummary] = useState({
    taskCompleted: 0,
    taskPending: 0,
    taskOngoing: 0,
  });
  const [dailyScore, setDailyScore] = useState(0);
  const [weeklyScore, setWeeklyScore] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      const [userRes, summaryRes, dailyRes, weeklyRes] = await Promise.all([
        apiClient.get('api/v1/user/get'),
        apiClient.get('api/v1/dashboard/get/taskSummary'),
        apiClient.get('api/v1/dashboard/get/dailyScore'),
        apiClient.get('api/v1/dashboard/get/weeklyScore'),
      ]);

      setName(userRes.data.data.name);
      setEmail(userRes.data.data.email);

      const summary = summaryRes.data.data;
      setTaskSummary({
        taskCompleted: summary[0],
        taskPending: summary[1],
        taskOngoing: summary[2],
      });

      setDailyScore(dailyRes.data.data.currScore);

      const weekly = weeklyRes.data.data;
      setWeeklyScore([
        weekly.day1, weekly.day2, weekly.day3, weekly.day4,
        weekly.day5, weekly.day6, weekly.day7
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const CircularProgress = ({ percentage, size = 120, label }) => {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <div style={{ position: 'relative', width: size, height: size }}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#1a1a1a"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#3b82f6"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: size === 120 ? '1.5rem' : '1rem',
            fontWeight: 700,
            color: '#ffffff',
          }}>
            {percentage}%
          </div>
        </div>
        {label && (
          <span style={{
            fontSize: '0.875rem',
            color: '#a0a0a0',
            fontWeight: 500,
          }}>
            {label}
          </span>
        )}
      </div>
    );
  };

  const taskStats = [
    {
      label: 'Completed',
      value: taskSummary.taskCompleted,
      icon: CheckCircle,
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.1)',
    },
    {
      label: 'Ongoing',
      value: taskSummary.taskOngoing,
      icon: Clock,
      color: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.1)',
    },
    {
      label: 'Pending',
      value: taskSummary.taskPending,
      icon: AlertCircle,
      color: '#6b7280',
      bg: 'rgba(107, 114, 128, 0.1)',
    },
  ];

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #1a1a1a',
          borderTopColor: '#3b82f6',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite',
        }} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
          }}>
            Dashboard
          </h1>
          <p style={{ fontSize: '0.9375rem', color: '#a0a0a0' }}>
            Track your productivity and performance
          </p>
        </div>

        {/* Profile & Daily Score */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          {/* Profile Card */}
          <div style={{
            padding: '1.5rem',
            background: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '1rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
              }}>
                {name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}>
                  {name}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#a0a0a0',
                }}>
                  {email}
                </p>
              </div>
            </div>
            <div style={{
              height: '1px',
              background: 'rgba(255, 255, 255, 0.06)',
              margin: '1rem 0',
            }} />
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#a0a0a0',
            }}>
              <User size={16} />
              <span>Active Member</span>
            </div>
          </div>

          {/* Daily Score Card */}
          <div style={{
            padding: '1.5rem',
            background: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <CircularProgress percentage={dailyScore} label="Daily Score" />
          </div>
        </div>

        {/* Task Summary */}
        <div style={{
          padding: '1.5rem',
          background: '#141414',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '1rem',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <TrendingUp size={20} />
            Task Overview
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
          }}>
            {taskStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  style={{
                    padding: '1rem',
                    background: stat.bg,
                    border: `1px solid ${stat.color}33`,
                    borderRadius: '0.75rem',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}>
                    <Icon size={20} style={{ color: stat.color }} />
                    <span style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: stat.color,
                    }}>
                      {stat.value}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#a0a0a0',
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Score */}
        <div style={{
          padding: '1.5rem',
          background: '#141414',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '1rem',
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '1.5rem',
          }}>
            Weekly Performance
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '1rem',
          }}>
            {weeklyScore.map((score, index) => (
              <div
                key={index}
                style={{
                  padding: '1rem',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <CircularProgress percentage={score} size={80} />
                <p style={{
                  fontSize: '0.75rem',
                  color: '#a0a0a0',
                  marginTop: '0.5rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Day {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;