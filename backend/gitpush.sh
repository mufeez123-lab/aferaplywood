#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./gitpush.sh \"Your commit message\""
  exit 1
fi

cd "$(dirname "$0")"

git add .
git commit -m "$1"
git push origin main

echo "Frontend changes pushed successfully!"
