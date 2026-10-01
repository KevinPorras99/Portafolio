# Rebuild display copies without changing the original screenshots.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path $PSScriptRoot -Parent
$destination = Join-Path $projectRoot 'public/img/optimized'
New-Item -ItemType Directory -Force $destination | Out-Null
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
foreach ($name in 'RegistroDocente','PlanetExpress','MedControl','Muniticket','pokedex') {
    $source = [System.Drawing.Image]::FromFile((Join-Path $projectRoot "public/img/$name.png"))
    $scale = [Math]::Min(1.0, 960.0 / $source.Width)
    $width = [int]($source.Width * $scale)
    $height = [int]($source.Height * $scale)
    $bitmap = [System.Drawing.Bitmap]::new($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
    try {
        $graphics.Clear([System.Drawing.Color]::White)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.DrawImage($source, 0, 0, $width, $height)
        $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]85)
        $bitmap.Save((Join-Path $destination "$name.jpg"), $encoder, $parameters)
        Write-Output "$name : $width x $height"
    } finally {
        $parameters.Dispose()
        $graphics.Dispose()
        $bitmap.Dispose()
        $source.Dispose()
    }
}
