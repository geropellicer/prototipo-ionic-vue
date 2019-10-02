# prototipo-ionic-vue


## Prerequisites
#For testing in desktop browser
```
Install NVM
nvm install node (v 12 or higher)
Clone repo
CD ionic-poc-mobile-hybrid
```
#If you also want to deploy to Android or iOS
```
Install Android Studio and dependencies
Install xCode
```

### Install NPM dependencies
```
npm install
```

### Test on desktop browser
```
npm run serve
Then go to http://localhost:8080 and at this point the project should be running fine.
```

### Lints and fixes files
```
npm run lint
```

### Compiles and minifies for production
```
npm run build
```

### Add capacitor platforms you want to build for
```
npx cap add ios
npx cap add android
```

### Update plugins and files related to each platform
```
npx cap update
```

### Sync files for building native apps
```
npx cap copy
```

### Open AndroidStudio or xCode to build native app
```
npx cap open android
npx cap open ios
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##