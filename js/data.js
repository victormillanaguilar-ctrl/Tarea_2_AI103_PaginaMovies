// Static movie data
const MOVIES = [
  {
    id: 1,
    title: 'The Avengers: EndGame',
    year: 2024,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    rating: 8.7,
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy euismod tincidunt ut labore et dolore magna aliquat. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cast: [
      { name: 'Actor Names', role: 'Actor' },
      { name: 'Harry Corear', role: 'Actor' },
      { name: 'Naola Benos', role: 'Actor' },
      { name: 'John Vinrat', role: 'Actor' },
      { name: 'Dorna Tamas', role: 'Actor' },
      { name: 'Stany Reiane', role: 'Actor' }
    ],
    director: 'Lorem Insum'
  },
  {
    id: 2,
    title: 'Shutter Island',
    year: 2023,
    genres: ['Thriller', 'Mystery'],
    rating: 8.2,
    synopsis: 'A gripping tale of mystery and deception. Follow the protagonist as they uncover secrets hidden in the shadows of a forgotten city. Every clue brings them closer to the truth, but also closer to danger.',
    cast: [
      { name: 'Emma Stone', role: 'Lead' },
      { name: 'Tom Hardy', role: 'Antagonist' },
      { name: 'Saoirse Ronan', role: 'Support' },
      { name: 'Oscar Isaac', role: 'Detective' },
      { name: 'Tilda Swinton', role: 'Mentor' },
      { name: 'Mahershala Ali', role: 'Expert' }
    ],
    director: 'Denis Villeneuve'
  },
  {
    id: 3,
    title: 'Titanic',
    year: 2024,
    genres: ['Romance', 'Adventure', 'Fantasy'],
    rating: 7.9,
    synopsis: 'A romantic adventure spanning across ocean landscapes. Two strangers meet on a ship and discover they are destined for something greater. Their journey will test their love and courage.',
    cast: [
      { name: 'Ryan Gosling', role: 'Male Lead' },
      { name: 'Rachel Weisz', role: 'Female Lead' },
      { name: 'Timothée Chalamet', role: 'Young Sailor' },
      { name: 'Florence Pugh', role: 'Companion' },
      { name: 'Dev Patel', role: 'Captain' },
      { name: 'Charlize Theron', role: 'Rival' }
    ],
    director: 'Greta Gerwig'
  },
  {
    id: 4,
    title: 'Blade Runner 2049',
    year: 2023,
    genres: ['Cyberpunk', 'Action', 'Sci-Fi'],
    rating: 8.4,
    synopsis: 'In a dystopian future where neural implants control minds, a rogue hacker must navigate neon-lit streets to expose a conspiracy that could change humanity forever.',
    cast: [
      { name: 'Keanu Reeves', role: 'Protagonist' },
      { name: 'Zendaya', role: 'Ally' },
      { name: 'Jason Momoa', role: 'Antagonist' },
      { name: 'Michelle Yeoh', role: 'Guide' },
      { name: 'Pedro Pascal', role: 'Lieutenant' },
      { name: 'Tessa Thompson', role: 'Hacker' }
    ],
    director: 'Ava DuVernay'
  },
  {
    id: 5,
    title: 'Gladiator',
    year: 2024,
    genres: ['Historical', 'Drama', 'Action'],
    rating: 8.6,
    synopsis: 'An epic historical drama depicting the final stand of warriors defending their homeland. Intense battle sequences intertwined with personal stories of honor, loyalty, and sacrifice.',
    cast: [
      { name: 'Alexander Skarsgård', role: 'King' },
      { name: 'Thomasin McKenzie', role: 'Princess' },
      { name: 'Oscar Isaac', role: 'General' },
      { name: 'Cate Blanchett', role: 'Queen' },
      { name: 'Michael B. Jordan', role: 'Commander' },
      { name: 'Toni Collette', role: 'Healer' }
    ],
    director: 'Christopher Nolan'
  },
  {
    id: 6,
    title: 'Get Out',
    year: 2023,
    genres: ['Horror', 'Psychological', 'Thriller'],
    rating: 7.8,
    synopsis: 'A psychological horror where reality and nightmares blur. As the boundaries between consciousness and dreams dissolve, the protagonist must face their deepest fears to survive.',
    cast: [
      { name: 'Anya Taylor-Joy', role: 'Protagonist' },
      { name: 'Bill Skarsgård', role: 'Entity' },
      { name: 'Thomasin McKenzie', role: 'Friend' },
      { name: 'Robert Pattinson', role: 'Doctor' },
      { name: 'Elisabeth Moss', role: 'Therapist' },
      { name: 'Brian Cox', role: 'Authority' }
    ],
    director: 'Ari Aster'
  },
  {
    id: 7,
    title: 'IT',
    year: 2024,
    genres: ['Drama', 'Coming-of-Age', 'Adventure'],
    rating: 8.1,
    synopsis: 'A heartwarming coming-of-age story set against breathtaking mountain landscapes. Follow a young protagonist as they discover themselves on a transformative journey.',
    cast: [
      { name: 'Timothée Chalamet', role: 'Protagonist' },
      { name: 'Saoirse Ronan', role: 'Love Interest' },
      { name: 'Matthias Schoenaerts', role: 'Mentor' },
      { name: 'Greta Gerwig', role: 'Guide' },
      { name: 'Lucas Hedges', role: 'Friend' },
      { name: 'Hong Chau', role: 'Elder' }
    ],
    director: 'Luca Guadagnino'
  },
  {
    id: 8,
    title: 'Ghost Protocol',
    year: 2024,
    genres: ['Spy Thriller', 'Action', 'Drama'],
    rating: 8.5,
    synopsis: 'An espionage thriller where trust is currency and silence is survival. A secret agent must navigate international politics and betrayal to prevent a global catastrophe.',
    cast: [
      { name: 'Tom Cruise', role: 'Agent' },
      { name: 'Charlize Theron', role: 'Counter-Agent' },
      { name: 'Henry Cavill', role: 'Minister' },
      { name: 'Léa Seydoux', role: 'Informant' },
      { name: 'Mark Ruffalo', role: 'Supervisor' },
      { name: 'Alicia Vikander', role: 'Rival' }
    ],
    director: 'Sam Esmail'
  }
];
