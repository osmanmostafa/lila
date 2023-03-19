fetch('https://testsession8.onrender.com/data')
      .then(response => response.json())
      .then(json => console.log(json))