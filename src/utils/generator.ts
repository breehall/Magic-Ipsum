import { AVAILABLE_TERMS, MAGIC_IPSUM_STARTER } from './terms';

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
const generateSentence = (): string => {
  const numberOfTerms = getRandomIntFromInterval(4, 6);

  let sentence = '';

  for (let i = 0; i <= numberOfTerms; i++) {
    if (i === 0) {
      const term = getRandomTerm();
      sentence += term.charAt(0).toUpperCase() + term.substring(1) + ' ';
    } else if (i === numberOfTerms) {
      sentence += getRandomTerm() + '. \n';
    } else {
      sentence += getRandomTerm() + ' ';
    }
  }

  return sentence;
};

export type ParagraphLength = 'short' | 'medium' | 'long';
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

// Combine sentences to create paragraphs
const generateParagraph = (length: ParagraphLength): string => {
  const numberOfSentences = getRandomIntFromInterval(
    PARAGRAPH_PROPS[length].minNumOfSentences,
    PARAGRAPH_PROPS[length].maxNumOfSentences
  );

  let paragraph = '';

  for (let i = 0; i <= numberOfSentences; i++) {
    paragraph += generateSentence();
  }

  return paragraph;
};

// Create paragraphs and return Magic Ipsum text block
export const composeMagicIpsum = (
  numberOfParagraphs: number,
  length: ParagraphLength,
  startWithMagic: boolean
): string[] => {
  let ipsumText = [];

  for (let i = 0; i < numberOfParagraphs; i++) {
    let currentParagraph = startWithMagic ? MAGIC_IPSUM_STARTER : '';

    if (i === 0 && startWithMagic) {
      const newParagraph = generateParagraph(length);
      currentParagraph +=
        newParagraph.charAt(0).toLowerCase() + newParagraph.substring(1);
      ipsumText.push(currentParagraph);
    } else {
      ipsumText.push(generateParagraph(length));
    }
  }

  return ipsumText;
};
