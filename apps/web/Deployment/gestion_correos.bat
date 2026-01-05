@echo off
REM Script para gestionar correos en Docker Mailserver (Windows)
REM Uso: gestion_correos.bat

echo -----------------------------------------
echo   GESTOR DE CORREO (Docker Mailserver)
echo -----------------------------------------
echo 1. Listar cuentas
echo 2. Crear nueva cuenta
echo 3. Borrar cuenta
echo 4. Cambiar contrasena
echo.
set /p op="Elige una opcion (1-4): "

if "%op%"=="1" (
    docker exec -ti soto_mailserver setup email list
)
if "%op%"=="2" (
    set /p email="Introduce el email completo (ej: admin@jordazola.com): "
    set /p pass="Introduce la contrasena: "
    docker exec -ti soto_mailserver setup email add %email% %pass%
)
if "%op%"=="3" (
    set /p email="Email a borrar: "
    docker exec -ti soto_mailserver setup email del %email%
)
if "%op%"=="4" (
    set /p email="Email: "
    set /p pass="Nueva contrasena: "
    docker exec -ti soto_mailserver setup email update %email% %pass%
)

pause
