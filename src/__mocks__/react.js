// https://gist.github.com/gaearon/9a4d54653ae9c50af6c54b4e0e56b583
// https://stackoverflow.com/questions/43604058/requestanimationframe-polyfill-error-in-jest-tests

const react = require('react');
// Resolution for requestAnimationFrame not supported in jest error :
// https://github.com/facebook/react/issues/9102#issuecomment-283873039
global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

module.exports = react;
