import React, { useState, useEffect, useRef } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
     projects: Project[];
     onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }

    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            <ProjectCard 
                project={project}
                onEdit={handleEdit}
            ></ProjectCard>

            {project === projectBeingEdited ? (
                <ProjectForm
                    project={project}
                    onSave={onSave}
                    onCancel={cancelEditing}
                />
            ) : (
                <ProjectCard project={project} onEdit={handleEdit} />
            )}
        </div>
    ));

    const cancelEditing = () => {
        setProjectBeingEdited({});
    };

    return <div className="row">{items}</div>;
}

export default ProjectList;