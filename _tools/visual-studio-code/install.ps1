$Source = Join-Path -Path (Split-Path $MyInvocation.MyCommand.Path) -ChildPath *.json

if ($IsOSX) {
    Copy-Item -Path $Source -Destination "$HOME/Library/Application Support/Code/User/snippets/" -Force
} elseif ($IsWindows) {
    Copy-Item -Path $Source -Destination  $env:APPDATA\Code\User\snippets\ -Force
}