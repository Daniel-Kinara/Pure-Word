import { useState } from 'react';
import { 
  FiSettings, FiUsers, FiCalendar, FiImage, FiUpload, 
  FiSave, FiTrash2, FiEdit2, FiEye, FiPlus
} from 'react-icons/fi';
import EventManager from './EventManager';
import GalleryManager from './GalleryManager';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // In production, check auth state

  // Mock dashboard stats
  const stats = [
    { label: 'Total Members', value: '527', change: '+12', icon: <FiUsers /> },
    { label: 'Upcoming Events', value: '8', change: '+2', icon: <FiCalendar /> },
    { label: 'Gallery Photos', value: '156', change: '+24', icon: <FiImage /> },
    { label: 'Recent Activity', value: '42', change: '+8', icon: <FiEye /> }
  ];

  // Recent activities
  const activities = [
    { id: 1, type: 'event', action: 'added', title: 'Youth Camp 2024', time: '2 hours ago' },
    { id: 2, type: 'gallery', action: 'uploaded', title: 'Sunday Service Photos', time: '1 day ago' },
    { id: 3, type: 'user', action: 'registered', title: 'John Doe', time: '2 days ago' },
    { id: 4, type: 'event', action: 'updated', title: 'Bible Study Schedule', time: '3 days ago' }
  ];

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h2>Admin Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="page-header admin-header">
        <div className="page-header-content">
          <h1>Church Admin Panel</h1>
          <p className="subtitle">Manage church content, events, and gallery</p>
        </div>
      </div>

      <div className="admin-container">
        <div className="admin-sidebar">
          <div className="admin-profile">
            <div className="profile-avatar">PW</div>
            <div className="profile-info">
              <h3>Church Admin</h3>
              <p>Pure Word Church</p>
            </div>
          </div>

          <nav className="admin-nav">
            <button 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <FiSettings /> Dashboard
            </button>
            <button 
              className={`nav-item ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <FiCalendar /> Manage Events
            </button>
            <button 
              className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              <FiImage /> Manage Gallery
            </button>
            <button 
              className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <FiUsers /> Manage Users
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <FiSettings /> Settings
            </button>
          </nav>

          <div className="admin-quick-actions">
            <h4>Quick Actions</h4>
            <button className="quick-action">
              <FiPlus /> Add Event
            </button>
            <button className="quick-action">
              <FiUpload /> Upload Photos
            </button>
            <button className="quick-action">
              <FiEdit2 /> Edit Homepage
            </button>
          </div>
        </div>

        <div className="admin-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard">
              <div className="dashboard-header">
                <h2>Welcome back, Admin</h2>
                <p>Here's what's happening with your church today.</p>
              </div>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                    <div className="stat-change positive">
                      {stat.change} this month
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-section">
                <div className="section-header">
                  <h3>Recent Activity</h3>
                  <button className="btn-text">View All</button>
                </div>
                <div className="activities-list">
                  {activities.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-icon">
                        {activity.type === 'event' && <FiCalendar />}
                        {activity.type === 'gallery' && <FiImage />}
                        {activity.type === 'user' && <FiUsers />}
                      </div>
                      <div className="activity-content">
                        <p>
                          <strong>{activity.title}</strong> was {activity.action}
                        </p>
                        <span className="activity-time">{activity.time}</span>
                      </div>
                      <button className="activity-action">
                        <FiEye />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-section">
                <div className="section-header">
                  <h3>Quick Updates</h3>
                </div>
                <div className="quick-updates">
                  <div className="update-form">
                    <textarea placeholder="What's new? Share updates with the church..." rows="3"></textarea>
                    <div className="form-actions">
                      <button className="btn-secondary">Add Photo</button>
                      <button className="btn-primary">
                        <FiSave /> Publish Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && <EventManager />}
          {activeTab === 'gallery' && <GalleryManager />}

          {activeTab === 'users' && (
            <div className="users-management">
              <h2>User Management</h2>
              <p>Coming soon...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-management">
              <h2>Church Settings</h2>
              <p>Coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;