@echo off

if "%1"=="build" (
  ng build --prod
  docker build -t kp_port:%2 .
) else if "%1"=="run" (
  docker run -p 80:80 kp_port:%2
) else (
  echo "Invalid argument. Please provide either 'build' or 'run'."
)