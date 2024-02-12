#!/bin/bash

GITHUB_USER=matthijskamstra
PROJECT=rawevent

# Build the project first.
# ng build --configuration production --deploy-url=https://$GITHUB_USER.github.io/$PROJECT/ --base-href=/$PROJECT/
ng build --configuration production --base-href /$PROJECT/
# ng build --configuration production --base-href https://$GITHUB_USER.github.io/$PROJECT/

# Instead of copying index.html, echo and cat the content so that `YAML front matter` was added.
echo "---
permalink: /404.html
---
" > "./dist/$PROJECT/404.html"
cat "./dist/$PROJECT/index.html" >> "./dist/$PROJECT/404.html"
