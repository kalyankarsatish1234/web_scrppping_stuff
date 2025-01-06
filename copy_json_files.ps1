# Define the source and target folder paths
$sourceFolderPath = "D:\scrapping\Ahmednagar\Urban"
$targetFolderPath = "D:\scrapping\Ahmednagar\Urban_json"

# Create the target folder if it doesn't exist
if (-not (Test-Path -Path $targetFolderPath)) {
    New-Item -ItemType Directory -Path $targetFolderPath
}

# Get all .json files in the source folder and subfolders
$jsonFiles = Get-ChildItem -Path $sourceFolderPath -Recurse -Filter *.json

# Copy each .json file to the target folder
foreach ($jsonFile in $jsonFiles) {
    Copy-Item -Path $jsonFile.FullName -Destination $targetFolderPath
}

# Output the result
Write-Output "All .json files have been copied to the folder: $targetFolderPath"
