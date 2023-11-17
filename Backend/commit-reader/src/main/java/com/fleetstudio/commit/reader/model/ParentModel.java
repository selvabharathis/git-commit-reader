package com.fleetstudio.commit.reader.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ParentModel {

    @JsonProperty("sha")
    String parentSha;

    @JsonProperty("url")
    String url;

    @JsonProperty("html_url")
    String htmlUrl;
}
