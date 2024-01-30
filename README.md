This is built in [Symfony](https://symfony.com/) with frontend components in [React](https://react.dev/). 

**This requires Composer, Node and NPM to run**
Steps to install Composer: [https://getcomposer.org/download/](https://getcomposer.org/download/)
Steps to install NPM/Node: [https://nodejs.org/en/download](https://nodejs.org/en/download)

__Symfony CLI is also needed to run the setup.sh script, and recommended for this project:__
Steps to install Symfony CLI: [https://symfony.com/download](https://symfony.com/download)

## Getting Started

1. Download/Clone this Git Repo
2. On terminal/command line open the directory where you have downloaded/unzipped the repo to
3. Run the following command `sh setup.sh` 

The final step runs the following commands automatically:
- `composer install` to install Composer dependencies
- `npm install` to install Node dependencies
- `npm run build` to compile JavaScript/React components into app.js
- `symfony server:start` to start the Symfony application on [http://127.0.0.1:8000](http://127.0.0.1:8000)