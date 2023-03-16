# build
npm run build

# save the latest commit hash as a string
LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

# navigate into the build output directory
cd dist

# if you're deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy (commit: $COMMIT)"

# if you're using SSH key authentication
# git push -f git@github.com:<USER-NAME>/<REPO-NAME>.git master:custom-branch

# if you're using HTTPS/2FA authentication
# git push -f https://github.com/<USER-NAME>/<REPO-NAME>.git master:custom-branch
git push -f https://github.com/danielmen-mx/fireworks.git master:production-branch

cd ..