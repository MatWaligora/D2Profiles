// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import router from './router'
import { store } from './store/store';
import { secrets } from './secrets';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-API-KEY', secrets.apiKey);
  request.credentials = true;
  if(request.url.match('https')) {
  } else {
    request.url.replace('http', 'https');
  }
  next()

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
});
