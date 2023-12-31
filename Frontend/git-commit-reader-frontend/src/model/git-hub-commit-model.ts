import { CommitModel } from "./commit-model";
import { FileModel } from "./file-model";
import { ParentModel } from "./parent-model";

export class GitHubCommitModel {
    sha: string = '';
    commit: CommitModel = new CommitModel();
    parents: ParentModel[] = [];
    files: FileModel[] = [];
}