import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";

// Lazy-load components
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Onboarding = lazy(() => import("./pages/onboarding"));
const JobListing = lazy(() => import("./pages/job-listing"));
const JobPage = lazy(() => import("./pages/job"));
const SavedJobs = lazy(() => import("./pages/saved-job"));
const MyJobs = lazy(() => import("./pages/my-jobs"));
const PostJob = lazy(() => import("./pages/post-job"));

// Router configuration
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Onboarding />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <JobListing />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <JobPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <PostJob />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <SavedJobs />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <MyJobs />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
