document.addEventListener('DOMContentLoaded', function() 
{
    document.querySelector('a[href="#about"]').addEventListener('click', function(e) 
    {
        e.preventDefault(); // Prevent default link behavior
        document.getElementById('about').classList.add('focus'); // Add 'focus' class to trigger yellow border effect
        setTimeout(function() 
        {document.getElementById('about').classList.remove('focus');}, 3000); // Remove 'focus' class after 3 seconds
        var yOffset = -200; // Adjust scrolling offset as needed
        var element = document.getElementById('about');
        var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'}); // Scroll to the element
    });
    // Function to add event listener to each link in the navbar
    function addNavigationListener(selector, targetId) 
    {
        document.querySelector(selector).addEventListener('click', function(e) 
        {
            e.preventDefault(); // Prevent default linking behavior
            document.getElementById(targetId).classList.add('focus'); // Added a 'focus' class to display the yellow effect
            setTimeout(function() // Clear the 'focus' class after 3 seconds
            {                 
                document.getElementById(targetId).classList.remove('focus');
            }, 3000);
            var yOffset = -200; // Set the scroll offset
            var element = document.getElementById(targetId);
            var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'}); // Scroll to the target element with a smooth scroll effect
        });
    }
    // Added event listener for each navbar link
    addNavigationListener('a[href="#about"]', 'about');
    addNavigationListener('a[href="#education"]', 'education');
    addNavigationListener('a[href="#experience"]', 'experience');
    addNavigationListener('a[href="#certificates"]', 'certificates');
    addNavigationListener('a[href="#skills"]', 'skills');
    addNavigationListener('a[href="#projects"]', 'projects');
    addNavigationListener('a[href="#contact"]', 'contact');
});