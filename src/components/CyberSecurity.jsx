// CyberSecurity.js
import React from 'react';

const CyberSecurity = () => {
  const containerData = [
    { title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences', content: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png' },
    { title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!', content: 'Look around today, you will witness that we are more reliant on technology and devices', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif' },
    { title: '8 Different Types of Cybersecurity and Threats Involved', content: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png' },
    { title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?', content: 'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif' },
    { title: 'Top 7 Cyber Security Attacks in Real Life', content: 'Cyber security attacks are the type of actions that are designed to destroy, steal, modify,', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg' },
    { title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!', content: 'There is something fascinating about a lone hacker in black hoodies using a single system', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png' },
  ];
  return (
    <div className="card-container">
      {containerData.map((container, index) => (
        <div key={index} className="card">
          <img src={container.imageUrl} alt={container.title} className="card-image" />
          <div className="card-content">
            <h3>{container.title}</h3>
            <p>{container.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CyberSecurity;
