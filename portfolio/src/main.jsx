import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Contact from './components/Aboutme';
import AboutMe from './components/Aboutme.jsx';
import Portfolio from './components/Project.jsx';
// import Resume from './components/Resume.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <AboutMe />,
      // },
      // {
      //   path: '/Portfolio',
      //   element: <Portfolio />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/Resume',
      //   element: <Resume />,
      // },
    ],
  },
]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

