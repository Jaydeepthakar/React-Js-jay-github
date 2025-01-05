import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { app } from '../Firebase';
import './SignUp.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await createUserWithEmailAndPassword(getAuth(app), email, password);
      setSuccess('Sign-up successful! Redirecting...');
      setTimeout(() => navigate('/showpage'), 2000);
    } catch (error) {
      let message;
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'This email is already in use.';
          break;
        case 'auth/invalid-email':
          message = 'Please enter a valid email address.';
          break;
        case 'auth/weak-password':
          message = 'Password should be at least 6 characters.';
          break;
        default:
          message = 'An error occurred. Please try again.';
      }
      setError(message);
    }
  };

  return (
    <Container className="sign-up-page">
      <Row>
        <Col sm={6} className="left-panel">
          <h1>Welcome Page</h1>
          <p>Sign up to access your account and enjoy the features!</p>
        </Col>
        <Col sm={6} className="right-panel">
          <h2>Create Account</h2>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
              />
            </Form.Group>
            {error && <p className="error-message text-danger">{error}</p>}
            {success && <p className="success-message text-success">{success}</p>}
            <Button type="submit" variant="primary" className="submit-button mt-3 w-100">
              Sign Up
            </Button>
          </Form>
          <div className="mt-3 text-center">
            <p className="sign-in-link">
              Already have an account? <Link to="/signin" className="sign-in-link-text">Sign In</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
