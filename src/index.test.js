/* eslint-disable */

import PropTypes from 'prop-types';
import ambit, { registerInterface, programs } from './index';

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

test('ambit', () => {
  unregister = registerInterface(
    {
      name: 'program1',
      program: updateState,
      types: { number: PropTypes.number.isRequired },
      description: 'this is a test program'
    },
    PropTypes
  );
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
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
  ambit('program1', { number: '1' });
  ambit('program1', { number: false });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  ambit('program1', { number: 2 });
  expect(state).toBe('01false2222');
});
