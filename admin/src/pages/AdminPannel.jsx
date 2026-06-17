import React, { useEffect, useState } from 'react'
import '../css/AdminPannel.css'
import Sidebar from '../components/Sidebar'
import uploadImage from '../assets/upload_area.png'
import { serverUrl } from '../urls'
import axios from 'axios'

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableRow = ({ project, handleEditPopup, handleDeletePopup }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: project._id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="list-box-row">
      <div className="list-box-detail drag-handle" {...attributes} {...listeners} style={{ cursor: 'grab', width: '30px', fontWeight: 'bold', fontSize: '20px' }}>
        ☰
      </div>
      <div className="list-box-detail">
        <img src={project.image} alt="project" />
      </div>
      <div className="list-box-detail">{project.name}</div>
      <div className="list-box-detail">{project.description}</div>
      <div className="list-box-detail">
        <a href={project.link} target="_blank" rel="noreferrer">
          {project.link}
        </a>
      </div>
      <div className="list-box-detail actions">
        <button onClick={() => handleEditPopup(project)} className="edit-btn">Edit</button>
        <button onClick={() => handleDeletePopup(project._id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

const AdminPannel = () => {
  const [activePage, setActivePage] = useState('list')
  const [projects, setProjects] = useState([])
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = projects.findIndex((item) => item._id === active.id);
      const newIndex = projects.findIndex((item) => item._id === over.id);
      
      const newProjects = arrayMove(projects, oldIndex, newIndex);
      setProjects(newProjects);

      const orderedProjects = newProjects.map((p, index) => ({
        id: p._id,
        order: index
      }));

      try {
        await axios.put(serverUrl + 'projects/updateOrder', { orderedProjects });
      } catch (error) {
        console.log(error);
        alert('Failed to update order');
      }
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(serverUrl + 'projects/getProject')
      setProjects(response.data.listProject)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProjects()
  }, [])

  const handleAddProject = async () => {
    try {
      const formdata = new FormData()
      formdata.append('image', image)
      formdata.append('name', name)
      formdata.append('description', description)
      formdata.append('link', link)

      const response = await axios.post(serverUrl + 'projects/addProject', formdata)
      console.log(response)
      alert('data added succesfull')
      setName("")
      setDescription("")
      setImage(null)
      setLink("")
      fetchProjects()
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  //============================== edit function 
  const [projectToEdit, setProjectToEdit] = useState(null)
  const handleEditPopup = (project) => {
    setProjectToEdit(project)
    setName(project.name)
    setDescription(project.description)
    setLink(project.link)
    console.log('project::', project)

  }

  const handleEdit = async (id) => {
    try {
      const formdata = new FormData()
      if (image) formdata.append('image', image)
      formdata.append('name', name)
      formdata.append('description', description)
      const response = await axios.put(serverUrl + `projects/updateProject/${id}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      fetchProjects()
      setProjectToEdit(null)
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  // ============================ delete function 
  const [selectedProject, setSelectedProject] = useState(null)

  const handleDeletePopup = (id) => {
    setSelectedProject(id)
  }
  const handleDelete = async (id) => {
    // const confirmDelete = window.confirm('Do you really want to delete this project?')
    // if (!confirmDelete) return

    try {
      const response = await axios.delete(serverUrl + `projects/deleteProject/${id}`)
      console.log(response)
      setSelectedProject(null)
      fetchProjects()
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  return (
    <div className='Admin-add-mainContainer'>
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="admin-add-box">
        {
          activePage === 'add' && (
            <>
              <div className="admin-add-image">
                <label>
                  <img src={image ? URL.createObjectURL(image) : uploadImage} />
                  <input type='file' onChange={(e) => setImage(e.target.files[0])} hidden />
                </label>
              </div>

              <div className="admin-project-name">
                <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Project Name' />
              </div>

              <div className="admin-project-desc">
                <textarea
                  cols={78}
                  rows={6}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Project Description' />
              </div>

              <div className="admin-project-link">
                <input type='text' onChange={(e) => setLink(e.target.value)} placeholder='Project Link' />
              </div>

              <div className="admin-submit-btn">
                <button onClick={handleAddProject} >ADD</button>
              </div>
            </>
          )
        }

        {activePage === 'list' && (
          <div className='admin-list-mainBox'>
            <div className="list-heading">
              <h1>All Projects</h1>
            </div>
            <div className="list-box">
              {/* Headings */}
              <div className="list-box-heads">
                <div className="list-box-heads-detail" style={{ width: '30px' }}></div>
                <div className="list-box-heads-detail"><h3>Image</h3></div>
                <div className="list-box-heads-detail"><h3>Project Name</h3></div>
                <div className="list-box-heads-detail"><h3>Description</h3></div>
                <div className="list-box-heads-detail"><h3>Link</h3></div>
                <div className="list-box-heads-detail"><h3>Action</h3></div>
              </div>

              {/* Example Row */}
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={projects.map(p => p._id)}
                  strategy={verticalListSortingStrategy}
                >
                  {projects.map((project) => (
                    <SortableRow 
                      key={project._id} 
                      project={project} 
                      handleEditPopup={handleEditPopup} 
                      handleDeletePopup={handleDeletePopup} 
                    />
                  ))}
                </SortableContext>
              </DndContext>
              {/* =============== edit popup =====================  */}
              {projectToEdit && (
                <div className='editPopup'>
                  <div className="admin-add-image">
                    <label>
                      <img src={image ? URL.createObjectURL(image) : uploadImage} />
                      <input type='file' onChange={(e) => setImage(e.target.files[0])} hidden />
                    </label>
                  </div>

                  <div className="admin-project-name">
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Project Name' />
                  </div>

                  <div className="admin-project-desc">
                    <textarea
                      cols={78}
                      rows={6}
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      placeholder='Project Description' />
                  </div>

                  <div className="admin-project-link">
                    <input type='text' value={link} onChange={(e) => setLink(e.target.value)} placeholder='Project Link' />
                  </div>

                  <div className="edit-button">
                    <div className="admin-submit-btn">
                      <button onClick={() => handleEdit(projectToEdit._id)} >Submit</button>
                    </div>
                    <div className="admin-submit-btn">
                      <button onClick={() => setProjectToEdit(null)} >Cancel</button>
                    </div>
                  </div>

                </div>
              )}
              {
                selectedProject && (
                  <div className="modal">
                    <p>Do you really want to delete this project?</p>
                    <div className="modal-button">
                      <button onClick={() => handleDelete(selectedProject)}>OK</button>
                      <button onClick={() => setSelectedProject(null)}>Cancel</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPannel