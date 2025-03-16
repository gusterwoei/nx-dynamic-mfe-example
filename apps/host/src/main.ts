// import('./bootstrap').catch((err) => console.error(err));
import { setRemoteDefinitions } from '@nx/angular/mf';

// NOTE: if you're hosting the module-federation.manifest.json inside a directory instead of the root folder in S3,
// make sure to prefix with /host, this is the key to make it work in AWS S3+CloudFront
// eg. fetch('/host/module-federation.manifest.json')
fetch('/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));