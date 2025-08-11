import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FraudTimeline() {
  const [activeCities, setActiveCities] = useState([]);
  const [stats, setStats] = useState({
    protected: 0,
    blocked: 0
  });

  const cities = [
    { name: "Lagos", continent: "Africa" },
  { name: "Cairo", continent: "Africa" },
  { name: "Johannesburg", continent: "Africa" },
  { name: "Nairobi", continent: "Africa" },
  { name: "Cape Town", continent: "Africa" },
  { name: "Tokyo", continent: "Asia" },
  { name: "Beijing", continent: "Asia" },
  { name: "Mumbai", continent: "Asia" },
  { name: "Seoul", continent: "Asia" },
  { name: "Bangkok", continent: "Asia" },
  { name: "London", continent: "Europe" },
  { name: "Paris", continent: "Europe" },
  { name: "Berlin", continent: "Europe" },
  { name: "Rome", continent: "Europe" },
  { name: "Madrid", continent: "Europe" },
  { name: "New York City", continent: "North America" },
  { name: "Los Angeles", continent: "North America" },
  { name: "Toronto", continent: "North America" },
  { name: "Mexico City", continent: "North America" },
  { name: "Chicago", continent: "North America" },
  { name: "São Paulo", continent: "South America" },
  { name: "Buenos Aires", continent: "South America" },
  { name: "Rio de Janeiro", continent: "South America" },
  { name: "Lima", continent: "South America" },
  { name: "Bogotá", continent: "South America" },
  { name: "Sydney", continent: "Oceania" },
  { name: "Melbourne", continent: "Oceania" },
  { name: "Auckland", continent: "Oceania" },
  { name: "Brisbane", continent: "Oceania" },
  { name: "Perth", continent: "Oceania" }
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