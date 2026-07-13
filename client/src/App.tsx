import { useState } from 'react';
import { Header, Gallery, ProjectDetail, Footer} from './components';

import { projects } from './data/projects';
import type { Project, Topic } from './types';

function App() {

  const [ activeTopic, setActiveTopic ] = useState<Topic>('all');
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null);

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