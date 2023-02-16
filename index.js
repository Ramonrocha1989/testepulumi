"use strict";
const pulumi = require("@pulumi/pulumi");

const { Resource } = require('twilio-pulumi-provider');

const workspace = new Resource('example-workspace', {
  resource: ['taskrouter', 'workspaces'],
  attributes: {
    friendlyName: 'New Workspace created with Pulumi',
  },
});