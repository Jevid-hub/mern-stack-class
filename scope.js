function checkEvenOdd(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject(new Error(' must be a number'));
      } else {
        if (number % 2 === 0) {
          resolve('Even');
        } else {
          resolve('Odd');
        }
      }
    });
  }

  checkEvenOdd(4)
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error);
    });
