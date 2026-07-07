import type { Temple, DevotionalTrack, DevotionalVideo } from '../types';

export const TEMPLES_DATA: Temple[] = [
  {
    id: 'matel',
    name: 'Matel Dham Temple',
    gujaratiName: 'માટેલ ધામમંદિર',
    location: 'Matel, Wankaner Taluka, Morbi District, Gujarat',
    googleMapsUrl: 'https://maps.google.com/?q=Matel+Khodiyar+Temple+Morbi',
    image: '/assets/matel-dham/temple-image.webp',
    hours: '06:00 AM - 09:00 PM',
    distance: '235 km from Ahmedabad',
    description: 'The root shrine of Maa Khodiyar. It is situated around the holy bottomless pool (Dham) which is the direct source of spiritual energy.',
    history: 'According to scriptures, Maa Janbai (Khodiyar) entered this bottomless pool (Dham) to travel to the Serpent King\'s underwater palace to bring back life-giving elixir for her dying brother Mehrak. Devotees believe that the waters of this Dham have healing properties and that Maa Khodiyar resides in its depths.',
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
    image: '/assets/rajapara-temple/temple-image-1.webp',
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
    image: '/assets/khodaldham-kagvad/temple-image.webp',
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
    image: '/assets/galadhara-temple/maa-image.webp',
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
    image: '/assets/varana-patan-temple/temple-image.webp',
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
    subtitle: 'A 40-verse prayer of devotion and protection, ideally chanted during morning worship for courage and peace.',
    lyrics: `(શ્રી ગણેશ વંદના અને રાગ સૂર પ્રારંભ)
(Invocations to Lord Ganesha & Musical Prelude)

નમો નમો ખોડિયાર મહારાણી, માટેલ ધામની ઐશ્વર્ય ખાણી.
Namo Namo Khodiyar Maharani, Matel dham ni aishwarya khani.

મા મમતાની મૂરત પ્યારી, ભક્તોના દુઃખ હરવા વાળી.
Maa Mamta ni murat pyari, Bhakto na dukh harva vaari.

જનમી દેવી ધરતી પાવન, ઝાંઝર વાગે છમ છમ છમ.
Janami devi dharati paavan, Jhanzhar vaje chham chham chham.

ત્રિશૂળ શોભે હાથમાં ભારી, મગર વાહને સવારી તારી.
Trishul shobhe haath ma bhari, Magar vahane savari taari.

મામડિયા ચારણ ઘેર જનમી દેવી, આઠમના મેળે પૂજીએ દેવી.
Mamadiya charan gher janami devi, Aatham na મેળે pujiye devi.

ધૂના માથે દીવો પ્રગટાયો, ખોડિયાર કૃપાનો ધબકાર વહ્યો.
Dham mathe divo pragtayo, Khodiyar krupa no dhabkar vahyoo.

જે કોઈ ગાવે ચાલીસા પ્રીતે, સુખી થાય તે ભક્તિ રીતે.
Je koi gave Chalisa preete, Sukhi thay te bhakti reete.

(સંગીતમય ભજન સમૂહગાન)
(Instrumental Chorus Interlude)`
  },
  {
    id: 'track-aarti',
    title: 'Khodiyar Maa Aarti',
    gujaratiTitle: 'ખોડિયાર મા આરતી',
    category: 'Aarti',
    duration: '07:05',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    singer: 'Devotional Choir Ensemble',
    subtitle: 'The sacred ritual song of light, performed during evening sandhya to invite Maa\'s grace and blessings.',
    lyrics: `(શંખનાદ અને ઘંટારવ પ્રારંભ)
(Conch blow and Temple Bells Prelude)

જય આદ્યાશક્તિ, મા જય આદ્યાશક્તિ, માટેલ ધામે બિરાજતા ખોડિયાર મા જગદંબે.
Jay Adhyashakti, Maa Jay Adhyashakti, Matel Dhame Virajta Khodiyar Maa Jagdambe.

મા તમે છો સાક્ષાત્, કષ્ટ હરનારી, ત્રિશૂળ ધારિણી દેવી, મગર વાહન વાળી.
Maa Tame Chho Sakshat, Kasht Haranari, Trishul Dharini Devi, Magar Vahan Vali.

ચારો દિશામાં વાગે, ઢોલ ને ચોઘડિયા, કુમકુમ પગલે પધારો, દેવી ખોડલ પ્યારી.
Charo disha ma vaje, dhol ne chaughada, Kumkum pagle padharo, devi khodal pyari.

ભક્તોના દુઃખ હરનારી, તારીશ તું ભવસાગર, શરણાગતની રક્ષા, કરજો મા કૃપાસાગર.
Bhakto na dukh haranari, taarish tu bhavsaagar, Sharanagat ni raksha, karjo Maa krupaasagar.

આરતી ઉતારીએ ખોડલ માતની, કૃપા વરસાવો જગના જનની.
Aarti utariye Khodal maat ni, Krupa varshavo jag na janani.

જય ખોડલ, જય ખોડલ, શરણું દેજો તારું દીનદયાલ.
Jay Khodal, Jay Khodal, Sharanu dejo taaru deenadayala.

(ભક્તિમય મંગલ ગીત પરાકાષ્ઠા)
(Devotional Mangal Chanting Outro)`
  },
  {
    id: 'track-garbo',
    title: 'Anand No Garbo',
    gujaratiTitle: 'આનંદ નો ગરબો',
    category: 'Garbo',
    duration: '05:44',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    singer: 'Gujarati Folk Singer',
    subtitle: 'A joyful folk hymn celebrating the divine play and cosmic energy of the mother goddess.',
    lyrics: `(ખંજરી અને ઢોલના ઠેકા સાથે ગરબો પ્રારંભ)
(Garbo Prelude with traditional Dhol and Khanjari beats)

આનંદનો ગરબો ગાવો, ભક્તો ભાવ ધરીને ગાવો.
Anand no Garbo gavo, Bhakto bhaav dharine gavo.

મા ખોડલના મંગળ ગીત, સદા સુખ સંપત્તિ દેત.
Maa Khodal na mangal geet, Sada sukh sampatti deet.

આરાધના કરીએ અંબે માતની, ખોડિયાર મા ના આશીર્વાદ સાથની.
Aradhana kariye Ambe maat ni, Khodiyar Maa na aashirwad saath ni.

કુમકુમ ના પગલાં પાડો માય, ભક્તોના આંગણ હરખાય.
Kumkum na pagla paado maay, Bhakto na aangan harakhaay.

મગર વાહને પધારો દેવી ખોડલ, દુઃખ દૂર કરજો હૈયાના દયાળ.
Magar vahane padharo devi Khodal, Dukh door karjo haiya na dayal.

ગાઈએ આનંદનો ગરબો પ્રેમથી, ભવ તારી દેશે માં કૃપાથી.
Gaiye Anand no Garbo prem thi, Bhav taari deshe Maa krupa thi.

(ગરબા સમૂહ તાળીઓની રમઝટ)
(High energy rhythmic Garba clapping Outro)`
  },
  {
    id: 'track-mantra',
    title: 'Shree Khodiyar Mantra',
    gujaratiTitle: 'શ્રી ખોડિયાર મંત્ર',
    category: 'Mantra',
    duration: '03:30',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    singer: 'Traditional Vedic Chants',
    subtitle: 'A sacred chant for mental peace, protection, and positive vibrations. Chanted 108 times daily.',
    lyrics: `ૐ હ્રીં શ્રી ખોડિયાર માયૈ નમઃ
Om Hreem Shree Khodiyar Maayai Namah

ૐ હ્રીં શ્રી ખોડિયાર માયૈ નમઃ
Om Hreem Shree Khodiyar Maayai Namah

ૐ હ્રીં શ્રી ખોડિયાર માયૈ નમઃ
Om Hreem Shree Khodiyar Maayai Namah`
  }
];

