package com.fleetstudio.commit.reader.controller;

import com.fleetstudio.commit.reader.model.GitHubCommitModel;
import com.fleetstudio.commit.reader.service.CommitReaderService;
import io.swagger.annotations.Api;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value="/repositories")
@Api(tags = "API for Git hub commit reading")
@CrossOrigin
public class CommitReaderController {

    final static Logger LOGGER = LoggerFactory.getLogger(CommitReaderController.class);

    @Autowired
    CommitReaderService commitReaderService;

    @GetMapping(value = "{owner}/{repository}/commit/{commitSHA}")
    public GitHubCommitModel getCommitDetails(@PathVariable String owner, @PathVariable String repository, @PathVariable String commitSHA) throws Exception {
        LOGGER.info("getCommitDetails - START");
        GitHubCommitModel gitHubCommitModel = this.commitReaderService.getCommit(owner,repository,commitSHA);
        LOGGER.info("getCommitDetails - END");
        return gitHubCommitModel;
    }
}
