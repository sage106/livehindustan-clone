'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainMenu = [
    { label: 'होम', href: '/' },
    { label: 'देश', href: '/category/देश' },
    { label: 'दुनिया', href: '/category/दुनिया' },
    { label: 'राजनीति', href: '/category/राजनीति' },
    { label: 'बिज़नेस', href: '/category/बिज़नेस' },
    { label: 'खेल', href: '/category/खेल' },
    { label: 'मनोरंजन', href: '/category/मनोरंजन' },
    { label: 'टेक्नोलॉजी', href: '/category/टेक्नोलॉजी' },
    { label: 'लाइफस्टाइल', href: '/category/लाइफस्टाइल' },
    { label: 'ऑटो', href: '/category/ऑटो' },
    { label: 'गैजेट्स', href: '/category/गैजेट्स' },
    { label: 'करियर', href: '/category/करियर' },
    { label: 'धर्म', href: '/category/धर्म' },
    { label: 'वीडियो', href: '/category/वीडियो' }
  ];

  const stateMenu = [
    { label: 'उत्तर प्रदेश', href: '/state/उत्तर प्रदेश' },
    { label: 'दिल्ली', href: '/state/दिल्ली' },
    { label: 'बिहार', href: '/state/बिहार' },
    { label: 'झारखंड', href: '/state/झारखंड' },
    { label: 'राजस्थान', href: '/state/राजस्थान' },
    { label: 'मध्य प्रदेश', href: '/state/मध्य प्रदेश' },
    { label: 'हरियाणा', href: '/state/हरियाणा' },
    { label: 'उत्तराखंड', href: '/state/उत्तराखंड' },
    { label: 'पंजाब', href: '/state/पंजाब' }
  ];

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('hi-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('hi-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span>🕐 {getCurrentTime()}</span>
              <span>{getCurrentDate()}</span>
            </div>
            <div className="top-bar-right">
              <span>epaper</span>
              <span>हिन्दी</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="header-main">
            <Link href="/">
              <div className="logo">
                <span className="logo-red">लाइव</span>
                <span className="logo-black">हिन्दुस्तान</span>
              </div>
            </Link>
            
            <div className="header-actions">
              <div className="search-box">
                <span>🔍</span>
                <input type="text" placeholder="खोजें..." />
              </div>
              <button 
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          <nav className="nav-main">
            <ul>
              {mainMenu.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className={index === 0 ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="nav-states">
            <ul>
              <li>📍</li>
              {stateMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {menuOpen && (
          <div className="mobile-menu active">
            <div className="mobile-menu-section">
              <h3>मुख्य मेनू</h3>
              <ul>
                {mainMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mobile-menu-section">
              <h3>राज्य</h3>
              <ul>
                {stateMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}