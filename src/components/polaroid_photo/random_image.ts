import AnimalKingdom from './img/animal-kingdom.jpg';
import DCA from './img/dca.jpg';
import Epcot from './img/epcot.jpg';
import HollywoodStudios from './img/hollywood-studios.jpg';
import MagicKingdom from './img/magic-kingdom.jpg';

import { getRandomInt } from '../../utils/generator';

const IMAGES = [
  {
    src: AnimalKingdom,
    alt: "Image of the Mount Everest roller coaster from Disney's Animal Kingdom",
    tag: 'The safari is calling your name!',
  },
  {
    src: DCA,
    alt: "Image of the Pixar Pal-A-Round at Disney's California Adventure",
    tag: 'Ready for a new adventure!',
  },
  {
    src: Epcot,
    alt: 'Image of Spaceship Earth at EPCOT in Walt Disney World',
    tag: 'Another journey around the world!',
  },
  {
    src: HollywoodStudios,
    alt: "Image of the Hollywood Tower Hotel in Disney's Hollywood Studios",
    tag: 'Stepping into the movies!',
  },
  {
    src: MagicKingdom,
    alt: "Image of vibrant fireworks over Cinderella castle Walt Disney World's Magic Kingdom",
    tag: 'Where the magic happens!',
  },
];

export const getRandomImage = () => {
  return IMAGES[getRandomInt(IMAGES.length)];
};
