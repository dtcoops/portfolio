import { useEffect, useState } from 'react';
import { Header, Gallery, ProjectDetail, Footer, LoadingScreen, AdminLoginModal} from './components';

import type { Project, Topic } from './types';

const ADMIN_PATH = `admin-route`;

function App() {
  // Handle backend routing
  const [ projects, setProjects ] = useState<Project[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);
  // Admin Page
  const [isAdmin] = useState(() => window.location.pathname.includes(`/${ADMIN_PATH}`));
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(null);
  // filter and seletion
  const [ activeTopic, setActiveTopic ] = useState<Topic>('all');
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null);

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
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateNew = () => {
    console.log('Create new requested');
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
  } else if (selectedProject) {
    mainContent = <ProjectDetail project={selectedProject} />;
  } else {
    mainContent = (
      <Gallery
        projects={projects}
        activeTopic={activeTopic}
        onSelectProject={setSelectedProject}
        isAdmin={isAdmin && adminUnlocked}
        onDeleteProject={handleDeleteProject}
        onCreateNew={handleCreateNew}
      />
    );
  }

  return (
    <>
      <Header 
        activeTopic={activeTopic} 
        onTopicChange={setActiveTopic} 
        showFilters={!selectedProject} 
        onBack = {() => setSelectedProject(null) }
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