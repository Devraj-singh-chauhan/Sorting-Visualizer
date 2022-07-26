import React from 'react';
import {getMergeSortAnimations} from '../Sorting Algorithm/sortingAlgorithms.js';
import {getBubbleSortAnimations} from '../Sorting Algorithm/bubbleSort.js';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 160; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      let barOneIdx, barTwoIdx;
      
      for(let k=0;k<2;k++,i++){
        if(i%2!==1){
          [barOneIdx, barTwoIdx]= animations[i];
        }
        //console.log(barOneIdx,barTwoIdx);
        if (i%2!==1) {
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } 
        else {
          setTimeout(() => {
            const [heightBar1,heightBar2] = animations[i];
            arrayBars[barOneIdx].style.backgroundColor = PRIMARY_COLOR;
            arrayBars[barTwoIdx].style.backgroundColor = PRIMARY_COLOR;
            arrayBars[barOneIdx].style.height = `${heightBar1}px`;
            arrayBars[barTwoIdx].style.height = `${heightBar2}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
      i--;
    }
  }

  render() {
    const {array} = this.state;

    return (
      <>
      <div className="container">
        {array.map((value,idx)=>(
          <div className="array-bar" key={idx} style={{height :`${value}px`}}>

          </div>
        ))}
        <button onClick={()=>this.resetArray()} class="btn btn-outline-primary">Reset Array</button>
        <button onClick={()=>this.mergeSort()} class="btn btn-outline-primary">Merge Sort</button>
        <button onClick={()=>this.bubbleSort()} class="btn btn-outline-primary">Bubble Sort</button>
      </div>
      </>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


