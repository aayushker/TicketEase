import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import baseurl from "@/app/API/getBackendURL";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: (user: any) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (
    Name: string,
    Email: string,
    PhoneNo: number,
    DOB: Date,
    Password: string
  ) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  setUser: (user: any) => {},
  login: (username: string, password: string) => {},
  logout: () => {},
  register: (
    Name: string,
    Email: string,
    PhoneNo: number,
    DOB: Date,
    Password: string
  ) => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
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
        console.error(error);
      }
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      // const response = await axios.post('http://127.0.0.1:8000/api/token/', { username, password });
      const response = await axios.post(`${baseurl}/api/token/`, {
        username,
        password,
      });
      const { access, refresh } = response.data;
      localStorage.setItem("token", access);
      setUser(jwtDecode(access));
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  const register = async (
    Name: string,
    Email: string,
    PhoneNo: number,
    DOB: Date,
    Password: string
  ) => {
    try {
      // await axios.post('http://127.0.0.1:8000/api/register/', { username, password, email, first_name: firstName, last_name: lastName });
      await axios.post(`${baseurl}/api/register/`, {
        Name,
        Email,
        PhoneNo,
        DOB,
        Password,
      });
      router.push("/");
    } catch (error) {
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
