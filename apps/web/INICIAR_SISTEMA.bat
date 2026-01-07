@echo off
chcp 65001 >nul
echo ========================================================
echo      SISTEMA SOTO DEL PRIOR - INICIO AUTOMATICO
echo ========================================================
echo.
echo ========================================================
echo [0/7] INICIANDO INFRAESTRUCTURA DOCKER (Traefik + Ganaderia)
echo ========================================================
echo Iniciando Proxy (Traefik)...
cd /d "c:\Users\Carlos\SOTOdelPRIOR\Infraestructure\proxy"
docker compose up -d
echo Iniciando App Ganadera (Nueva Version)...
cd /d "c:\Users\Carlos\SOTOdelPRIOR\Infraestructure\apps\ganaderia-soto"
docker compose up -d
echo Infraestructura lista.
echo.

:: 1. MOTOR DE RESERVAS (API) - Puerto 4000
echo [1/5] Iniciando Motor API (Backend) en Puerto 4000...
start "Motor API (:4000)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Motor reservas SOTOdelPRIOR\apps\api" && npm run start:dev"

:: 2. MOTOR DE RESERVAS (WEB) - Puerto 3001
echo [2/5] Iniciando Motor Web (Widget) en Puerto 3001...
start "Motor Web (:3001)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Motor reservas SOTOdelPRIOR\apps\web" && npm run dev"

:: 3. APP GANADERA - Puerto 3003
echo [3/5] Iniciando App Ganadera en Puerto 3003...
start "App Ganadera (:3003)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\App control ganadero SOTOdelPRIOR" && npm run dev -- -p 3003"

:: 4. APP COCINA - Puerto 3002
echo [4/5] Iniciando App Cocina en Puerto 3002...
start "App Cocina (:3002)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\App cocina SOTOdelPRIOR" && npm run dev"

:: 5. CRM & MARKETING - Puerto 3004
echo [5/6] Iniciando CRM Marketing en Puerto 3004...
start "CRM Marketing (:3004)" cmd /k "cd /d "c:\Users\Carlos\SOTOdelPRIOR\Campañas marketing SOTOdelPRIOR" && npm run dev"

:: 6. SERVIDOR CENTRAL (HUB) - Puerto 3000
echo [6/6] Iniciando Servidor Central (Hub) en Puerto 3000...
echo.
echo Todas las aplicaciones han sido lanzadas.
echo.
echo Cerrar esta ventana apagara el Servidor Central.
echo.

cd /d "c:\Users\Carlos\SOTOdelPRIOR\Servidor SOTOdelPRIOR\apps\web"
npm run dev
