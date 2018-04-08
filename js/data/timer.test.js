import {assert} from 'chai';
import {createTimer} from '../utils/create-timer';
describe(`Check if timer works correctly`, () => {

  it(`should check if tick returns time decreased by one second`, () => {
    const timer = createTimer(5);
    assert.equal(timer.tick().endtime, 4);
    assert.equal(timer.tick().endtime, 3);
    assert.equal(timer.tick().endtime, 2);
    assert.equal(timer.tick().endtime, 1);
    assert.equal(timer.tick().endtime, 0);
  });

  it(`should check if time is over`, () => {
    const timer = createTimer(0);
    assert.equal(timer.tick(), `Время вышло`);
  });

  it(`time can not be negative`, () => {
    const timer = createTimer(-1);
    assert.equal(timer.tick(), false);
  });
});
