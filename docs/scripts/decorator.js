const observer = new MutationObserver(function(mutations) {
    const sidebar = document.querySelector('[aria-label="Docs sidebar"]');
    if (sidebar) 
    {
        // Check If API Reference Exists, If Not Create it
        const apiReferenceLink = sidebar.querySelector('a.menu__link[href="/docs/api"]');
        if (!apiReferenceLink)
        {
            // Add API Reference Item to Sidebar
            const newItem = document.createElement('li');
            newItem.style.listStyleType = 'none';
            newItem.classList.add('theme-doc-sidebar-item-link', 'theme-doc-sidebar-item-link-level-1', 'menu__list-item');
            const newLink = document.createElement('a');
            newLink.classList.add('menu__link');
            newLink.href = '/docs/api';
            newLink.target = '_blank';   
            newLink.textContent = 'API Reference';
            newItem.appendChild(newLink);
            sidebar.appendChild(newItem);
        }
    }
  });
  observer.observe(document.body, {childList: true, subtree: true});
  