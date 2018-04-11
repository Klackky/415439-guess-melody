import {assert} from 'chai';
import {calcPoints} from '../utils/calc-points';
const slowAndCorrectAnswers = [
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 50
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 60
  }
];
const negativeResult = [
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: false,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: false,
    time: 50
  },
  {
    answer: false,
    time: 40
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: false,
    time: 60
  },
  {
    answer: false,
    time: 60
  }
];
const fastNoMistakesResult = [
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 10
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 10
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 20
  }
];
const oneMistakeSlowResult = [
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 50
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 50
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: false,
    time: 60
  }
];
const randomResult = [
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 50
  },
  {
    answer: true,
    time: 60
  },
  {
    answer: true,
    time: 10
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 10
  },
  {
    answer: true,
    time: 20
  },
  {
    answer: true,
    time: 40
  },
  {
    answer: true,
    time: 10
  },
  {
    answer: false,
    time: 10
  },
];
describe(`Check if player points calculated correctly`, () => {

  it(`should calculate points correctly`, () => {
    assert.equal(calcPoints(negativeResult, 0), -1);
    assert.equal(calcPoints(slowAndCorrectAnswers, 3), 10);
    assert.equal(calcPoints(oneMistakeSlowResult, 2), 8);
    assert.equal(calcPoints(fastNoMistakesResult, 3), 20);
    assert.equal(calcPoints(randomResult, 2), 14);
    assert.equal(calcPoints(randomResult, 0), -1);
  });

});
