# sides

A small (2.29 KB) "safe" program interfaces for JavaScript. Yes, safe is in quotes.

## Use

```bash
yarn add sides
```

```javascript
import { registerInterface, programs } from 'sides';
import PropTypes from 'prop-types';

let state = 0;
function updateState(n) {
  state = state += n ? n.number : 1;
  return state;
}

const unregister = registerInterface(
  {
    name: 'program1',
    program: updateState,
    types: { number: PropTypes.number.isRequired },
    description: 'this is a test program'
  },
  PropTypes
);
```

some other place to use this program

```javascript
import sides from 'sides';

sides('program1', { number: 2 });

// Throw a nice warning
sides('program1', { number: '1' });
// -> Warning: Failed program type: Invalid program type `number` of type `string` supplied to `program1`, expected `number`.
```

## Develop

```bash
git clone git@github.com:rtorr/sides.git
yarn install
yarn start
```
