@echo off
echo git adding
git add .
echo now starting commit
set /P commit=Enter your Commit Description :- 
git commit -m "%commit%"
echo git pusshing
git push

pause
