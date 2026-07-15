import { useEffect, useState } from 'react';
import { Header, Gallery, Footer, LoadingScreen, AdminLoginModal, ProjectDetailPage} from './components';

import type { Project, Topic } from './types';

const ADMIN_PATH = import.meta.env.VITE_ADMIN_PATH;

function App() {
  // Handle backend routing
  const [ projects, setProjects ] = useState<Project[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);
  // Admin Page
  const [isAdmin] = useState(() => window.location.pathname.includes(`/` + ADMIN_PATH));
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(null);
  // filter and seletion
  const [ activeTopic, setActiveTopic ] = useState<Topic>('all');
  const [ selectedProject, setSelectedProject ] = useState<Project | null | undefined>(undefined);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleDeleteProject = async (id: string) => {
    try {
      const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${adminToken}`,
        },
      })

      if (!res.ok) {
        throw new Error(`Failed to delete project: ${id}`);
      }

      setProjects((prev) => prev.filter((project) => project.id != id));
      setSelectedProject(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveProject = async (project: Project, isNew: boolean): Promise<Project> => {
    const res = await fetch(
      isNew ? `${BASE_URL}/api/projects` : `${BASE_URL}/api/projects/${project.id}`,
      {
        method: isNew ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify(project),
      }
    );

    if (!res.ok) throw new Error('Failed to save project');

    const saved = await res.json();

    setProjects((prev) =>
      isNew ? [...prev, saved] : prev.map((p) => (p.id === saved.id ? saved : p))
    );

    setSelectedProject(saved);
    return saved;
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects.');
        }
        return res.json();
      })
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setLoading(false);
      })
  }, []);

  let mainContent;
  if (error) {
    mainContent = <div>Something went wrong: {error}</div>;
  } else if (loading) {
    mainContent = <LoadingScreen />;
  } else if (selectedProject !== undefined) {
  mainContent = (
    <ProjectDetailPage
      key={selectedProject === null ? 'new' : selectedProject.id}
      project={selectedProject}
      isAdmin={isAdmin && adminUnlocked}
      onSave={handleSaveProject}
      onDelete={handleDeleteProject}
      onCancel={() => setSelectedProject(undefined)}
    />
  );
} else {
  mainContent = (
    <Gallery
      projects={projects}
      activeTopic={activeTopic}
      onSelectProject={setSelectedProject}
      isAdmin={isAdmin && adminUnlocked}
      onDeleteProject={handleDeleteProject}
      onCreateNew={() => setSelectedProject(null)}
    />
  );
  }

  return (
    <>
      <Header 
        activeTopic={activeTopic} 
        onTopicChange={setActiveTopic} 
        showFilters={!selectedProject} 
        onBack = {() => setSelectedProject(undefined)}
        isAdminMode={isAdmin}
      />

      {mainContent}

      <Footer />

      {isAdmin && !adminUnlocked && (
        <AdminLoginModal
          onSuccess={(token) => {
            setAdminToken(token);
            setAdminUnlocked(true);
          }}
        />
      )}
    </>
  );
}

export default App