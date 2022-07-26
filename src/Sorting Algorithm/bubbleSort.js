export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, array.length,animations);
    return animations;
  }



function bubbleSortHelper(arr, n,animations,)
{
    let i, j;
    for (i = 0; i < n - 1; i++){
        for (j = 0; j < n - i - 1; j++){
            animations.push([j,j+1]);
            if (arr[j] > arr[j + 1]){
                animations.push([arr[j+1],arr[j]]);
                let t=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
            }
            else animations.push([arr[j],arr[j+1]]);
        }   
    }

    //for (i = 0; i < n - 1; i++)console.log(arr[i]);
        
}
  
