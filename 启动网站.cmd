@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

set "LOCAL_NODE=%~dp0tools\node.exe"
if exist "%LOCAL_NODE%" (
  set "NODE_CMD=%LOCAL_NODE%"
  echo 使用文件夹内置 Node.js 运行时。
) else (
  where node >nul 2>nul
  if errorlevel 1 (
    echo.
    echo 未检测到内置或系统 Node.js，无法启动本地预览。
    echo 请确认 tools\node.exe 未被删除，或安装 Node.js LTS 后重试。
    echo.
    pause
    exit /b 1
  )
  set "NODE_CMD=node"
  echo 使用系统 Node.js 运行时。
)

echo.
echo 正在启动邓洁产品经理作品集...
echo 浏览器访问：http://localhost:8080
echo 按 Ctrl + C 可停止服务。
echo.
"%NODE_CMD%" server.js
pause
