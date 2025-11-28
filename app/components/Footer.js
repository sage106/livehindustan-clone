export default function Footer() {
  const footerLinks = {
    categories: {
      title: 'श्रेणियाँ',
      links: ['देश', 'दुनिया', 'राजनीति', 'खेल', 'मनोरंजन', 'बिज़नेस', 'टेक्नोलॉजी']
    },
    states: {
      title: 'राज्य',
      links: ['उत्तर प्रदेश', 'दिल्ली', 'बिहार', 'राजस्थान', 'मध्य प्रदेश', 'हरियाणा']
    },
    services: {
      title: 'सेवाएं',
      links: ['ePaper', 'मोबाइल ऐप', 'न्यूज़लेटर', 'RSS फीड', 'विज्ापन', 'संपर्क करें']
    },
    about: {
      title: 'हमारे बारे में',
      links: ['कंपनी', 'टीम', 'करियर', 'गोपनीयता नीति', 'उपयोग की शर्तें', 'सहायता']
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {Object.values(footerLinks).map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2024 LiveHindustan. All Rights Reserved.</p>
          <p>लाइव हिन्दुस्तान - भारत की विश्वसनीय हिंदी न्यूज़ वेबसाइट</p>
        </div>
      </div>
    </footer>
  );
}