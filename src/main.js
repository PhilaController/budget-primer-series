import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// load and set the HTML template we are using
let audit_content = $(".audit-content");
audit_content.html(`<div id="app"></div>`);

// Remove report button
$(".entry-header .btn")
  .first()
  .remove();

new Vue({
  render: h => h(App),
}).$mount('#app')

