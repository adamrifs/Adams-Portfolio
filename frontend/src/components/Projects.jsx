import React, { useContext, useEffect } from 'react'
import '../css/Projects.css'
import { GiClick } from "react-icons/gi";
import { AppContext } from '../Context';
import { motion } from 'framer-motion';

const Projects = () => {
    const { projects, loading, projectCount, fetchProjects } = useContext(AppContext);

    useEffect(() => {
        if (projects.length === 0) {
            fetchProjects()
        }
    }, [])

    return (
        <div className='project-main-container'>
            <div className="project-head">
                <motion.h4
                    className="beautiful-heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <span className="highlight">M</span>Y PROJECTS
                </motion.h4>
                <motion.div 
                    className="head-underline"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
            </div>

            <div className="projects-box">
                {loading ? (
                    // Skeleton Loader
                    <div className="skeleton-container">
                        {[...Array(projectCount || 4)].map((_, i) => (
                            <div className="skeleton-card projects" key={i}>
                                <div className="pr-img skeleton"></div>
                                <div className="pr-right-sec">
                                    <div className="pr-inner-head" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                        <div className="skeleton skeleton-title"></div>
                                        <div className="skeleton skeleton-link"></div>
                                    </div>
                                    <div className="pr-desc" style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <div className="skeleton skeleton-line"></div>
                                        <div className="skeleton skeleton-line"></div>
                                        <div className="skeleton skeleton-line"></div>
                                        <div className="skeleton skeleton-line short"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Actual Projects
                    projects.map((item, index) => (
                        <motion.div
                            className='projects'
                            key={index}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="pr-img">
                                <a href={item.link} target='_blank' rel="noopener noreferrer">
                                    <img src={item.image} alt='project1' />
                                </a>
                            </div>

                            <div className="pr-right-sec">
                                <div className="pr-inner-head">
                                    <h3>{item.name}</h3>
                                    <a href={item.link} target='_blank' rel="noopener noreferrer">
                                        See the project <GiClick />
                                    </a>
                                </div>
                                <div
                                    className="pr-desc"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Projects;
