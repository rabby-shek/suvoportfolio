import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./projectList";

const ProjectView = () => {
  const { id } = useParams();
  const [previewImage, setPreviewImage] = useState(null);

  const filteredProject = projectList.find(
    (project) => project.id === parseInt(id, 10)
  );

  if (!filteredProject) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="project-view">
      <h2>{filteredProject.name}</h2>
      <p>{filteredProject.description}</p>
      <div className="image-grid">
        {filteredProject.technology.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div>
        {filteredProject.live.length > 0 && (
          <a
            href={filteredProject.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        )}
      </div>
      <div className="image-grid">
        {filteredProject.imageGroups.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`preview-${index}`}
            onClick={() => handleImageClick(item)}
          />
        ))}
      </div>
      {previewImage && (
        <div className="modal-overlay" onClick={closePreview}>
          <div className="modal">
            <img src={previewImage} alt="preview" />
            <button onClick={closePreview}>Close Preview</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectView;
