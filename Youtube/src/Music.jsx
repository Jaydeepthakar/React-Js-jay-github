import { useState } from 'react';
import { Card, Row, Col, Modal } from 'react-bootstrap';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import image1 from './images/download10.jpg';
import img2 from './images/download11.jpg';
import img3 from './images/download12.jpg';
import img4 from './images/download13.jpg';
import img5 from './images/download14.jpg';
import img6 from './images/download15.jpg';
import img7 from './images/download16.jpg';
import img8 from './images/download17.jpg';
import img9 from './images/download18.jpg';


import channelLogo1 from './images/channel10.jpg';
import channelLogo2 from './images/channal11.jpg';
import channelLogo3 from './images/channal12.jpg';
import channelLogo4 from './images/channal13.jpg';
import channelLogo5 from './images/channal14.jpg';
import channelLogo6 from './images/channal15.jpg';
import channelLogo7 from './images/channal16.jpg';
import channelLogo8 from './images/channal17.jpg';
import channelLogo9 from './images/channal18.jpg';

function Music() {

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
      title: "Melodic Chill Beats | Best Relaxing Music Mix", 
      imgSrc: image1, 
      lastUpdated: "2 days ago", 
      views: "1.2M views", 
      description: "Immerse yourself in a soothing blend of chill beats and calming melodies for relaxation.",
      channelLogo: channelLogo1 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 2, 
      title: "Rock Ballads Forever | Greatest Hits Collection", 
      imgSrc: img2, 
      lastUpdated: "10 mins ago", 
      views: "500K views", 
      description: "Enjoy a compilation of the most iconic rock ballads ever created, filled with emotional power and energy.",
      channelLogo: channelLogo2 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 3, 
      title: "Bollywood Romantic Songs | Top Hits Playlist", 
      imgSrc: img3, 
      lastUpdated: "20 mins ago", 
      views: "300K views", 
      description: "The ultimate collection of Bollywood romantic songs to set the mood for any occasion.",
      channelLogo: channelLogo3 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 4, 
      title: "Classical Music Masterpieces | Best of Beethoven & Mozart", 
      imgSrc: img4, 
      lastUpdated: "20 mins ago", 
      views: "700K views", 
      description: "Dive into the world of classical music with timeless masterpieces from Beethoven, Mozart, and more.",
      channelLogo: channelLogo4 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 5, 
      title: "Tribal Beats & Native Music | Healing Sounds", 
      imgSrc: img5, 
      lastUpdated: "3 mins ago", 
      views: "100K views", 
      description: "Experience the rhythm of tribal beats and healing native music from cultures around the world.",
      channelLogo: channelLogo5 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 6, 
      title: "Electronic Dance Music | Ultimate EDM Mix 2024", 
      imgSrc: img6, 
      lastUpdated: "10 mins ago", 
      views: "2.1M views", 
      description: "Get your groove on with the latest EDM bangers in this high-energy music mix.",
      channelLogo: channelLogo6 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 7, 
      title: "Jazz Night Live | Smooth Jazz & Saxophone", 
      imgSrc: img7, 
      lastUpdated: "20 mins ago", 
      views: "400K views", 
      description: "Unwind with smooth jazz and live saxophone performances in this relaxing evening music session.",
      channelLogo: channelLogo7 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 8, 
      title: "Indie Folk Music Vibes | Acoustic Songs Playlist", 
      imgSrc: img8, 
      lastUpdated: "20 mins ago", 
      views: "150K views", 
      description: "Discover beautiful indie folk tunes with soulful acoustic performances that tell a story.",
      channelLogo: channelLogo8 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 9, 
      title: "Pop Music Hits 2024 | Best Pop Songs Playlist", 
      imgSrc: img9, 
      lastUpdated: "20 mins ago", 
      views: "600K views", 
      description: "Catch the hottest pop music hits of 2024 in this curated playlist featuring top artists.",
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

export default Music
