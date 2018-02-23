module.exports = {
  scripts: {
    default: 'nps',
    readme: 'lerna exec node ../../scripts/readme.js',
    publish: 'nps readme && lerna exec vsce publish',
    version: {
      major: 'lerna exec npm version major',
      minor: 'lerna exec npm version minor',
      patch: 'lerna exec npm version patch',
    },
  },
};
