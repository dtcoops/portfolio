import { useState } from 'react';
import type { Project } from '../../types';
import { ProjectDetail } from '../ProjectDetail/ProjectDetail';
import { ProjectForm } from '../ProjectForm/ProjectForm';

interface ProjectDetailPageProps {
  project: Project | null;
  isAdmin: boolean;
  onSave: (project: Project, isNew: boolean) => Promise<Project>;
  onDelete: (id: string) => void;
  onCancel: () => void;
}

function ProjectDetailPage({ project, isAdmin, onSave, onDelete, onCancel }: ProjectDetailPageProps) {
  const [isEditing, setIsEditing] = useState(project === null);

  if (isEditing) {
    return (
      <ProjectForm
        project={project}
        onSave={async (saved) => {
          await onSave(saved, project === null);
          setIsEditing(false);
        }}
        onCancel={() => {
          if (project === null) {
            onCancel();
          } else {
            setIsEditing(false);
          }
        }}
      />
    );
  }

  return (
    <ProjectDetail
      project={project as Project}
      isAdmin={isAdmin}
      onEdit={() => setIsEditing(true)}
      onDelete={() => onDelete((project as Project).id)}
    />
  );
}

export { ProjectDetailPage };