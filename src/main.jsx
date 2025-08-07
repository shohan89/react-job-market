import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout.jsx'
import AppliedJobs from './pages/AppliedJobs.jsx'
import Home from './pages/Home.jsx'
import JobDetails from './pages/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
        loader: ()=> fetch('/jobs.json').then(res => res.json())
      },
      {
        path: `/job/:id`,
        element: <JobDetails />,
        loader: ()=> fetch(`/jobs.json`).then(res => res.json())
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
