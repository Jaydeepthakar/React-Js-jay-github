import { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { app } from '../Firebase';
import './SignIn.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(getAuth(app), email, password);
      navigate('/showpage');
    } catch (error) {
      console.error('Sign-in error:', error.message);
      setError('Failed to sign in. Please check your credentials or try again later.');
    }
  };

  return (
    <Container className="sign-in-container">
      <Card className="sign-in-card">
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form onSubmit={handleSignIn}>
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

            <Button type="submit" variant="success" className="submit-button mt-4 w-100">
              Sign In
            </Button>
          </Form>

          <div className="mt-3 text-center">
            <p className="sign-up-link">
              Don't have an account? <Link to="/" className="sign-up-link-text">Sign Up</Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
