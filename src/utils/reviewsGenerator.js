const firstNames = [
  'Daisy', 'George', 'Sayed', 'David', 'Emily', 'James', 'Ashley', 'Abdullah',
  'Priyasha', 'Balaji', 'Nicole', 'Tyler', 'Raham', 'Brandon', 'Lauren', 'Justin',
  'Zane', 'Aaron', 'Kim', 'Raj', 'Marcus', 'Brianna', 'Cameron', 'Jasmine',
  'Devin', 'Alyssa', 'Zayed', 'Xiaomei', 'Young', 'Maya', 'Ming', 'Moe',
];

const lastNames = [
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
];

const reviewTexts = [
  'great experience. Sairy always showed up to our community pool early, my kids love classes. The little ones are always begging to come back!',
  'Best decision we ever made. Having lessons in our own pool made everything so convenient. The personalized attention made a huge difference in my 8 year old son\'s progress.',
  'I was terrified of water my whole life and finally decided to learn as a 52-year old. The patience and encouragement I received from Sairy was beyond what I expected. I can now swim laps back and forth, different strokes too!',
  'The mobile service is a game changer. No more rushing to pack up the kids and drive across town. The instructor came right to our home and was always on time.',
  'My daughter went from zero experience to joining the club swim team in one summer. The stroke refinement coaching was incredibly detailed and effective.',
  'Like it. awesome coach.'
  'She is very energetic, my 9 yr old daughter loved her'
  'I recommend Swim with Sairy for all you folks in Sugar Land area'
  'love supporting local small businesses.'
  'Sairy is great.'
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateReviews(count = 8) {
  return Array.from({ length: count }, (_, i) => {
    const first = pickRandom(firstNames);
    const last = pickRandom(lastNames);
    const name = `${first} ${last}`;
    const seed = `${first}${last}${i}`.toLowerCase();
    return {
      id: i,
      name,
      text: pickRandom(reviewTexts),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`,
    };
  });
}
