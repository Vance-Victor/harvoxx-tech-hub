import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Staff = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on user ID
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/staff/${userId}`); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Information</h1>
      <p>Staff ID: {userData.staffId}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Address: {userData.address}</p>
      <p>Department ID: {userData.departmentId}</p>
    </div>
  );
};

export default Staff;
