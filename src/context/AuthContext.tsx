import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

import usersData from '../data/users.json'; // Importamos los usuarios de nuestro JSON
import type { User } from '../types';

// Definimos la forma del contexto de autenticación
interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (username: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

// Creamos el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Componente Proveedor de Autenticación
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>(usersData as User[]); // Cargamos los usuarios iniciales

    // Efecto para cargar el usuario desde localStorage al iniciar la app
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    // Función de Login
    const login = async (email: string, password: string): Promise<boolean> => {
        // Simular un retraso de red
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = allUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            // No guardamos la contraseña en el estado global para seguridad
            const userWithoutPassword = { ...user };
            delete userWithoutPassword.password;
            setCurrentUser(userWithoutPassword);
            localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword)); // Persistir sesión
            console.log('Login exitoso:', userWithoutPassword.username);
            return true;
        } else {
            console.log('Fallo el login: credenciales inválidas');
            return false;
        }
    };

    // Función de Registro
    const register = async (username: string, email: string, password: string): Promise<boolean> => {
        // Simular un retraso de red
        await new Promise(resolve => setTimeout(resolve, 500));

        // Validar si el email ya existe
        const emailExists = allUsers.some(u => u.email === email);
        if (emailExists) {
            console.log('Fallo el registro: el email ya está en uso');
            return false;
        }

        const newUser: User = {
            id: `u${allUsers.length + 1}`, // Generar un ID simple
            username,
            email,
            password, // Guardamos la contraseña en el JSON para la simulación
        };

        setAllUsers(prevUsers => {
            const updatedUsers = [...prevUsers, newUser];
            // Nota: En una app real, esto NO debería guardar en un JSON estático.
            // Sería una llamada a una API o base de datos.
            // Aquí simulamos guardado en memoria para la demo.
            // Para persistir más allá de la recarga, necesitarías escribir en el archivo o usar una base de datos.
            console.log('Usuario registrado (en memoria):', newUser);
            return updatedUsers;
        });

        // Iniciar sesión automáticamente después del registro
        const userWithoutPassword = { ...newUser };
        delete userWithoutPassword.password;
        setCurrentUser(userWithoutPassword);
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        return true;
    };

    // Función de Logout
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser'); // Limpiar sesión
        console.log('Sesión cerrada');
    };

    const value = {
        currentUser,
        login,
        register,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};