export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
//   animations.push([100000,100000]);
  quickSortHelper(array,0, array.length-1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
    if (low < high) {
      let pi = partition(arr, low, high, animations);
      quickSortHelper(arr, low, pi - 1, animations);
      quickSortHelper(arr, pi + 1, high, animations);
    }
  }

function partition(arr, low, high, animations) {
  let pivot = arr[high];
  let i = low - 1;
  animations.push([high,-1]);
  for (let j = low; j <= high - 1; j++) {
    animations.push([i+1,j]);
    if (arr[j] < pivot) {
      animations.push([arr[j],arr[i+1]]);
      i++;
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
      
    }
    else{
        animations.push([arr[i+1],arr[j]]);
    }
  }
  animations.push([i+1,high]);
  animations.push([pivot,arr[i+1]]);
  let t = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = t;

  return i + 1;
}


