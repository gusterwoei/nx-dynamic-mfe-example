npx nx build host --base-href=/host/
npx nx run-many -t build --exclude=host
aws s3 sync dist/apps/ s3://mfe-app-demo/ --delete
aws s3 cp dist/apps/host/module-federation.manifest.prod.json s3://mfe-app-demo/module-federation.manifest.json