"use strict";
const pulumi = require("@pulumi/pulumi");

const { Resource } = require('twilio-pulumi-provider');


const TaskqueueEUA = new Resource('taskqueue-english', {
  resource: [
    'taskrouter',
    { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
    'taskQueues',
  ],
  attributes: {
    targetWorkers: `languages HAS "en"`,
    friendlyName: 'Frances Queue',
  },
});

const TaskqueueSpani = new Resource('taskqueue-spanish', {
  resource: [
    'taskrouter',
    { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
    'taskQueues',
  ],
  attributes: {
    targetWorkers: `languages HAS "es"`,
    friendlyName: 'Germany Queue',
  },
});

const worker1 = new Resource('worker-one', {
    resource: [
      'taskrouter',
      { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
      'workers',
    ],
    attributes: {
      friendlyName: 'Ramon',
      attributes: JSON.stringify({ languages: ['en', 'es'] }),
    },
  });
  
  const worker5 = new Resource('worker-two', {
    resource: [
      'taskrouter',
      { workspaces: "WS6e2c9bd0401b0f7d881f38a761d31e39" },
      'workers',
    ],
    attributes: {
      friendlyName: 'Bob',
      attributes: JSON.stringify({ languages: ['en'] }),
    },
  });