const poopBalls = function(){
    return "Poop and Balls."
};
function receivesAFunction(poopBalls){
    poopBalls();
};
function returnsANamedFunction(){
    function fuck(){
        return function(){};
    };
    return fuck();
};
function returnsAnAnonymousFunction(){
    return function(){
        return "great!"
    };
};