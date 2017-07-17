console.log('HI FROM SCRIPT.JS');

angular.module('glitchygifsApp', [])
  .controller('GlitchyGifsController', function() {
    var vm = this;
    vm.character = {};

    vm.character.browsList = ['../static/brows1.png', '../static/brows2.png'];
    vm.character.eyesList = ['../static/eyes1.png', '../static/eyes2.png'];
    vm.character.noseList = ['../static/nose1.png', '../static/nose2.png'];
    vm.character.mouthList = ['../static/mouth1.png', '../static/mouth2.png'];

    vm.character.brows = vm.character.browsList[Math.floor(Math.random()*vm.character.browsList.length)];
    vm.character.eyes = vm.character.eyesList[Math.floor(Math.random()*vm.character.eyesList.length)];
    vm.character.nose = vm.character.noseList[Math.floor(Math.random()*vm.character.noseList.length)];
    vm.character.mouth = vm.character.mouthList[Math.floor(Math.random()*vm.character.mouthList.length)];

    // vm.character.brows = '../static/brows1.png';
    // vm.character.eyes = '../static/eyes1.png';
    // vm.character.nose = '../static/nose1.png';
    // vm.character.mouth = '../static/mouth1.png';

    vm.randomizeFace = function() {
      console.log('im gonna randomize things');

      vm.character.brows = '../static/brows2.png';
    }

    // var todoList = this;
    // todoList.todos = [
    //   {text:'learn AngularJS', done:true},
    //   {text:'build an AngularJS app', done:false}];

    // todoList.addTodo = function() {
    //   todoList.todos.push({text:todoList.todoText, done:false});
    //   todoList.todoText = '';
    // };

    // todoList.remaining = function() {
    //   var count = 0;
    //   angular.forEach(todoList.todos, function(todo) {
    //     count += todo.done ? 0 : 1;
    //   });
    //   return count;
    // };

    // todoList.archive = function() {
    //   var oldTodos = todoList.todos;
    //   todoList.todos = [];
    //   angular.forEach(oldTodos, function(todo) {
    //     if (!todo.done) todoList.todos.push(todo);
    //   });
    // };
  });
