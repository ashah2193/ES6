/**
 * Created by Ankit on 5/25/2017.
 */
/**
 * Created by Ankit on 5/25/2017.
 */
(function() {
    'use strict';

    const i = 10;

    if(true) {

    //an constant 'i' is available in this scope but not defined in this scope therefore the below line will not throw error instead define a new "i" inside this scope.
        const i = 20; //block level

        const j = 25;

        console.log("i is: " +  i);
        console.log("j is : "+  j);
    }

    //an constant 'j' is not defined in this scope therefore the below line will not throw error instead define a new "j" inside this scope.
    const j = 50;

    console.log("i is: " +  i);
    console.log("j is : "+  j);
})();