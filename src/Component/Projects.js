import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Modal from "react-modal";
import Header2 from './Header2';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        projectName: '',
        deadline: '',
        description: '',
        duration: '',
        department: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModal1 = (project) => {
        setSelectedProject(project);
        setIsModalOpen1(!isModalOpen1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (
            formData.projectName.trim() === '' ||
            formData.deadline.trim() === '' ||
            formData.description.trim() === '' ||
            formData.duration.trim() === '' ||
            formData.department.trim() === ''
        ) {
            console.error('Please fill in all fields');
            return;
        }
    
        axios.post('http://localhost:3003/projects', formData)
            .then(response => {
                setProjects([...projects, response.data]);
                setFormData({
                    projectName: '',
                    deadline: '',
                    description: '',
                    duration: '',
                    department: ''
                });
                toggleModal();
            })
            .catch(error => console.error('Error adding project:', error));
    };
    

    
    return (
        <div className='dashb'>
            <section className='dashboard'>
                <Sidebar />
                <main>
                    <Header2 />
                    <div className='add'>
                        <h2>Projects</h2>
                        <button onClick={toggleModal}>Add Project</button>
                    </div>

                    <table>
                            <tr className='heading'>
                                <th>ProjectName</th>
                                <th>Description</th>
                                <th>Duration</th>
                                <th>Department</th>
                                <th className='dt'></th>
                            </tr>

                            {projects.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.projectName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.duration}</td>
                                    <td>{item.department}</td>
                                    <td className='dt'><button onClick={() => toggleModal1(item)}>See Details</button></td>
                                </tr>
                            ))}
            
                    </table>
                </main>
            </section>


            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{
                    overlay: {
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "hsla(0, 0%, 0%, .8)",
                        zIndex: 100000,
                    },
                }}
            >
                <div className='modal1'>
                    <div className='modal1-content'>
                        <div className='close'>
                            <button onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        <form className='product-form' onSubmit={handleSubmit}>
                            <div>
                                <p>Project Name</p>
                                <input
                                    type="text"
                                    name="projectName"
                                    value={formData.projectName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Deadline</p>
                                <input
                                    type="text"
                                    name="deadline"
                                    value={formData.deadline.toString()}
                                    onChange={handleChange}
                                    placeholder='YYYY-MM-DD' />
                            </div>
                            <div>
                                <p>Duration</p>
                                <input
                                       type="text"
                                       name="duration"
                                       value={formData.duration}
                                       onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Description</p>
                                <input
                                       type="text"
                                       name="description"
                                       value={formData.description}
                                       onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Department</p>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Department</option>
                                    <option value="men">IT supoort</option>
                                    <option value="women">Engineering</option>
                                    <option value="teens">Accounting</option>
                                    <option value="kids">Management</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={isModalOpen1}
                onRequestClose={() => setIsModalOpen1(false)}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{
                    overlay: {
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "hsla(0, 0%, 0%, .8)",
                        zIndex: 100000,
                    },
                }}
            >
                <div className='modal1'>
                    <div className='modal1-content'>
                        <div className='close'>
                            <button onClick={() => setIsModalOpen1(false)} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        {selectedProject && (
                            <section className='roject-info'>
                            
                                <div className='others'>
                                    <p>Project Name: <span>{selectedProject.projectName}</span></p>
                                    <p>Deadline: <span>{selectedProject.deadline}</span></p>
                                    <p>Description: <span>{selectedProject.description}</span></p>
                                    <p>Duration: <span>{selectedProject.duration}</span></p>
                                    <p>Department: <span>{selectedProject.department}</span></p>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Projects;
