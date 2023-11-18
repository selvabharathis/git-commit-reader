import { Component, Input, OnInit } from '@angular/core';
import { GitHubCommitModel } from 'src/model/git-hub-commit-model';

@Component({
  selector: 'app-commit-reader',
  templateUrl: './commit-reader.component.html',
  styleUrls: ['./commit-reader.component.css']
})
export class CommitReaderComponent implements OnInit {

  @Input() commitModel: GitHubCommitModel = new GitHubCommitModel();

  constructor() { }

  ngOnInit(): void {
    console.log("Commit reader component");
    console.log(this.commitModel);
  }

}
