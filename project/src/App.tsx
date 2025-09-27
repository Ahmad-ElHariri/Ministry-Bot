import React from 'react';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import ChatInterface from './components/ChatInterface';

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
  };

  const handleBackToWelcome = () => {
    setShowChat(false);
  };

  return (
    <div>
      {showChat ? (
        <ChatInterface onBack={handleBackToWelcome} />
      ) : (
        <WelcomePage onStartChat={handleStartChat} />
      )}
    </div>
  );
}

export default App;
