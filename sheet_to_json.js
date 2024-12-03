const xlsx = require('xlsx');
const fs = require('fs');

// Path to your Excel file
const filePath = './Ratnagiri.xlsx';

// Read the Excel file
const workbook = xlsx.readFile(filePath);

// Get the first sheet
const sheetName = workbook.SheetNames[2];
const sheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON format
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

let jsonData = [];

// Iterate over the rows (skipping the first header row)
for (let i = 1; i < data.length; i++) {
    let row = data[i];

    // Build the output object for each row
    let entry = {
        District: row[0],
        Taluka: row[1],
        Code: row[2],
        VillageName: row[3],
        PlotTotalCountWebsite: row[4]
    };

    jsonData.push(entry);
}

// Save the JSON data to a file
const outputFilePath = './output1.json';
fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2));

console.log('JSON data has been saved to output.json');
