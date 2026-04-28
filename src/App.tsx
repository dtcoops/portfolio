import { useState } from 'react';
import { Header } from './components/Header/Header';

import type { Project, Topic } from './types';

function App() {

  const [ activeTopic, setActiveTopic ] = useState<Topic>('all');
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null);

  return (
    <>
      <Header activeTopic={activeTopic} onTopicChange={setActiveTopic}/>
      {
        selectedProject ? (
          <ProjectDetail
          project = { selectedProject }
          onBack = { setSelectedProject(null) }
          />
        ) : (
        <Gallery
          projects = { projects }
          activeTopic = { activeTopic }
          onSelectProject = { setSelectedProject }
        />
      )}
    </>
  );
}

export default App