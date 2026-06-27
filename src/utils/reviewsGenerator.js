const reviews = [
  {
    name: 'Sarah Whitfield',
    text: 'Absolutely incredible experience! The instructor was patient, professional, and made every lesson fun. My kids went from fearing the water to swimming confidently in just a few weeks.',
  },
  {
    name: 'Marcus Delgado',
    text: 'Best decision we ever made. Having lessons in our own pool made everything so convenient. The personalized attention made a huge difference in my son\'s progress.',
  },
  {
    name: 'Priya Ramanathan',
    text: 'I was terrified of water my whole life and finally decided to learn as an adult. The patience and encouragement I received was beyond what I expected. I can now swim laps!',
  },
  {
    name: 'Tyler Brooks',
    text: 'The mobile service is a game changer. No more rushing to pack up the kids and drive across town. The instructor came right to our community pool and was always on time.',
  },
  {
    name: 'Alyssa Nguyen',
    text: 'My daughter went from zero experience to joining the swim team in one summer. The stroke refinement coaching was incredibly detailed and effective.',
  },
  {
    name: 'Derek Calloway',
    text: 'Professional, punctual, and genuinely caring. You can tell this isn\'t just a job — there\'s real passion for teaching water safety and proper technique.',
  },
  {
    name: 'Jasmine Okafor',
    text: 'We tried group lessons elsewhere with no progress. After just three private sessions here, the difference was night and day. Worth every penny.',
  },
  {
    name: 'Blake Sandoval',
    text: 'As a triathlete, I needed someone who understood competitive stroke mechanics. The technical feedback transformed my freestyle efficiency. Highly recommend.',
  },
  {
    name: 'Maya Thornberry',
    text: 'My twins were nervous beginners and now they beg for swim lessons. The instructor has a gift for making kids feel safe and confident in the water.',
  },
  {
    name: 'Cameron Petrov',
    text: 'Flexible scheduling worked perfectly with our busy family calendar. The instructor adapted to our pool setup and made each session count.',
  },
  {
    name: 'Sofia Marchetti',
    text: 'From water anxiety to swimming laps in six weeks. I never thought I\'d see my son this comfortable and happy in the pool. Truly life-changing.',
  },
  {
    name: 'Logan Fairbanks',
    text: 'The one-on-one attention is unmatched. Every drill was tailored to exactly what my daughter needed. We saw improvement every single lesson.',
  },
  {
    name: 'Riley Nakamura',
    text: 'Our instructor turned a reluctant five-year-old into a confident swimmer who now loves the pool. The calm, patient approach made all the difference for our family.',
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
