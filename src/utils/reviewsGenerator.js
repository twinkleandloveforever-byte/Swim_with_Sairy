const firstNames = [
  'Sarah', 'Michael', 'Jessica', 'David', 'Emily', 'James', 'Ashley', 'Chris',
  'Amanda', 'Ryan', 'Nicole', 'Tyler', 'Megan', 'Brandon', 'Lauren', 'Justin',
  'Kayla', 'Aaron', 'Derek', 'Tiffany', 'Marcus', 'Brianna', 'Cameron', 'Jasmine',
  'Devin', 'Alyssa', 'Trevor', 'Sofia', 'Blake', 'Maya', 'Logan', 'Riley',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
  'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
];

const reviewTexts = [
  'Absolutely incredible experience! The instructor was patient, professional, and made every lesson fun. My kids went from fearing the water to swimming confidently in just a few weeks.',
  'Best decision we ever made. Having lessons in our own pool made everything so convenient. The personalized attention made a huge difference in my son\'s progress.',
  'I was terrified of water my whole life and finally decided to learn as an adult. The patience and encouragement I received was beyond what I expected. I can now swim laps!',
  'The mobile service is a game changer. No more rushing to pack up the kids and drive across town. The instructor came right to our community pool and was always on time.',
  'My daughter went from zero experience to joining the swim team in one summer. The stroke refinement coaching was incredibly detailed and effective.',
  'Professional, punctual, and genuinely caring. You can tell this isn\'t just a job — there\'s real passion for teaching water safety and proper technique.',
  'We tried group lessons elsewhere with no progress. After just three private sessions here, the difference was night and day. Worth every penny.',
  'As a triathlete, I needed someone who understood competitive stroke mechanics. The technical feedback transformed my freestyle efficiency. Highly recommend.',
  'My twins were nervous beginners and now they beg for swim lessons. The instructor has a gift for making kids feel safe and confident in the water.',
  'Flexible scheduling worked perfectly with our busy family calendar. The instructor adapted to our pool setup and made each session count.',
  'From water anxiety to swimming laps in six weeks. I never thought I\'d see my son this comfortable and happy in the pool. Truly life-changing.',
  'The one-on-one attention is unmatched. Every drill was tailored to exactly what my daughter needed. We saw improvement every single lesson.',
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
