// Mock data and local storage utilities

// Events data utilities
export const getEvents = () => {
  try {
    const storedEvents = localStorage.getItem('church_events');
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents);
      return parsedEvents.map(event => ({
        ...event,
        date: new Date(event.date)
      }));
    }
  } catch (error) {
    console.error('Error loading events:', error);
  }

  // Default events if none stored
  const defaultEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      time: "9:00 AM",
      location: "Main Sanctuary",
      description: "Weekly Sunday service with worship, prayer, and preaching",
      category: "service",
      featured: true,
      createdAt: new Date('2024-01-01')
    },
    {
      id: 2,
      title: "Bible Study",
      date: new Date(new Date().setDate(new Date().getDate() + 4)),
      time: "6:00 PM",
      location: "Church Hall",
      description: "In-depth Bible study for all ages",
      category: "study",
      featured: false,
      createdAt: new Date('2024-01-02')
    },
    {
      id: 3,
      title: "Youth Camp",
      date: new Date(new Date().setDate(new Date().getDate() + 7)),
      time: "8:00 AM",
      location: "Church Grounds",
      description: "Annual youth camping and fellowship",
      category: "youth",
      featured: true,
      createdAt: new Date('2024-01-03')
    },
    {
      id: 4,
      title: "Women's Fellowship",
      date: new Date(new Date().setDate(new Date().getDate() + 10)),
      time: "3:00 PM",
      location: "Fellowship Hall",
      description: "Monthly women's prayer and fellowship",
      category: "women",
      featured: false,
      createdAt: new Date('2024-01-04')
    }
  ];

  saveEvents(defaultEvents);
  return defaultEvents;
};

export const saveEvents = (events) => {
  try {
    localStorage.setItem('church_events', JSON.stringify(events));
  } catch (error) {
    console.error('Error saving events:', error);
  }
};

// Gallery images utilities
export const getGalleryImages = () => {
  try {
    const storedImages = localStorage.getItem('church_gallery');
    if (storedImages) {
      const parsedImages = JSON.parse(storedImages);
      return parsedImages.map(img => ({
        ...img,
        date: new Date(img.date)
      }));
    }
  } catch (error) {
    console.error('Error loading gallery images:', error);
  }

  // Default images if none stored
  const defaultImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544414814-0a1f7f3d9c0a?auto=format&fit=crop&w=800&q=80",
      alt: "Church worship service congregation",
      title: "Sunday Morning Worship",
      description: "Our congregation gathering for Sunday service",
      category: "worship",
      date: new Date('2024-01-15'),
      likes: 42
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1501281667305-0d4ebf781e4a?auto=format&fit=crop&w=800&q=80",
      alt: "Church community gathering",
      title: "Community Fellowship",
      description: "Members enjoying fellowship after service",
      category: "events",
      date: new Date('2024-01-10'),
      likes: 38
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=800&q=80",
      alt: "Bible study session",
      title: "Wednesday Bible Study",
      description: "In-depth study of God's word",
      category: "study",
      date: new Date('2024-01-08'),
      likes: 27
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      alt: "Youth group activity",
      title: "Youth Ministry",
      description: "Young people growing in faith together",
      category: "youth",
      date: new Date('2024-01-05'),
      likes: 56
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      alt: "Children's church activities",
      title: "Children's Ministry",
      description: "Teaching children about Jesus",
      category: "children",
      date: new Date('2024-01-03'),
      likes: 34
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      alt: "Community outreach program",
      title: "Community Outreach",
      description: "Serving the local community",
      category: "outreach",
      date: new Date('2024-01-01'),
      likes: 45
    }
  ];

  saveGalleryImages(defaultImages);
  return defaultImages;
};

export const saveGalleryImages = (images) => {
  try {
    localStorage.setItem('church_gallery', JSON.stringify(images));
  } catch (error) {
    console.error('Error saving gallery images:', error);
  }
};

// Ministries data
export const getMinistries = () => {
  return [
    {
      id: 1,
      title: "Adult Ministry",
      description: "Spiritual growth and fellowship for adults of all ages through Bible studies, prayer groups, and discipleship programs.",
      leader: "Elder James Ochieng",
      meetingTime: "Sundays after service & Wednesdays 7 PM",
      contact: "adults@purewordchurch.org",
      stats: {
        members: 150,
        smallGroups: 8,
        activities: "Weekly"
      }
    },
    {
      id: 2,
      title: "Youth Fellowship",
      description: "Engaging the youth in faith through worship, mentorship, and activities that build character and community.",
      leader: "Pastor Sarah Maina",
      meetingTime: "Saturdays 3 PM & Fridays 6 PM",
      contact: "youth@purewordchurch.org",
      stats: {
        members: 80,
        smallGroups: 4,
        activities: "Bi-weekly"
      }
    },
    {
      id: 3,
      title: "Children's Church",
      description: "Nurturing young souls in God's word through age-appropriate teaching, fun activities, and foundational discipleship.",
      leader: "Teacher Mary Atieno",
      meetingTime: "Sundays 9 AM & Special Events",
      contact: "children@purewordchurch.org",
      stats: {
        members: 60,
        ageGroups: 3,
        activities: "Weekly"
      }
    },
    {
      id: 4,
      title: "Men's Fellowship",
      description: "Building godly men through accountability, Bible study, and practical workshops on faith, family, and leadership.",
      leader: "Deacon John Kamau",
      meetingTime: "First Saturday monthly, 8 AM",
      contact: "men@purewordchurch.org",
      stats: {
        members: 70,
        accountabilityGroups: 5,
        activities: "Monthly"
      }
    },
    {
      id: 5,
      title: "Women's Ministry",
      description: "Empowering women in faith through prayer, fellowship, and programs that address unique spiritual needs.",
      leader: "Sister Grace Nyambura",
      meetingTime: "Last Saturday monthly, 2 PM",
      contact: "women@purewordchurch.org",
      stats: {
        members: 120,
        prayerGroups: 6,
        activities: "Monthly"
      }
    },
    {
      id: 6,
      title: "Outreach & Missions",
      description: "Serving our community and supporting global missions through practical assistance and evangelism.",
      leader: "Pastor Mark Okoth",
      meetingTime: "Various times for projects",
      contact: "outreach@purewordchurch.org",
      stats: {
        projects: 10,
        volunteers: 50,
        activities: "Ongoing"
      }
    }
  ];
};

// Leadership team data
export const getLeadershipTeam = () => {
  return [
    {
      id: 1,
      name: "Pastor John Maina",
      role: "Senior Pastor",
      description: "Founding pastor with 20+ years of ministry experience",
      email: "pastor.john@purewordchurch.org",
      phone: "+254 723 456 789",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Elder Sarah Nyambura",
      role: "Associate Pastor",
      description: "Oversees women's ministry and community outreach",
      email: "elder.sarah@purewordchurch.org",
      phone: "+254 722 987 654",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Deacon James Ochieng",
      role: "Administrative Elder",
      description: "Manages church operations and men's fellowship",
      email: "deacon.james@purewordchurch.org",
      phone: "+254 711 234 567",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      name: "Sister Mary Atieno",
      role: "Children's Ministry Director",
      description: "Leads children's church and family programs",
      email: "mary.atieno@purewordchurch.org",
      phone: "+254 700 111 222",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];
};

// Utility functions
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

export const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const getTimeRemaining = (eventDate) => {
  const now = new Date();
  const event = new Date(eventDate);
  const difference = event.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const filterByCategory = (items, category) => {
  if (category === 'all' || !category) return items;
  return items.filter(item => item.category === category);
};