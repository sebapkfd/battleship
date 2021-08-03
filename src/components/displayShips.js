const displayShips = (size, id, dir) => {
   let boxAttacked;
   if(dir === 'horizontal') {
       const lastPos = parseInt(id) + size - 1;
       for(let i = id; i <= lastPos; i++) {
           boxAttacked = document.getElementById(`User${i}`);
           if (boxAttacked.className !== 'box-selected') {
               boxAttacked.className = 'box-selected';
            }
        }
   }
   else if(dir ==='vertical') {
       const lastPos = id + (size-1)*10;
       for(let i = id; i <= lastPos; i+= 10) {
           boxAttacked = document.getElementById(`User${i}`);
           if (boxAttacked.className !== 'box-selected') {
               boxAttacked.className = 'box-selected';
            }
        }
    }
}

export default displayShips