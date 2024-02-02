import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const handleClick = async (breed: string) => {
    try {
      const result = await fetch('http://localhost:5000/chien', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ breed }),
      });
      const data = await result.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error occurred');
    }
  };

  return (
    <div>
      <h2>Hello, React!</h2>
      <button onClick={() => {handleClick('chien')}}>Post Chien</button>
      <button onClick={() => {handleClick('chat')}}>Post Chat</button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
