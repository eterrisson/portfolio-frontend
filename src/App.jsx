import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import ProjectPage from "@pages/ProjectPage";

// Configuration du router avec les différentes routes de l'application
const router = createBrowserRouter([  
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/project/:id",
    element: <ProjectPage/>,
    errorElement: <ErrorPage />,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );  
}

export default App
