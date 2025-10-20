import axios from 'axios';
import { companies, users, documentTypes } from '../data/mockData';

// This file simulates API calls using mock data
// In a real application, these functions would make actual API requests

/**
 * Simulates an API call to authenticate a user
 * @param {string} username - The username
 * @param {string} password - The password
 * @returns {Promise<Object>} - The user data or error
 */
export const loginUser = async (username, password) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // Return user data without password
    const { password, ...userData } = user;
    return { success: true, user: userData };
  } else {
    throw new Error('Invalid username or password');
  }
};

/**
 * Simulates an API call to get all companies
 * @returns {Promise<Array>} - The companies data
 */
export const getCompanies = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return companies;
};

/**
 * Simulates an API call to get a company by ID
 * @param {string} id - The company ID
 * @returns {Promise<Object>} - The company data
 */
export const getCompanyById = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const company = companies.find(c => c.id === id);
  
  if (company) {
    return company;
  } else {
    throw new Error('Company not found');
  }
};

/**
 * Simulates an API call to get all document types
 * @returns {Promise<Array>} - The document types data
 */
export const getDocumentTypes = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return documentTypes;
};

/**
 * Simulates an API call to get a document type by ID
 * @param {string} id - The document type ID
 * @returns {Promise<Object>} - The document type data
 */
export const getDocumentTypeById = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const docType = documentTypes.find(d => d.id === id);
  
  if (docType) {
    return docType;
  } else {
    throw new Error('Document type not found');
  }
};

/**
 * Simulates an API call to generate a document
 * @param {Object} documentData - The document data
 * @returns {Promise<Object>} - The generated document data
 */
export const generateDocument = async (documentData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real application, this would send the data to a server
  // and receive a generated document or document ID in response
  return {
    success: true,
    documentId: `doc-${Date.now()}`,
    generatedAt: new Date().toISOString(),
    ...documentData
  };
};