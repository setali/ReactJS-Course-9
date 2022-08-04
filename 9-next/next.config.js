const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      myName: phase === PHASE_DEVELOPMENT_SERVER ? 'Ali' : 'Qoli'
    }
  }
}
