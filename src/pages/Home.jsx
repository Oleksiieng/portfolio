import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Oleksii Kulykov</h1>
      <img 
        src="../public/images/face.jpg" 
        alt="Oleksii Kulykov" 
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #007bff',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
      <p style={{ marginTop: '20px' }}>
        <strong>My name is Oleksii</strong><br />
        I am passionate about web development
      </p>
    </div>
  );
}

export default Home;
