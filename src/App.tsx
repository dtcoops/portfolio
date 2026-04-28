import { useState } from 'react';
import { Header } from './components/Header';

import type { Topic } from './types';

function App() {

  const [ activeTopic, setActiveTopic ] = useState<Topic>('all');

  return (
    <>
      <Header activeTopic={activeTopic} onTopicChange={setActiveTopic}/>
      
    </>
  );
}

export default App