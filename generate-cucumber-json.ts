import { Formatter } from "cucumber-json-report-formatter";

async function test() {
  const formatter = new Formatter();
  const sourceFile = "./jsonlogs/messages.ndjson";
  const outputFile = "./cypress/reports/cucumber-report.json";
  await formatter.parseCucumberJson(sourceFile, outputFile);
}

test();
