
# webpack-dev-server misconfiguration

This repo is example of replicated error with error supposed to be a webpack-dev-server misconfiguration.

## Environment information

Operating System: **MacOS Sierra (10.12.6)**

Node Version: **v8.6.0**

NPM Version: **5.3.0**

## Steps to reproduce the error

1. Clone the repo `git clone https://github.com/7h3w4rd0c70r/wds-misconfiguration-error.git`
2. Change directory `cd wds-misconfiguration-error`
3. Install dependencies `npm install`
4. Run the webpack-dev-server `webpack-dev-server`

You should see this error:
```
Invalid configuration object. webpack-dev-server has been initialised using a configuration object that does not match the API schema.
 - configuration has an unknown property 'error'. These properties are valid:
   object { hot?, hotOnly?, lazy?, bonjour?, host?, allowedHosts?, filename?, publicPath?, port?, socket?, watchOptions?, headers?, clientLogLevel?, overlay?, progress?, key?, cert?, ca?, pfx?, pfxPassphrase?, requestCert?, inline?, disableHostCheck?, public?, https?, contentBase?, watchContentBase?, open?, useLocalIp?, openPage?, features?, compress?, proxy?, historyApiFallback?, staticOptions?, setup?, before?, after?, stats?, reporter?, noInfo?, quiet?, serverSideRender?, index?, log?, warn? }
```

### See that problem is with webpack-dev-server, not webpack

When you run `webpack`, everything compiles and bundles as expected. Problem comes on only with `webpack-dev-server`.
