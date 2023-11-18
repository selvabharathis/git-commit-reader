import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GitHubCommitModel } from 'src/model/git-hub-commit-model';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-commit-reader-frontend';
  isFormSubmitted: boolean = false;
  gitHubForm: FormGroup;
  commitModel: GitHubCommitModel = new GitHubCommitModel();

  constructor(private formbuilder: FormBuilder,private apiService: ApiService) { 
    this.gitHubForm = this.formbuilder.group({
      owner: ["", Validators.required],
      repository: ["", Validators.required],
      commitSha: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if(this.gitHubForm.invalid) {
      return;
    }

    this.apiService.getCommitDetails(this.gitHubForm.controls['owner'].value, this.gitHubForm.controls['repository'].value, this.gitHubForm.controls['commitSha'].value)
                   .subscribe(commitDetails => {
                        console.log(commitDetails);
                        this.commitModel = commitDetails;
                        this.isFormSubmitted = true;
                    }, errMessage => {
                        console.log(errMessage);
                        this.isFormSubmitted = false;
                        this.gitHubForm.reset();
                    })

  }

  onReset() {
    this.isFormSubmitted = false;
    this.gitHubForm.reset();
  }
  
}
