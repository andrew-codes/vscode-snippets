module.exports = {
  scripts: {
    default: 'nps',
    readme: 'lerna exec node ../../scripts/readme.js',
    publish: 'nps readme && lerna exec vsce publish',
  },
};
