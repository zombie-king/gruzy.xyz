// Main JavaScript file for gruzy.xyz

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('gruzy.xyz loaded successfully!');
    
    // Initialize the application
    init();
});

// Initialize application
function init() {
    // Add your initialization code here
    console.log('Application initialized');
    
    // Example: Add click handlers, setup components, etc.
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Example: Handle button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', e.target);
        });
    });
    
    // Handle escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideFullLogo();
        }
    });
}

// Logo modal functions
function showFullLogo() {
    const modal = document.getElementById('logoModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function hideFullLogo() {
    const modal = document.getElementById('logoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Utility functions
const utils = {
    // Example utility function
    formatDate: function(date) {
        return new Date(date).toLocaleDateString();
    },
    
    // Example API call function
    fetchData: async function(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
};

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { utils, init, showFullLogo, hideFullLogo };
}
