#!/bin/bash

echo "Installing composer dependencies..."
composer install

echo "Installing npm dependencies..."
npm install

echo "Building assets..."
npm run build

echo "Starting server..."
symfony server:start