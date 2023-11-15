import { Formatter } from "cucumber-json-report-formatter";

async function reportCreate() {
  const formatter = new Formatter();
  const sourceFile = "./jsonlogs/messages.ndjson";
  const outputFile = "./reports/cucumber-report.json";
  await formatter.parseCucumberJson(sourceFile, outputFile);
}

reportCreate();
