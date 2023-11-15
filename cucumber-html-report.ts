const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "reports",
  reportPath: "./reports/cucumber-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});
