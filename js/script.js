// Main JavaScript for Hello World App

document.addEventListener('DOMContentLoaded', function() {
    // Get button element
    const button = document.getElementById('changeText');
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p');
    
    // Messages array
    const messages = [
        { title: "Hello, World!", message: "Welcome to my first web application." },
        { title: "Hello, Developer!", message: "You've clicked the button!" },
        { title: "Hello, Friend!", message: "Thanks for exploring this app." },
        { title: "Hello, Explorer!", message: "Keep clicking for more messages!" }
    ];
    
    let currentIndex = 0;
    
    // Add click event listener
    button.addEventListener('click', function() {
        // Update to next message
        currentIndex = (currentIndex + 1) % messages.length;
        
        // Animate text change with fade effect
        heading.style.opacity = 0;
        paragraph.style.opacity = 0;
        
        setTimeout(() => {
            heading.textContent = messages[currentIndex].title;
            paragraph.textContent = messages[currentIndex].message;
            
            heading.style.opacity = 1;
            paragraph.style.opacity = 1;
        }, 300);
    });
    
    // Add transition styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        h1, p {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});