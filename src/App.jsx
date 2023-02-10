// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import Post from "./components/Post";

export default function App() {
  return (
    <main className="wrapper">
      <Post name="Alex" body="Text goes here" />
      <Post name="John" body="Random goes here" />
    </main>
  );
}
