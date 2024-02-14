const cardsData = [
    { image: 'https://a.d-cd.net/UwbKr3DDe7JNKzN94VLrfOCc4h0-1920.jpg', heading: 'Card 1', paragraph: 'Lorem ipsum dolor sit amet' },
    { image: 'https://i.trse.ru/2022/07/fu0O.jpg', heading: 'Card 2', paragraph: 'Sed do eiusmod tempor incididunt' },
    { image: 'https://a.d-cd.net/ce1a0c6s-1920.jpg', heading: 'Card 3', paragraph: 'Sed do eiusmod tempor incididunt' },
    { image: 'https://sportishka.com/uploads/posts/2023-12/1701830310_sportishka-com-p-mersedes-bents-pulman-krasivo-44.jpg', heading: 'Card 4', paragraph: 'Ut labore et dolore magna aliqua' },
    { image: 'https://sportishka.com/uploads/posts/2022-11/1667563758_45-sportishka-com-p-mersedes-bents-maibakh-s-klass-vkontakte-45.jpg', heading: 'Card 5', paragraph: 'Enim ad minim veniam' },
    { image: 'https://sportishka.com/uploads/posts/2022-11/1667489289_36-sportishka-com-p-mersedes-bents-maibakh-krasivo-37.jpg', heading: 'Card 6', paragraph: 'Quis nostrud exercitation ullamco laboris' },
    { image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666200546_17-mykaleidoscope-ru-p-gelik-mashina-krasivo-19.jpg', heading: 'Card 7', paragraph: 'Nisi ut aliquip ex ea commodo consequat' },
    { image: 'https://stk-briket.ru/wp-content/uploads/c/5/c/c5cff2ac3abd34661d60d5ca52a00f88.jpeg', heading: 'Card 8', paragraph: 'Duis aute irure dolor in reprehenderit' }
  ];
  
  const container = document.getElementById('card-container');
  
  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const image = document.createElement('img');
    image.src = data.image;
    image.style.maxWidth = "400px"
    image.style.height = "300px"
    
    const heading = document.createElement('h1');
    heading.textContent = data.heading;
    
    const paragraph = document.createElement('p');
    paragraph.textContent = data.paragraph;
    
    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(paragraph);
    
    return card;
  }
  
  cardsData.forEach(data => {
    const newCard = createCard(data);
    container.appendChild(newCard);
  });
  