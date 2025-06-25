import React from 'react';
import type { Email } from '../services/emailService';


interface Props {
  email: Email;
  onClick: () => void;
}

const EmailCard: React.FC<Props> = ({ email, onClick }) => (
  <div onClick={onClick} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', cursor: 'pointer' }}>
    <h3>{email.subject}</h3>
    <p><strong>From:</strong> {email.sender}</p>
    <p><strong>Category:</strong> {email.category}</p>
  </div>
);

export default EmailCard;
