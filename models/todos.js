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
      var length = 1;
      //test for any bad properties being added.  
      if (Object.keys(task).filter(function(property){
          return property !== "content" && property !== 'complete';
        })[0]) {
          return false;
      };
      if (!task['complete']) task['complete'] = false;
      if (!tasks[name]) {
        tasks[name]= [task];
      } else {
        length = tasks[name].push(task);
      } 

      return tasks[name][length-1];
  },

  complete: function(name, index){
    tasks[name][index].complete = true;
  },

  list: function (name, status){
    if (!tasks[name]){
      return false;
    }
    if (status === "complete"){
      return tasks[name].filter(function(task){
        return task.complete;
      });
    } else if (status === "active"){
      return tasks[name].filter(function(task){
        return !task.complete;
      });
    }
    return tasks[name];
  }, 

  remove: function(name, index){
    tasks[name].splice(index,1);
  }

};
