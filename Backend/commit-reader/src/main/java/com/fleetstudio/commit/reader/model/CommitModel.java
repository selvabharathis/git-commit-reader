package com.fleetstudio.commit.reader.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CommitModel {

    @JsonProperty("author")
    UserCommitModel author;

    @JsonProperty("committer")
    UserCommitModel commiter;

    @JsonProperty("message")
    String message;
}
