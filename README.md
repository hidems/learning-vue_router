# learning-vue_router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Feature
### Home
- Home View
- Sub Component
- Display `process.env`
### Emit Practise
- Count up
  - Emit
  - Props: method call back props
  - https://techblog.roxx.co.jp/entry/2020/07/09/092955
### User, Nested route
- user/
  - user/profile
  - user/post
  - commit
    - Create PR
    - Fix directory structure
### Version
- Vue 2
### Multi Select
  - https://vue-multiselect.js.org/
### Transition by SASS
- npm install --save-dev sass-loader node-sass
### Navigation Guards
- Global Before Guards
- https://router.vuejs.org/guide/advanced/navigation-guards.html
### Test Production
- /dist/index.html
- Test with web server for chrome extension
- Add PublicPath on `vue.config.js` and `.htaccess` 
  