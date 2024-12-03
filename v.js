//village validation check misssing village and that village plot missing plot .
const fs = require('fs');

const villageList = [

];
const villageCodes = villageList.map(village => village.code);
const jsonFilePath = `Bhandara/Lakhandur/all_village_data_testing1_Lakhandur.json`;

function validateVillageData() {
    fs.readFile(jsonFilePath, 'utf8', (err, jsonData) => {
        if (err) {
            console.error("Error reading the JSON file:", err);
            return;
        }
        try {
            const villageData = JSON.parse(jsonData);
            const missedVillages = [];
            const missingDataVillages = [];
            villageCodes.forEach(villageCode => {
                if (!villageData[villageCode]) {
                    missedVillages.push(villageCode); 
                } else if (villageData[villageCode].length === 0) {
                    missingDataVillages.push(villageCode); 
                }
            });
            if (missedVillages.length > 0) {
                console.log("Missed Villages (no data found):", missedVillages);
            } else {
                console.log("All villages have data.");
            }
            if (missingDataVillages.length > 0) {
                console.log("Villages with missing plot data:", missingDataVillages);
            } else {
                console.log("All villages have plot data.");
            }
        } catch (parseError) {
            console.error("Error parsing the JSON data:", parseError);
        }
    });
}
validateVillageData();
