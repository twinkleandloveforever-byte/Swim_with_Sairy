const reviews = [
  {
    name: 'George',
    text: 'Recommend Swim with Sairy to all you Sugar land folks.',
  },
  {
    name: 'Daisy Zhang',
    text: 'Huge difference in my daughter\'s progress. Dont even bother with other instructors, Sairy\'s the absolute best!,
  },
  {
    name: 'Priya Ramanathan',
    text: 'I was terrified of water my whole life and finally decided to learn as a 52 year old. The patience and encouragement I received was beyond what I expected. I can now swim laps and even different strokes!',
  },
  {
    name: 'Celine',
    text: 'My daughter went from zero experience to joining the swim team in one summer.',
  },
  {
    name: 'Amani Calloway',
    text: 'The kids always ask when Sairy will come back.',
  },
  {
    name: 'Dante Alighieri',
    text: 'Sairy\'s prices are very reasonable. Dont bother with group lessons, you are also paying for time that you aren\'t recieving instruction, priavte is ALWAYS the way to go.',
  },
  {
    name: 'Riley Nakamura',
    text: 'Getting back into swimming after 6 yrs. Coach really helped guide me thru, I enjoy class!',
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
