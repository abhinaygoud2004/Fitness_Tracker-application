import React, { useEffect, useState } from 'react';

const quotes = [
  "The only bad workout is the one that didn't happen.",
  "Take care of your body. It's the only place you have to live.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "Strive for progress, not perfection.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "The only bad workout is the one you didn't do.",
  "The only bad workout is the one you didn't start.",
  "Sweat is magic. Cover yourself in it daily to grant your health wishes.",
  "Take care of your body. It's the only place you have to live.",
  "The best project you'll ever work on is you.",
  "Believe you can, and you're halfway there.",
  "The groundwork for all happiness is good health.",
  "The body achieves what the mind believes.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one you didn't do.",
  "The only bad workout is the one you didn't start.",
  "Sweat is magic. Cover yourself in it daily to grant your health wishes.",
  "Take care of your body. It's the only place you have to live.",
  "The best project you'll ever work on is you.",
  "Believe you can, and you're halfway there.",
  "The groundwork for all happiness is good health.",
  "The body achieves what the mind believes.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one you didn't do.",
  "The only bad workout is the one you didn't start.",
  "Sweat is magic. Cover yourself in it daily to grant your health wishes.",
  "Take care of your body. It's the only place you have to live.",
  "The best project you'll ever work on is you.",
  "Believe you can, and you're halfway there.",
  "The groundwork for all happiness is good health.",
  "The body achieves what the mind believes.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one you didn't do.",
  "The only bad workout is the one you didn't start.",
  "Sweat is magic. Cover yourself in it daily to grant your health wishes.",
  "Take care of your body. It's the only place you have to live.",
  "The best project you'll ever work on is you.",
  "Believe you can, and you're halfway there.",
  "The groundwork for all happiness is good health.",
  "The body achieves what the mind believes.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one you didn't do.",
  "The only bad workout is the one you didn't start.",
  "Sweat is magic. Cover yourself in it daily to grant your health wishes.",
  "Take care of your body. It's the only place you have to live.",
  "The best project you'll ever work on is you.",
  "Believe you can, and you're halfway there.",
  "The groundwork for all happiness is good health.",
  "The body achieves what the mind believes.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one you didn't do.",
  "The only bad workout is the one you didn't start.",
  "Sweat is magic. Cover yourself in it daily to grant your health wishes.",
  "Take care of your body. It's the only place you have to live.",
  "The best project you'll ever work on is you.",
  "Believe you can, and you're halfway there.",
  "The groundwork for all happiness is good health.",
  "The body achieves what the mind believes.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."
];

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };
  useEffect(() => {
    generateRandomQuote();
  }, []);
  return (
    <div className=''>
      <p>{randomQuote}</p>
    </div>
  );
};

export default RandomQuote;
