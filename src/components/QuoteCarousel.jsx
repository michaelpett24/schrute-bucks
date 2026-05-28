import { useState, useEffect } from 'react';

const QUOTES = [
  {
    text: "I'm not superstitious, but I am a little stitious.",
    author: "Michael Scott",
  },
  {
    text: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    author: "Michael Scott",
  },
  {
    text: "You miss 100 percent of the shots you don't take. —Wayne Gretzky",
    author: "Michael Scott",
  },
  {
    text: "Identity theft is not a joke, Jim! Millions of families suffer every year!",
    author: "Dwight K. Schrute",
  },
  {
    text: "Through concentration, I can raise and lower my cholesterol at will.",
    author: "Dwight K. Schrute",
  },
  {
    text: "I am faster than 80% of all snakes.",
    author: "Dwight K. Schrute",
  },
  {
    text: "Before I do anything, I ask myself, 'Would an idiot do this?' And if the answer is yes, I do not do that thing.",
    author: "Dwight K. Schrute",
  },
  {
    text: "Question. What kind of bear is best? False. Black bear.",
    author: "Dwight K. Schrute",
  },
  {
    text: "I never smile if I can help it. Showing one's teeth is a submission signal in primates. When someone smiles at me, all I see is a chimpanzee begging for its life.",
    author: "Dwight K. Schrute",
  },
  {
    text: "Bears. Beets. Battlestar Galactica.",
    author: "Jim Halpert (as Dwight)",
  },
  {
    text: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    author: "Michael Scott",
  },
  {
    text: "Did I stutter?",
    author: "Stanley Hudson",
  },
  {
    text: "I wake up every morning in a bed that's too small, drive my daughter to a school that's too expensive, and then I go to work to a job for which I get paid too little. But on Pretzel Day? Well, I like Pretzel Day.",
    author: "Stanley Hudson",
  },
  {
    text: "Why waste time say lot word when few word do trick?",
    author: "Kevin Malone",
  },
  {
    text: "I've been involved in a number of cults, both as a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
    author: "Creed Bratton",
  },
  {
    text: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    author: "Michael Scott",
  },
  {
    text: "In the wild, there is no healthcare. Healthcare is: 'Oh, I broke my leg!' A lion comes and eats you, you're dead. Well, I'm not dead. I'm the lion.",
    author: "Dwight K. Schrute",
  },
  {
    text: "The eyes are the groin of the head.",
    author: "Dwight K. Schrute",
  },
  {
    text: "I am Beyoncé, always.",
    author: "Michael Scott",
  },
  {
    text: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
    author: "Pam Beesly",
  },
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const q = QUOTES[index];

  return (
    <div className="quote-carousel" onClick={() => setIndex((i) => (i + 1) % QUOTES.length)}>
      <div className="quote-marks">"</div>
      <p className="quote-text">{q.text}</p>
      <p className="quote-author">— {q.author}</p>
      <div className="quote-dots">
        {QUOTES.map((_, i) => (
          <span key={i} className={`dot ${i === index ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
