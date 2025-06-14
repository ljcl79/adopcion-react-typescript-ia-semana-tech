import React, { useState, useEffect } from 'react';
import petsData from '../../data/pets.json';
import testimonialsData from '../../data/testimonials.json';
import type { Pet, Testimonial } from '../../types';
import TestimonialsSection from '../../components/TestimonialSection/TestimonialSection';
import PetCard from '../../components/PetCard/PetCard';
import heroImage from '../../assets/retrato-de-grupo-de-adorables-cachorros.jpg';


const Dashboard: React.FC = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 300));
            setPets(petsData as Pet[]);
            setTestimonials(testimonialsData as Testimonial[]);
        };
        loadData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20 px-4 md:px-0">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <svg className="w-8 h-8 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>

                        </div>
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            Transforma una Vida, <br /> Adopta un Mascota
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            ¡Encuentra a tu alma gemela peluda hoy! Descubramos juntos a tu mascota perfecta.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-700 flex items-center justify-center">
                                Let's Show You Around
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                            <button className="bg-white text-gray-800 border border-gray-300 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100">
                                Learn More
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-8">
                            Trusted by 1,000+ developers <span className="inline-block -space-x-2 overflow-hidden">
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1011/60/60" alt="" />
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1027/60/60" alt="" />
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1025/60/60" alt="" />
                            </span>
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">

                        <TestimonialsSection testimonials={testimonials} />
                    </div>
                </div>
            </header>

            {/* Main Content - Pet Listings */}
            <section className="container mx-auto py-12 px-4 md:px-0">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Mascotas Disponibles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {pets.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>
            </section>

            {/* Footer (Placeholder) - Se podría extraer a un componente Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-8 mb-6">
                        <span className="text-gray-400 font-bold">#Logoispsum</span>
                        <span className="text-gray-400 font-bold">LOGO</span>
                        <span className="text-gray-400 font-bold">Logoispsum</span>
                        <span className="text-gray-400 font-bold">Logoispsum</span>
                    </div>
                    <p>&copy; 2025 Pet Haven. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;