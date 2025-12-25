@echo off
echo ========================================================
echo      SISTEMA SOTO DEL PRIOR - INICIO AUTOMATICO
echo ========================================================
echo.

:: 1. MOTOR DE RESERVAS (API) - Puerto 4000
echo [1/3] Iniciando Motor API (Backend) en Puerto 4000...
start "Motor API (:4000)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Motor reservas SOTOdelPRIOR\apps\api" && npm run start:dev"

:: 2. MOTOR DE RESERVAS (WEB) - Puerto 3001
echo [2/3] Iniciando Motor Web (Widget) en Puerto 3001...
start "Motor Web (:3001)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Motor reservas SOTOdelPRIOR\apps\web" && npm run dev"

:: 3. SERVIDOR CENTRAL (HUB) - Puerto 3000
echo [3/3] Iniciando Servidor Central (Hub) en Puerto 3000...
echo.
echo NOTA: Las App Ganadera (3003) y Cocina (3002) estan pendientes.
echo.
echo Cerrar esta ventana apagara el Servidor Central.
echo.

cd /d "c:\Users\Carlos\SOTOdelPRIOR\Servidor SOTOdelPRIOR"
npm run dev
