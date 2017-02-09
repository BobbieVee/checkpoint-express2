'use strict';

var tasks = {}; 

module.exports = {
  reset: function () {
    tasks = {}; 
  },

  listPeople: function () {
    return Object.keys(tasks);
  },
  add: function (name, task) {
      if (!task['complete']) task['complete'] = false;
      if (!tasks[name]) {
        tasks[name]= [task];
      } else {
        tasks[name].push(task);
      }  
  },

  complete: function(name, index){
    tasks[name][index].complete = true;
  },

  list: function (name){
    return tasks[name];
  }, 

  remove: function(name, index){
    tasks[name].splice(index,1);
  }
};
