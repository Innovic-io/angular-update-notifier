# AngularUpdate

## How to test

Step 1

```bash

npm run build-prod-ngsw
```

Step 2
```bash

# deploy app to Surge

cd dist && sruge .
```

Step 3
```bash

# change something in app
# for example title in: ./src/app/app.component.html 
# build and deploy again to Surge
npm run build-prod-ngsw

cd dist && sruge .
```

Step 4
```bash

# Open app, press button Check for updates or wait for updates to come.
```

### Note

 - You must use https:// 
 
### Result

<img src="http://storage6.static.itmages.com/i/18/0102/h_1514916132_6625244_6e6ae47e24.png" width="100%" />
