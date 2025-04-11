function bestScenesDuration(data){
    for(let i of data){
        let obj = {
          movieName: i.movieName,
          longestSceneDuration: null
        }
        
        let max = -Infinity;
        
        i.bestScenes.forEach((ele) => {
        let durationNum = parseInt(ele.duration)  ;
        max = Math.max(durationNum, max)
          
        })
        
        obj.longestSceneDuration = max;
        return obj
    }
}
  
function averageRatingWithReduce(data){
   let sum =  data.reduce((acc, curr) => acc + curr.rating,0)
   let avg = sum / data.length;
   return avg;
}
  
function sortMovieList(data){
    data.sort((a,b)=>{
if(b.rating>a.rating) return 1;
else if(b.rating<a.rating) return -1;
else if(b.rating==a.rating){
    if(b.movieName>a.movieName) return 1;
}
return 0;
    })
     
        //b.rating - a.rating) && data.sort((a, b) => a.movieName - b.movieName);

     return data
}
  
  
let data = [
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
]
  
console.log(bestScenesDuration(data));
console.log(averageRatingWithReduce(data))
console.dir(sortMovieList(data), {depth: null});