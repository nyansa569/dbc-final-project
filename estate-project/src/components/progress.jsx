// import React, { useState, useEffect } from "react";
// import "./progress.css";
// // Mock data for projects
// const mockProjects = [
//   {
//     id: 1,
//     title: "Luxury Waterfront Villa",
//     description: "Exclusive waterfront property with panoramic views",
//     overallStatus: "In Progress",
//     propertyDetails: {
//       name: "Sunset Villas",
//       description: "5-bedroom, 4-bath luxury villa with infinity pool",
//       images: [
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       ],
//     },
//     progressDetails: [
//       {
//         id: 1,
//         title: "Foundation Work",
//         description: "Concrete pouring and foundation setting",
//         images: [
//           "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         ],
//         progressStatus: "Completed",
//       },
//       {
//         id: 2,
//         title: "Framing",
//         description: "Structural framing and roof installation",
//         images: [],
//         progressStatus: "In Progress",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Downtown Condo Tower",
//     description: "High-rise luxury condominium in the city center",
//     overallStatus: "Planning",
//     propertyDetails: {
//       name: "Urban Heights",
//       description: "40-story tower with amenities and city views",
//       images: [
//         "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       ],
//     },
//     progressDetails: [],
//   },
// ];

// const ProgressPage = () => {
//   const [projects, setProjects] = useState(mockProjects);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     overallStatus: "Planning",
//     propertyDetails: {
//       name: "",
//       description: "",
//       images: [],
//     },
//     progressDetails: [],
//   });
//   const [newProgress, setNewProgress] = useState({
//     title: "",
//     description: "",
//     images: [],
//     progressStatus: "Not Started",
//   });
//   const [imageUpload, setImageUpload] = useState(null);

//   useEffect(() => {
//     if (projects.length > 0 && !selectedProject) {
//       setSelectedProject(projects[0]);
//     }
//   }, [projects, selectedProject]);

//   const handleProjectSelect = (project) => {
//     setSelectedProject(project);
//     setIsEditing(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlePropertyDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       propertyDetails: {
//         ...prev.propertyDetails,
//         [name]: value,
//       },
//     }));
//   };

//   const handleProgressInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProgress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageUpload(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const addImageToProgress = () => {
//     if (imageUpload) {
//       setNewProgress((prev) => ({
//         ...prev,
//         images: [...prev.images, imageUpload],
//       }));
//       setImageUpload(null);
//     }
//   };

//   const addProgressUpdate = () => {
//     if (newProgress.title && newProgress.description) {
//       const updatedProject = {
//         ...selectedProject,
//         progressDetails: [
//           ...selectedProject.progressDetails,
//           {
//             ...newProgress,
//             id: Date.now(),
//           },
//         ],
//       };

//       setProjects((prev) =>
//         prev.map((project) =>
//           project.id === updatedProject.id ? updatedProject : project
//         )
//       );
//       setSelectedProject(updatedProject);
//       setNewProgress({
//         title: "",
//         description: "",
//         images: [],
//         progressStatus: "Not Started",
//       });
//     }
//   };

//   const startNewProject = () => {
//     setFormData({
//       title: "",
//       description: "",
//       overallStatus: "Planning",
//       propertyDetails: {
//         name: "",
//         description: "",
//         images: [],
//       },
//       progressDetails: [],
//     });
//     setIsEditing(true);
//     setSelectedProject(null);
//   };

//   const editProject = () => {
//     setFormData(selectedProject);
//     setIsEditing(true);
//   };

//   const saveProject = () => {
//     if (
//       formData.title &&
//       formData.description &&
//       formData.propertyDetails.name
//     ) {
//       if (formData.id) {
//         // Update existing project
//         setProjects((prev) =>
//           prev.map((project) =>
//             project.id === formData.id ? formData : project
//           )
//         );
//         setSelectedProject(formData);
//       } else {
//         // Add new project
//         const newProject = {
//           ...formData,
//           id: Date.now(),
//         };
//         setProjects((prev) => [...prev, newProject]);
//         setSelectedProject(newProject);
//       }
//       setIsEditing(false);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Completed":
//         return "#4CAF50";
//       case "In Progress":
//         return "#2196F3";
//       case "Planning":
//         return "#FFC107";
//       case "Not Started":
//         return "#9E9E9E";
//       case "Delayed":
//         return "#F44336";
//       default:
//         return "#607D8B";
//     }
//   };

