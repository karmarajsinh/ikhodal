import React from 'react';
import { Star, HelpCircle, Heart } from 'lucide-react';

export const AboutHistory: React.FC = () => {
  const sisters = [
    { name: 'Maa Aaval', order: 'First Sister', desc: 'Representing absolute primary cosmic energy and maternal guidance.' },
    { name: 'Maa Jogal', order: 'Second Sister', desc: 'Symbol of meditation, spiritual control, and yogic power.' },
    { name: 'Maa Togal', order: 'Third Sister', desc: 'Incarnation of resilience, shielding devotees from distress.' },
    { name: 'Maa Sosai', order: 'Fourth Sister', desc: 'Guardian of oceans and lakes, cleansing impurities of the mind.' },
    { name: 'Maa Beejad', order: 'Fifth Sister', desc: 'Symbolizing seeds of creation, fertility, and prosperity.' },
    { name: 'Maa Holbai', order: 'Sixth Sister', desc: 'Protector of households and animal herds from external harm.' },
    { name: 'Maa Janbai (Khodiyar)', order: 'Seventh Sister', desc: 'The direct savior who conquered deep waters on a crocodile to cure her brother.' }
  ];

  return (
    <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      {/* Page Title */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-crimson-800 dark:text-gold font-bold">Sacred Lore & Heritage</span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 dark:text-zinc-50 mt-1">
          Maa Legacy & History
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-2 max-w-2xl">
          Immerse yourself in the profound narrative of the seven divine sisters and the legendary chronicle of Shree Khodiyar Maa.
        </p>
      </div>

      {/* Main Narrative Blocks */}
      <div className="space-y-12">
        
        {/* Block 1: The Incarnation */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-crimson-800 dark:text-gold flex items-center gap-2">
              <Star className="w-5 h-5 shrink-0" />
              The Birth of Seven Shaktis
            </h3>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              During the 9th to 10th century AD, in Roishala near Vallabhipur (modern-day Bhavnagar, Gujarat), lived a pious devotee named Mamadiya Charan. Despite his deep virtue and closeness to the local ruler, he was constantly ridiculed for being childless.
            </p>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              To alleviate his sorrow, Mamadiya traveled to Kailash and performed intense penance. Moved by his dedication, Lord Shiva blessed him, promising that the cosmic Shaktis would take birth in his family. Soon, his wife gave birth to seven daughters (Aaval, Jogal, Togal, Sosai, Beejad, Holbai, Janbai) and one son named Mehrak.
            </p>
          </div>
          
          <div className="md:col-span-5 bg-gradient-to-tr from-crimson-800/5 to-gold/5 border border-crimson-800/10 dark:border-gold/15 rounded-2xl p-6 shadow-inner text-center">
            <h4 className="text-lg font-serif font-bold text-zinc-900 dark:text-zinc-50 mb-4">The Seven Divine Sisters</h4>
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-2 text-left">
              {sisters.map((sis) => (
                <div key={sis.name} className="p-2.5 rounded-lg bg-white/40 dark:bg-zinc-950/20 border border-zinc-200/30 dark:border-zinc-800/30">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-50">{sis.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-crimson-800 dark:text-gold font-semibold">{sis.order}</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">{sis.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Block 2: How Janbai Became Khodiyar */}
        <section className="p-6 md:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/30 dark:bg-zinc-900/10 backdrop-blur-md space-y-5">
          <h3 className="text-2xl font-serif font-bold text-crimson-800 dark:text-gold flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            How Janbai Became "Khodiyar"
          </h3>
          <div className="space-y-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            <p>
              The turning point of the legend occurred when their only brother, Mehrak, was bitten by a lethal venomous snake. As he lay dying, a sage declared that the only cure was a rare divine elixir (Amrut) from the deep underwater palace of the Serpent King (Nagaraja), located beneath the ocean floor.
            </p>
            <p>
              Janbai, the youngest of the sisters, volunteered for the journey. She plunged into the deep currents of the Shetrunji river to reach the sea. On her return journey, carrying the life-saving jar of elixir, her foot was severely injured, making it difficult for her to swim quickly.
            </p>
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              Seeing time run out, she prayed for a faster vehicle. A giant crocodile (Magar) appeared from the waters. Janbai boarded the crocodile, which swam swiftly to the surface. Her sisters, watching her emerge from the waters limping ("Khodi" in Gujarati) while riding a crocodile, cheered in relief. From that day on, she was affectionately called <strong>"Maa Khodiyar"</strong>.
            </p>
          </div>
        </section>

        {/* Block 3: The Crocodile Vahana */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-gold/10 to-crimson-800/10 border border-crimson-800/10 dark:border-gold/20 flex items-center justify-center shadow-lg overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-gold-700 dark:text-gold" fill="currentColor">
                {/* stylized wave path */}
                <path d="M 10,70 Q 30,55 50,70 T 90,70" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M 15,75 Q 35,60 55,75 T 85,75" fill="none" stroke="currentColor" strokeWidth="0.5" />
                
                {/* Crocodile symbol */}
                <path d="M 25,60 C 25,60 35,55 50,55 C 65,55 75,60 80,55 C 75,52 65,50 50,50 C 35,50 25,52 25,60 Z" />
                <path d="M 30,60 L 32,63 L 36,60 L 40,63 L 44,60 L 48,63 L 52,60" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M 70,55 L 75,52 L 80,48" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="32" cy="54" r="1.5" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-crimson-800 dark:text-gold flex items-center gap-2">
              <Heart className="w-5 h-5 shrink-0" />
              Significance of the Crocodile (Vahana)
            </h3>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              In Hindu iconography, a deity's vehicle (Vahana) represents their domain and command over specific cosmic forces. Maa Khodiyar riding the crocodile represents:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-sans">
              <li><strong>Conquering Fear:</strong> The crocodile is one of the most formidable predators of deep waters, signifying Maa's power to subdue deep-seated fears and dangers.</li>
              <li><strong>Control over Emotions:</strong> Water represents the subconscious mind and raw emotions. Dominating a water-dwelling reptile indicates emotional stability and clarity.</li>
              <li><strong>Environmental Harmony:</strong> It emphasizes the reverence for wildlife and aquatic systems, which are central to the ecosystem of Gujarat's rivers like Shetrunji.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};
