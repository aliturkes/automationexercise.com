cd b2bdevice
git reset --hard 
git pull
yarn
cd client
npm i
npm run build
rm live -rf
mv build live