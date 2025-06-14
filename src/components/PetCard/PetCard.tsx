import React from 'react';
import { Link } from 'react-router-dom'; // ¡Importamos Link!
import type { Pet } from '../../types';


interface PetCardProps {
    pet: Pet; // Recibe un objeto de tipo Pet como prop
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={pet.imageUrl} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pet.name}</h3>
                <p className="text-gray-600 mb-1">Especie: {pet.species}</p>
                <p className="text-gray-600 mb-1">Raza: {pet.breed}</p>
                <p className="text-gray-600 mb-1">Edad: {pet.age}</p>
                <p className="text-gray-600 mb-3">Ubicación: {pet.location}</p>
                {/* ¡Cambiamos button por Link! */}
                <Link
                    id={`pet_${pet.id}`}
                    to={`/pets/${pet.id}`} // Navega a la ruta de detalle de esta mascota
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 flex justify-center items-center"
                >
                    Ver Perfil
                </Link>
            </div>
        </div>
    );
};

export default PetCard;