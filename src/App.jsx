import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Organizer from "./routes/Organizer";
import Participant from "./routes/Participant";
import Admin from "./routes/Admin";
import ErrorPage from "./error-page";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import {
  Calendar,
  Dashboard,
  Messages,
  Teams,
  Discover,
  TournamentTracking,
  Competition,
  Tournament,
  Match,
  Participantlogin,
  Participantsignup,
  Organizerlogin,
  Organizersignup,
  Feed,
  Alltours,
  TourDetails,
  GameDetails,
  Apply
} from "./pages";
import Sidebar from "./pages/Sidebar";
import { StepProvider } from "./context/StepContext";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Discover/>,
    errorElement: <ErrorPage/>,
  },

  {
    path: "admin/",
    element: <Admin/>,
    children: [
      {
        path: "feed",
        element: <Alltours/>
      },
      {
        path: "details",
        element: <TourDetails/>
      }
    ]
  },

  {
    path: "organizer/",
    element: <Organizer />,
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
      {
        path: "tournament",
        element: <Tournament/>
      },
      {
        path: "match",
        element: <Match/>
      }
    ],
  },
  {
    path: "sidebar",
    element: <Sidebar />,
  },
  {
    path: "participantlogin",
    element: <Participantlogin/>
  },
  {
    path: "participantregister",
    element: <Participantsignup/>
  },
  {
    path: "organizerlogin",
    element: <Organizerlogin/>
  },
  {
    path: "organizerregister",
    element: <Organizersignup/>
  },
  {
    path: "participant/",
    element: <Participant/>,
    children: [
      {
        path: "discover",
        element: <Feed/>
      },
      {
        path: "details",
        element: <GameDetails/>
      },
      {
        path: "apply",
        element: <Apply/>
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
            <Discover/>
          </RouterProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
