function selection_sort(arr){
    var min;
    for(var i =0;i<arr.length;i++){
        min = i;
        //find minimum element in arr[i..len], swap it with element arr[i]
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min])
                min =j;
        }

        if(i!==min){
            var temp = arr[i];
            arr[i]= arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selection_sort([65,43,23,87,11,3,6]));