# Clean all redundant files of all types, keep only the latest, and rename it

function Clean-AllRedundantFiles($folderPath) {
    $dirs = Get-ChildItem -Path $folderPath -Directory -Recurse
    $dirs = @($folderPath) + $dirs.FullName  # Include the root folder itself

    foreach ($dir in $dirs) {
        # Get all files with a timestamp pattern before the extension
        $files = Get-ChildItem -Path $dir -File | Where-Object { $_.Name -match "(.+)_([0-9]{8,})\.(.+)$" }
        # Group by base name (without timestamp and extension)
        $grouped = $files | Group-Object { 
            if ($_.Name -match "(.+)_([0-9]{8,})\.(.+)$") { $matches[1] + "." + $matches[3] } else { $_.Name }
        }

        foreach ($group in $grouped) {
            # Find the latest file by timestamp
            $latest = $group.Group | Sort-Object {
                if ($_.Name -match "(.+)_([0-9]{8,})\.(.+)$") { [long]$matches[2] } else { 0 }
            } -Descending | Select-Object -First 1

            foreach ($file in $group.Group) {
                if ($file.FullName -ne $latest.FullName) {
                    Remove-Item $file.FullName -Force
                    Write-Host "Deleted $($file.FullName)"
                }
            }

            # Rename the latest file to remove the timestamp
            if ($latest.Name -match "(.+)_([0-9]{8,})\.(.+)$") {
                $newName = "$($matches[1]).$($matches[3])"
                $newPath = Join-Path $latest.DirectoryName $newName
                if ($latest.FullName -ne $newPath) {
                    Rename-Item $latest.FullName -NewName $newName -Force
                    Write-Host "Renamed $($latest.FullName) to $newName"
                }
            }
        }
    }
}

# Clean all folders in Chatty and api
Clean-AllRedundantFiles ".\Chatty"
Clean-AllRedundantFiles ".\api"