package com.fleetstudio.commit.reader.service;


import com.fleetstudio.commit.reader.model.GitHubCommitModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;


@Service
public class CommitReaderService {

    final static Logger LOGGER = LoggerFactory.getLogger(CommitReaderService.class);

    @Autowired
    private Environment environment;

    @Qualifier("gitHubRestTemplate")
    @Resource
    RestTemplate restTemplate;

    public GitHubCommitModel getCommit(String owner,String repository,String commitSHA) throws Exception {
        LOGGER.info("getCommit service - START");
        String api = environment.getProperty("GIT_HUB_API_HOST_URL")
                + environment.getProperty("GIT_HUB_API_REPOSITORY")
                + "/" + owner
                + "/" + repository
                + environment.getProperty("GIT_HUB_API_COMMITS")
                + "/" + commitSHA;
        GitHubCommitModel res = new GitHubCommitModel();
        try {
            res = restTemplate.getForObject(api, GitHubCommitModel.class);
            return res;
        } catch (Exception e) {
            LOGGER.error("API call failed");
        }
        LOGGER.info("getCommit service - END");
        return res;
    }
}
