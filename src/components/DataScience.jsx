// DataScience.js
import React from 'react';

const DataScience = () => {
  const containerData = [
    { title: 'Top Product-Based Companies for Data Science Freshers', content: 'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing', imageUrl:'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp' },
    { title: 'What is the Difference between Data Science and Data Engineering?', content: 'India has been making some serious waves in the world of data. Just like the', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp' },
    { title: 'Top 10 Data Science Tools in 2023', content: 'Data Science is an in-demand profession and will continue growing in the coming years. From', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg' },
    { title: 'Best Data Science Books to Learn 2023', content: 'Container 4 content goes here.', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp' },
    { title: 'Top Product-Based Companies for Data Scientists in 2023', content: 'Today, we’re going to talk about something really cool: data science. It’s all about using', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp' },
    { title: 'Useful Python Libraries & Tools for Data Science Beginners', content: 'In a world filled with information, knowing how to understand and use data is super', imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp' },
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

export default DataScience;

