const countdown = (x) => {
  if (x == 0) {
    //breaking condition
    console.log("done!");
    return;
  } else {
    console.log("x is ", x);
    countdown(x - 1); //recursive call = function calls itself
    console.log("hi");
  }
};

countdown(4);
