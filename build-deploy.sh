nx build host --base-href=/host/
nx run-many -t build --exclude=host
aws s3 sync dist/apps/ s3://mfe-app-demo/ --delete