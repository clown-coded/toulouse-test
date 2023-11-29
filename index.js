function createMovement(){
    let zIndex = 1;

    document.querySelectorAll('.shape').forEach(shape => {
        shape.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
    
        let offsetX, offsetY;
       
    
        function handleMouseDown(event) {
            offsetX = event.clientX - shape.getBoundingClientRect().left;
            offsetY = event.clientY - shape.getBoundingClientRect().top;
            zIndex++;
            document.addEventListener('mousemove', handleMouseMove);
        }
    
        function handleMouseUp(event) {
            document.removeEventListener('mousemove', handleMouseMove);

            localStorage.setItem(`${event.target.id}x`, event.target.getBoundingClientRect().left);
            localStorage.setItem(`${event.target.id}y`, event.target.getBoundingClientRect().top);
            console.log(localStorage.getItem(`${ event.target.id}x`));

        }
    
        function handleMouseMove(event) {
            let x = event.clientX;
            let y = event.clientY;
    
            let positionX = x - offsetX;
            let positionY = y - offsetY;
    
    
            shape.style.transform = `translate(${positionX}px, ${positionY}px)`;
            shape.style.zIndex = zIndex
            
        }
    });
    
}


function renderObjects(){

   document.querySelectorAll('.shape').forEach(shape =>{
  
    
    if(localStorage.getItem(`${shape.id}x`) != null && localStorage.getItem(`${shape.id}x`) != null){
        const x = localStorage.getItem(`${shape.id}x`)
        const y = localStorage.getItem(`${shape.id}y`)
        shape.style.transform = `translate(${x}px, ${y}px)`;
        
    }
   })
}

renderObjects()
createMovement()