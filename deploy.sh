# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd .svelte-kit

git init
git checkout -b github-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:r-argentina-programa/shotstack-merge-fields.git github-pages:gh-pages

cd -