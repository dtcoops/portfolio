# My Portfolio Website

A single-page portfolio application built with React and TypeScript, 
showcasing personal and school projects with filtering, detail views, and an image lightbox.

**Live site:** https://dtcoops.github.io/portfolio/

## Contents

- [About This Project](#about-this-project)
- [Built With](#built-with)
- [Features](#features)
- [Running Locally](#running-locally)

## About this project

Rebuilt from a vanilla HTML/CSS/JS site into a React and TypeScript SPA. 
Designed around a gallery and detail view pattern with client-side navigation 
driven by a single useState to as a simpler alternative to routing. CSS Modules keep component 
styles scoped, with shared design tokens in a global stylesheet.

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- CSS Modules
- Deployed via GitHub Pages

## Features

- Project gallery with topic filtering
- Detail view with image gallery and lightbox
- Client-side navigation without React Router
- Responsive layout

## Running Locally

Requires [Node.js](https://nodejs.org/) and built with v24


```bash
git clone https://github.com/dtcoops/portfolio.git
cd portfolio
npm install
npm run dev
```