@echo off
echo Starting local web server for Kesh Sakhi website...
echo.
echo The website will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.

cd /d "d:\Student Projects\DMIMS\Bhavana\Project"

REM Try Python 3 first
python -m http.server 8000 2>nul
if %errorlevel% neq 0 (
    REM Try Python 2 if Python 3 fails
    python -m SimpleHTTPServer 8000 2>nul
    if %errorlevel% neq 0 (
        REM Try Node.js if Python fails
        npx http-server -p 8000 -c-1 2>nul
        if %errorlevel% neq 0 (
            echo Error: Could not start web server.
            echo Please install Python or Node.js, or use an alternative web server.
            pause
        )
    )
)