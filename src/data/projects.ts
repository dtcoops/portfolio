import type { Project } from '../types'
import {
  myruns, myrunsStart, myrunsHistory, myrunsSettings, myrunsProfile, myrunsProfileImgDialog,
  tiledrop, tiledropPlan,
  fileparser, fileparserMockup, fileparserCompress, fileparserDecompress,
  coffee, coffeeFavs, coffeeTest, predictionResults, predictedProducts,
  portfolioThumb
} from '../assets'

export const projects: Project[] = [
  {
    id: 'myruns',
    title: 'MyRuns — Exercise Tracker',
    topic: 'school',
    desc: 'Android sensor fusion for run tracking; exports GPX and summary stats.',
    tags: ['Kotlin', 'Java', 'Android Studio', 'Weka'],
    thumb: myruns,
    meta: [
      { label: 'Platform', value: 'Android' },
      { label: 'Language', value: 'Kotlin, Java' },
      { label: 'Tools', value: 'Android Studio, Weka' },
      { label: 'Libraries', value: 'Room, ViewModel, Google Maps SDK' },
      { label: 'Team', value: 'Solo' },
      { label: 'Duration', value: '4 Months' },
      { label: 'Completion', value: '2025' },
    ],
    images: [
      { src: myruns, caption: 'MyRuns activity tracker demonstrating GPS routes using Android Studio emulator locations.' },
      { src: myrunsStart, caption: 'MyRuns application on startup. Shows Start activity with start fragment.' },
      { src: myrunsHistory, caption: 'MyRuns History fragment.' },
      { src: myrunsSettings, caption: 'MyRuns Settings fragment.' },
      { src: myrunsProfile, caption: 'MyRuns profile activity.' },
      { src: myrunsProfileImgDialog, caption: 'MyRuns profile change image dialog fragment.' },
    ],
    overview: `An exercise tracking mobile application created as part of lecture tutorials for Simon Fraser CMPT 362 - Mobile Applications Programming and Design. This project took place throughout the semester with each tutorial building the application up part by part. Users can modify their profile, view past exercise activities and relevant information, and track new activities either manually, with GPS, or automatically with a Weka classifier to determine if the user is walking, running, or standing.`,
    goals: [
      'Implement required features by recreating a provided .apk file for each tutorial component.',
      'Test features to ensure functionality for typical use cases.',
    ]
  },
  {
    id: 'tiledrop',
    title: 'TileDrop — Puzzle Platformer',
    topic: 'personal',
    desc: 'Unity C# prototype with grid hazards and level scripting.',
    tags: ['Unity', 'C#', 'Prototype'],
    thumb: tiledrop,
    meta: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Language', value: 'C#' },
      { label: 'Team', value: 'Solo' },
    ],
    images: [
      { src: tiledrop, caption: 'TileDrop gameplay screenshot.' },
      { src: tiledropPlan, caption: 'Level design planning document.' },
    ],
    overview: `A Unity puzzle platformer prototype featuring grid-based hazards and scripted level sequences. Built as a personal project to explore Unity's C# scripting, tilemap system, and game feel fundamentals.`,
    goals: [
      'Design and implement a grid-based hazard system.',
      'Build a level scripting pipeline for repeatable puzzle sequences.',
    ],
  },
  {
    id: 'fileparse',
    title: 'File Parser',
    topic: 'school',
    desc: 'Python application with GUI to parse .bmp file data and compress and decompress data.',
    tags: ['Python', 'Tkinter'],
    thumb: fileparser,
    meta: [
      { label: 'Language', value: 'Python' },
      { label: 'Libraries', value: 'Tkinter' },
      { label: 'Team', value: 'Solo' },
    ],
    images: [
      { src: fileparser, caption: 'File Parser main interface.' },
      { src: fileparserMockup, caption: 'Initial mockup design.' },
      { src: fileparserCompress, caption: 'Compression output.' },
      { src: fileparserDecompress, caption: 'Decompression output.' },
    ],
    overview: `A Python desktop application with a Tkinter GUI for parsing raw .bmp file data, with support for both compression and decompression of bitmap image data.`,
    goals: [
      'Parse raw binary .bmp file structure and display metadata.',
      'Implement compression and decompression algorithms with visual output.',
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee Recommender',
    topic: 'school',
    desc: 'scikit-learn pipeline to match users to roasts with GACTT data.',
    tags: ['Python', 'pandas', 'scikit-learn'],
    thumb: coffee,
    meta: [
      { label: 'Language', value: 'Python' },
      { label: 'Libraries', value: 'pandas, scikit-learn' },
      { label: 'Dataset', value: 'GACTT' },
      { label: 'Team', value: 'Solo' },
    ],
    images: [
      { src: coffee, caption: 'Coffee Recommender overview.' },
      { src: coffeeFavs, caption: 'Favourite roast analysis.' },
      { src: coffeeTest, caption: 'Model test results.' },
      { src: predictionResults, caption: 'Prediction results output.' },
      { src: predictedProducts, caption: 'Predicted product recommendations.' },
    ],
    overview: `A machine learning pipeline built with scikit-learn that uses the Great American Coffee Taste Test (GACTT) dataset to match users to coffee roast profiles based on their preferences.`,
    goals: [
      'Clean and process the GACTT survey dataset using pandas.',
      'Train a classifier to predict roast preference from user inputs.',
    ],
  },
  {
  id: 'portfolio',
  title: 'Portfolio Website',
  topic: 'personal',
  desc: 'Single-page app built with React and TypeScript, featuring component-based architecture, CSS Modules, and client-side navigation.',
  tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
  thumb: portfolioThumb,
  meta: [
    { label: 'Type', value: 'Personal Project' },
    { label: 'Frontend', value: 'React, TypeScript' },
    { label: 'Tooling', value: 'Vite, CSS Modules' },
    { label: 'Deployment', value: 'GitHub Pages' },
    { label: 'Team', value: 'Solo' },
  ],
  images: [
    { src: portfolioThumb, caption: 'This website!' }
  ],
  overview: `A portfolio SPA rebuilt from a vanilla HTML/CSS/JS site into a React and TypeScript application. Designed around a gallery and detail view pattern with client-side navigation driven by a single useState to simplify and prevent router dependency. CSS Modules keep component styles scoped, with shared design tokens in a global stylesheet.`,
  goals: [
    'Migrate an existing vanilla JS portfolio to React and TypeScript to demonstrate modern frontend skills.',
    'Implement client-side navigation between gallery and detail views using a single useState to simplify and prevent router dependency.',
    'Structure components, types, and styles in a maintainable and scalable way.',
  ],
  liveUrl: 'https://github.com/dtcoops/portfolio',
},
]