export const DEVOTIONAL_VIDEOS: DevotionalVideo[] = [
  {
    id: 'video-chalisa',
    title: 'Shree Khodiyar Chalisa',
    gujaratiTitle: 'શ્રી ખોડિયાર ચાલીસા',
    singer: 'Hemant Chauhan',
    youtubeId: '1u4Y1_d6PzE',
    duration: '06:12',
    description: 'A powerful, traditional recitation of the 40-verse prayer praising the glory and protection of Maa Khodiyar.'
  },
  {
    id: 'video-bavni',
    title: 'Khodiyar Maa Bavni',
    gujaratiTitle: 'ખોડિયાર મા બાવની',
    singer: 'Ruchita Prajapati',
    youtubeId: 'DHz31fXm3nU',
    duration: '13:10',
    description: '52 sacred verses describing the lineage, divine manifestations, and miraculous parchas of the goddess.'
  },
  {
    id: 'video-arji',
    title: 'Arji Suni Ne Aai',
    gujaratiTitle: 'અરજી સૂણીને આઈ',
    singer: 'Devraj Gadhvi (Nano Dero)',
    youtubeId: '3PjQn0L7bLg',
    duration: '06:44',
    description: 'A popular, heart-touching prayer pleading to the mother goddess to hear the devotee\'s call.'
  },
  {
    id: 'video-galdhara',
    title: 'Galadhare Thi Maji Nisarya',
    gujaratiTitle: 'ગળધરે થી માજી નીસર્યા',
    singer: 'Kirtidan Gadhvi',
    youtubeId: 'vD0l_W_Nfg4',
    duration: '08:15',
    description: 'A soul-stirring live performance by Kirtidan Gadhvi detailing the emergence of Maa from the Galdhara pool.'
  }
];
