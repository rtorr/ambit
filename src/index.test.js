/* eslint-disable */

import PropTypes from 'prop-types';
import sides, { registerInterface, programs } from './index';

let state = 0;
let unregister;
function updateState(n) {
  state = state += n ? n.number : 1;
  return state;
}

beforeEach(() => {
  state = 0;
});

afterEach(() => {
  if (unregister) {
    unregister();
  }
});

test('registerInterface', () => {
  unregister = registerInterface(
    {
      name: 'program1',
      program: updateState,
      types: { number: PropTypes.number.isRequired },
      description: 'this is a test program'
    },
    PropTypes
  );
  expect(programs['program1'].name).toBe('program1');
  unregister();
  expect(programs['program1']).toBe(undefined);
});

test('sides', () => {
  unregister = registerInterface(
    {
      name: 'program1',
      program: updateState,
      types: { number: PropTypes.number.isRequired },
      description: 'this is a test program'
    },
    PropTypes
  );
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  expect(state).toBe(12);
});

test('wrong types', () => {
  unregister = registerInterface(
    {
      name: 'program1',
      program: updateState,
      types: { number: PropTypes.number.isRequired },
      description: 'this is a test program'
    },
    PropTypes
  );
  sides('program1', { number: '1' });
  sides('program1', { number: false });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  sides('program1', { number: 2 });
  expect(state).toBe('01false2222');
});
