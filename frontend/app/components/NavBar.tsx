"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
  DropdownSection,
  User,
} from "@nextui-org/react";
import { useAuth } from "@/app/AuthContext";
import Login from "@/app/components/ui/auth/Login";
import Register from "@/app/components/ui/auth/Register";
import {
  IconLogin,
  IconLogout,
  IconTablePlus,
  IconPlus,
  IconHelp,
} from "@tabler/icons-react";

const NavBar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  };

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  return (
    <>
      <Navbar maxWidth="xl">
        <NavbarBrand>
          <Link href="/" className="space-x-2">
            <p className="font-bold text-xl text-black">TicketEase</p>
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link href="/explore" aria-current="page" color="foreground">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/explore" color="foreground">
              Museums
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/event" color="foreground">
              Events
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown
            radius="sm"
            
          >
            <DropdownTrigger>
              <Button 
                color="default" 
                variant="flat" 
                size="md"
                className="text-gray-700"
                
              >
                {isAuthenticated ? "Book ticket" : "Login to book ticket"}
              </Button>
            </DropdownTrigger>
            {isAuthenticated ? (
              <>
                <DropdownMenu
                  aria-label="Custom item styles"
                  disabledKeys={["profile"]}
                  className="p-3"
                  itemClasses={{
                    base: [
                      "rounded-md",
                      "text-default-500",
                      "transition-opacity",
                      "data-[hover=true]:text-foreground",
                      "data-[hover=true]:bg-default-100",
                      "dark:data-[hover=true]:bg-default-50",
                      "data-[selectable=true]:focus:bg-default-50",
                      "data-[pressed=true]:opacity-70",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  }}
                >
                  <DropdownSection aria-label="Profile & Actions" showDivider>
                    <DropdownItem
                      isReadOnly
                      key="profile"
                      className="h-14 gap-2 opacity-100"
                    >
                      <User
                        name="Hello👋,"
                        description={user ? "@" + user.username : "Guest"}
                        classNames={{
                          name: "text-default-600",
                          description: "text-default-500",
                        }}
                        avatarProps={{
                          size: "sm",
                          src: "/images/user.png",
                        }}
                      />
                    </DropdownItem>

                    <DropdownItem key="dashboard" href="/user#dashboard">
                      Dashboard
                    </DropdownItem>
                    <DropdownItem key="settings" href="/user#settings">
                      Settings
                    </DropdownItem>
                    <DropdownItem
                      key="Add Recipe"
                      endContent={<IconPlus className="text-large" />}
                      href="/addRecipe"
                      color="success"
                    >
                      <p className="text-success-600">Add Recipe</p>
                    </DropdownItem>
                  </DropdownSection>

                  {/* <DropdownSection aria-label="Preferences" showDivider> */}
                  {/* <DropdownItem key="quick_search" shortcut="⌘K">
                  Quick search
                </DropdownItem> */}
                  {/* </DropdownSection> */}

                  <DropdownSection aria-label="Help & Feedback">
                    <DropdownItem
                      key="help_and_feedback"
                      href="/user#helpsupport"
                      endContent={<IconHelp type="sm" />}
                    >
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      onPress={logout}
                      endContent={<IconLogout type="sm" />}
                    >
                      <p className="text-red-400">Log Out</p>
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </>
            ) : (
              <>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    onPress={handleSignInOpen}
                    endContent={<IconLogin />}
                  >
                    Login
                  </DropdownItem>
                  <DropdownItem
                    onPress={handleSignUpOpen}
                    endContent={<IconTablePlus />}
                  >
                    Register
                  </DropdownItem>
                </DropdownMenu>
              </>
            )}
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <Login isOpen={isSignInOpen} onClose={handleSignInClose} />
      <Register isOpen={isSignUpOpen} onClose={handleSignUpClose} />
    </>
  );
};

export default NavBar;