//   return (
//     <div className="progress-page-container">
//       <div className="projects-sidebar">
//         <div className="sidebar-header">
//           <h2>My Projects</h2>
//           <button className="add-button" onClick={startNewProject}>
//             + New Project
//           </button>
//         </div>
//         <div className="project-list">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className={`project-item ${
//                 selectedProject?.id === project.id ? "active" : ""
//               }`}
//               onClick={() => handleProjectSelect(project)}
//             >
//               <h3 className="project-title">{project.title}</h3>
//               <span
//                 className={`project-status ${project.overallStatus
//                   .toLowerCase()
//                   .replace(" ", "-")}`}
//               >
//                 {project.overallStatus}
//               </span>
//               <p className="project-description">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="main-content">
//         {isEditing ? (
//           <div className="edit-form">
//             <div className="form-header">
//               <h2>{formData.id ? "Edit Project" : "Create New Project"}</h2>
//               <div className="action-buttons">
//                 <button
//                   className="cancel-button"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button className="save-button" onClick={saveProject}>
//                   Save
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Project Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Enter project title"
//               />
//             </div>

//             <div className="form-group">
//               <label>Project Description</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Enter project description"
//                 rows="3"
//               />
//             </div>

//             <div className="form-group">
//               <label>Overall Status</label>
//               <select
//                 name="overallStatus"
//                 value={formData.overallStatus}
//                 onChange={handleInputChange}
//               >
//                 <option value="Planning">Planning</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Delayed">Delayed</option>
//               </select>
//             </div>

//             <h3 className="section-divider">Property Details</h3>

//             <div className="form-group">
//               <label>Property Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.propertyDetails.name}
//                 onChange={handlePropertyDetailsChange}
//                 placeholder="Enter property name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Property Description</label>
//               <textarea
//                 name="description"
//                 value={formData.propertyDetails.description}
//                 onChange={handlePropertyDetailsChange}
//                 placeholder="Enter property description"
//                 rows="3"
//               />
//             </div>
//           </div>
//         ) : selectedProject ? (
//           <>
//             <div className="project-header">
//               <div>
//                 <h1 className="project-title-large">{selectedProject.title}</h1>
//                 <span
//                   className={`project-status-large ${selectedProject.overallStatus
//                     .toLowerCase()
//                     .replace(" ", "-")}`}
//                 >
//                   {selectedProject.overallStatus}
//                 </span>
//               </div>
//               <button className="edit-button" onClick={editProject}>
//                 Edit Project
//               </button>
//             </div>

//             <p className="project-description-large">
//               {selectedProject.description}
//             </p>

//             <div className="section-container">
//               <h2 className="section-title">Property Details</h2>
//               <div className="property-details">
//                 <h3 className="property-name">
//                   {selectedProject.propertyDetails.name}
//                 </h3>
//                 <p className="property-description">
//                   {selectedProject.propertyDetails.description}
//                 </p>
//                 {selectedProject.propertyDetails.images.length > 0 && (
//                   <div className="image-gallery">
//                     {selectedProject.propertyDetails.images.map(
//                       (img, index) => (
//                         <img
//                           key={index}
//                           src={img}
//                           alt="Property"
//                           className="gallery-image"
//                         />
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="section-container">
//               <h2 className="section-title">Progress Updates</h2>
//               {selectedProject.progressDetails.length > 0 ? (
//                 <div className="progress-timeline">
//                   {selectedProject.progressDetails.map((progress) => (
//                     <div key={progress.id} className="timeline-item">
//                       <div
//                         className={`timeline-dot ${progress.progressStatus
//                           .toLowerCase()
//                           .replace(" ", "-")}`}
//                       />
//                       <div className="timeline-content">
//                         <h4 className="progress-title">{progress.title}</h4>
//                         <span
//                           className={`progress-status ${progress.progressStatus
//                             .toLowerCase()
//                             .replace(" ", "-")}`}
//                         >
//                           {progress.progressStatus}
//                         </span>
//                         <p className="progress-description">
//                           {progress.description}
//                         </p>
//                         {progress.images.length > 0 && (
//                           <div className="progress-images">
//                             {progress.images.map((img, index) => (
//                               <img
//                                 key={index}
//                                 src={img}
//                                 alt="Progress"
//                                 className="progress-image"
//                               />
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="no-progress">No progress updates yet</div>
//               )}

//               <div className="add-progress-form">
//                 <h3 className="form-title">Add Progress Update</h3>
//                 <div className="progress-form-group">
//                   <label>Title</label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={newProgress.title}
//                     onChange={handleProgressInputChange}
//                     placeholder="Enter progress title"
//                   />
//                 </div>

//                 <div className="progress-form-group">
//                   <label>Description</label>
//                   <textarea
//                     name="description"
//                     value={newProgress.description}
//                     onChange={handleProgressInputChange}
//                     placeholder="Enter progress description"
//                     rows="3"
//                   />
//                 </div>

