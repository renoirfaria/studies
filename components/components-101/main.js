/* jshint esversion:6 */

Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks" @mouseOver="showAlert()">{{ task.description }}</task>
    </div>
    `,

  data()
  {
    return {
      tasks: [
        {description: 'Go to the store', 'completed': false},
        {description: 'Go to the jail', 'completed': true},
        {description: 'Go to the puta que pariu', 'completed': false},
        {description: 'Manage atom packages and sync them', 'completed': false},
      ],
    };
  },

});


Vue.component('task', {
  template: `
    <li>
      <slot></slot>
    </li>
  `,
});

var app = new Vue({
  el: '#root',
  data: {
  },
});
