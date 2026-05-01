import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

const USERS_KEY = '@fiap_cafe:users';
const SESSION_KEY = 'fiap_cafe_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  async function loadSession() {
    try {
      const savedSession = await SecureStore.getItemAsync(SESSION_KEY);

      if (savedSession) {
        setUser(JSON.parse(savedSession));
      }
    } catch (error) {
      console.log('Erro ao carregar sessão:', error);
    } finally {
      setLoadingAuth(false);
    }
  }

  async function getUsers() {
    const usersJson = await AsyncStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  async function register({ name, email, password }) {
    const users = await getUsers();

    const normalizedEmail = email.trim().toLowerCase();

    const emailExists = users.some(
      item => item.email.toLowerCase() === normalizedEmail
    );

    if (emailExists) {
      throw new Error('Este e-mail já está cadastrado.');
    }

    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: normalizedEmail,
      password,
    };

    const updatedUsers = [...users, newUser];

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    const sessionUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);

    return sessionUser;
  }

  async function login(email, password) {
    const users = await getUsers();

    const normalizedEmail = email.trim().toLowerCase();

    const foundUser = users.find(
      item =>
        item.email.toLowerCase() === normalizedEmail &&
        item.password === password
    );

    if (!foundUser) {
      throw new Error('E-mail ou senha inválidos.');
    }

    const sessionUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);

    return sessionUser;
  }

  async function logout() {
    await SecureStore.deleteItemAsync(SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth,
        register,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
