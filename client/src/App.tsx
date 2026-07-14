import { useEffect, useState } from 'react';
import { Header, Gallery, ProjectDetail, Footer} from './components';

import type { Project, Topic } from './types';

function LoadingScreen() {
  return <div>Loading projects...</div>;
}

function App() {
  const [ projects, setProjects ] = useState<Project[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);

  const [ activeTopic, setActiveTopic ] = useState<Topic>('all');
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/projects')
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

  if (loading) {
    return (
      <LoadingScreen />
  )};
  if (error) {
    return (
      <div>Something went wrong: {error}</div>
  )};

  return (
    <>
      <Header 
        activeTopic={activeTopic} 
        onTopicChange={setActiveTopic} 
        showFilters={!selectedProject} 
        onBack = {() => setSelectedProject(null) }
      />
      {
        selectedProject ? (
          <ProjectDetail
          project = { selectedProject }
          />
        ) : (
        <Gallery
          projects = { projects }
          activeTopic = { activeTopic }
          onSelectProject = { setSelectedProject }
        />
      )}
      <Footer />
    </>
  );
}

export default App