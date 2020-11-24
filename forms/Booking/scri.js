const container = document.querySelector('.container');
const seats = document.querySelectorAll('.rows.seat:not(.occupied');
const movieselect = document.getElementById('movies');
const count = document.getElementById('count');
const total = document.getElementById('total');
  let ticketprice = +movieselect.value;
 //save movie index and price
 function setmoviedata(movieIndex,moviePrice){
     localStorage.setItem('selectedMovieIndex',movieIndex);
     localStorage.setItem('selectedmoviePrice',moviePrice);
 }


  //update total and count
  function updateselectedcount(){
      const selectedseats = document.querySelectorAll('.rows .seat.selected');
       const seatsindex = [...selectedseats].map(function(seat) {
           return [...seats].indexOf(seat);
           
       });
       localStorage.setItem('slectedseats',JSON.stringify(seatsindex)); 
       


      const selectedseatscounts = selectedseats.length;
      
      count.innerText = selectedseatscounts; 
      total.innerHTML = selectedseatscounts * ticketprice;
  }
   //movie select 
    movieselect.addEventListener('change', e=> {
    ticketprice = +e.target.value;
    setmoviedata(e.target.selectedIndex,e.target.value);
    updateselectedcount();
 
   });
  //add event listner 
  container.addEventListener('click',(e) =>{
      if(e.target.classList.contains('seat') && 
      !e.target.classList.contains('occupied')){
          e.target.classList.toggle('selected');
      
      updateselectedcount();
      }
  });