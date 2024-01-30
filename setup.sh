#!/bin/bash

installComposerDependencies() {
    echo "Installing composer dependencies..."
    exec composer install
}

installNpmDependencies() {
    echo "Installing npm dependencies..."
    exec npm install
}

buildAssets() {
    echo "Building assets..."
    exec npm run build
}

startServer() {
    echo "Starting server..."
    exec symfony server:start
}

installComposerDependencies

installNpmDependencies

buildAssets

startServer