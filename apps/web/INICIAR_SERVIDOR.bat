@echo off
cd /d "%~dp0"
echo ===================================================
echo   INICIANDO SERVIDOR SOTO
echo ===================================================
echo.
echo Espere un momento mientras el servidor arranca...
echo Cuando vea "Ready in ...", el servidor estara listo.
echo.
echo Puede acceder en: http://localhost:3000
echo.

npm run dev

echo.
echo El servidor se ha detenido.
pause
