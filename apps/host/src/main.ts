// import('./bootstrap').catch((err) => console.error(err));
import { setRemoteDefinitions } from '@nx/angular/mf';

// NOTE: this is the key to make it work in AWS S3+CloudFront
// make sure to prefix with /host
// fetch('/module-federation.manifest.json') // for local development
fetch('/host/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));