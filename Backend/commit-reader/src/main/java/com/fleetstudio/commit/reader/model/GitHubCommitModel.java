package com.fleetstudio.commit.reader.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import java.util.List;

@Data
public class GitHubCommitModel {

    @JsonProperty("sha")
    String commitSha;

    @JsonProperty("commit")
    CommitModel commit;

    @JsonProperty("parents")
    List<ParentModel> parents;

    @JsonProperty("files")
    List<FilesModel> files;
}
