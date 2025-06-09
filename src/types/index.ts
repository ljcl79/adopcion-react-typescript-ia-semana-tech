// src/types/index.ts

export interface Pet {
    id: string;
    name: string;
    species: string;
    breed: string;
    age: string;
    gender: string;
    location: string;
    description: string;
    imageUrl: string;
}

export interface Testimonial {
    id: string;
    text: string;
    author: string;
    avatarUrl: string;
    rating: number;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password?: string; // La contraseña podría ser opcional si no la queremos almacenar en el estado
}