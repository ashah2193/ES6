/**
 * Created by Ankit on 5/25/2017.
 */
(function() {
    'use strict';

    for(var i =0; i < 10; i++) {
        continue;
    }

    for(let j =0; j < 10; j++) {
        continue;
    }

    if(i==10) {
        let k = 5;
    }

    console.log("i is: " + typeof i);
    console.log("j is : "+ typeof j);
    console.log("k is : "+ typeof k);
})();