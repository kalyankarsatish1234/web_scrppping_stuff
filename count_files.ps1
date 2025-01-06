# Define the folder path
$folderPath = "D:\scrapping\Ahmednagar\Urban-Dist"

# Get all .json files in the folder and subfolders
$jsonFiles = Get-ChildItem -Path $folderPath -Recurse -Filter *.json

# Count the number of .json files
$jsonFileCount = $jsonFiles.Count

# Get all .xlsx files in the folder and subfolders
$xlsxFiles = Get-ChildItem -Path $folderPath -Recurse -Filter *.xlsx

# Count the number of .xlsx files
$xlsxFileCount = $xlsxFiles.Count

# Output the result
Write-Output "Total number of .json files: $jsonFileCount"
Write-Output "Total number of .xlsx files: $xlsxFileCount"
