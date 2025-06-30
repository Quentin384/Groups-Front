@echo off
echo Running tests for UserDashboardComponent and AdminDashboardComponent...
echo.

cd /d "%~dp0"
echo [INFO] Using custom Karma configuration to prevent page reloads and Chrome crashes
call npm test -- --testPathPattern="src/app/pages/dashboard/(user|admin)-dashboard/.*\.spec\.ts"

echo.
echo Tests completed.
echo.
echo If you encounter any issues:
echo 1. Check that window.location is not being directly modified in tests
echo 2. Verify that all spies are properly cleaned up in afterAll
echo 3. Make sure the karma.conf.js settings are appropriate for your environment
echo.