//                 <div className="progress-form-group">
//                   <label>Status</label>
//                   <select
//                     name="progressStatus"
//                     value={newProgress.progressStatus}
//                     onChange={handleProgressInputChange}
//                   >
//                     <option value="Not Started">Not Started</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Completed">Completed</option>
//                     <option value="Delayed">Delayed</option>
//                   </select>
//                 </div>

//                 <div className="progress-form-group">
//                   <label>Images</label>
//                   <div className="image-upload-container">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       style={{ display: "none" }}
//                       id="progress-image-upload"
//                     />
//                     <label
//                       htmlFor="progress-image-upload"
//                       className="upload-button"
//                     >
//                       Choose Image
//                     </label>
//                     {imageUpload && (
//                       <>
//                         <img
//                           src={imageUpload}
//                           alt="Preview"
//                           className="preview-image"
//                         />
//                         <button
//                           className="add-image-button"
//                           onClick={addImageToProgress}
//                         >
//                           Add Image
//                         </button>
//                       </>
//                     )}
//                   </div>
//                   {newProgress.images.length > 0 && (
//                     <div className="image-preview-container">
//                       {newProgress.images.map((img, index) => (
//                         <img
//                           key={index}
//                           src={img}
//                           alt="Progress"
//                           className="small-image-preview"
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   className="add-progress-button"
//                   onClick={addProgressUpdate}
//                 >
//                   Add Progress Update
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="empty-state">
//             <div className="empty-state-icon">🏗️</div>
//             <h2 className="empty-state-title">No Project Selected</h2>
//             <p className="empty-state-text">
//               Select a project from the sidebar or create a new one
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProgressPage;

import React, { useEffect, useState } from "react";
import projectRepository from "../repositories/progressRepository"; // Adjust path as needed
import "./progress.css";
import { userStorage } from "../repositories/userStorage";

const DEFAULT_IMAGE =
  "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg";

const ProgressPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    overallStatus: "Planning",
    propertyDetails: {
      name: "",
      description: "",
    },
    image: null,
  });
  const [newProgress, setNewProgress] = useState({
    title: "",
    description: "",
    progressStatus: "Not Started",
    image: null,
  });

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const user = await userStorage.getCurrentUser();
        console.log("Current user from storage:", user);
        setCurrentUser(user);
        loadProjects();
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const loadProjects = async () => {
    const res = await projectRepository.getAll();
    console.log("Projects loaded:", res);
    if (Array.isArray(res)) setProjects(res);
  };

  const loadProjectDetails = async (project) => {
    const res = await projectRepository.getById(project.id);
    if (!res.error) setSelectedProject(res);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      propertyDetails: {
        ...prev.propertyDetails,
        [name]: value,
      },
    }));
  };

  const handleImageSelect = (e, isProgress = false) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (isProgress) {
        setNewProgress((prev) => ({ ...prev, image: file }));
      } else {
        setFormData((prev) => ({ ...prev, image: file }));
      }
    };
    reader.readAsDataURL(file);
  };

  const startNewProject = () => {
    setFormData({
      title: "",
      description: "",
      overallStatus: "Planning",
      propertyDetails: { name: "", description: "" },
      image: null,
    });
    setIsEditing(true);
    setSelectedProject(null);
  };

  const saveProject = async () => {
    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("description", formData.description);
    payload.append("overall_status", formData.overallStatus);
    payload.append("property_name", formData.propertyDetails.name);
    payload.append("user_id", currentUser?.id);
    payload.append(
      "property_description",
      formData.propertyDetails.description
    );
    if (formData.image) payload.append("image", formData.image);
    console.log("Saving project with payload:", payload);

    for (let [key, value] of payload.entries()) {
      console.log(`${key}:`, value);
    }

    const res = selectedProject
      ? await projectRepository.update(selectedProject.id, payload)
      : await projectRepository.create(payload);
      console.log("Project saved successfully:", res);

    if (!res.error) {
      setIsEditing(false);
      await loadProjects();
    }
  };

  const addProgressUpdate = async () => {
    if (!selectedProject || !newProgress.title || !newProgress.description)
      return;

    const payload = new FormData();
    payload.append("title", newProgress.title);
    payload.append("description", newProgress.description);
    payload.append("progress_status", newProgress.progressStatus);
    if (newProgress.image) payload.append("progress_image", newProgress.image);
    for (let [key, value] of payload.entries()) {
      console.log(`from repo - ${key}:`, value);
    }

    const res = await projectRepository.addProgress(
      selectedProject.id,
      payload
    );
    if (!res.error) {
      await loadProjectDetails(selectedProject);
      setNewProgress({
        title: "",
        description: "",
        progressStatus: "Not Started",
        image: null,
      });
    }
  };

  return (
    <div className="progress-page-container">
      <div className="projects-sidebar">
        <div className="sidebar-header">
          <h2>My Projects</h2>
          <button className="add-button" onClick={startNewProject}>
            + New Project
          </button>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item ${
                selectedProject?.id === project.id ? "active" : ""
              }`}
              onClick={() => loadProjectDetails(project)}
            >
              <h3>{project.title}</h3>
              <span
                className={`project-status ${project.overall_status?.toLowerCase()}`}
              >
                {project.overall_status}
              </span>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        {isEditing ? (
          <div className="edit-form">
            <h2>{selectedProject ? "Edit Project" : "Create New Project"}</h2>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Project Title"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Project Description"
            />
            <select
              name="overallStatus"
              value={formData.overallStatus}
              onChange={handleInputChange}
            >
              <option>Planning</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Delayed</option>
            </select>

            <h3>Property Details</h3>
            <input
              type="text"
              name="name"
              value={formData.propertyDetails.name}
              onChange={handlePropertyChange}
              placeholder="Property Name"
            />
            <textarea
              name="description"
              value={formData.propertyDetails.description}
              onChange={handlePropertyChange}
              placeholder="Property Description"
            />
            <input type="file" onChange={(e) => handleImageSelect(e)} />

            <div className="action-buttons">
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <button onClick={saveProject}>Save</button>
            </div>
          </div>
        ) : selectedProject ? (
          <>
            <div className="project-header">
              <h1>{selectedProject.title}</h1>
              <span
                className={`project-status ${selectedProject.overall_status?.toLowerCase()}`}
              >
                {selectedProject.overall_status}
              </span>
              <button
                onClick={() => {
                  setFormData({
                    title: selectedProject.title,
                    description: selectedProject.description,
                    overallStatus: selectedProject.overall_status,
                    propertyDetails: {
                      name: selectedProject.property_name,
                      description: selectedProject.property_description,
                    },
                    image: null,
                  });
                  setIsEditing(true);
                }}
              >
                Edit Project
              </button>
            </div>

            <p>{selectedProject.description}</p>

            <div className="section-container">
              <h2>Property Details</h2>
              <h3>{selectedProject.property_name}</h3>
              <p>{selectedProject.property_description}</p>
              <div className="image-gallery">
                {(() => {
                  let images = [];

                  try {
                    const raw = selectedProject.property_images;
                    if (Array.isArray(raw)) {
                      images = raw;
                    } else if (
                      typeof raw === "string" &&
                      raw.trim().startsWith("[")
                    ) {
                      images = JSON.parse(raw);
                    }
                  } catch (e) {
                    images = [];
                  }

                  if (!Array.isArray(images) || images.length === 0) {
                    images = [DEFAULT_IMAGE];
                  }

                  return images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img || DEFAULT_IMAGE}
                      alt="Property"
                      className="gallery-image"
                    />
                  ));
                })()}
              </div>
            </div>

            <div className="section-container">
              <h2>Progress Updates</h2>
              {selectedProject.progress_details?.length > 0 ? (
                <div className="progress-timeline">
                  {selectedProject.progress_details.map((progress) => (
                    <div key={progress.id} className="timeline-item">
                      <div
                        className={`timeline-dot ${progress.progress_status?.toLowerCase()}`}
                      />
                      <div className="timeline-content">
                        <h4>{progress.title}</h4>
                        <span className="progress-status">
                          {progress.progress_status}
                        </span>
                        <p>{progress.description}</p>
                        <div className="progress-images">
                          {(progress.images?.length
                            ? JSON.parse(progress.images)
                            : [DEFAULT_IMAGE]
                          ).map((img, idx) => (
                            <img
                              key={idx}
                              src={img || DEFAULT_IMAGE}
                              alt="Progress"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No progress updates yet.</p>
              )}

              <div className="add-progress-form">
                <h3>Add Progress</h3>
                <input
                  type="text"
                  name="title"
                  value={newProgress.title}
                  onChange={(e) =>
                    setNewProgress({ ...newProgress, title: e.target.value })
                  }
                  placeholder="Progress Title"
                />
                <textarea
                  name="description"
                  value={newProgress.description}
                  onChange={(e) =>
                    setNewProgress({
                      ...newProgress,
                      description: e.target.value,
                    })
                  }
                  placeholder="Progress Description"
                />
                <select
                  name="progressStatus"
                  value={newProgress.progressStatus}
                  onChange={(e) =>
                    setNewProgress({
                      ...newProgress,
                      progressStatus: e.target.value,
                    })
                  }
                >
                  <option>Not Started</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Delayed</option>
                </select>
                <input
                  type="file"
                  onChange={(e) => handleImageSelect(e, true)}
                />
                <button onClick={addProgressUpdate}>Add Progress</button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <h2>No Project Selected</h2>
            <p>Select a project or create a new one.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
