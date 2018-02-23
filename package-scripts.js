module.exports = {
  scripts: {
    default: 'nps',
    readme: 'lerna exec node ../../scripts/readme.js',
    publish: 'nps readme && lerna exec vsce publish',
    version: {
      major: 'lerna exec npm version minor',
      minor: 'lerna exec npm version major',
      patch: 'lerna exec npm version patch',
    },
  },
};
