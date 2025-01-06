# Define the folder path
$folderPath = "D:\scrapping\Ahmednagar\Urban-Dist"

# Get all .json files in the folder and subfolders
$jsonFiles = Get-ChildItem -Path $folderPath -Recurse -Filter *.json

# Get all .xlsx files in the folder and subfolders
$xlsxFiles = Get-ChildItem -Path $folderPath -Recurse -Filter *.xlsx

# Create a list to store .json files that haven't been converted
$notConvertedJsonFiles = @()

# Check which .json files haven't been converted to .xlsx
foreach ($jsonFile in $jsonFiles) {
    $xlsxFile = [System.IO.Path]::ChangeExtension($jsonFile.FullName, ".xlsx")
    if (-not (Test-Path -Path $xlsxFile)) {
        $notConvertedJsonFiles += $jsonFile.FullName
    }
}

# Output the list of .json files that haven't been converted
Write-Output "List of .json files that haven't been converted to .xlsx:"
$notConvertedJsonFiles
