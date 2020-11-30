function toggleText() {
  let  button = document.querySelector('.toggle-text-button');
    
  button.addEventListener("click", function() {
       if (document.getElementById('text').hidden) {
      document.getElementById('text').hidden = false;
     } else {
       document.getElementById('text').hidden = true;
     }
  });
}
