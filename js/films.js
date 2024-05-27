  function renderData(films) {
    const div = document.querySelector('.container');
  
    films.forEach(film => {
      // Create Elements
      const li = document.createElement('li');
      const element1 = document.createElement('div');
      const element2 = document.createElement('div');
      const element3 = document.createElement('div');
      const element4 = document.createElement('div');
      const element5 = document.createElement('div');
  
      // Append Elements
      div.append(li);
      li.append(element1, element2, element3, element4, element5);
  
      // Setting the content of the created elements
      element1.textContent = ` ${film.title}`;
      element2.textContent = ` ${film.episode_id}`;
      element3.textContent = ` ${film.release_date}`;
      element4.textContent = ` ${film.director}`;
      element5.textContent = ` ${film.producer}`;
      
      // Set the src attribute of the img element
    
  
  
      // Adding classes to elements
      li.classList.add('createdLi');
      element1.classList.add('element1');
      element2.classList.add('element2');
      element3.classList.add('element3');
      element4.classList.add('element4');
      element5.classList.add('element5');
    });
  }
  
  const fetchUsers = async () => {
    const response = await fetch('https://swapi.py4e.com/api/films/');
   
    const result = await response.json();
    renderData(result.results);
    console.log(result.results);
  
  };
  
  fetchUsers();