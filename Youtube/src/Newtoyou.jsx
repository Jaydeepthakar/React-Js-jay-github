import { useState } from 'react';
import { Card, Row, Col, Modal } from 'react-bootstrap';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import image1 from './images/download (1).jpg';
import img2 from './images/download2.jpg';
import img3 from './images/download3.jpg';
import img4 from './images/download4.jpg';
import img5 from './images/download5.jpg';
import img6 from './images/download6.jpg';
import img7 from './images/download7.jpg';
import img8 from './images/download8.jpg';
import img9 from './images/download9.jpg';

// Import channel logos (example logos)
import channelLogo1 from './images/channel1.jpg';
import channelLogo2 from './images/channel2.jpg';
import channelLogo3 from './images/channel3.jpg';
import channelLogo4 from './images/channel4.jpg';
import channelLogo5 from './images/channel5.jpg';
import channelLogo6 from './images/channel6.jpg';
import channelLogo7 from './images/channel7.jpg';
import channelLogo8 from './images/channel8.jpg';
import channelLogo9 from './images/channel9.jpg';

function Newtoyou() {

  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleShow = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  const videos = [
    { 
      id: 1, 
      title: "Mind-Bending Illusions | Visual Puzzles That Will Blow Your Mind", 
      imgSrc: image1, 
      lastUpdated: "2 days ago", 
      views: "1.2M views", 
      description: "Dive into the world of optical illusions and mind puzzles that challenge your perception of reality.",
      channelLogo: channelLogo1 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 2, 
      title: "Ultimate DIY Room Makeover | Transform Your Space with $50", 
      imgSrc: img2, 
      lastUpdated: "10 mins ago", 
      views: "500K views", 
      description: "Watch how a small budget can completely transform a room into a stylish and cozy space. Perfect for DIY enthusiasts!",
      channelLogo: channelLogo2 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 3, 
      title: "Incredible Time-Lapse | Building a City from Scratch", 
      imgSrc: img3, 
      lastUpdated: "20 mins ago", 
      views: "300K views", 
      description: "Watch a city grow in fast-forward as we build an entire community from the ground up in this mesmerizing time-lapse video.",
      channelLogo: channelLogo3 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 4, 
      title: "Epic Challenge | 100 Layers of Clothing Challenge!", 
      imgSrc: img4, 
      lastUpdated: "20 mins ago", 
      views: "700K views", 
      description: "How many layers of clothes can you wear before you can't move? Watch as we attempt the 100 Layers Challenge.",
      channelLogo: channelLogo4 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 5, 
      title: "Unboxing the Most Expensive Gadgets | Luxury Tech Review", 
      imgSrc: img5, 
      lastUpdated: "3 mins ago", 
      views: "100K views", 
      description: "Join us as we unbox the latest and most luxurious gadgets, including the newest phones, gaming consoles, and accessories.",
      channelLogo: channelLogo5 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 6, 
      title: "Motivational Speech | Overcoming Fear and Building Confidence", 
      imgSrc: img6, 
      lastUpdated: "10 mins ago", 
      views: "2.1M views", 
      description: "Get inspired with this powerful motivational speech about overcoming obstacles, facing fears, and building lasting confidence.",
      channelLogo: channelLogo6 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 7, 
      title: "The Future of Space Travel | Exploring Mars and Beyond", 
      imgSrc: img7, 
      lastUpdated: "20 mins ago", 
      views: "400K views", 
      description: "Join us on an exciting journey through the future of space travel and the possibilities of human exploration beyond Earth.",
      channelLogo: channelLogo7 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 8, 
      title: "Extreme Water Sports | Surfing the Biggest Waves", 
      imgSrc: img8, 
      lastUpdated: "20 mins ago", 
      views: "150K views", 
      description: "Watch some of the most intense water sports as surfers take on the biggest waves in the world in this thrilling video.",
      channelLogo: channelLogo8 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 9, 
      title: "Virtual Reality Experience | Immersive 360° World Tour", 
      imgSrc: img9, 
      lastUpdated: "20 mins ago", 
      views: "600K views", 
      description: "Step into a fully immersive virtual reality world with this 360° world tour of the most stunning places on Earth.",
      channelLogo: channelLogo9 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
  ];
  

  return (
    <div className="all-cards">
      <Row className="g-4">
        {videos.map((video) => (
          <Col md={4} key={video.id}>
            <Card className="video-card shadow-lg rounded-3">
              <div className="video-thumbnail-container" onClick={() => handleShow(video.videoUrl)}>
                {/* Video Thumbnail */}
                <Card.Img variant="top" src={video.imgSrc} className="video-thumbnail" />
                {/* Play Button Overlay */}
                <div className="play-button-overlay">
                  <i className="bi bi-play-circle-fill play-button"></i>
                </div>
              </div>
              <Card.Body>
                {/* Channel Info */}
                <div className="channel-info">
                  <img src={video.channelLogo} alt="channel logo" className="channel-logo" />
                  <Card.Title className="video-title text-truncate">{video.title}</Card.Title>
                </div>
                <Card.Text className="video-description text-muted">{video.description}</Card.Text>
                <Card.Text className="video-meta">
                  <small className="text-muted">{video.views} • Last updated {video.lastUpdated}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Video Playback */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVideo && (
            <iframe
              width="100%"
              height="500"
              src={currentVideo}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Newtoyou
