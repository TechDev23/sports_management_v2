import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Participant from "./routes/participant";
import ErrorPage from "./error-page";
import { Provider } from "react-redux";
import { store } from "./redux/store";


import {
  Calendar,
  Dashboard,
  Messages,
  Teams,
  TournamentTracking,
  Competition,
  Discover,
  Participantlogin,
  Participantsignup,
  Organizerlogin,
  Organizersignup
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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/tournament-tracking",
        element: (
          <StepProvider>
            <TournamentTracking />
          </StepProvider>
        ),
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/on-going",
        element: <Competition />,
      },
      {
        path: "/register",
        element: <Organizersignup/>
      },
      {
        path: "/login",
        element: <Organizerlogin/>
      }
    ],
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/participant/",
    element: <Participant/>,
    children: [
      {
        path: "discover",
        element: <Discover/>
      },
      {
        path: "login",
        element: <Participantlogin/>
      },
      {
        path: "register",
        element: <Participantsignup/>
      }
    ]
    
  }
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
