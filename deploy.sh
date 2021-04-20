!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd documents/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress'

# https://<USERNAME>.github.io 에 배포하는 경우
# git push -f https://github.com/<USERNAME>/<USERNAME>.github.io.git master

# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우
# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

git push -f https://github.com/ddojai/TIL.git master:gh-pages


cd -
