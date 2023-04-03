# okta-cors-repo
## localhost:8002 
- mock for the app
- client api request is from this origin and they are reverse proxy to gateway mock localhost:10001

## localhost:10001
- mock for the gateway

## localhost:20002
- mock for the okta server

# start up
```

cd app-mock && npm install
cd .. && npm install && npm run start

```