import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Staff from './Staff';
import Role from './Role';
import Project from './Project';
import Department from './Department';
import Skill from './Skill';
import StaffSkill from './StaffSkill';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [staffSkillData, setStaffSkillData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get('/database.json');
        setUserData(userResponse.data.staff.find(user => user.staff_id === userId));

        // Fetch role data
        const roleResponse = await axios.get('/database.json');
        setRoleData(roleResponse.data.roles.find(role => role.staff_id === userId));

        // Fetch project data
        const projectResponse = await axios.get('/database.json');
        setProjectData(projectResponse.data.projects.find(project => project.project_id === roleData.project_id));

        // Fetch department data
        const departmentResponse = await axios.get('/database.json');
        setDepartmentData(departmentResponse.data.departments.find(department => department.department_id === userData.department_id));

        // Fetch skill data
        const skillResponse = await axios.get('/database.json');
        setSkillData(skillResponse.data.skills.find(skill => skill.skill_id === staffSkillData.skill_id));

        // Fetch staff skill data
        const staffSkillResponse = await axios.get('/database.json');
        setStaffSkillData(staffSkillResponse.data.staff_skills.find(staffSkill => staffSkill.staff_id === userId));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userData || !roleData || !projectData || !departmentData || !skillData || !staffSkillData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <Staff userId={userId} />
      <Role roleId={roleData.role_id} />
      <Project projectId={roleData.project_id} />
      <Department departmentId={userData.department_id} />
      <Skill skillId={staffSkillData.skill_id} />
      <StaffSkill staffSkillId={staffSkillData.staff_skill_id} />
    </div>
  );
};

export default UserProfile;
