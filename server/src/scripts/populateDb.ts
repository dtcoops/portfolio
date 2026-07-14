import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Project } from '../models/project';
import type { Project as ProjectType } from '../types/project';

// Call in terminal if changes to array are made
// npx tsx src/scripts/populateDb.ts 

const projectsData: ProjectType[] = [
  {
    id: 'myruns',
    title: 'MyRuns — Exercise Tracker',
    topic: 'school',
    desc: 'Android sensor fusion for run tracking; exports GPX and summary stats.',
    tags: ['Kotlin', 'Java', 'Android Studio', 'Weka'],
    thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004889/myruns_s0kjmc.png',
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
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004889/myruns_s0kjmc.png', caption: 'MyRuns activity tracker demonstrating GPS routes using Android Studio emulator locations.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004895/myruns_start_kkpe67.png', caption: 'MyRuns application on startup. Shows Start activity with start fragment.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004890/myruns_history_g9majg.png', caption: 'MyRuns History fragment.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004894/myruns_settings_rz9xs4.png', caption: 'MyRuns Settings fragment.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004892/myruns_profile_nfl3zm.png', caption: 'MyRuns profile activity.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004893/myruns_profile_img_dialog_fiyiuw.png', caption: 'MyRuns profile change image dialog fragment.' },
    ],
    overview: [
      `An exercise tracking mobile application created as part of lecture tutorials for Simon Fraser CMPT 362 - Mobile Applications Programming and Design. This project took place throughout the semester with each tutorial building the application up part by part. Users can modify their profile, view past exercise activities and relevant information, and track new activities either manually, with GPS, or automatically with a Weka classifier to determine if the user is walking, running, or standing.`,
    ],
      goals: [
      'Implement required features by recreating a provided .apk file for each tutorial component.',
      'Test features to ensure functionality for typical use cases.',
    ]
  },
  {
    id: 'tiledrop',
    title: 'TileDrop — Puzzle Platformer',
    topic: 'personal',
    desc: 'Unity C# puzzle platformer built from a 2021 game design document.',
    tags: ['Unity', 'C#'],
    thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004929/tiledrop_tkczgv.png',
    meta: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Language', value: 'C#' },
      { label: 'Team', value: 'Solo' },
    ],
    images: [
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004930/tiledrop_plan_anbdtp.png', caption: 'Level design planning document.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004926/level1_dqhzdk.png', caption: 'Level 1 Layout' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004928/level2_gilult.png', caption: 'Level 2 Layout' },
      { src: 'tileFallGif.gif', caption: 'Tile Fall Mechanic' },
      { src: 'enemyExplosion.gif', caption: 'Enemy Explosion Mechanic' },
      { src: 'doubleJump.gif', caption: 'Double Jump Mechanic' },
    ],
    overview: [
      `TileDrop started as a game design document I wrote for a VFS certificate in 2021. It was specifically intended to teach fundamental level design skills; each level was required to increase in difficulty and incrementally introduce new mechanics in an intuitive way. Years later I found my original sketch document and built it into a playable prototype.`  
    ],
    goals: [
      'Design a multi-level puzzle game where mechanics are introduced intuitively, to build upon one another without requiring explicit instrucction.',
      'Complete a prototype from a legacy incomplete build. Working from an inherited codebase to bring the original document design to a playable state.',
    ],
    links: [{
      label: 'GitHub', 
      url: 'https://github.com/dtcoops/Tile-Drop-2' 
    }],
    details: [
      {
        heading: 'The Design',
        points: [
          `TileDrop is a puzzle platformer where the player must navigate two characters across a chasm of falling tiles. 
          I kept the mechanics deliberately simple: tiles that fall after a single touch, a standard jump, and a double jump 
          that ties the two together. This double jump would function similar to a throw, one character would jump ontop of the other to be caught and tossed to the next tile. 
          To prevent a player from simply hopping linearly across a level, each character was assigned a role - forcing players to think about positioning to solve the puzzles.`,

          `In my VFS level design class, we were shown Super Mario World's approach to intuitive teaching - the famous first Goomba 
          encounter works because the level geometry almost guarantees the player jumps on it without being told to. I 
          tried to apply the same principle: Level 1 has a clear start and end, and is impossible to complete without jumping 
          onto falling tiles. No instructions needed.`,

          `Level 2 added the double jump by creating intersecting paths that couldn't be completed without discovering the ability. 
          I also introduced enemies here, intentionally red as is tradition for danger and in-game explosive elements, and retroactively added a passive  
          introductory enemy in Level 1 to prime the player for their introduction later, this one in particular is only a threat if 
          the player deliberately touches it. My intent was to commuincate this early, so that players would know not to touch them when
          they are introduced in level 2.`,

          `Level 3 raised the stakes with moving tiles and more strategically placed enemies. Level 4 was a mastery challenge — no new 
          mechanics, just everything learned from the previous three levels applied under pressure.`,
        ]
      },
      {
        heading: 'The Plan',
        points: [
          `My goal was to test what I had designed and go beyond following Unity Pathways Tutorials by creating something entirely my own. 
          Rather than chasing polish or a shippable product, I set a simpler bar: take a design 
          document and turn it into something fully playable and hopefully - fun. If the blockout worked, 
          the project was a success.`,
        ]
      },
      {
        heading: 'The Build',
        points: [
          `My approach was deliberately incremental. I started with Level 1's layout and the player controller, getting those working together before 
          touching anything else. From there I added the tile falling system. Tiles needed to register contact, track remaining lives, change material 
          to signal state, and fall only after the player breaks contact with the tile. 
          A minimum Y threshold destroyed both tiles and players after falling to a set depth, keeping the scene clean.`,
          
          `With tiles working I turned to enemies. Enemies patrol between points, and I figured that the moving tiles in later levels could be implemeted 
          in the same way. Rather than writing the same patrol logic twice I abstracted it into a BaseNPC class that both Enemy and Tile inherit from. 
          This was the first time in the project I had to think architecturally rather than just functionally — the decision saved significant 
          time later when building Level 3's moving tile section`,
          
          `With those systems in place Level 1 was fully buildable and testable. Level 2 introduced 
          the cooperative throw mechanic, which turned out to be significantly more complex than 
          anticipated. Detecting roles, storing throw direction from Jumper's last known velocity, 
          calculating a ballistic arc, and managing physics state across the sequence worked in isolation but introduced bugs when combined. 
          The throw mechanic also broke the existing tile fall system. The tile's contact tracking relied on 
          simple collision enter and exit events, but the throw sequence introduced a third state — 
          a player lifting off a tile while holding another — that the original logic hadn't 
          accounted for. Resolving it required tracking contacts per player by instance ID and 
          remembering which players had left while in a holding state, so their subsequent exit 
          after releasing could be correctly ignored.`,
          
          `Midway through implementing the throw I realized I had no level reset function. If a player fell, the level continued in a broken state. 
          I added a death event system using C#'s event pattern — PlayerController fires OnPlayerDied, GameManager listens and triggers which 
          reloads the scene. The event pattern kept the two systems decoupled — PlayerController doesn't need to know GameManager exists, 
          it just broadcasts the event and moves on. A direct reference from PlayerController to GameManager would have worked, but would have created 
          a tight dependency between two systems that have no reason to know about each other.`,
          
          `To make the full game playable end-to-end I built a SceneManager singleton — a persistent object 
          that survives scene loads and handles all scene transitions through a single interface. Rather than 
          any system calling Unity's SceneM anager directly, everything routes through it. This made adding 
          the level reset, level exit, and sequential level progression a matter of calling one method rather 
          than scattering scene loading logic across multiple scripts.`,

          `Level 3 was almost purely a construction task. All the systems were in place, the moving tiles just needed their speeds 
          calculated to keep them synchronized, enemies needed patrol paths set, and the layout needed to be built out in the engine. 
          Having a solid foundation meant the final level came together quickly, which felt like a validation 
          of the incremental approach.` 
        ]
      },
      {
        heading: `UX`,
        points: [
          `Designing intuitive controls for two characters on a single input device was one of the 
          more interesting constraints of the project and something I had not thought about in designing the documentation. 
          I opted for a held left mouse button to control one character and a held right mouse button for the other — 
          allowing the player to move each character independently, or hold both to move them simultaneously.`,
                  
          `In practice this works, but it is the least intuitive part of the game. The held click as 
          an activation condition isn't a pattern most players bring from prior experience, and 
          without any onboarding it requires discovery rather than intuition. This would potentially be more intuitive 
          with a controller with left and right triggers, the tradeoff is accessibility; it would limit who can play.`,
          
          `In a future iteration I would attempt to solve this with visual feedback. The game currently contains UI elements, and there is no indicator of which 
          character is left and right. This is a shortcoming. To address this, my intent is to introduce a portrait system in the bottom left and right of the screen. 
          I could then highlight the active player portriat while the mouse is held, associate each character to a protrait, and add small mouse button 
          icons to the portrait to communicate the control scheme at a glance.`
        ]
      },
      {
        heading: `Retrospective`,
        points: [
          `The throw mechanic took significantly longer than expected and surfaced something I hadn't 
          considered: physics event ordering. Unity fires collision events in an order I couldn't 
          control, which meant game state I assumed would be set wasn't always ready when I needed it. 
          The fix required tracking state across multiple frames rather than reading it at the moment 
          of the event.`,

          `The incremental approach was the right call. Having a playable foundation at every 
          stage meant new systems could be tested against real gameplay immediately, and problems 
          surfaced early rather than compounding. The BaseNPC decision in particular paid off when Level 3's 
          moving tiles required exactly the same behaviour as enemies.`,

          `If I were starting again I'd prototype the character interaction in isolation before 
          building levels around it. `,

          `I also underestimated how much camera choice affects playability. Top-down looked flat and 
          lost the sense of depth that made the falling tiles feel dangerous. Third person over-the-shoulder 
          restored that depth but prevented players from seeing the full puzzle which made planning ahead feel 
          more like guesswork. Orthographic solved both problems: it preserves the three-dimensional read of the 
          space while keeping the entire layout visible at once, and eliminated the depth perception 
          issues that had been making jumps feel inconsistent from the start.`
        ]
      }
    ]
  },
  {
    id: 'fileparse',
    title: 'File Parser',
    topic: 'school',
    desc: 'Python application with GUI to parse .bmp file data and compress and decompress data.',
    tags: ['Python', 'Tkinter'],
    thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004872/fileparser_jdr6nr.png',
    meta: [
      { label: 'Language', value: 'Python' },
      { label: 'Libraries', value: 'Tkinter' },
      { label: 'Team', value: 'Solo' },
    ],
    images: [
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004872/fileparser_jdr6nr.png', caption: 'File Parser main interface.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004874/mockup_k6qc23.png', caption: 'Initial mockup design.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004873/fileparser_compress_mxaxik.png', caption: 'Compression output.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004875/fileparser_decompress_akk58z.png', caption: 'Decompression output.' },
    ],
    overview: [
      `A Python desktop application with a Tkinter GUI for parsing raw .bmp file data, with support for both compression and decompression of bitmap image data.`,
    ],
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
    thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004854/coffee_rz8pfg.png',
    meta: [
      { label: 'Language', value: 'Python' },
      { label: 'Libraries', value: 'pandas, scikit-learn' },
      { label: 'Dataset', value: 'GACTT' },
      { label: 'Team', value: 'Solo' },
    ],
    images: [
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004854/coffee_rz8pfg.png', caption: 'Coffee Recommender overview.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004853/coffee_favs_jrc0ft.png', caption: 'Favourite roast analysis.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004854/coffee_test_bjp9dg.png', caption: 'Model test results.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004855/prediction_results_ouvh5f.png', caption: 'Prediction results output.' },
      { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004856/predicted_products_wcbevv.png', caption: 'Predicted product recommendations.' },
    ],
    overview: [
      `A machine learning pipeline built with scikit-learn that uses the Great American Coffee Taste Test (GACTT) dataset to match users to coffee roast profiles based on their preferences.`,
    ],
      goals: [
      'Clean and process the GACTT survey dataset using pandas.',
      'Train a classifier to predict roast preference from user inputs.',
    ],
  },
  {
  id: 'portfolio',
  title: 'Portfolio Website',
  topic: 'personal',
  desc: 'Full-stack portfolio app — React/TypeScript client with an Express/MongoDB backend, images hosted on Cloudinary and deployed independently on Render.',
  tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Node.js', 'Express', 'MongoDB'],
  thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004908/portfolio_vprrzn.png',
  meta: [
    { label: 'Type', value: 'Personal Project' },
    { label: 'Frontend', value: 'React, TypeScript' },
    { label: 'Backend', value: 'Node.js, Express, MongoDB (Atlas)' },
    { label: 'Tooling', value: 'Vite, CSS Modules' },
    { label: 'Deployment', value: 'GitHub Pages (Client), Render (API)' },
    { label: 'Team', value: 'Solo' },
  ],
  images: [
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004908/portfolio_vprrzn.png', caption: 'This website!' }
  ],
  overview: [
    `A portfolio SPA rebuilt from a vanilla HTML/CSS/JS site into a React and TypeScript application, later extended with a full Express/MongoDB backend. The client uses a gallery and detail view pattern with client-side navigation driven by a single useState. Project data is served from MongoDB Atlas through an Express API deployed on Render, with images hosted on Cloudinary rather than bundled as static assets. CSS Modules keep component styles scoped, with shared design tokens in a global stylesheet.`,
  ],
  goals: [
    'Migrate an existing vanilla JS portfolio to React and TypeScript to demonstrate modern frontend skills.',
    'Create a Single-page application with user navigation by using a useState to transition pages.',
    'Structure components, types, and styles in a maintainable and scalable way.',
    'Extend the project into a full-stack application with an Express/MongoDB backend, deployed independently from the client.',
    'Migrate image assets to Cloudinary to reduce bundle size and practice working with third-party media hosting.',
  ],
  links: [
    {
      label:'GitHub', 
      url:'https://github.com/dtcoops/portfolio'
    }],
  details: [
    {
      heading: 'From Static Site to Full Stack',
      points: [
        `This project started as a frontend-only SPA — project data lived in a static TypeScript file, bundled directly into the client at build time. 
        I later rebuilt it as a proper client/server monorepo to get real backend experience: an Express API backed by MongoDB Atlas, with images migrated from bundled assets to Cloudinary. 
        The client and server deploy independently (the React app to GitHub Pages, the API to Render) communicating over a standard REST endpoint.`,

        `The migration was deliberately incremental. I got the server talking to MongoDB and returning real data before touching anything else, keeping images as local placeholder strings so I was only ever validating one new piece at a time. 
        Once that pipeline worked end-to-end locally, I moved on to Cloudinary, then finally to actual deployment.`,
      ]
    },
    {
      heading: 'Backend Structure',
      points: [
        `The server follows a standard routes/controllers/models split. A single Project model (Mongoose schema) defines the shape of a project document, matching the same TypeScript interface the client already used. 
        I duplicated that interface into the server rather than setting up a shared workspace package, a deliberate simplification given the project's scale.`,

        `Images are hosted on Cloudinary rather than saved to the server's own disk. MongoDB only stores a reference to each image's' URL string, while Cloudinary stores and serves the actual file. 
        This matters because of how Render's free tier works: its filesystem is ephemeral, meaning any file written directly to disk is deleted on every redeploy or restart. 
        If image uploads were instead saved to a local folder on the server, they'd work until the next deploy, then silently disappear. By keeping the actual image bytes in Cloudinary and only storing a URL reference in Mongo, 
        image files never touch Render's disk at all, so there's nothing for a redeploy to wipe out in the first place.`]
    },
    {
      heading: 'Deployment Debugging',
      points: [
        `Getting this actually live surfaced a handful of real deployment issues I hadn't hit before: 
        a case-sensitivity bug where a mismatched import (\`Project\` vs \`project\`) worked fine locally on Windows but failed to build on Render's Linux environment; 
        a CORS misconfiguration from a naming mismatch between my \`.env\` variable and the code reading it; 
        TypeScript build tools living in \`devDependencies\` getting skipped entirely because Render's production install doesn't install dev dependencies by default; 
        and an Atlas connection failure that turned out to be an IP allowlist only permitting my own machine, not Render's servers.`,

        `None of these were exotic problems, but each one only appeared once real deployment infrastructure was involved rather than local development — a good reminder that "works on my machine" and "works in production" are genuinely different bars to clear.`,
      ]
    },
    {
      heading: 'Handling Cold Starts',
      points: [
        `Render's free tier spins the server down after roughly 15 minutes of inactivity, meaning the first request after idle time can take 20-30 seconds to respond. 
        Rather than let that read as a broken site, I built a loading state with skeleton cards matching the gallery's grid layout, with a short message explaining the delay; 
        so, a slow first load looks intentional rather than stuck. In testing, an actual cold start took about 11 seconds, comfortably inside the window I'd designed for.`,
      ]
    },
  ]
  },
  {
  id: 'textbookGallery',
  title: 'Texbook Gallery Website',
  topic: 'school',
  desc: 'A Textbook Gallery created using HTML, CSS, and Bootstrap grid.',
  tags: ['HTML', 'CSS', 'Bootstrap'],
  thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004912/textbookThumb_xypnoz.png',
  meta: [
    { label: 'Language', value: 'HTML, CSS' },
    { label: 'Libraries', value: 'Bootstrap' },
    { label: 'Team', value: 'Solo' },
    { label: 'Duration', value: '1 Month' },
    { label: 'Completion', value: '2026' },
  ],
  images: [
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004912/textbookThumb_xypnoz.png', caption: 'Textbook Gallery home page' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004909/details_khk63g.png', caption: 'Textbook Gallery Details page' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004910/lightmode_lvhwc6.png', caption: 'Light Mode' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004913/textbooks_ofawhk.gif', caption: 'GIF to show interactivity' }
  ],
  overview: [
    `A textbook gallery website created for SFU's CMPT 272 - Client-side Development course. All of the pages on the website were created with only HTML, CSS, and Bootstrap (for responsive grid layouts). No JavaScript, CSS frameworks or preprocessors were used.`,
  ],
    goals: [
    'Create a multi-page web application with navigation and consistent header and footers using HTML and CSS',
    'Implement animation and transitions using CSS',
    'Style both light and dark modes, and use grid to respond to different screen sizes.'
  ],
  },
  {
  id: 'csvReader',
  title: 'CSV Reader Web App',
  topic: 'school',
  desc: 'A fixed format CSV reader with user controlled sort and filter options.',
  tags: ['JavaSctipt', 'HTML', 'CSS', 'Bootstrap'],
  thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004863/csvThumb_dv7stb.png',
  meta: [
    { label: 'Language', value: 'JavaScript, HTML, CSS' },
    { label: 'Libraries', value: 'Bootstrap' },
    { label: 'Team', value: 'Solo' },
    { label: 'Duration', value: '1 Month' },
    { label: 'Completion', value: '2026' },
  ],
  images: [
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004863/csvThumb_dv7stb.png', caption: 'CSV Reader Home Page.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004864/modal_ixkego.png', caption: 'Bootstrap Modal Implementation with File Reader.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004865/sort_lzsuhu.png', caption: 'Sort functionality.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004866/sortAndFilter_o62gzf.png', caption: 'Sort and Filter functionality.' }
  ],
  overview: [
    `A CSV Reader with sort and filter functionality created used HTML, CSS, and JavaScript. It also utilizes Bootstrap for modals and grid implementation. The website lets a user download a .CSV file following the required data layout contraints from the assignment and lets the user modify how the data is displayed through sorting and filtering operations. The two modals are used to create an interface for loading data and a display for showing object details in full.`,
  ],
    goals: [
    'Read and parse a CSV file using vanilla JavaScript',
    'Represent structured data using JavaScript objects and arrays',
    'Dynamically generate and update HTML content using the DOM',
    'Implement search, filtering, and sorting without external JavaScript libraries',
    'Build an interactive UI using Bootstrap and custom CSS'
  ],
  },
  {
  id: 'lostAnimal',
  title: 'TailBlazer',
  topic: 'school',
  desc: 'A frontend-only React/TypeScript web app for reporting and locating lost animals.',
  tags: ['React', 'TypeScript', 'CSS', 'Bootstrap'],
  thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004883/lostThumb_mgbafp.png',
  meta: [
    { label: 'Language', value: 'TypeScript, CSS' },
    { label: 'Framework', value: 'React' },
    { label: 'Libraries', value: 'Bootstrap, Leaflet' },
    { label: 'API', value: 'ImgBB, JSONBin, Nominatim, Web Crypto API' },
    { label: 'Team', value: 'Solo' },
    { label: 'Duration', value: '1 Month' },
    { label: 'Completion', value: '2026' },
  ],
  images: [
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004883/lostThumb_mgbafp.png', caption: 'Tail Blazer Home Page.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004882/lostFound_grrwfd.png', caption: 'Filter by Status with related postings and pins.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004884/lostModal_ept4q7.png', caption: 'Selecting a card in the aside will select its pin and display a Bootstrap modal.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004881/lostDetail_sru5bx.png', caption: 'Report Detail Page, opened from pin modal.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004879/lostConfirmFound_dnpipm.png', caption: 'Password is required to modify report to found. Password is hashed with Web Crypto API and persisted with JSONBin.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004880/lostCreateReport_a4mf1e.png', caption: 'Create Report Page.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004887/lostHomePageGIF_xmqyhr.gif', caption: 'HomePage functionality.' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004886/lostCreateReportGIF_lnnwfh.gif', caption: 'Report Creation Functionality.' }
  ],
  overview: [
    `This web application is a lost animal tracker, allowing users to submit public animal reports with relevant information and last known location. Users can see all reports on a map and carousel and can filter reports based on report status and animal type. The creator of the report can 'mark as found' once resolved - provided they have the password from when they created their report.`,
    `The application is built front-end only; there is no server, database, or authentication. It uses public APIs to handle image hosting and persistence.`,
    `It was built using Vite, React, Typescript, and Bootstrap. It uses JSONBin, ImgBB, Leaflet, Nominatim, and the browser's Web Crypto API.`
  ],
    goals: [
    'Create a front-end only React web app for reporting and finding lost animals.',
    'Use public APIs to handle maps, data persistence, image storing, password hashing, and reverse geolocation.',
    'Display user placed pins on a map with a details modal.',
    'Build a card carousel using Bootstrap grid to display report entries alongside the map.',
    'Implement report filtering by status and animal type.',
    'Hash user passwords and verify a match to change a report to Found.'
  ],
  },
  {
  id: 'robberyRush',
  title: 'Robbery Rush',
  topic: 'school',
  desc: 'A high-speed game of risk, reward, and betrayal. Can your crew pull off the heist when everyone is in it for themselves?',
  tags: ['Game Design'],
  thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004915/board_civyw0.png',
  meta: [
    { label: 'Type', value: 'Board Game' },
    { label: 'Players', value: '2–5' },
    { label: 'Tools', value: 'Google Flow (AI image generation)' },
    { label: 'Team', value: 'Group Project (5 person)' },
    { label: 'Duration', value: '2 Month' },
    { label: 'Completion', value: '2026' },
  ],
  links: [
    { label: 'Project Site', url: 'https://sites.google.com/view/robberyrush/home' },
    { label: 'Rulebook', url: 'https://sites.google.com/view/robberyrush/rules' },
    ],
  images: [
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004915/board_civyw0.png', caption: 'Robbery Rush Game Board' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004917/player_inventory_utmozm.jpg', caption: 'Player Inventory Sheet' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004920/Alarm_Token_ldm8vu.jpg', caption: 'Alarm Token Example' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004922/Escape_Token_glgqaq.jpg', caption: 'Escape Token Example' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004923/Guard_Game_Token_zcczx3.jpg', caption: 'Guard Token Example' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004924/Holly_Game_Token_cvp8pr.jpg', caption: 'Player Token Example' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004921/You_Trip_i0ynqk.jpg', caption: 'Hazard Card Example' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004918/shortcut_qi6vkr.jpg', caption: 'Event Card Example' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004919/Sutton_Hoo_Card_2_k69kxi.jpg', caption: 'Item Card Example' },
  ],
  overview: [
    'Robbery rush is a tile based board game where players start by choosing which heist specialist they want to be, and navigate through a highly secured museum to try and obtain the highest valued loot possible, and escape before they get trapped inside the lockdown.'
  ],
  goals:[],
  details: [
    {
      heading: 'About',
      points: [
        'Developed as a 5-person team project for SFU IAT 210.',
        'I was involved across all stages from ideation to final prototype. My primary responsibilities were game inspiration, writing and designing the rulebook, and generating the visual assets using Google Flow - board, cards, token, inventory sheets - to create the visual components for the website and game.',
        `The project followed a structured design process: group ideation and concept development, iterative playtesting using paper prototypes with documented feedback, mechanical refinement based on test results, and production of pitch-ready visual assets and a project website — aimed at a pitch-ready state rather than a finished retail product.` ]
    },
    {
      heading: 'Key Design Decisions',
      points: [
        'Our game was designed around the risk, reward, and betrayal at its core.',
        `Incremental Alarm as a Turn Counter. We decided to implement a turn counter to restrict the length of the game, after each turn the players would roll two dice and the alarm would sound if the roll sum was less than or equal to the current turn count.
        This guaranteed safety on the first turn, and increased the risk of having to escape the longer the heist goes on.`,
        `The board was extensively redesigned with playtesting. Originally it started fully randomized with players placing tiles as they explored, the final fixed design made movement simpler to understand and ensured players had to venture further into the museum.`,
        `We wanted to give players the opportunity to backstab their heist partners by allowing them to steal items from the museum for themselves, rather than for the team. Hiding cards and tracking scores over multiple games became frustrating, challenging, and introduced the potential for cheating.
        The inventory cards that we created allow players to track their scores easily, and allowed players to hide items underneath the inventory board itself by placing them next to the item multiplier slots. The item's values could then easily be calculated at the end of the game.`
      ]
    },
  ]
  },
  {
  id: 'portfolio3D',
  title: 'Gamified 3D Portfolio',
  topic: 'personal',
  desc: 'An interactive 3D portfolio built in React Three Fiber, inspired by Super Mario 64\'s painting mechanic — navigate between scenes through portal-style transitions.',
  tags:  ['React', 'TypeScript', 'React Three Fiber', 'Rapier'],
  thumb: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004897/GalleryCam_afmwxg.png',
  meta: [
    { label: 'Languages', value: 'TypeScript' },
    { label: 'Framework', value: 'React, React Three Fiber' },
    { label: 'Physics', value: 'Rapier' },
    { label: 'State', value: 'Zustand' },
    { label: 'Team', value: 'Solo' },
    { label: 'Duration', value: 'Ongoing' },
  ],
  links: [
      { label: 'Live Site', url: 'https://dtcoops.github.io/portfolio-3D/' },
    ],
  images: [
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004898/hubRoom_odiroe.png', caption: 'Hub Room' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004901/startScreen_iajvto.png', caption: 'Opening Scene' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004900/loreDump_zk5lrw.png', caption: 'The Lore Dump - About Me' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004897/GalleryCam_afmwxg.png', caption: 'Gallery Space' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004899/loading_xls8ch.png', caption: 'Loading Screen' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004905/portal_zzcagf.gif', caption: 'Portal Effect' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004902/tileDrop_xl46kx.png', caption: 'Tile Drop Room' },
    { src: 'https://res.cloudinary.com/yjgvv5of/image/upload/v1784004903/TileDropVista_jq1y1g.png', caption: 'Tile Drop Vista' },
  ],
  overview: [
    'A gamified portfolio experience built from scratch in React Three Fiber and Rapier physics — tools I learned specifically for this project. Players navigate a 3D hub world and enter portals to explore different scenes, inspired by the painting mechanic in Super Mario 64.',
  ],
  goals:[],
  details: [
    {
      heading: 'Technical Highlights',
      points: [
        'Built a custom character controller with Rapier physics, separating physics simulation from rendered position to avoid jitter.',
        'Implemented a Zustand global store to manage scene transitions, return position, and visited-scene state across the application.',
        'Used React Router with lazy-loaded scenes and a Suspense fallback loading screen for performance.',
      ]
    },
  ]
  }
]

dotenv.config();

async function populateDb() {
  const uri = process.env.MONGODB_URI as string;
  await mongoose.connect(uri);

  await Project.deleteMany({}); // clear existing, so reruns don't duplicate
  await Project.insertMany(projectsData);

  console.log('Seed complete');
  await mongoose.disconnect();
}

populateDb().catch((err) => {
  console.error('Seeding DB failed:', err);
  process.exit(1);
});