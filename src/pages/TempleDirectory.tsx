import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Navigation, Info, ArrowUpRight, History } from 'lucide-react';
import { TEMPLES_DATA } from '../data/devotionalData';
import { useSchema } from '../hooks/useSchema';

export const TempleDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // Compile JSON-LD PlaceOfWorship list schema for all temples
  const compileSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Shree Khodiyar Maa Temples of Gujarat',
    'description': 'A curated directory of authentic historical temples dedicated to Shree Khodiyar Maa including Matel Dhuna, Rajpara, and Kagvad.',
    'numberOfItems': TEMPLES_DATA.length,
    'itemListElement': TEMPLES_DATA.map((temple, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@type': 'PlaceOfWorship',
        'name': temple.name,
        'description': temple.description,
        'image': temple.image,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': temple.location.split(',')[0],
          'addressRegion': 'Gujarat',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': temple.coordinates.lat,
          'longitude': temple.coordinates.lng
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            'opens': temple.hours.split(' - ')[0],
            'closes': temple.hours.split(' - ')[1]
          }
        ]
      }
    }))
  };

  // Inject the structured JSON-LD schema into the head
  useSchema(compileSchema);

  // Filter temples by query search and region categorizations
  const filteredTemples = TEMPLES_DATA.filter((temple) => {
    const matchesSearch =
      temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.gujaratiName.includes(searchQuery) ||
      temple.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // We can infer region: Patan is North Gujarat, others Saurashtra
    const region = temple.id === 'varana' ? 'North Gujarat' : 'Saurashtra';
    const matchesRegion = selectedRegion === 'All' || region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  const toggleExpandCard = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      {/* Header */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-crimson-800 dark:text-gold font-bold">Divine Locations</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 dark:text-zinc-50 mt-1">
            Temple Locator
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-2 max-w-xl">
            Explore the historical shrines dedicated to Maa Khodiyar across Gujarat. Obtain directions, schedules, and read legends associated with each site.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex gap-2 p-1 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full w-fit mx-auto md:mx-0">
          {['All', 'Saurashtra', 'North Gujarat'].map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedRegion === region
                  ? 'bg-crimson-800 text-white dark:bg-gold dark:text-zinc-950'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full max-w-md mb-8 mx-auto md:mx-0">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-zinc-400" />
        </span>
        <input
          type="text"
          placeholder="Search temple name, town or region..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-crimson-800 dark:focus:ring-gold focus:border-transparent text-sm font-sans"
        />
      </div>

      {/* Grid Explorer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <AnimatePresence>
          {filteredTemples.length > 0 ? (
            filteredTemples.map((temple) => {
              const isExpanded = expandedCardId === temple.id;
              const region = temple.id === 'varana' ? 'North Gujarat' : 'Saurashtra';

              return (
                <motion.div
                  layout
                  key={temple.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden glass-card border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  {/* Visual Header */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={temple.image}
                      alt={temple.name}
                      className="w-full h-full object-cover select-none transform hover:scale-102 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/assets/hero.png'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Floating pill tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-crimson-800 text-white px-2.5 py-1 rounded">
                        {region}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs text-gold font-serif block mb-0.5">{temple.gujaratiName}</span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-wide">
                        {temple.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                        {temple.description}
                      </p>

                      {/* Detail row metadata */}
                      <div className="grid grid-cols-2 gap-4 border-y border-zinc-150 dark:border-zinc-800 py-4 text-xs font-sans text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4.5 h-4.5 text-crimson-850 dark:text-gold shrink-0" />
                          <div>
                            <span className="block font-semibold text-[9px] uppercase text-zinc-450 dark:text-zinc-500">Operational Hours</span>
                            <span>{temple.hours}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4.5 h-4.5 text-crimson-850 dark:text-gold shrink-0" />
                          <div>
                            <span className="block font-semibold text-[9px] uppercase text-zinc-450 dark:text-zinc-500">Ahmedabad Distance</span>
                            <span>{temple.distance}</span>
                          </div>
                        </div>
                      </div>

                      {/* Rituals and History Details */}
                      <div className="space-y-2.5 text-xs font-sans">
                        <div>
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Morning Rituals:</span>
                          <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">{temple.openingRitual}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Evening Rituals:</span>
                          <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">{temple.closingRitual}</p>
                        </div>
                      </div>

                      {/* Collapsible History Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-zinc-500/5 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200/50 dark:border-zinc-800/50 space-y-2 mt-4 text-xs"
                          >
                            <h4 className="font-serif font-bold text-crimson-800 dark:text-gold flex items-center gap-1.5 uppercase tracking-wide">
                              <History className="w-3.5 h-3.5" /> Historical Legend
                            </h4>
                            <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans">
                              {temple.history}
                            </p>
                            <div className="pt-2 flex items-center gap-1.5 text-[10px] text-zinc-400">
                              <span>Geopoint: {temple.coordinates.lat.toFixed(4)}° N, {temple.coordinates.lng.toFixed(4)}° E</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Operational Actions */}
                    <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-150 dark:border-zinc-800">
                      <button
                        onClick={() => toggleExpandCard(temple.id)}
                        className="text-xs font-bold text-zinc-650 hover:text-crimson-800 dark:text-zinc-400 dark:hover:text-gold transition-colors flex items-center gap-1 font-sans"
                      >
                        <Info className="w-4 h-4" />
                        {isExpanded ? 'Hide History' : 'Read History'}
                      </button>

                      <a
                        href={temple.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-crimson-800 dark:bg-gold hover:bg-crimson-700 dark:hover:bg-gold/90 text-white dark:text-zinc-950 rounded-full text-xs font-bold transition-all shadow flex items-center gap-1.5 font-sans"
                      >
                        <Navigation className="w-3.5 h-3.5" /> Navigate
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-zinc-500 dark:text-zinc-400 font-sans">
              <p className="text-base font-serif">No temples found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('All');
                }}
                className="text-xs text-crimson-800 dark:text-gold font-bold underline mt-2"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default TempleDirectory;
