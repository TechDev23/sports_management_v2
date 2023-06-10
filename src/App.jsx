import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import {
  Calendar,
  Dashboard,
  Messages,
  Teams,
  TournamentTracking,
  Competition
} from "./pages";
import Sidebar from "./pages/Sidebar";
import { StepProvider } from "./context/StepContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "tournament-tracking",
        element: (
          <StepProvider>
            <TournamentTracking />
          </StepProvider>
        ),
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "calendar",
        element: <Calendar />,  
      },
      {
        path: "on-going",
        element: <Competition />,
      },
    ],
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <RouterProvider router={router}>
            <Root />
          </RouterProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
