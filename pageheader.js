// Clickable header function
function createHeader() {
    // Create header element
    const header = document.createElement('header');

    // Create anchor elements with images
    const links = [
        { href: 'index.html', src: './images/logo.png', alt: 'Home', title: 'Home' },
        { href: 'aboutUs.html', src: './images/aboutUsSticker.png', alt: 'About Us', title: 'About Us' },
        { href: 'products.html', src: './images/productsSticker.png', alt: 'Products', title: 'Products' },
        { href: 'contactUs.html', src: './images/contactUsSticker.png', alt: 'Contact Us', title: 'Contact Us' },
    ];

    // Loop through links and create the necessary elements
    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;

        const image = document.createElement('img');
        image.src = link.src;
        image.width = 50;
        image.alt = link.alt;
        image.title = link.title;

        anchor.appendChild(image);
        header.appendChild(anchor);
    });

    // Create horizontal rule element
    const hr = document.createElement('hr');
    header.appendChild(hr);
    // Append the header to the body (or to a specific element)
    document.body.prepend(header);
    // for the horizontal rule
    document.body.prepend(header);
}

// Call the function to create and append the header
createHeader();
