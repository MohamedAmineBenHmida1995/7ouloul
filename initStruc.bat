@echo off
REM Crée l’arborescence du projet carpark-app

REM Backend - Quarkus
mkdir carpark-app\backend\src\main\java\org\carpark\model
mkdir carpark-app\backend\src\main\java\org\carpark\resource
mkdir carpark-app\backend\src\main\java\org\carpark\service

REM Frontend - Angular
mkdir carpark-app\frontend\src\app\auth
mkdir carpark-app\frontend\src\app\car
mkdir carpark-app\frontend\src\app\services

REM Keycloak config
mkdir carpark-app\keycloak

REM Database init
mkdir carpark-app\db

echo Arborescence créée avec succès.
pause
