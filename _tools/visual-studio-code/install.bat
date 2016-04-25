@echo off

set LANGUAGES=(markdown)

for %%i in %LANGUAGES% do (
    copy /-Y %%i.json %APPDATA%\Code\User\snippets\%%i.json
)