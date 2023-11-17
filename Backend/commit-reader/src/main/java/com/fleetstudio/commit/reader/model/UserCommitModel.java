package com.fleetstudio.commit.reader.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class UserCommitModel {

    @JsonProperty("name")
    String name;

    @JsonProperty("email")
    String email;

    @JsonProperty("date")
    Date date;
}
