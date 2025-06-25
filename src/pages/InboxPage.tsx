import React, { useEffect, useState } from 'react';
import { getAllEmails, type Email } from '../services/emailService';
import EmailCard from '../components/EmailCard';

const InboxPage: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    getAllEmails().then(setEmails).catch(console.error);
  }, []);

  const handleEmailClick = (id: number) => {
    window.location.href = `/emails/${id}`; // We'll improve with routing later
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Inbox</h1>
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} onClick={() => handleEmailClick(email.id)} />
      ))}
    </div>
  );
};

export default InboxPage;
