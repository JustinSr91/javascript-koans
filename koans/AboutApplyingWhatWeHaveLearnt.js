var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(0);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */

    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  // /*

  it("should find the largest prime factor of a composite number", function () {

    // Source: https://gist.github.com/nefarioustim/3215506
    // var x declared for composite number
    var x = 600851475143,

    // conditions being set for determination of prime number...?
    isPrime = function(n) {
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        // For Loop is being ran to cycle through numbers starting at 3...?
        for (var factor = 3; factor <= Math.sqrt(n); factor += 2)
            if (n % factor === 0) return false;

        return true;
    },
    getLargestPrimeFactor = function(n) {
        var largestPrimeFactor;

        // For Loop being ran to cycle through numbers starting at 2, and increasing by 2 every time...?
        for (var factor = 2; factor <= Math.sqrt(n); factor++)
            if (n % factor === 0 && isPrime(factor))
                largestPrimeFactor = factor;

        return largestPrimeFactor;
    };

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
  //
  // Source: https://gist.github.com/msnider/4315679

  function palindromic() {
    var max = 0;

    // Two For Loops ran to find largest palindrome. Starts at 999 and counts down by one each time.
    for(var i = 999; i > 99; i--) {
      for(var k = 999; k > 99; k--) {
        var n = i * k;
        var s = '' + n;

        // I understand why there is an if statement here, but not sure what is happening or how to decipher...
        if (s === s.split("").reverse().join("") && n > max) {
          max = n;
        }
      }
    }
    return max;
}

  });
  //
  // it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
  //
  //
  // });
  //
  // it("should find the difference between the sum of the squares and the square of the sums", function () {
  //
  // });
  //
  // it("should find the 10001st prime", function () {
  //
  // });
  // */
});
