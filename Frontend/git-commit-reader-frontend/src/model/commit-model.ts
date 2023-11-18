import { UserCommitModel } from "./user-commit-model";

export class CommitModel {
    author: UserCommitModel = new UserCommitModel();
    commiter: UserCommitModel = new UserCommitModel();
    message: string = '';
}