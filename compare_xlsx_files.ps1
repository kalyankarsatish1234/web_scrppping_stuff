# Define the folder paths
$folderPath1 = "D:\scrapping\Ahmednagar\Urban-Dist1"
$folderPath2 = "D:\scrapping\Ahmednagar\Urban-Dist"
$outputFilePath = "D:\scrapping\Ahmednagar\missing_files_list.txt"

# Get all .xlsx files in both folders
$filesInFolder1 = Get-ChildItem -Path $folderPath1 -Recurse -Filter *.xlsx
$filesInFolder2 = Get-ChildItem -Path $folderPath2 -Recurse -Filter *.xlsx

# Create a list of file names for comparison
$filesInFolder1Names = $filesInFolder1.Name
$filesInFolder2Names = $filesInFolder2.Name

# Find files present in Folder1 but not in Folder2
$missingFiles = $filesInFolder1Names | Where-Object { $_ -notin $filesInFolder2Names }

# Save the list of missing files to a text file
$missingFiles | Out-File -FilePath $outputFilePath

# Output the result
Write-Output "The list of .xlsx files missing in Urban-Dist has been saved to: $outputFilePath"
