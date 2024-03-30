const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayPending: false,
      displayDuration: true,
    },
  })
)