import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090/emails'; // Adjust to your Spring Boot backend

export interface Email {
  id: number;
  subject: string;
  sender: string;
  receivedAt: string;
  category: string;
  body: string;
}

export const getAllEmails = async (): Promise<Email[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const getEmailById = async (id: number): Promise<Email> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};
