import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skill = ({ skillId }) => {
  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const response = await axios.get(`/api/skills/${skillId}`); // Replace with your API endpoint
        setSkillData(response.data);
      } catch (error) {
        console.error('Error fetching skill data:', error);
      }
    };

    fetchSkillData();
  }, [skillId]);

  if (!skillData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Skill Information</h1>
      <p>Skill ID: {skillData.skillId}</p>
      <p>Type: {skillData.type}</p>
      <p>Level: {skillData.level}</p>
      <p>Description: {skillData.description}</p>
    </div>
  );
};

export default Skill;
