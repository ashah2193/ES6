/**
 * Created by Ankit on 5/25/2017.
 */
(function() {
    'use strict';

     function multipleReturns() {
         return [1,2,3,4,0];
     }

    var a, b, c, d,e;

    [a,b,,d] = multipleReturns();

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
})();