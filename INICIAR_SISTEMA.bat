@echo off
echo Iniciando Sistema SOTO del PRIOR...
echo.

:: 1. Iniciar App Ganadera (Puerto 3001)
echo Iniciando App Ganadera (Puerto 3001)...
start "App Ganadera" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\App control ganadero SOTOdelPRIOR" && npm run dev"

:: 2. Iniciar App Cocina (Puerto 3002)
echo Iniciando App Cocina (Puerto 3002)...
start "App Cocina" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\App cocina SOTOdelPRIOR" && npm run dev"

:: 3. Iniciar Motor API (Puerto 3004)
echo Iniciando Motor API (Puerto 3004)...
start "Motor API" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Motor reservas SOTOdelPRIOR\apps\api" && set PORT=3004 && npm run start:dev"

:: 4. Iniciar Motor Web (Puerto 3003)
echo Iniciando Motor Web (Puerto 3003)...
start "Motor Web" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Motor reservas SOTOdelPRIOR\apps\web" && npm run dev"

:: 5. Iniciar Servidor Principal / Dashboard (Puerto 3000)
echo Iniciando Servidor Principal (Puerto 3000)...
echo Este servidor se quedara abierto en esta ventana.
cd /d "c:\Users\Carlos\SOTOdelPRIOR\Servidor SOTOdelPRIOR"
npm run dev
