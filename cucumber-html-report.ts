const report = require("multiple-cucumber-html-reporter");
report.generate({
  //jsonDir: "./",
  reportPath: "./cucumber-report.html",
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
