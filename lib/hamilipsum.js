import capitalize from 'lodash.capitalize';
import random from 'lodash.random';
import source from '../text/source.json';
import times from 'lodash.times';

function randomIndex() {
  return random(0, source.length);
}

function generateWords(amount) {
  const output = times(amount, () => {
    return randomIndex();
  }).map(i => source[i]).join(' ');

  return `${capitalize(output)}.`;
}

function generateSentences(amount) {
  return times(amount, () => {
    const sentenceLength = random(5, 10);
    return generateWords(sentenceLength);
  }).join(' ');
}

function generateParagraph(amount) {
  return times(amount, () => {
    const paragraphLength = random(3, 5);
    return generateSentences(paragraphLength);
  }).join('\n\n');
}

export default {
  generate(amount, unit) {
    let output;

    switch (unit) {
      case 'word':
        output = generateWords(amount);
        break;
      case 'sentence':
        output = generateSentences(amount);
        break;
      case 'paragraph':
        output = generateParagraph(amount);
        break;
      default:
        break;
    }

    return output;
  },
};
