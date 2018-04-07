import {assert} from 'chai';
import {checkAnswers} from '../utils/calc-points';
const slowAndCorrectAnswersExample = [true, 0.45, true, 0.60, true, 0.70, true, 0.80, true, 0.90, true, 1.00, true, 1.10, true, 1.20, true, 1.30, true, 1.40];
const negativeResult = [false, 0.45, false, 0.50, false, 0.50, true, 0.40, false, 0.50, false, 0.45, false, 0.50, false, 0.50, true, 0.40, false, 0.50];
const fastNoMistakesResult = [true, 0.25, true, 0.20, true, 0.20, true, 0.10, true, 0.10, true, 0.15, true, 0.15, true, 0.10, true, 0.10, true, 0.10];
const oneMistakeSlowResult = [true, 0.45, true, 0.60, true, 0.70, true, 0.80, true, 0.90, true, 1.00, true, 1.10, true, 1.20, true, 1.30, false, 1.40, true, 1.20];
const randomResult = [true, 0.25, true, 0.20, true, 0.50, true, 0.10, true, 0.60, true, 0.15, true, 0.15, true, 0.60, true, 0.60, true, 0.10, false, 0.20];
describe(`Check if player points calculated correctly`, () => {

  it(`should calculate points correctly`, () => {
    assert.equal(checkAnswers(negativeResult, 0), -1);
    assert.equal(checkAnswers(slowAndCorrectAnswersExample, 3), 10);
    assert.equal(checkAnswers(slowAndCorrectAnswersExample, 2), 8);
    assert.equal(checkAnswers(oneMistakeSlowResult, 0), 4);
    assert.equal(checkAnswers(oneMistakeSlowResult, 2), 8);
    assert.equal(checkAnswers(fastNoMistakesResult, 3), 20);
    assert.equal(checkAnswers(fastNoMistakesResult, 2), 18);
    assert.equal(checkAnswers(fastNoMistakesResult, 2), 18);
    assert.equal(checkAnswers(randomResult, 0), 10);
  });

});
