#!/bin/bash
echo "Building Go project..."
cd go_project || exit
go build -o main .
echo "Go project built successfully."
