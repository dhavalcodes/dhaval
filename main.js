document.addEventListener("DOMContentLoaded", function() {
    // Update the 'year' element with the current year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Rest of the SVG manipulation code
    const svgElement = document.querySelector('.logo-svg'); // Select the SVG
  
    svgElement.addEventListener('click', function() {
      changeRectProperties();
    });
  
    function getRandomRadius() {
      return Math.floor(Math.random() * 11);
    }
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function changeRectProperties() {
      const rects = document.querySelectorAll('.logo-svg rect');
      rects.forEach(function(rect) {
        const radius = getRandomRadius();
        const color = getRandomColor();
        rect.setAttribute('rx', radius); // Set horizontal corner radius
        rect.setAttribute('ry', radius); // Set vertical corner radius
        rect.setAttribute('fill', color); // Change the fill color
      });
    }
  });
  