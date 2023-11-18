export class FileModel {
    sha: string = '';
    filename: string = '';
    status: string = '';
    additions: number = 0;
    deletions: number = 0;
    changes: number = 0;
    blob_url: string = '';
    raw_url: string = '';
    contents_url: string = '';
    patch: string = '';
}