if type netlify-cli &> /dev/null; then
    npm i -g netlify-cli
fi
npm i
git update-index --assume-unchanged .env
