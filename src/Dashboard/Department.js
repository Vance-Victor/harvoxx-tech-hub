import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Department = ({ departmentId }) => {
  const [departmentData, setDepartmentData] = useState(null);

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const response = await axios.get(`/api/departments/${departmentId}`); // Replace with your API endpoint
        setDepartmentData(response.data);
      } catch (error) {
        console.error('Error fetching department data:', error);
      }
    };

    fetchDepartmentData();
  }, [departmentId]);

  if (!departmentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Department Information</h1>
      <p>Department ID: {departmentData.departmentId}</p>
      <p>Name: {departmentData.name}</p>
      <p>Email: {departmentData.email}</p>
      <p>Location: {departmentData.location}</p>
    </div>
  );
};

export default Department;
