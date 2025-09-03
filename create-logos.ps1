# PowerShell script to download technology logos as PNG files

$logoDir = "c:\Users\Elisha Marigmen\Desktop\jk-innovative\public\logos"
Set-Location $logoDir

# Create directory if it doesn't exist
if (!(Test-Path $logoDir)) {
    New-Item -ItemType Directory -Path $logoDir -Force
}

# Technology logos URLs (PNG format)
$logos = @{
    "react.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
    "nodejs.png" = "https://nodejs.org/static/images/logo.svg"
    "typescript.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
    "javascript.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
    "python.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png"
    "php.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/512px-PHP-logo.svg.png"
    "java.png" = "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/512px-Java_programming_language_logo.svg.png"
    "csharp.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/512px-C_Sharp_logo.svg.png"
    "nextjs.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/512px-Nextjs-logo.svg.png"
    "vuejs.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
    "angular.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png"
    "mongodb.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
    "postgresql.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/512px-Postgresql_elephant.svg.png"
    "mysql.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/512px-MySQL_textlogo.svg.png"
    "docker.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/512px-Docker_%28container_engine%29_logo.svg.png"
    "git.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"
    "aws.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png"
    "azure.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/512px-Microsoft_Azure.svg.png"
    "flutter.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/512px-Google-flutter-logo.png"
}

# Download each logo
foreach ($logo in $logos.GetEnumerator()) {
    try {
        Write-Host "Downloading $($logo.Key)..."
        Invoke-WebRequest -Uri $logo.Value -OutFile $logo.Key -ErrorAction Stop
        Write-Host "Downloaded $($logo.Key)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($logo.Key): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Logo download complete"
