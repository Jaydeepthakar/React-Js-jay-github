import { useState } from 'react';
import { Card, Row, Col, Modal } from 'react-bootstrap';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import images
import image1 from './images/download (1).jpg';
import img2 from './images/download2.jpg';
import img3 from './images/download3.jpg';
import img4 from './images/download4.jpg';
import img5 from './images/download5.jpg';
import img6 from './images/download6.jpg';
import img7 from './images/download7.jpg';
import img8 from './images/download8.jpg';
import img9 from './images/download9.jpg';

// Import channel logos
import channelLogo1 from './images/channel1.jpg';
import channelLogo2 from './images/channel2.jpg';
import channelLogo3 from './images/channel3.jpg';
import channelLogo4 from './images/channel4.jpg';
import channelLogo5 from './images/channel5.jpg';
import channelLogo6 from './images/channel6.jpg';
import channelLogo7 from './images/channel7.jpg';
import channelLogo8 from './images/channel8.jpg';
import channelLogo9 from './images/channel9.jpg';

function All() {
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
    { id: 1, title: "I was wrong about DSA?", imgSrc: image1, lastUpdated: "2 days ago", views: "1.2M views", description: "In this video, I talk about my misconceptions regarding DSA.", channelLogo: channelLogo1, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 2, title: "Kantara A Legend Chapter-1", imgSrc: img2, lastUpdated: "10 mins ago", views: "500K views", description: "Watch the first chapter of the movie Kantara.", channelLogo: channelLogo2, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 3, title: "Building a Website with Bootstrap", imgSrc: img3, lastUpdated: "20 mins ago", views: "300K views", description: "A tutorial on building a responsive website with Bootstrap.", channelLogo: channelLogo3, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 4, title: "SA vs IND | 4th T20I Highlights | JioCinema & Sports18", imgSrc: img4, lastUpdated: "20 mins ago", views: "700K views", description: "The highlights of the South Africa vs India 4th T20I.", channelLogo: channelLogo4, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 5, title: "Namami Shamishan.... || Rudrashtakam|| Lord Shiva || Full Rudrashtakam", imgSrc: img5, lastUpdated: "3 mins ago", views: "100K views", description: "A beautiful rendition of Lord Shiva's Rudrashtakam.", channelLogo: channelLogo5, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 6, title: "Grand Theft Auto VI Trailer 1", imgSrc: img6, lastUpdated: "10 mins ago", views: "2.1M views", description: "Watch the official trailer for Grand Theft Auto VI.", channelLogo: channelLogo6, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 7, title: "Now You See Me 2 Card Throw Scene HD (2016)", imgSrc: img7, lastUpdated: "20 mins ago", views: "400K views", description: "A mesmerizing card throwing scene from Now You See Me 2.", channelLogo: channelLogo7, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 8, title: "BACK BENCHERS 4", imgSrc: img8, lastUpdated: "20 mins ago", views: "150K views", description: "The fourth season of the hilarious Back Benchers series.", channelLogo: channelLogo8, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" },
    { id: 9, title: "Baney Desi Heart Ke Agents? | Heart of Stone | Netflix India", imgSrc: img9, lastUpdated: "20 mins ago", views: "600K views", description: "Watch the trailer for Netflix's Heart of Stone starring Gal Gadot.", channelLogo: channelLogo9, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4" }
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
  );
}

export default All;
