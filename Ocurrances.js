/*
Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example

  deleteNth ([1,1,1,1],2) // return [1,1]

  deleteNth ([20,37,20,21],1) // return [20,37,21]

*/


//SOLUTION:

function deleteNth(arr,x){
   if (!arr) { return null; }
    if (x < 1) { return []; }

    var result = [];
    var itemCounts = {};
    for (var index = 0; index < arr.length; index++){
        var item = arr[index];
        var count = itemCounts[item];
        if (count === undefined) {
           count = 0;
        }
        if (count < x) {
            result.push(item);
            itemCounts[item] = count + 1;
        }
    }

    return result;
}

//TEST:
Test.assertSimilar(deleteNth([20,37,20,21], 1), [20,37,21])
Test.assertSimilar(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])