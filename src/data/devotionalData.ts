import type { Temple, DevotionalTrack } from '../types';

export const TEMPLES_DATA: Temple[] = [
  {
    id: 'matel',
    name: 'Matel Dhuna Temple',
    gujaratiName: 'માટેલ ધુના મંદિર',
    location: 'Matel, Wankaner Taluka, Morbi District, Gujarat',
    googleMapsUrl: 'https://maps.google.com/?q=Matel+Khodiyar+Temple+Morbi',
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800',
    hours: '06:00 AM - 09:00 PM',
    distance: '235 km from Ahmedabad',
    description: 'The root shrine of Maa Khodiyar. It is situated around the holy bottomless pool (Dhuna) which is the direct source of spiritual energy.',
    history: 'According to scriptures, Maa Janbai (Khodiyar) entered this bottomless pool (Dhuna) to travel to the Serpent King\'s underwater palace to bring back life-giving elixir for her dying brother Mehrak. Devotees believe that the waters of this Dhuna have healing properties and that Maa Khodiyar resides in its depths.',
    openingRitual: 'Mangla Aarti: 06:00 AM. Involves morning bathing of the main silver deity, applying vermillion (kumkum), and chanting sacred verses.',
    closingRitual: 'Sandhya Aarti: 07:30 PM. Involves the lightning of 108 oil lamps (Divas), traditional drumming (Dhol), and offering coconut prasad.',
    coordinates: {
      lat: 22.7171,
      lng: 70.9702
    }
  },
  {
    id: 'rajpara',
    name: 'Rajpara Khodiyar Mandir',
    gujaratiName: 'રાજપરા ખોડિયાર મંદિર',
    location: 'Rajpara, near Sihor, Bhavnagar District, Gujarat',
    googleMapsUrl: 'https://maps.google.com/?q=Rajpara+Khodiyar+Mandir+Bhavnagar',
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?auto=format&fit=crop&q=80&w=800',
    hours: '05:30 AM - 09:30 PM',
    distance: '180 km from Ahmedabad',
    description: 'A deeply revered shrine located near Bhavnagar. It features the holy lake Tataniya Dharo, which holds special religious significance.',
    history: 'Built beside the Tataniya Dharo lake, this temple marks the spot where the Maharaja of Bhavnagar walked behind Maa Khodiyar under a condition not to look back. When he turned to check on her near Sihor, she decided to establish herself permanently at Rajpara. Lapsi (sweet wheat broken grain offering) is the primary Prasad here.',
    openingRitual: 'Morning worship starts at 05:30 AM with the purification ritual of the Tataniya Dharo waters and Shringar (decoration) of Maa.',
    closingRitual: 'Evening Aarti at 08:00 PM accompanied by special bells, followed by the offering of Lapsi prasad and closure of gates.',
    coordinates: {
      lat: 21.6881,
      lng: 71.9934
    }
  },
  {
    id: 'kagvad',
    name: 'Shree Khodaldham Temple',
    gujaratiName: 'શ્રી ખોડલધામ મંદિર - કાગવડ',
    location: 'Kagvad, Jetpur Taluka, Rajkot District, Gujarat',
    googleMapsUrl: 'https://maps.google.com/?q=Shree+Khodaldham+Temple+Kagvad',
    image: 'https://images.unsplash.com/photo-1609137882611-301a742a17ef?auto=format&fit=crop&q=80&w=800',
    hours: '06:00 AM - 08:30 PM',
    distance: '315 km from Ahmedabad',
    description: 'A monument of architectural beauty, it is built of red stones and features exquisite carvings representing Gujarati cultural heritage.',
    history: 'Inaugurated in January 2017, Shree Khodaldham is a unique social and spiritual center. Spreading across 100+ acres, it holds Guinness World Records for the largest number of people singing the national anthem together at its opening, standing as a grand beacon of community cooperation, cultural revival, and architectural preservation.',
    openingRitual: 'Mangla Aarti: 06:00 AM. Daily chanting of Shlokas and decoration of the central idol of Khodiyar Maa along with other deities.',
    closingRitual: 'Sandhya Aarti: 07:00 PM. High-energy musical Aarti followed by cultural updates on the temple board and lighting displays.',
    coordinates: {
      lat: 21.8492,
      lng: 70.6728
    }
  },
  {
    id: 'galdhara',
    name: 'Shree Khodiyar Temple, Galdhara',
    gujaratiName: 'શ્રી ખોડિયાર મંદિર - ગલધરા',
    location: 'Galdhara, near Dhari, Amreli District, Gujarat',
    googleMapsUrl: 'https://maps.google.com/?q=Galdhara+Khodiyar+Temple+Dhari',
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&q=80&w=800',
    hours: '06:00 AM - 09:00 PM',
    distance: '290 km from Ahmedabad',
    description: 'Set on the banks of Shetrunji River, where the waters cascade over rocks forming a beautiful pool. A peaceful nature-filled retreat.',
    history: 'The temple overlooks the Galdhara pool. Ancient scriptures recall that Maa Khodiyar cured her sick brother by bringing Amrut (holy nectar) from the deep undercurrents of Shetrunji. The river has been designated as a holy river, and devotees come to wash away their distress in the natural waters.',
    openingRitual: 'Suryoday Puja: 06:00 AM. Morning salutation to Shetrunji river and prayers to Maa Khodiyar overlooking the waterfall.',
    closingRitual: 'Evening Sandhya Aarti at 07:15 PM, syncing with the sunset over the Shetrunji valley and natural waterfall sounds.',
    coordinates: {
      lat: 21.3283,
      lng: 71.1895
    }
  },
  {
    id: 'varana',
    name: 'Shree Khodiyar Temple, Varana',
    gujaratiName: 'શ્રી ખોડિયાર મંદિર - વરાણા',
    location: 'Varana, Sami Taluka, Patan District, Gujarat',
    googleMapsUrl: 'https://maps.google.com/?q=Varana+Khodiyar+Temple+Patan',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800',
    hours: '06:00 AM - 09:00 PM',
    distance: '130 km from Ahmedabad',
    description: 'A famous historical temple located in North Gujarat. The center of major festivities during the month of Maha (Feb-March).',
    history: 'Varana holds historical significance since the medieval Solanki era of Gujarat. The temple is renowned for hosting the grand Varana Mela. During this mela, which peaks on Maha Sud Aatham, thousands of devotees walk miles to offer "sukhadi" (a sweet offering) to Maa Khodiyar, thanking her for fulfilled wishes.',
    openingRitual: 'Pratah Puja: 06:00 AM. Vermillion bath and chanting of the 108 names of Maa Khodiyar.',
    closingRitual: 'Maha Sandhya Aarti: 07:30 PM. Massive bell ringing and lighting of ghee-infused cotton lamps followed by offering of Sukhadi.',
    coordinates: {
      lat: 23.6397,
      lng: 71.8491
    }
  }
];

