import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import petsData from '../../data/pets.json'; // Importamos los datos de mascotas
import type { Pet } from '../../types';

const PetDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Obtenemos el ID de la URL
    const navigate = useNavigate();
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        // Simulamos una llamada a una API para obtener el detalle de la mascota
        const fetchPet = async () => {
            await new Promise(resolve => setTimeout(resolve, 500)); // Simula retardo de red

            const foundPet = (petsData as Pet[]).find(p => p.id === id);

            if (foundPet) {
                setPet(foundPet);
            } else {
                setError('Mascota no encontrada.');
            }
            setLoading(false);
        };

        fetchPet();
    }, [id]); // Dependencia del ID para recargar si cambia

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-xl font-semibold text-gray-700">Cargando detalles de la mascota...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="text-xl font-semibold text-red-600 mb-4">{error}</div>
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                    Volver al Dashboard
                </button>
            </div>
        );
    }

    if (!pet) {
        // Esto no debería ocurrir si error se maneja correctamente, pero como fallback
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-xl font-semibold text-gray-700">No se pudo cargar la mascota.</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 font-sans p-4 md:p-8">
            <div className="container mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10 mt-8 mb-8">
                <button
                    onClick={() => navigate(-1)} // Volver a la página anterior
                    className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition duration-200"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Volver
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <img
                            src={pet.imageUrl}
                            alt={pet.name}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{pet.name}</h1>
                        <p className="text-lg text-gray-700 mb-2">**Especie:** {pet.species}</p>
                        <p className="text-lg text-gray-700 mb-2">**Raza:** {pet.breed}</p>
                        <p className="text-lg text-gray-700 mb-2">**Edad:** {pet.age}</p>
                        <p className="text-lg text-gray-700 mb-2">**Género:** {pet.gender}</p>
                        <p className="text-lg text-gray-700 mb-4">**Ubicación:** {pet.location}</p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Sobre {pet.name}:</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{pet.description}</p>

                        <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition duration-200 flex items-center justify-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7m0 4v4m0-4h4m-4 0H4m9 7H6a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4l-2 2z"></path></svg>
                            Adoptar a {pet.name}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetail;