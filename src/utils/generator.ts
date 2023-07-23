const AVAILABLE_TERMS = [
  'abracadabra',
  'adventureland',
  'animal kingdom',
  'anna',
  'ariel',
  'aurora',
  'balloon',
  'belle',
  'beverly',
  'bibbidi bobbidi',
  'big thunder mountain',
  'california adventure',
  'carousel of progress',
  'castle',
  'churro',
  'cinderella',
  'confectionary',
  'contemporary',
  'corn dog',
  'creation',
  'daisy',
  'disney springs',
  'disney world',
  'disneyland',
  'dole whip',
  'donald',
  'downtown disney',
  'dumbo',
  'elsa',
  'enchantment',
  'epcot',
  'expedition everest',
  'fantasmic',
  'fantasy',
  'festival of the arts',
  'figment',
  'fireworks',
  'flower and garden',
  'food and wine',
  'friendship boats',
  'frontierland ',
  'goofy',
  'grand californian',
  'grand floridian',
  'great wilderness',
  'happily ever after',
  'haunted mansion',
  'hollywood studios',
  'imagination',
  'jasmine',
  "joffrey's",
  'loungefly',
  'magic',
  'magic kingdom',
  'main street',
  'merida',
  'mickey',
  'millenium falcon',
  'minnie',
  'moana',
  'monorail',
  'mulan',
  "na'vi river",
  'not-so-scary',
  'ohana',
  'parade',
  'party',
  'peoplemover',
  'peterpan',
  'pirate',
  'pluto',
  'pocahontas',
  'popcorn',
  'dolewhip',
  'pretzel',
  'rapunzel',
  'rose',
  'roundup rodeo',
  'runaway railway',
  'skyliner',
  'slinky dog',
  'small world',
  'snow white',
  'soarin',
  'space mountain',
  'spaceship earth',
  'speedway',
  'splash mountain',
  'starjumper ',
  'test track',
  'tiana',
  'tomorrowland',
  'tree of life',
  'tron',
  'very merry',
  'walt',
  'wish',
  'wonder',
  'world showcase',
];

const MAGIC_IPSUM_STARTER = 'Magic ipsum dolor sit amet ';

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getRandomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomTerm = (): string => {
  return AVAILABLE_TERMS[getRandomInt(AVAILABLE_TERMS.length)];
};

// Combine 5-7 terms to create a sentence
export const generateSentence = (startWithMagic: boolean): string => {
  const numberOfTerms = startWithMagic
    ? getRandomIntFromInterval(2, 4)
    : getRandomIntFromInterval(5, 7);

  let sentence = startWithMagic ? MAGIC_IPSUM_STARTER : '';

  for (let i = 0; i <= numberOfTerms; i++) {
    if (i === 0 && !startWithMagic) {
      const term = getRandomTerm();
      sentence += term.charAt(0).toUpperCase() + term.substring(1) + ' ';
    } else if (i === numberOfTerms) {
      sentence += getRandomTerm() + '. ';
    } else {
      sentence += getRandomTerm() + ' ';
    }
  }

  return sentence;
};

type ParagraphLength = 'short' | 'medium' | 'long';
const PARAGRAPH_PROPS = {
  short: {
    minNumOfSentences: 3,
    maxNumOfSentences: 5,
  },
  medium: {
    minNumOfSentences: 6,
    maxNumOfSentences: 9,
  },
  long: {
    minNumOfSentences: 10,
    maxNumOfSentences: 13,
  },
};
export const generateParagraphs = (length: ParagraphLength): string => {
  const numOfSentences = getRandomIntFromInterval(
    PARAGRAPH_PROPS[length].minNumOfSentences,
    PARAGRAPH_PROPS[length].maxNumOfSentences
  );

  let paragraph = '';

  for (
    let sentenceIndex = 0;
    sentenceIndex <= numOfSentences;
    sentenceIndex++
  ) {
    paragraph += generateSentence(false);
  }

  return paragraph;
};
