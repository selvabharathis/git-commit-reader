package com.fleetstudio.commit.reader.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class FilesModel {

    @JsonProperty("sha")
    String sha;

    @JsonProperty("filename")
    String fileName;

    @JsonProperty("status")
    String status;

    @JsonProperty("additions")
    Long additions;

    @JsonProperty("deletions")
    Long deletions;

    @JsonProperty("changes")
    Long changes;

    @JsonProperty("blob_url")
    String blobUrl;

    @JsonProperty("raw_url")
    String rawUrl;

    @JsonProperty("contents_url")
    String contentsUrl;

    @JsonProperty("patch")
    String patch;
}
