// Career.js
import React from 'react';

const Career = () => {
  const containerData = [
    { title: 'Best 11 Product-Based Companies for Product Managers in India ', content: 'Who is a product manager? What are the best product-based companies for product managers in', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp' },
    { title: 'Top 13 Product Based Companies for AI Freshers', content: 'Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp' },
    { title: 'Top 8 Product-based Companies for UI/UX Designers [Freshers]', content: 'As product-based companies continually innovate and strive to stay ahead of the competition, they seek', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp' },
    { title: 'Best Product-Based Companies for Game Developers in 2023', content: 'The world of game development has been booming in recent years as the importance of', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp' },
    { title: 'Software Developer vs Software Engineer: Who is More Important in 2023?', content: 'In the tech world, two roles play an important role in deciding our digital life,', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Software-Developer-vs-Software-Engineer.jpg' },
    { title: 'Best Product-Based Companies for AI Engineers in 2023', content: 'There was a time when AI was the future. Well, it has now become our', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-Product-Based-Companies-for-AI-Engineers.png' },
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

export default Career;
