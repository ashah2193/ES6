/**
 * Created by Ankit on 5/25/2017.
 */
(function() {

    var sum = (x,y) => x + y;

    console.log(sum(10,15));

    var sum1 = (x,y) => {
        x = x + 10;
        y = y + 10;
        return x + y;
    }

    console.log(sum1(10,5));



    function Person(){
        this.age = 34;

        setTimeout(() => {
            console.log(this.age); //34
    }, 1000);

    }

    var p = new Person();

})();