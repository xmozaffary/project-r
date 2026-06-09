// Jobbdata – används av Jobs.jsx och JobDetail.jsx
export const jobs = [
  {
    id: 1,
    title: 'Lediga tjänster kontor',
    type: 'Heltid',
    location: 'Kontor, Sverige',
    salary: 'Enligt överenskommelse',
    shortDesc: 'Jobba på vårt kontor och bli en del av vårt team i en stimulerande miljö.',
    fullDesc: 'Som kontorsanställd agent arbetar du på plats på vårt kontor tillsammans med ditt team. Du hanterar kundkontakter, arbetar i strukturerade skift och har tillgång till all utrustning och support på plats. Vi erbjuder en social och engagerande arbetsmiljö.',
    requirements: [
      'God kommunikationsförmåga på svenska',
      'Datorvana',
      'Positiv och serviceinriktad inställning',
      'Möjlighet att arbeta på plats',
    ],
  },
  {
    id: 2,
    title: 'Lediga tjänster remote',
    type: 'Heltid / Deltid',
    location: 'Remote, Sverige',
    salary: 'Enligt överenskommelse',
    shortDesc: 'Jobba hemifrån med flexibla arbetstider och vara en del av vårt team på distans.',
    fullDesc: 'Som remote-agent arbetar du hemifrån med full flexibilitet. Du hanterar kundkontakter digitalt och har regelbunden kontakt med ditt team via digitala verktyg. Vi tillhandahåller nödvändig utrustning och support för att du ska kunna arbeta effektivt hemifrån.',
    requirements: [
      'Stabil internetuppkoppling',
      'Lugn arbetsmiljö hemma',
      'God kommunikationsförmåga på svenska',
      'Självgående och disciplinerad',
    ],
  },
]
