<<<<<<< HEAD
// Initialize medium zoom.
$(document).ready(function() {
  medium_zoom = mediumZoom('[data-zoomable]', {
    background: getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
  })
});
=======
$(document).ready(function(){medium_zoom=mediumZoom("[data-zoomable]",{background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})});
>>>>>>> 17c3338db7dc10b65255ac87d3c98c88e43a9e86
