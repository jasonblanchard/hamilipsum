import capitalize from 'lodash.capitalize';
import random from 'lodash.random';
import source from '../text/source.json';
import times from 'lodash.times';

function randomIndex() {
  const index = random(0, source.length);
  return index;
}

function generateWords(amount) {
  const output = times(amount, () => {
    return randomIndex();
  }).map(i => source[i]).join(' ');

  return `${capitalize(output).replace(/^i\s|\si\s|\si$/g, ' I ').replace(/america/g, 'America')}.`;
}

function generateSentences(amount) {
  return times(amount, () => {
    const sentenceLength = random(5, 10);
    return generateWords(sentenceLength);
  }).join(' ');
}

function generateParagraph(amount) {
  return times(amount, () => {
    const paragraphLength = random(3, 10);
    return `${generateSentences(paragraphLength)}\n\n`;
  }).join('');
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
