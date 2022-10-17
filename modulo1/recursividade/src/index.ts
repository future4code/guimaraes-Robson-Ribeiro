const printNumbersAsc = (n: number) => {
    if (n >= 0) {
        printNumbersAsc(n - 1);
      console.log(n);
    }
  };

  printNumbersAsc(8)


  const printNumbersDesc = (n: number) => {
    if (n >= 0) {
      printNumbersDesc(n - 1);
      console.log(n);
    }
  };

  printNumbersDesc(3)