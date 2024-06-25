import * as fs from "fs";
import * as path from "path";
import { createObjectCsvWriter as createCsvWriter } from "csv-writer";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directory path you want to read
const directoryPath = path.resolve(__dirname, "./public/images/all");

// Output CSV file path
const outputCsvPath = path.resolve(__dirname, "./output.csv");

// Read directory contents
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory: " + err);
  }

  // Create CSV writer
  const csvWriter = createCsvWriter({
    path: outputCsvPath,
    header: [{ id: "fileName", title: "url" }],
  });

  // Map files to CSV format
  const records = files.map((file) => ({ fileName: file }));

  // Write records to CSV
  csvWriter
    .writeRecords(records)
    .then(() => {
      console.log("CSV file was written successfully");
    })
    .catch((error) => {
      console.error("Error writing CSV file:", error);
    });
});
