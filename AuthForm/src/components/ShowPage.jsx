import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase';
import './ShowPage.css';

export default function ShowPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email });
      } else {
        navigate('/');
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(getAuth(app));
    navigate('/signin');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="show-page">
      <h1>Welcome {user?.email}</h1>
      <div className="user-info">
        <p>Email: {user?.email}</p>
        <p>Password: {showPassword ? 'Your password' : '******'}</p>
      </div>
      <Button onClick={() => setShowPassword(!showPassword)} className="show-password-button">
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Button>
      <Button onClick={handleLogout} className="logout-button">Log Out</Button>
    </Container>
  );
}
