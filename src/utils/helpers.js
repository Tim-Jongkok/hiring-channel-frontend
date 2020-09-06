//function to separate array
export const separateArray = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let sliceIt = arr.slice(i, i + size);
    newArr.push(sliceIt);
  }
  return newArr;
};

//function to calculate column per viewport width
export const calculateColumn = (width) => {
  let column;
  if (width <= 767) {
    column = 2;
  } else if (width <= 991) {
    column = 3;
  } else if (width <= 1199) {
    column = 4;
  } else {
    column = 6;
  }
  return column;
};

export const typeNameSearchQuery = (id) => {
  if (id === 1) {
    return "corporation";
  } else if (id === 2) {
    return "engineer";
  } else {
    return "admin";
  }
};
