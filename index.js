"use strict";

const pulumi = require("@pulumi/pulumi");
const { Resource } = require("twilio-pulumi-provider");

const workerOne = new Resource("worker-samuel", {
  resource: [
    "taskrouter",
    { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
    "workers",
  ],
  attributes: {
    friendlyName: "samuel",
    attributes: JSON.stringify({ languages: ["en", "es"] }),
  },
});

const workerTwo = new Resource("worker-ramon", {
  resource: [
    "taskrouter",
    { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
    "workers",
  ],
  attributes: {
    friendlyName: "ramon",
    attributes: JSON.stringify({ languages: ["en"] }),
  },
});
