@echo off
title Presentation Server
echo ========================================================
echo DANG KHOI DONG BAI THUET TRINH - AI KINH DOANH SO
echo ========================================================
echo.
echo Vui long doi vai giay, trinh duyet cua ban se tu dong mo len...
echo (Khong tat cua so nay trong suot qua trinh thuyet trinh)
echo.
cd /d "%~dp0"
call npm run dev -- --open
