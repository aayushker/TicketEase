"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { register as registerUser } from "@/app/API/auth/Register";
import { login as loginUser } from "@/app/API/auth/Login";
import { logout as logoutUser } from "@/app/API/auth/Logout";
import { Login, Register } from "@/app/types/Auth";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: (user: any) => void;
  login: (userData: Login) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: Register) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  setUser: () => {},
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
        } else {
          setUser(decodedToken);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
        console.error("Token decoding failed:", error);
      }
    }
    setLoading(false);
  }, []);

  const login = async (userData: Login) => {console.log("login working");
    try {
      const res = await loginUser(userData);
      
      const {user, token } = res; // check later for backend response
      localStorage.setItem("token", token);
      // localStorage.setItem("refreshToken", refresh);
      setUser(jwtDecode(token));
      router.push("/");
    } catch (error) {
      alert(`Login failed \n Error: ${error}`);
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const register = async (userData: Register) => {
    try {
      const res = await registerUser(userData);
      router.push("/");
    } catch (error) {
      alert(`Registration failed \n Error: ${error}`);
      console.error("Register failed", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        setUser,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
