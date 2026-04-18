@echo off
echo Starting local web server for Kesh Sakhi project...
echo.
echo If Python is not installed, please install it from: https://www.python.org/downloads/
echo.
echo Opening browser to test the contact form...
start http://localhost:8000/contact.html
echo.
echo Starting server on port 8000...
python -m http.server 8000
pause