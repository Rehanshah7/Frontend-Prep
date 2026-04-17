console.log([] == false);
console.log({} == false);
console.log(null == undefined);
console.log([] == ![]);

/*
    Note: == tries to convert both sides to a common type before comparing.

    false = 0
    [] = "" = 0
    {} = "[Object Object]" = NaN
    null == undefined = true (null and undefined are only loosely equal to each other)
    [] is truthy = ![] = false ([] is always truthy and converted to false, while false is then converted to 0 and comparing [] = 0 which can convert [] to "" 0, which gives true)
*/
