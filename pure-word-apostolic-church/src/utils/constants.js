// Church information constants
export const CHURCH_INFO = {
  name: "Pure Word Apostolic Church",
  location: "Ogembo Town, Kisii, Kenya",
  established: 2012,
  mission: "To preach the Gospel of Jesus Christ, make disciples of all nations, and demonstrate God's love through compassionate service.",
  vision: "To be a transformative, Spirit-filled community that impacts Ogembo Town, Kisii County, and beyond with the love and power of Jesus Christ.",
  email: "info@purewordchurch.org",
  phone: "+254 712 345 678",
  address: "Ogembo Town, Kisii County, Kenya",
  coordinates: {
    lat: -0.8000,
    lng: 34.7667
  }
};

// Service times
export const SERVICE_TIMES = [
  {
    day: "Sunday",
    services: [
      { time: "9:00 AM", type: "Main Worship Service", duration: "3 hours" },
      { time: "3:00 PM", type: "Youth Service", duration: "2 hours" }
    ]
  },
  {
    day: "Tuesday",
    services: [
      { time: "5:30 AM", type: "Morning Prayer", duration: "1 hour" }
    ]
  },
  {
    day: "Wednesday",
    services: [
      { time: "6:00 PM", type: "Bible Study", duration: "2 hours" }
    ]
  },
  {
    day: "Friday",
    services: [
      { time: "5:30 AM", type: "Morning Prayer", duration: "1 hour" },
      { time: "6:00 PM", type: "Prayer & Healing Service", duration: "2 hours" }
    ]
  },
  {
    day: "Saturday",
    services: [
      { time: "3:00 PM", type: "Youth Fellowship", duration: "2 hours" }
    ]
  }
];

// Ministry categories
export const MINISTRY_CATEGORIES = [
  { id: 'adults', name: 'Adult Ministry', color: '#3498db', icon: 'users' },
  { id: 'youth', name: 'Youth Fellowship', color: '#9b59b6', icon: 'youth' },
  { id: 'children', name: 'Children\'s Church', color: '#2ecc71', icon: 'children' },
  { id: 'men', name: 'Men\'s Fellowship', color: '#2c3e50', icon: 'men' },
  { id: 'women', name: 'Women\'s Ministry', color: '#e74c3c', icon: 'women' },
  { id: 'outreach', name: 'Outreach & Missions', color: '#f39c12', icon: 'outreach' },
  { id: 'prayer', name: 'Prayer Ministry', color: '#1abc9c', icon: 'prayer' },
  { id: 'worship', name: 'Worship Team', color: '#d35400', icon: 'worship' }
];

// Event categories
export const EVENT_CATEGORIES = [
  { id: 'service', name: 'Worship Service', color: '#3498db' },
  { id: 'study', name: 'Bible Study', color: '#2ecc71' },
  { id: 'prayer', name: 'Prayer Meeting', color: '#9b59b6' },
  { id: 'youth', name: 'Youth Event', color: '#f39c12' },
  { id: 'children', name: 'Children\'s Event', color: '#e74c3c' },
  { id: 'outreach', name: 'Community Outreach', color: '#1abc9c' },
  { id: 'fellowship', name: 'Fellowship', color: '#34495e' },
  { id: 'special', name: 'Special Event', color: '#d35400' }
];

// Gallery categories
export const GALLERY_CATEGORIES = [
  { id: 'worship', name: 'Worship Services', count: 0 },
  { id: 'events', name: 'Special Events', count: 0 },
  { id: 'youth', name: 'Youth Ministry', count: 0 },
  { id: 'children', name: 'Children\'s Church', count: 0 },
  { id: 'outreach', name: 'Community Outreach', count: 0 },
  { id: 'leadership', name: 'Leadership', count: 0 },
  { id: 'facilities', name: 'Church Facilities', count: 0 },
  { id: 'others', name: 'Others', count: 0 }
];

// Social media links
export const SOCIAL_MEDIA = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/purewordchurch',
    icon: 'facebook',
    color: '#1877F2'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/purewordchurch',
    icon: 'twitter',
    color: '#1DA1F2'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/purewordchurch',
    icon: 'instagram',
    color: '#E4405F'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/purewordchurch',
    icon: 'youtube',
    color: '#FF0000'
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/254712345678',
    icon: 'whatsapp',
    color: '#25D366'
  }
];

// Navigation routes
export const NAV_ROUTES = [
  { path: '/', label: 'Home', icon: 'home' },
  { 
    path: '/about', 
    label: 'About Us', 
    icon: 'info',
    subRoutes: [
      { path: '/about/mission', label: 'Our Mission' },
      { path: '/about/vision', label: 'Our Vision' },
      { path: '/about/history', label: 'Our History' },
      { path: '/about/values', label: 'Our Values' },
      { path: '/about/strategy', label: 'Our Strategy' },
      { path: '/about/faith', label: 'Statement of Faith' }
    ]
  },
  { path: '/events', label: 'Events', icon: 'calendar' },
  { 
    path: '/ministries', 
    label: 'Ministries', 
    icon: 'users',
    subRoutes: [
      { path: '/ministries/adults', label: 'Adult Ministry' },
      { path: '/ministries/youth', label: 'Youth Fellowship' },
      { path: '/ministries/children', label: 'Children\'s Church' },
      { path: '/ministries/men', label: 'Men\'s Fellowship' },
      { path: '/ministries/women', label: 'Women\'s Ministry' },
      { path: '/ministries/outreach', label: 'Outreach & Missions' }
    ]
  },
  { path: '/gallery', label: 'Gallery', icon: 'image' },
  { path: '/contact', label: 'Contact Us', icon: 'mail' },
  { path: '/admin', label: 'Admin', icon: 'settings', adminOnly: true }
];

// Current year
export const CURRENT_YEAR = new Date().getFullYear();

// API endpoints (for future use)
export const API_ENDPOINTS = {
  events: '/api/events',
  gallery: '/api/gallery',
  ministries: '/api/ministries',
  contact: '/api/contact',
  admin: {
    events: '/api/admin/events',
    gallery: '/api/admin/gallery',
    users: '/api/admin/users'
  }
};

// Local storage keys
export const STORAGE_KEYS = {
  events: 'church_events',
  gallery: 'church_gallery',
  user: 'church_user',
  settings: 'church_settings'
};