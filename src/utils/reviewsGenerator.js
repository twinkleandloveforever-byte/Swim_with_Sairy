const reviews = [
  {
    name: 'George Morris',
    text: 'Recommend Swim with Sairy to all Sugar land folks.',
  },
  {
    name: 'Daisy Zhang',
    text: 'Huge difference in my son\'s progress. Dont even bother with other instructors, she is the best',
  },
  {
    name: 'Priya Ramanathan',
    text: 'I was terrified of water my whole life and finally decided to learn as a 52 year old. The patience and encouragement I received was beyond what I expected. I can now swim laps and even several different strokes!',
  },
  {
    name: 'Celine',
    text: 'My daughter went from zero experience to joining the swim team in one summer.',
  },
  {
    name: 'Derek Calloway',
    text: 'All 4 kids in a 60-minute lesson. Didn\'t expect so much progress!!! Sairy has a gift for making children smile and learn. The kids always ask when Sairy will come back.',
  },
  {
    name: 'Dante Morris Alighieri',
    text: 'Swim with Sairy has the best competitive pricing in the area after much research. Go give it a try',
  },
  {
    name: 'McKinzy',
    text: 'I love supporting local small businesses!',
  },
  {
    name: 'Riley Nakamura',
    text: 'Sairy is great',
  },
];

export function getReviews() {
  return reviews.map((review, index) => {
    const seed = review.name.replace(/\s+/g, '').toLowerCase();
    return {
      id: index,
      name: review.name,
      text: review.text,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`,
    };
  });
}
