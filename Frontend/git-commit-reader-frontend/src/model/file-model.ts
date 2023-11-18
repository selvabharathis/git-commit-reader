export class FileModel {
    sha: string = '';
    fileName: string = '';
    status: string = '';
    additions: number = 0;
    deletions: number = 0;
    changes: number = 0;
    blobUrl: string = '';
    rawUrl: string = '';
    contentsUrl: string = '';
    patch: string = '';
}