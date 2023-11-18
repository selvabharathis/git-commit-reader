import { UserCommitModel } from "./user-commit-model";

export class CommitModel {
    author: UserCommitModel = new UserCommitModel();
    committer: UserCommitModel = new UserCommitModel();
    message: string = '';
}