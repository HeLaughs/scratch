import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FraudTimeline() {
  const [activeCities, setActiveCities] = useState([]);
  const [stats, setStats] = useState({
    protected: 0,
    blocked: 0
  });

  const cities = [
    { name: "Lagos", lat: 6.5244, lng: 3.3792, continent: "Africa" },
    { name: "Cairo", lat: 30.0444, lng: 31.2357, continent: "Africa" },
    { name: "Johannesburg", lat: -26.2041, lng: 28.0473, continent: "Africa" },
    { name: "Nairobi", lat: -1.2921, lng: 36.8219, continent: "Africa" },
    { name: "Cape Town", lat: -33.9249, lng: 18.4241, continent: "Africa" },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, continent: "Asia" },
    { name: "Beijing", lat: 39.9042, lng: 116.4074, continent: "Asia" },
    { name: "Mumbai", lat: 19.0760, lng: 72.8777, continent: "Asia" },
    { name: "Seoul", lat: 37.5665, lng: 126.9780, continent: "Asia" },
    { name: "Bangkok", lat: 13.7563, lng: 100.5018, continent: "Asia" },
    { name: "London", lat: 51.5074, lng: -0.1278, continent: "Europe" },
    { name: "Paris", lat: 48.8566, lng: 2.3522, continent: "Europe" },
    { name: "Berlin", lat: 52.5200, lng: 13.4050, continent: "Europe" },
    { name: "Rome", lat: 41.9028, lng: 12.4964, continent: "Europe" },
    { name: "Madrid", lat: 40.4168, lng: -3.7038, continent: "Europe" },
    { name: "New York City", lat: 40.7128, lng: -74.0060, continent: "North America" },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437, continent: "North America" },
    { name: "Toronto", lat: 43.6532, lng: -79.3832, continent: "North America" },
    { name: "Mexico City", lat: 19.4326, lng: -99.1332, continent: "North America" },
    { name: "Chicago", lat: 41.8781, lng: -87.6298, continent: "North America" },
    { name: "São Paulo", lat: -23.5505, lng: -46.6333, continent: "South America" },
    { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, continent: "South America" },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, continent: "South America" },
    { name: "Lima", lat: -12.0464, lng: -77.0428, continent: "South America" },
    { name: "Bogotá", lat: 4.7110, lng: -74.0721, continent: "South America" },
    { name: "Sydney", lat: -33.8688, lng: 151.2093, continent: "Oceania" },
    { name: "Melbourne", lat: -37.8136, lng: 144.9631, continent: "Oceania" },
    { name: "Auckland", lat: -36.8485, lng: 174.7633, continent: "Oceania" },
    { name: "Brisbane", lat: -27.4698, lng: 153.0251, continent: "Oceania" },
    { name: "Perth", lat: -31.9505, lng: 115.8605, continent: "Oceania" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      
      const numActive = Math.floor(Math.random() * 197) + 1;
      const shuffled = [...cities].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, numActive);
      
      setActiveCities(selected);
      
      setStats(prev => ({
        protected: prev.protected + numActive,
        blocked: numActive > 2 ? prev.blocked + 1 : prev.blocked
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-100 rounded-xl shadow-lg mt-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">
          Global Fraud Detection Network
        </h3>
       
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-lg text-blue-900 border-b border-gray-100 pb-3">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-gray-200 rounded-full mr-2 animate-pulse"></span>
            <span>Active Worldwide Network</span>
          </div>
          <div className="text-right">
            <div className="text-lg text-blue-900">Last updated: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        
        {activeCities.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="font-medium text-blue-900">
                <span className="font-bold">Securing transactions</span> in {activeCities.map(c => c.name).join(', ')}
              </div>
              <div className="flex items-center text-blue-900 font-semibold text-sm">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Protected
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 pt-4 border-t border-blue-400">
        <div className="text-center p-4 ">
          <div className="text-2xl font-bold text-blue-900">{stats.protected}+</div>
          <div className="text-sm text-blue-900">Cards Protected</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-blue-900">{stats.blocked}+</div>
          <div className="text-sm text-blue-900">Threats Blocked</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-blue-900">{cities.length}</div>
          <div className="text-sm text-blue-900">Global Cities</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-blue-900">6</div>
          <div className="text-sm text-blue-900">Continents</div>
        </div>
      </div>
    </div>
  );
}