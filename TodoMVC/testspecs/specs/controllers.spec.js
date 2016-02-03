describe('TodoCtrl', function() {
    var scope, todoController;
    beforeEach(module("Controllers"));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        todoController = function() {
            return $controller('TodoCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should have addTodo method accepts valid text and adds to list', function() {
        var controller = todoController();
        scope.addTodo("dummytext");
        expect(scope.list.length).toEqual(1);
    });
    
    it('should have updateTodo method accepts valid text,position and updates list', function() {
        var controller = todoController();
        scope.addTodo("dummytext1");
        scope.updateTodo("dummytext2",0);
        expect(scope.list[0]).toEqual("dummytext2");
    });
    
    it('should have deleteTodo method accepts valid text and deletes it from list', function() {
        var controller = todoController();
        scope.addTodo("dummytext1");
        scope.deleteTodo("dummytext1");
        expect(scope.list.length).toEqual(0);
    });
});