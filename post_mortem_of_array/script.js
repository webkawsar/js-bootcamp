// The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  
  const ratings = watchList.map(item => {
    return {title: item["Title"], rating: item["imdbRating"]}
  })
  
  console.log(ratings);
  // Only change code above this line
  
  console.log(JSON.stringify(ratings));
  
  
  
  // custom map method
  // The global variable
  const s = [23, 65, 98, 5];
  
  Array.prototype.myMap = function(callback) {

    const newArray = [];
    for(let i = 0; i < this.length; i++) {
      
      const item = callback(this[i], i, this);
      newArray.push(item);
    }
    
    return newArray;
  };
  
  const new_s = s.myMap(function(item) {
    return item * 2;
  });
  
  console.log(new_s); // [46, 130, 196, 10]
  
  
  
  
  // custom filter method
  // The global variable
//   const s = [23, 65, 98, 5];
  
//   Array.prototype.myFilter = function(callback) {
//     // Only change code below this line
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) {
//       const result = callback(this[i], i, this);
//       if(result) {
//         newArray.push(this[i]);
//       }
//     }
//     // Only change code above this line
//     return newArray;
//   };
  
//   const new_s = s.myFilter(function(item) {
//     return item % 2 === 1;
//   });
//   console.log(new_s);
  
  
  
  // The global variable
  // const list = [
  //   {
  //     "Title": "Inception",
  //     "Year": "2010",
  //     "Rated": "PG-13",
  //     "Released": "16 Jul 2010",
  //     "Runtime": "148 min",
  //     "Genre": "Action, Adventure, Crime",
  //     "Director": "Christopher Nolan",
  //     "Writer": "Christopher Nolan",
  //     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
  //     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
  //     "Language": "English, Japanese, French",
  //     "Country": "USA, UK",
  //     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
  //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //     "Metascore": "74",
  //     "imdbRating": "8.8",
  //     "imdbVotes": "1,446,708",
  //     "imdbID": "tt1375666",
  //     "Type": "movie",
  //     "Response": "True"
  //   },
  //   {
  //     "Title": "Interstellar",
  //     "Year": "2014",
  //     "Rated": "PG-13",
  //     "Released": "07 Nov 2014",
  //     "Runtime": "169 min",
  //     "Genre": "Adventure, Drama, Sci-Fi",
  //     "Director": "Christopher Nolan",
  //     "Writer": "Jonathan Nolan, Christopher Nolan",
  //     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
  //     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  //     "Language": "English",
  //     "Country": "USA, UK",
  //     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
  //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
  //     "Metascore": "74",
  //     "imdbRating": "8.6",
  //     "imdbVotes": "910,366",
  //     "imdbID": "tt0816692",
  //     "Type": "movie",
  //     "Response": "True"
  //   },
  //   {
  //     "Title": "The Dark Knight",
  //     "Year": "2008",
  //     "Rated": "PG-13",
  //     "Released": "18 Jul 2008",
  //     "Runtime": "152 min",
  //     "Genre": "Action, Adventure, Crime",
  //     "Director": "Christopher Nolan",
  //     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
  //     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
  //     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
  //     "Language": "English, Mandarin",
  //     "Country": "USA, UK",
  //     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
  //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  //     "Metascore": "82",
  //     "imdbRating": "9.0",
  //     "imdbVotes": "1,652,832",
  //     "imdbID": "tt0468569",
  //     "Type": "movie",
  //     "Response": "True"
  //   },
  //   {
  //     "Title": "Batman Begins",
  //     "Year": "2005",
  //     "Rated": "PG-13",
  //     "Released": "15 Jun 2005",
  //     "Runtime": "140 min",
  //     "Genre": "Action, Adventure",
  //     "Director": "Christopher Nolan",
  //     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
  //     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
  //     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
  //     "Language": "English, Urdu, Mandarin",
  //     "Country": "USA, UK",
  //     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
  //     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
  //     "Metascore": "70",
  //     "imdbRating": "8.3",
  //     "imdbVotes": "972,584",
  //     "imdbID": "tt0372784",
  //     "Type": "movie",
  //     "Response": "True"
  //   },
  //   {
  //     "Title": "Avatar",
  //     "Year": "2009",
  //     "Rated": "PG-13",
  //     "Released": "18 Dec 2009",
  //     "Runtime": "162 min",
  //     "Genre": "Action, Adventure, Fantasy",
  //     "Director": "James Cameron",
  //     "Writer": "James Cameron",
  //     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
  //     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  //     "Language": "English, Spanish",
  //     "Country": "USA, UK",
  //     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
  //     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
  //     "Metascore": "83",
  //     "imdbRating": "7.9",
  //     "imdbVotes": "876,575",
  //     "imdbID": "tt0499549",
  //     "Type": "movie",
  //     "Response": "True"
  //   }
  // ];
  
  // function getRating(watchList) {
  //   // Only change code below this line
    
  //   let averageRating = watchList.reduce((acc, cur)=> {
         
  //     if(cur.Director === 'Christopher Nolan') {
  //       acc.count++;
  //       acc.sum += Number(cur.imdbRating);
  //       return acc;
  //     }
  
      
  //     console.log(acc);
  //     return acc.sum / acc.count 
  //     // return cur.Director === 'Christopher Nolan' ? cur.imdbRating 
  //   }, {sum: 0, count: 0});
  
    
  //   // Only change code above this line
  //   return averageRating;
  // }
  
  // console.log(getRating(list));
  
  
  
  // const squareList = arr => {
  //   // Only change code below this line
  //   const result = arr.filter(item => {
  //     if(item > 0 && Number.isInteger(item)) {
  //       return item * item
  //     }
  //   })
  //   return result;
    
  //   // Only change code above this line
  // };
  
  // const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  // console.log(squaredIntegers);
  // // [16, 1764, 36]
  
  
  // const arr = [1, 3, 2, 5, 4];
  // const res = arr.sort();
  // console.log(res);
  // console.log(arr);
  
  
  
  // // Only change code below this line
  // function urlSlug(title) {
  
  //   return title.toLowerCase().trim().split(/\s+/)
  // }
  // // Only change code above this line
  // console.log(urlSlug(" Winter Is   Coming"))
  
  
  
  
  function sum(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return sum(arr, n-1) + arr[n -1 ]
    }
  }
  console.log(sum([2, 3, 4, 5], 3));
  
  
  
  
  
  // Only change code below this line
  // function countdown(n){
  //   if(n <= 0) {
  //     return []
  //   } else {
  
  //     const countArray = countdown(n - 1);
  //     countArray.unshift(n);
  //     return countArray;
  //   }
  // }
  // // Only change code above this line
  
  // console.log(countdown(10));
  
  
  
  function countdown(first, end){
   
  
      const countArray = countdown(first - 1);
      countArray.unshift(first);
      return countArray;
    
  }
  // Only change code above this line
  
  // console.log(countdown(10, 20));
  
  
  function diffArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2];
    const uniqueArr = [];
  
    for (let i = 0; i < newArr.length; i++) {
      const element = newArr[i];
  
  
      if(!uniqueArr.includes(element)) {
        uniqueArr.push(element)
      }
      
    }
  
    return uniqueArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  