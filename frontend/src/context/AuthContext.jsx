import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AUTH_STORAGE_KEY = "gadgetfix_user";

const readStoredUser = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.error("Unable to parse user from storage", error);
    return null;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!user) {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const login = ({ email, password }) => {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    const normalizedEmail = email.trim().toLowerCase();
    const profile = {
      email: normalizedEmail,
      name: normalizedEmail.split("@")[0],
      loggedInAt: new Date().toISOString(),
    };

    setUser(profile);
    return { success: true, user: profile };
  };

  const logout = () => {
    setUser(null);
  };

  const loginWithOAuth = ({ email, name, provider = "google" }) => {
    if (!email) {
      return { success: false, message: "OAuth profile is missing email." };
    }

    const normalizedEmail = email.trim().toLowerCase();
    const profile = {
      email: normalizedEmail,
      name: name || normalizedEmail.split("@")[0],
      provider,
      loggedInAt: new Date().toISOString(),
    };

    setUser(profile);
    return { success: true, user: profile };
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: Boolean(user), login, loginWithOAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
