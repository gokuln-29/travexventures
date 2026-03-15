import { Trip } from '@/types';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

interface TripCardProps {
    trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
    return (
        <article className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-navy-50 transition-all duration-300 transform hover:-translate-y-2">

            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={trip.imageUrl}
                    alt={trip.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                        {trip.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-navy-950 mb-3 group-hover:text-cyan-dark transition-colors line-clamp-2">
                    {trip.title}
                </h3>
                <p className="text-navy-600 mb-6 text-sm flex-1 leading-relaxed line-clamp-3">
                    {trip.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-navy-100">
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-navy-500 text-sm">
                            <Calendar className="w-4 h-4 mr-2 text-cyan-brand" />
                            {trip.durationDays} Days
                        </div>
                        <div className="flex items-center font-bold text-lg text-navy-900">
                            <Tag className="w-4 h-4 mr-2 text-sunset-orange" />
                            ${trip.price.toLocaleString()}
                        </div>
                    </div>

                    <button className="flex items-center justify-center p-3 rounded-full bg-cyan-50 text-cyan-dark hover:bg-cyan-brand hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </button>
                </div>
            </div>
        </article>
    );
}
