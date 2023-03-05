import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Dashboard.css';

export default function Dashboard() {
  return (

    <Container>
        <h3>Dashboard</h3>

        <div className='btn-container'>        
            <Button>
                <a href="/student/login">Student Login</a>
            </Button>

            <Button>
                <a href="/professor/login">Professor Login</a>
            </Button>
        </div>

    </Container>
  )
}
