document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const screen = document.querySelector('.screen');

    let messageInput = null;

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const src = icon.src;

            if (messageInput && !src.includes('message.png')) {
                messageInput.remove();
                messageInput = null;
            }

            if (src.includes('facebook.png')) {
                window.open('https://www.facebook.com', '_blank');
                return;
            }

            if (src.includes('youtube.png')) {
                window.open('https://www.youtube.com', '_blank');
                return;
            }

            if (src.includes('message.png')) {
                if (!messageInput) {
                    messageInput = document.createElement('input');
                    messageInput.type = 'text';
                    messageInput.placeholder = 'Type your message...';
                    messageInput.classList.add('message-input');

                    screen.appendChild(messageInput);

                    // Focus input so user can type
                    setTimeout(() => {
                        messageInput.focus();
                    }, 50);
                }
                return;
            }

            if (src.includes('new.png')) {
                if (messageInput) {
                    messageInput.remove();
                    messageInput = null;
                }
                return;
            }

            const newIcon = document.createElement('img');
            newIcon.src = src;
            newIcon.classList.add('moving-icon');
            screen.appendChild(newIcon);

            setTimeout(() => {
                const moveX = Math.floor(Math.random() * 40) - 20;
                const moveY = Math.floor(Math.random() * 40) - 20;
                newIcon.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1.5)`;
                newIcon.style.opacity = 1;
            }, 10);

            setTimeout(() => {
                newIcon.remove();
            }, 1200);
        });
    });
});
