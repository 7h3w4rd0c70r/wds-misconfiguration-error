
# webpack-dev-server misconfiguration

This repo is example of replicated error with error supposed to be a webpack-dev-server misconfiguration.

## Steps to replicate the error

1. Clone the repo `git clone https://github.com/7h3w4rd0c70r/wds-misconfiguration-error.git`
2. Change directory `cd wds-misconfiguration-error`
3. Install dependencies `npm install`
4. Run the webpack-dev-server `webpack-dev-server`

## See that problem is with webpack-dev-server, not webpack

When you run `webpack`, everything compiles and bundles as expected. Problem comes on only with `webpack-dev-server`.
