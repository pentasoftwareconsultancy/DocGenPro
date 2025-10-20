import { createContext, useState, useContext } from 'react';
import { documentTypes } from '../data/mockData';

const DocumentContext = createContext();

export { DocumentContext };
export const useDocument = () => useContext(DocumentContext);

export const DocumentProvider = ({ children }) => {
  const [selectedDocType, setSelectedDocType] = useState(null);
  const [documentData, setDocumentData] = useState({});
  
  const selectDocumentType = (docTypeId) => {
    const docType = documentTypes.find((type) => type.id === docTypeId);
    setSelectedDocType(docType);
    // Reset document data when changing document type
    setDocumentData({});
  };

  const updateDocumentData = (fieldName, value) => {
    setDocumentData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const resetDocumentData = () => {
    setDocumentData({});
  };

  const value = {
    documentTypes,
    selectedDocType,
    selectDocumentType,
    documentData,
    updateDocumentData,
    resetDocumentData
  };

  return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>;
};