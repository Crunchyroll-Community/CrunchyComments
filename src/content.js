// Check if we're on an anime or episode page
function isRelevantPage() {
    const url = window.location.href;
    return url.includes('/watch/') || url.includes('/series/') || url === 'https://www.crunchyroll.com/';
}

function extractPageInfo(url) {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    
    if (urlObj.pathname === '/') {
        return {
            type: 'home',
            id: 'homepage'
        };
    } else if (urlObj.pathname.includes('/watch/')) {
        return {
            type: 'episode',
            id: pathParts[pathParts.indexOf('watch') + 1]
        };
    } else if (urlObj.pathname.includes('/series/')) {
        return {
            type: 'series',
            id: pathParts[pathParts.indexOf('series') + 1]
        };
    }
    return null;
}

function createFloatingButton() {
    if (document.getElementById('crunchyroll-comments-button')) {
        return;
    }

    const button = document.createElement('div');
    button.id = 'crunchyroll-comments-button';
    button.innerHTML = '💬';
    button.title = 'Open Comments';
    
    button.addEventListener('click', () => {
        const currentUrl = window.location.href;
        const pageInfo = extractPageInfo(currentUrl);
        
        if (pageInfo) {
            const params = new URLSearchParams({
                type: pageInfo.type,
                id: pageInfo.id
            });

            window.open(
                `https://crunchyroll-community.github.io/Comments/?${params.toString()}`,
                'CrunchyrollComments',
                'width=600,height=' + window.screen.height + ',right=20,top=0'
            );
        }
    });

    document.body.appendChild(button);
}

// Check if we should add the button
if (isRelevantPage()) {
    setTimeout(createFloatingButton, 2000);
}

// Handle dynamic page navigation
const observer = new MutationObserver((mutations) => {
    if (isRelevantPage()) {
        createFloatingButton();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});