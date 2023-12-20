// FullStack.js
import React from 'react';

const FullStack = () => {
  const containerData = [
    { title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2023', content: 'When you’re hiring a full-stack developer, what are the most important things you look for?', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp' },
    { title: 'Top Differences: Full Stack Developer vs Software Engineer 2023', content: 'A Full Stack Developer is a tech all-rounder. They work on both the front and', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp'},
    { title: 'Horizontal vs Vertical Scaling for Efficient System Design', content: 'In the world of system design, envision a digital skyscraper – a multifaceted structure built', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp'},
    { title: 'Best Books to Learn Full-Stack Development', content: 'Are you interested in becoming a full-stack developer but not sure where to start? In', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp' },
    { title: 'Top 10 Product-Based Companies for Full-Stack Developers [2023]', content: 'In the dynamic landscape of technology, full-stack developers are the architects of the digital world,', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp' },
    { title: 'Best Ways to Learn Full Stack Development in 2023', content: 'Full stack development is and will be a promising and in-demand career in the upcoming', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp' },
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

export default FullStack;
