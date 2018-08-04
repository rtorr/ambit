# sides

small (2.29 KB) "safe" program interfaces for JavaScript. Yes, safe is in quotes.

## Use

```bash
yarn add sides
```

some program or code to create an interface for
```javascript
import { registerInterface } from 'sides';
import PropTypes from 'prop-types';

let count = 0;
function countSomeStuff(n) {
  count = count += n ? n.number : 1;
  return count;
}

const unregister = registerInterface(
  {
    name: 'program1',
    program: countSomeStuff,
    types: { number: PropTypes.number.isRequired },
    description: 'this is a test program'
  },
  PropTypes
);
```

some other place to interface with that program

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
