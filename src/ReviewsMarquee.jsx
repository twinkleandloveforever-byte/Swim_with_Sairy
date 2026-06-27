import { useState } from 'react';
import { Star } from 'lucide-react';
import { generateReviews } from './utils/reviewsGenerator';

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-80 mx-3 bg-white rounded-2xl p-6 border border-ocean-100 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full bg-ocean-100 border-2 border-cyan-200"
        />
        <div>
          <h4 className="font-bold text-ocean-900 leading-tight">{review.name}</h4>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-ocean-700 leading-relaxed">{review.text}</p>
    </div>
  );
}

export default function ReviewsMarquee() {
  const [paused, setPaused] = useState(false);
  const reviews = generateReviews(8);
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-ocean-50 via-cyan-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4">
          What Families Are
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600"> Saying</span>
        </h2>
        <p className="text-lg text-ocean-700">Real stories from happy swimmers and parents across Sugar Land.</p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex w-max"
          style={{
            animation: 'marquee 40s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
