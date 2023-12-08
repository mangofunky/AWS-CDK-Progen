import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  minNodeVersion: '18.0.0',
  name: 'AWS-CDK-Progen',
  projenrcTs: true,
  deps: [
    'axios',
  ], 
  devDeps: [
    '@types/aws-lambda',
    'esbuild',
  ],
});
project.synth();