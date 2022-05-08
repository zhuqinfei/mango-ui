rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:zhuqinfei/mango-ui-website.git &&
git push -f origin master &&
git push -u origin master &&
cd -
echo https://zhuqinfei.github.io/mango-ui-website/index.html