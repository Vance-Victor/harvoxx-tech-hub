import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Project = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`/api/projects/${projectId}`); // Replace with your API endpoint
        setProjectData(response.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjectData();
  }, [projectId]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Project Information</h1>
      <p>Project ID: {projectData.projectId}</p>
      <p>Deadline: {projectData.deadline}</p>
      <p>Description: {projectData.description}</p>
      <p>Duration: {projectData.duration}</p>
      <p>Department ID: {projectData.departmentId}</p>
    </div>
  );
};

export default Project;
