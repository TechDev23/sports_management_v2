import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Input,
  Badge,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  HomeIcon,
  BellAlertIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto hover:bg-orange-50 active:bg-orange-100"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-orange-500 p-0.5 "
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded hover:bg-orange-50 ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "About us",
    icon: CubeTransparentIcon,
  },
  {
    label: "Features",
    icon: GiftIcon,
  },
  {
    label: "Blogs",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <>
      <ul className="mb-4 mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, icon }, key) => (
          <Typography
            key={key}
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="hover:bg-orange-50 hover:text-orange-400 flex items-center gap-2 lg:rounded-full transition-colors">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
              {label}
            </MenuItem>
          </Typography>
        ))}
      </ul>
    </>
  );
}

function SearchInput() {
  return (
    <div className="relative flex w-full gap-2 md:w-max">
      <Input
        type="search"
        color="orange"
        label="Type here..."
        className="pr-20"
        containerProps={{
          className: "min-w-[288px] md:min-w-[50px]",
        }}
      />
      <Button
        size="sm"
        className="!absolute right-1 top-1 rounded bg-orange-500 shadow-orange-200 hover:shadow-orange-300 shadow-md"
      >
        Search
      </Button>
    </div>
  );
}

function Notionfications(){
  return(
    <Badge color="orange" content="5" withBorder placement="bottom-end">
    <IconButton variant="text" className="hover:bg-orange-50 text-black border-2 border-orange-50 hover:text-orange-600 active:bg-orange-100">
      <BellAlertIcon className="h-4 w-4" />
    </IconButton>
  </Badge>
  )
}
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:pl-6 rounded-none shadow-none">
      <div className="relative mx-auto flex items-center gap-6 justify-end text-blue-gray-900">
        <div>
            <NavList />
        </div>
        <div className="flex flex-row-reverse gap-4 items-end justify-end">
          <ProfileMenu />
          <Notionfications/>
          <SearchInput/>
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
