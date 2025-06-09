import React from 'react';
import type { Testimonial } from '../../types';

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
    const mainTestimonial = testimonials.length > 0 ? testimonials[0] : null;

    return (
        <>
            {mainTestimonial && (
                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl max-w-sm">
                    <div className="flex items-center mb-2">
                        <img src={mainTestimonial.avatarUrl} alt={mainTestimonial.author} className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-semibold text-gray-800">{mainTestimonial.author}</p>
                            <div className="flex">
                                {[...Array(mainTestimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.927 5.929a1 1 0 00.95.69h6.223c.969 0 1.371 1.24.588 1.81l-5.02 3.647a1 1 0 00-.364 1.118l1.927 5.929c.3.921-.755 1.688-1.538 1.118L10 16.732l-5.02 3.647c-.783.57-1.838-.197-1.538-1.118l1.927-5.929a1 1 0 00-.364-1.118L2.05 10.356c-.783-.57-.381-1.81.588-1.81h6.223a1 1 0 00.95-.69l1.927-5.929z"></path></svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{mainTestimonial.text}"</p>
                </div>
            )}
        </>
    );
};

export default TestimonialsSection;