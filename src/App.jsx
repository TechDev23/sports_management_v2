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
import Tournaments from "./routes/Tournaments";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Discover/>,
    errorElement: <ErrorPage/>,
  },

  {
    path: "admin/",
    element: <Admin/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
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
    errorElement: <ErrorPage/>,
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
        errorElement: <ErrorPage/>,
      },
      {
        path: "calendar",
        element: <Calendar />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "on-going",
        element: <Competition />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "tournament",
        element: <Tournament/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "match",
        element: <Match/>,
        errorElement: <ErrorPage/>,
      }
    ],
  },
  {
    path: "sidebar",
    element: <Sidebar />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "participantlogin",
    element: <Participantlogin/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "participantregister",
    element: <Participantsignup/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "organizerlogin",
    element: <Organizerlogin/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "organizerregister",
    element: <Organizersignup/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "participant/",
    element: <Participant/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "discover",
        element: <Feed/>
      },
    ]
    
  },
  {
    path: "tournament/",
    element: <Tournaments/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: ":id",
        element: <GameDetails/>,
      },
      {
        path: "details",
        element: <GameDetails/>
      },
      {
        path: ":id/apply",
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
