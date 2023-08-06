# Service for Script
An one-line tool to wrap a simple script or command into an HTTP server.

# Install
pip3 install s4s

# Usage
s4s --help

# Examples
s4s -p 7777 'echo $text'
curl -F text=hello http://127.0.0.1:7777

s4s -p 7777 nl
curl -F file=@/path/to/file http://127.0.0.1:7777



