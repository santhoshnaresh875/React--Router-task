// Home.js
import React from 'react';

const Home = () => {
  const containerData = [
    { title: '7 Best High-Paying IT Jobs For Arts Students', content: 'Gone are the days when we used to believe, you need a B.Tech degree to', imageUrl: 'https://th.bing.com/th/id/OIP.HwdhkcfCxsdu6IzB1wiVGgHaHa?rs=1&pid=ImgDetMain' },
    { title: 'Impact of Certification Programs on Hiring Data Scientists', content: 'Data scientists are the creators behind transforming the raw data into edible data insights. TheseData Science is an in-demand profession and will continue growing in the coming years. From', imageUrl: 'https://ok-interservice.com/media/images/datascience.width-1920.jpg' },
    { title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023! ', content: 'Look around today, you will witness that we are more reliant on technology and devices and Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from', imageUrl: 'https://th.bing.com/th/id/OIP.gkRqRSXhb3N5jmpp-SZlBgHaFU?w=540&h=388&rs=1&pid=ImgDetMain' },
    { title: 'Software Developer vs Software Engineer: Who is More Important in 2023?', content: 'In the tech world, two roles play an important role in deciding our digital life,', imageUrl: 'https://www.johnnynash.coach/wp-content/uploads/2021/02/Career-Image-2048x1365.jpg' },
    { title: 'What Are the Different Roles in a Product-Based Company?', content: 'As we go about our daily routines, we interact with different products that have become..', imageUrl: 'https://www.techasoft.com/blog/2022/06/1654844160.jpg' },
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

export default Home;


