let books = [
    {
       title: "School Law",
       author: "Micheal Morte",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2JywA9LMqou5bB6-FB4YdBJ68qzCx0Od56bwX_qlzRdR6Tfq&s"
    },
    {
        title: "The Story Book Knight",
        author: "Helen & Thomas",
        image: "https://images-na.ssl-images-amazon.com/images/I/61c+nvdDUWL.jpg"
     },
     {
        title: "The Gruffalo",
        author: "Julia Danaldson",
        image: "https://bilingualkidspot.com/wp-content/uploads/2016/07/the-gruffalow.jpg"
     },
     {
        title: "White Bird",
        author: "R.J.Palcio",
        image: "https://static01.nyt.com/images/2019/11/10/books/review/10-BKS-FISHMAN/10-BKS-FISHMAN-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
     },
     {
        title: "The Future of Technology Education",
        author: "P John William",
        image: "https://images.springer.com/sgw/books/medium/9789812871695.jpg"
     },
     {
         title: "Using Technology Wisely",
         author: "Harold Wenglinsky",
         image: "https://images-na.ssl-images-amazon.com/images/I/51OL-KSTgvL._SX338_BO1,204,203,200_.jpg"
      },
      {
         title: "Educational Technology",
         author: "Russell & Leftwich",
         image: "https://www.pearsonhighered.com/assets/bigcovers/0/1/3/7/013705159X.jpg"
      },
      {
         title: " The Reading Specialist",
         author: "Rita M.Bean",
         image: "https://images-na.ssl-images-amazon.com/images/I/517D7cD20RL._SX331_BO1,204,203,200_.jpg"
      },
      {
        title: "Thinking Machines",
        author: "Luke Dormehl",
        image: "https://www.penguin.co.uk/content/dam/prh/books/110/1108900/9780753556740.jpg.transform/PRHDesktopWide_small/image.jpg"
     },
     {
         title: "The Story Book Knight",
         author: "Helen & Thomas",
         image: "https://images-na.ssl-images-amazon.com/images/I/61c+nvdDUWL.jpg"
      },
      {
         title: " Educational Measurement and Evaluation",
         author: "Dr. Paresh B. Acharya",
         image: "https://images-na.ssl-images-amazon.com/images/I/41eeo6525LL._SX331_BO1,204,203,200_.jpg"
      },
      {
         title: " IGCSE Chemistry ",
         author: "R.J.Palcio",
         image: "https://images-na.ssl-images-amazon.com/images/I/41Ff7w71V1L._SX366_BO1,204,203,200_.jpg"
      },
      {
        title: "Comprehensive Dictionary of Education ",
        author: "Maqbool Ahmad",
        image: "https://images-na.ssl-images-amazon.com/images/I/61LQ8qC-zgL.jpg"
     },
     {
         title: "An Introduction to Education ",
         author: "Dr.Syed Noor",
         image: "https://images-na.ssl-images-amazon.com/images/I/41zbY8XLMJL._SX331_BO1,204,203,200_.jpg"
      },
      {
         title: "The Gruffalo",
         author: "Julia Danaldson",
         image: "https://bilingualkidspot.com/wp-content/uploads/2016/07/the-gruffalow.jpg"
      },
      {
         title: "Foundation of Nursing",
         author: "R. Nissanka",
         image: "https://images-na.ssl-images-amazon.com/images/I/41i43Wi5z1L.jpg"
      },
 ];

function booksList(){
    document.getElementsByClassName('container-initial')[0].innerHTML = '';
    books.forEach(function(row){
        /**
         * create card
         */
        let div_card = document.createElement('div');
        div_card.className = 'card';
        /**
         * create img
         */
        let el_img = document.createElement('img');
        el_img.src = row.image;
        /**
         * create container details
         */
        let div_card_container = document.createElement('div');
        div_card_container.className = 'container';
        let div_card_container_h4 = document.createElement('h4');
        div_card_container_h4.textContent = row.author;
        let div_card_container_p = document.createElement('p');
        div_card_container_p.textContent = row.title;

        div_card_container.appendChild(div_card_container_p);
        div_card_container.appendChild(div_card_container_h4);

        /**
         * append all in card then add card into card_container class
         */
        div_card.appendChild(el_img);
        div_card.appendChild(div_card_container);
        document.getElementsByClassName('container-initial')[0].appendChild(div_card);
    });
}

booksList();

function addnew(event){
    event.preventDefault();
    let oForm = document.forms[0];
    let _title = oForm.elements["titleBook"].value || '';
    let _author = oForm.elements['autherBook'].value || '';
    let _image = oForm.elements['imgBook'].value || '';
    if(_title && _author && _image){
        books.push({
                title: _title,
                author: _author,
                image: _image
            });
        oForm.reset();
        booksList();
    }
    
}