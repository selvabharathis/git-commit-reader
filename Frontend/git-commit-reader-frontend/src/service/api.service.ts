import { Injectable } from '@angular/core';
import { ApiTemplateService } from './api-template.service';
import { environment } from 'src/environments/environment';
import { GitHubCommitModel } from 'src/model/git-hub-commit-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public apiTemplateService: ApiTemplateService) { }

  getCommitDetails(owner: string, repository: string, commitSHA: string){
    let url = environment.repositoryAPIUrl + `/${owner}/${repository}` + '/commit' + `/${commitSHA}`;
    return this.apiTemplateService.getData<GitHubCommitModel>(url)
  }  
}
