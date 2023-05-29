import { useState } from "react";
import {
  Card,
  Typography,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  CalendarIcon,
  UsersIcon,
  FolderIcon,
  InboxIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/images/logo.png"
const sidebarItems = [
  {
    linkTo: "/dashboard",
    icon: PresentationChartBarIcon,
    label: "Dashboard",
    hasSuffix: false,
  },
  {
    linkTo: "/calendar",
    icon: CalendarIcon,
    label: "Calendar",
    hasSuffix: false,
  },
  {
    linkTo: "/tournament-tracking",
    icon: FolderIcon,
    label: "Tournament Tracking",
    hasSuffix: false,
  },
  {
    linkTo: "/teams",
    icon: UsersIcon,
    label: "Teams",
    hasSuffix: false,
  },
  {
    linkTo: "/messages",
    icon: InboxIcon,
    label: "Messages",
    hasSuffix: true,
  },
  {
    linkTo: "/on-going",
    icon: PresentationChartBarIcon,
    label: "On Going",
    hasSuffix: false,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Card
        className={`${
          open ? "w-72" : "w-20 "
        }bg-white shadow-xl h-screen rounded-none p-4 transition-transform duration-500`}
      >
        <ChevronDoubleLeftIcon
          className={`absolute cursor-pointer bg-white z-50 -right-4 top-6 w-7 h-7 text-orange-400   rounded-full scale-90 hover:scale-100 ${
             !open && "rotate-180"
           } transition-all duration-300`}
          onClick={() => setOpen(!open)}
        />
        <div className={`b-2 p-4 mb-4 flex items-center gap-2`}>
          <div>
            <img src={Logo} className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}/>
          </div>
          <Typography
            variant="h5"
            color="blue-gray"
            className={`origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Logo
          </Typography>
        </div>
        {sidebarItems.map((item, key) => (
          <>
            <Link key={key} to={item.linkTo}>
              <ListItem
                className={`${
                  open ? "" : "w-12 "
                } hover:bg-orange-50 hover:text-orange-600 active:bg-orange-50 focus:bg-orange-50 focus:text-orange-500 mb-2`}
              >
                <ListItemPrefix>
                  <item.icon className="h-5 w-5" />
                </ListItemPrefix>
                <p className={`${!open && "scale-0"}`}>{item.label}</p>
                {item.hasSuffix && (
                  <ListItemSuffix>
                    <Chip
                      value="14"
                      size="sm"
                      variant="ghost"
                      color="orange"
                      className={`${!open && "scale-0"} rounded-full`}
                    />
                  </ListItemSuffix>
                )}
              </ListItem>
            </Link>
          </>
        ))}
      </Card>
    </>
  );
  
};

export default Sidebar;