export const DEVOTIONAL_TRACKS: DevotionalTrack[] = [
  {
    id: 'track-chalisa',
    title: 'Shree Khodiyar Chalisa',
    gujaratiTitle: 'શ્રી ખોડિયાર ચાલીસા',
    category: 'Chalisa',
    duration: '06:12',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    singer: 'Traditional Bhajan Mandali',
    lyrics: [
      { time: 0, textGu: "(શ્રી ગણેશ વંદના અને રાગ સૂર પ્રારંભ)", textEn: "(Invocations to Lord Ganesha & Musical Prelude)" },
      { time: 6, textGu: "નમો નમો ખોડિયાર મહારાણી, માટેલ ધામની ઐશ્વર્ય ખાણી.", textEn: "Namo Namo Khodiyar Maharani, Matel dham ni aishwarya khani." },
      { time: 14, textGu: "મા મમતાની મૂરત પ્યારી, ભક્તોના દુઃખ હરવા વાળી.", textEn: "Maa Mamta ni murat pyari, Bhakto na dukh harva vaari." },
      { time: 22, textGu: "જનમી દેવી ધરતી પાવન, ઝાંઝર વાગે છમ છમ છમ.", textEn: "Janami devi dharati paavan, Jhanzhar vaje chham chham chham." },
      { time: 30, textGu: "ત્રિશૂળ શોભે હાથમાં ભારી, મગર વાહને સવારી તારી.", textEn: "Trishul shobhe haath ma bhari, Magar vahane savari taari." },
      { time: 38, textGu: "મામડિયા ચારણ ઘેર જનમી દેવી, આઠમના મેળે પૂજીએ દેવી.", textEn: "Mamadiya charan gher janami devi, Aatham na मेले pujiye devi." },
      { time: 46, textGu: "ધૂના માથે દીવો પ્રગટાયો, ખોડિયાર કૃપાનો ધબકાર વહ્યો.", textEn: "Dhuna mathe divo pragtayo, Khodiyar krupa no dhabkar vahyoo." },
      { time: 54, textGu: "જે કોઈ ગાવે ચાલીસા પ્રીતે, સુખી થાય તે ભક્તિ રીતે.", textEn: "Je koi gave Chalisa preete, Sukhi thay te bhakti reete." },
      { time: 62, textGu: "(સંગીતમય ભજન સમૂહગાન)", textEn: "(Instrumental Chorus Interlude)" }
    ]
  },
  {
    id: 'track-aarti',
    title: 'Khodiyar Maa Aarti',
    gujaratiTitle: 'ખોડિયાર મા આરતી',
    category: 'Aarti',
    duration: '07:05',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    singer: 'Devotional Choir Ensemble',
    lyrics: [
      { time: 0, textGu: "(શંખનાદ અને ઘંટારવ પ્રારંભ)", textEn: "(Conch blow and Temple Bells Prelude)" },
      { time: 8, textGu: "જય આદ્યાશક્તિ, મા જય આદ્યાશક્તિ, માટેલ ધામે બિરાજતા ખોડિયાર મા જગદંબે.", textEn: "Jay Adhyashakti, Maa Jay Adhyashakti, Matel Dhame Virajta Khodiyar Maa Jagdambe." },
      { time: 20, textGu: "મા તમે છો સાક્ષાત્, કષ્ટ હરનારી, ત્રિશૂળ ધારિણી દેવી, મગર વાહન વાળી.", textEn: "Maa Tame Chho Sakshat, Kasht Haranari, Trishul Dharini Devi, Magar Vahan Vali." },
      { time: 32, textGu: "ચારો દિશામાં વાગે, ઢોલ ને ચોઘડિયા, કુમકુમ પગલે પધારો, દેવી ખોડલ પ્યારી.", textEn: "Charo disha ma vaje, dhol ne chaughada, Kumkum pagle padharo, devi khodal pyari." },
      { time: 44, textGu: "ભક્તોના દુઃખ હરનારી, તારીશ તું ભવસાગર, શરણાગતની રક્ષા, કરજો મા કૃપાસાગર.", textEn: "Bhakto na dukh haranari, taarish tu bhavsaagar, Sharanagat ni raksha, karjo Maa krupaasagar." },
      { time: 56, textGu: "આરતી ઉતારીએ ખોડલ માતની, કૃપા વરસાવો જગના જનની.", textEn: "Aarti utariye Khodal maat ni, Krupa varshavo jag na janani." },
      { time: 68, textGu: "જય ખોડલ, જય ખોડલ, શરણું દેજો તારું દીનદયાલ.", textEn: "Jay Khodal, Jay Khodal, Sharanu dejo taaru deenadayala." },
      { time: 80, textGu: "(ભક્તિમય મંગલ ગીત પરાકાષ્ઠા)", textEn: "(Devotional Mangal Chanting Outro)" }
    ]
  },
  {
    id: 'track-garbo',
    title: 'Anand No Garbo',
    gujaratiTitle: 'આનંદ નો ગરબો',
    category: 'Garbo',
    duration: '05:44',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    singer: 'Gujarati Folk Singer',
    lyrics: [
      { time: 0, textGu: "(ખંજરી અને ઢોલના ઠેકા સાથે ગરબો પ્રારંભ)", textEn: "(Garbo Prelude with traditional Dhol and Khanjari beats)" },
      { time: 10, textGu: "આનંદનો ગરબો ગાવો, ભક્તો ભાવ ધરીને ગાવો.", textEn: "Anand no Garbo gavo, Bhakto bhaav dharine gavo." },
      { time: 18, textGu: "મા ખોડલના મંગળ ગીત, સદા સુખ સંપત્તિ દેત.", textEn: "Maa Khodal na mangal geet, Sada sukh sampatti deet." },
      { time: 28, textGu: "આરાધના કરીએ અંબે માતની, ખોડિયાર મા ના આશીર્વાદ સાથની.", textEn: "Aradhana kariye Ambe maat ni, Khodiyar Maa na aashirwad saath ni." },
      { time: 38, textGu: "કુમકુમ ના પગલાં પાડો માય, ભક્તોના આંગણ હરખાય.", textEn: "Kumkum na pagla paado maay, Bhakto na aangan harakhaay." },
      { time: 48, textGu: "મગર વાહને પધારો દેવી ખોડલ, દુઃખ દૂર કરજો હૈયાના દયાળ.", textEn: "Magar vahane padharo devi Khodal, Dukh door karjo haiya na dayal." },
      { time: 58, textGu: "ગાઈએ આનંદનો ગરબો પ્રેમથી, ભવ તારી દેશે માં કૃપાથી.", textEn: "Gaiye Anand no Garbo prem thi, Bhav taari deshe Maa krupa thi." },
      { time: 68, textGu: "(ગરબા સમૂહ તાળીઓની રમઝટ)", textEn: "(High energy rhythmic Garba clapping Outro)" }
    ]
  }
];
