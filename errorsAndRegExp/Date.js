function dayOfYear(initialDate) {
    const now = new Date(initialDate);
    const start = new Date(now.getFullYear(), 0, 0);
    return (now - start) / 1000 / 60 / 60 / 24;
  }
  
  console.log(dayOfYear("12/13/2020")) // 348
  console.log(dayOfYear("12/17/2020")) // 352
  