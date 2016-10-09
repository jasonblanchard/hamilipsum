import capitalize from 'lodash.capitalize';
import random from 'lodash.random';
import source from '../text/source.json';
import times from 'lodash.times';
import prepositions from 'prepositions';

function randomIndex() {
  const index = random(0, source.length);
  return index;
}

function pickWords(amount) {
  // Changes the number of words that stay strung together https://www.youtube.com/watch?v=3pRR8OK4UfE
  const orderOfApproximation = 7;
  const iterations = amount < orderOfApproximation ? 1 : Math.ceil(amount / orderOfApproximation);
  const output = times(iterations, () => {
    return randomIndex();
  }).reduce((accum, i) => [...accum, ...source.slice(i, i + orderOfApproximation)], [])
    .slice(0, amount);

  const lastWord = output[output.length - 1];
  // Recursively re-pick last word so it doesn't end in a preposition or other awkward word.
  if ([...prepositions, 'the', 'and'].includes(lastWord)) {
    output[output.length - 1] = pickWords(1);
  }
  return output;
}

function generateWords(amount) {
  const output = pickWords(amount);
  return `${capitalize(output.join(' ')).replace(/^i\s|\si\s|\si$/g, ' I ').replace(/america/g, 'America')}.`;
}

function generateSentences(amount) {
  return times(amount, () => {
    const sentenceLength = random(5, 20);
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
