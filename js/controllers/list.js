(function(){
    
  angular
    .module("turtleFacts")
    .controller("listCtrl", ListController);
    
    ListController.$inject = ['quizMetrics', 'DataService'];
    
    function ListController(quizMetrics, DataService){
        var vm = this;
        this.footer = "Developed & Designed by : Hungry Turtle Code while using pure HTML, CSS, and AngularJS"
        vm.quizMetrics = quizMetrics;
        vm.data = DataService.turtlesData;
        vm.activeTurtle ={};
        vm.changeActiveTurtle = changeActiveTurtle;
        vm.activateQuiz = activateQuiz;
        vm.search = "";
        
        function changeActiveTurtle(index){
            vm.activeTurtle = index;
            
        }
        function activateQuiz(){
            quizMetrics.changeState(true);
        }
        
    }
 

   
    
    
})();