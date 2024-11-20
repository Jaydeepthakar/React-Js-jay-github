import { Card, Row, Col } from 'react-bootstrap';
import './App.css';

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

function Comady() {

  const videos = [
    { 
      id: 1, 
      title: "Stand-Up Comedy | Best Jokes of the Year", 
      imgSrc: image1, 
      lastUpdated: "2 days ago", 
      views: "1.2M views", 
      description: "Laugh out loud with the funniest stand-up comedy performances from the best comedians of the year.",
      channelLogo: channelLogo1 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 2, 
      title: "Comedy Skit | The Misadventures of a Clumsy Chef", 
      imgSrc: img2, 
      lastUpdated: "10 mins ago", 
      views: "500K views", 
      description: "Watch the hilarious misadventures of a chef who can't seem to get anything right. A comedy skit that will leave you in splits.",
      channelLogo: channelLogo2 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 3, 
      title: "Prank Gone Wrong | Epic Fail Compilation", 
      imgSrc: img3, 
      lastUpdated: "20 mins ago", 
      views: "300K views", 
      description: "Get ready to laugh with this compilation of pranks that went hilariously wrong. Expect epic fails and funny reactions.",
      channelLogo: channelLogo3 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 4, 
      title: "Funny Animals Compilation | Best Moments", 
      imgSrc: img4, 
      lastUpdated: "20 mins ago", 
      views: "700K views", 
      description: "Enjoy a compilation of the funniest animal moments. From clumsy pets to wild animals, these moments will make your day.",
      channelLogo: channelLogo4 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 5, 
      title: "Comedy Roast | The Funniest Celebrity Roasts", 
      imgSrc: img5, 
      lastUpdated: "3 mins ago", 
      views: "100K views", 
      description: "Laugh along with the funniest celebrity roasts, featuring quick wit and hilarious jabs at your favorite stars.",
      channelLogo: channelLogo5 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 6, 
      title: "Stand-Up Comedy | The Comedy King Returns", 
      imgSrc: img6, 
      lastUpdated: "10 mins ago", 
      views: "2.1M views", 
      description: "Join the comedy king as he delivers side-splitting jokes, hilarious anecdotes, and memorable punchlines.",
      channelLogo: channelLogo6, videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 7, 
      title: "Funny Sketch | The Awkward First Date", 
      imgSrc: img7, 
      lastUpdated: "20 mins ago", 
      views: "400K views", 
      description: "Watch a hilarious sketch about an awkward first date that goes horribly wrong in the funniest way possible.",
      channelLogo: channelLogo7 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 8, 
      title: "Comedy Compilation | Laughs That Will Make Your Day", 
      imgSrc: img8, 
      lastUpdated: "20 mins ago", 
      views: "150K views", 
      description: "Sit back, relax, and enjoy a compilation of the funniest moments from around the internet that will make you smile all day.",
      channelLogo: channelLogo8 , videoUrl: "https://www.youtube.com/embed/sK7riqg2mr4"
    },
    { 
      id: 9, 
      title: "Epic Comedy Fails | Hilarious Bloopers", 
      imgSrc: img9, 
      lastUpdated: "20 mins ago", 
      views: "600K views", 
      description: "Watch a collection of epic comedy fails, with bloopers, mistakes, and funny moments that will leave you in stitches.",
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

export default Comady
