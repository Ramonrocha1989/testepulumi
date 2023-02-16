"use strict";
const pulumi = require("@pulumi/pulumi");

const { Resource } = require('twilio-pulumi-provider');

const workerOne = new Resource('worker-everton', {
    resource: [
      'taskrouter',
      { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
      'workers',
    ],
    attributes: {
      friendlyName: 'everton',
      attributes: JSON.stringify({ languages: ['en', 'es'] }),
    },
  });
  
  const workerTwo = new Resource('worker-marcos', {
    resource: [
      'taskrouter',
      { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
      'workers',
    ],
    attributes: {
      friendlyName: 'marcos',
      attributes: JSON.stringify({ languages: ['en'] }),
    },
  });