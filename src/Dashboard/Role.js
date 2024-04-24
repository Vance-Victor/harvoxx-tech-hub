import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Role = ({ roleId }) => {
  const [roleData, setRoleData] = useState(null);

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const response = await axios.get(`/api/roles/${roleId}`); // Replace with your API endpoint
        setRoleData(response.data);
      } catch (error) {
        console.error('Error fetching role data:', error);
      }
    };

    fetchRoleData();
  }, [roleId]);

  if (!roleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Role Information</h1>
      <p>Role ID: {roleData.roleId}</p>
      <p>Name: {roleData.name}</p>
      <p>Description: {roleData.description}</p>
      <p>Responsibility: {roleData.responsibility}</p>
      <p>Project ID: {roleData.projectId}</p>
      <p>Staff ID: {roleData.staffId}</p>
    </div>
  );
};

export default Role;
