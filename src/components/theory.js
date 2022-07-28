import React from "react";
import "./theory.css";
import pic from "./image.png";
import mpic from "./merge.png";
import qpic from "./quick.png";


const Theory = () => {
  return (
    <>
      <div className="cont">
        <h1 className="Head">Merge Sort</h1>
        <p>
          Merge sort is a divide-and-conquer algorithm based on the idea of
          breaking down a list into several sub-lists until each sublist
          consists of a single element and merging those sublists in a manner
          that results into a sorted list.
        </p>
        <h6 className="idea">Idea:</h6>
        <p>
          <ol>
            <li>
              Divide the unsorted list into N sublists, each containing 1
              element.{" "}
            </li>

            <li>
              Take adjacent pairs of two singleton lists and merge them to form
              a list of 2 elements. N will now convert into N/2 lists of size 2.{" "}
            </li>

            <li>Repeat the process till a single sorted list of obtained. </li>
          </ol>
        </p>
        <p>
          While comparing two sublists for merging, the first element of both
          lists is taken into consideration. While sorting in ascending order,
          the element that is of a lesser value becomes a new element of the
          sorted list. This procedure is repeated until both the smaller
          sublists are empty and the new combined sublist comprises all the
          elements of both the sublists.
        </p>
        <img src={mpic} />
      </div>

      <div className="cont">
        <h1 className="Head">Bubble Sort</h1>
        <p>
          Bubble sort is a sorting algorithm that compares two adjacent elements
          and swaps them until they are in the intended order. Just like the
          movement of air bubbles in the water that rise up to the surface, each
          element of the array move to the end in each iteration. Therefore, it
          is called a bubble sort.
        </p>
        <p>Suppose we are trying to sort the elements in ascending order.</p>
        <h5> 1. First Iteration (Compare and Swap)</h5>
        <p>
          <ol>
            <li>
              Starting from the first index, compare the first and the second
              elements.
            </li>
            <li>
              If the first element is greater than the second element, they are
              swapped.
            </li>
            <li>
              Now, compare the second and the third elements. Swap them if they
              are not in order.
            </li>
            <li>The above process goes on until the last element.</li>
          </ol>
        </p>
        <h5>2. Remaining Iteration</h5>
        <p>
          The same process goes on for the remaining iterations. After each
          iteration, the largest element among the unsorted elements is placed
          at the end. In each iteration, the comparison takes place up to the
          last unsorted element. The array is sorted when all the unsorted
          elements are placed at their correct positions.
        </p>
        <img src={pic} />
      </div>
      <div className="cont">
        <h1 className="Head">Quick Sort</h1>
        <p>
          Quicksort is a sorting algorithm based on the divide and conquer
          approach where
        </p>
        <p>
          <ol>
            <li>
              An array is divided into subarrays by selecting a pivot element
              (element selected from the array).
            </li>
            <li>
              While dividing the array, the pivot element should be positioned
              in such a way that elements less than pivot are kept on the left
              side and elements greater than pivot are on the right side of the
              pivot.
            </li>
            <li>
              The left and right subarrays are also divided using the same
              approach. This process continues until each subarray contains a
              single element.
            </li>
            <li>
              At this point, elements are already sorted. Finally, elements are
              combined to form a sorted array.
            </li>
          </ol>
        </p>
        <h5>1. Select the Pivot Element</h5>
        <p>
          There are different variations of quicksort where the pivot element is
          selected from different positions. Here, we will be selecting the
          rightmost element of the array as the pivot element.
        </p>
        <h5>2. Rearrange the Array</h5>
        <p>
          Now the elements of the array are rearranged so that elements that are
          smaller than the pivot are put on the left and the elements greater
          than the pivot are put on the right.
        </p>
        <br></br>
        <p>Here's how we rearrange the array:</p>
        <p>
          <ol>
            <li>
              A pointer is fixed at the pivot element. The pivot element is
              compared with the elements beginning from the first index.
            </li>
            <li>
              If the element is greater than the pivot element, a second pointer
              is set for that element.
            </li>
            <li>
              Now, pivot is compared with other elements. If an element smaller
              than the pivot element is reached, the smaller element is swapped
              with the greater element found earlier.
            </li>
            <li>
              Again, the process is repeated to set the next greater element as
              the second pointer. And, swap it with another smaller element.
            </li>
            <li>
            The process goes on until the second last element is reached.
            </li>
            <li>
            Finally, the pivot element is swapped with the second pointer.
            </li>
          </ol>
        </p>
        <h5>
        3. Divide Subarrays
        </h5>
        <p>
        Pivot elements are again chosen for the left and the right sub-parts separately. And, step 2 is repeated.
        The subarrays are divided until each subarray is formed of a single element. At this point, the array is already sorted.
        </p>
        <img src= {qpic}/>
      </div>
    </>
  );
};

export default Theory;
