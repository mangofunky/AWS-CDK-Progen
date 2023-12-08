import { App } from 'aws-cdk-lib';
import { AppStack } from './stack';

const app = new App();

new AppStack(app, 'AWS-CDK-Progen-dev', { 
  env: {
    account: '133159882346',
    region: 'eu-west-1',
  },
});

app.synth();