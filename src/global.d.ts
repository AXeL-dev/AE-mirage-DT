import { MgFinder } from './app/model/mirageold/finder';

declare global {
  type ManifestName = 'manifest' | 'assetMap';

  interface Manifest {
    files: {
      [filename: string]: FileItem;
    };
  }

  interface FileItem {
    filename: string;
    version: string;
  }

  interface Window {
    mgFind: typeof MgFinder.prototype.mirageoldFinder;
  }
}
