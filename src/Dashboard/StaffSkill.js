import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffSkill = ({ staffSkillId }) => {
  const [staffSkillData, setStaffSkillData] = useState(null);

  useEffect(() => {
    const fetchStaffSkillData = async () => {
      try {
        const response = await axios.get(`/api/staffSkills/${staffSkillId}`); // Replace with your API endpoint
        setStaffSkillData(response.data);
      } catch (error) {
        console.error('Error fetching staff skill data:', error);
      }
    };

    fetchStaffSkillData();
  }, [staffSkillId]);

  if (!staffSkillData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Staff Skill Information</h1>
      <p>Staff Skill ID: {staffSkillData.staffSkillId}</p>
      <p>Staff ID: {staffSkillData.staffId}</p>
      <p>Skill ID: {staffSkillData.skillId}</p>
    </div>
  );
};

export default StaffSkill;
