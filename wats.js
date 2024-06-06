document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
  
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;
  
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = messageText;
  
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
  
        messageInput.value = '';
        messageInput.focus();
  
        autoResponse(messageText);
    }
  
    function autoResponse(userMessage) {
        let responseText = '';
        const lowerCaseMessage = userMessage.toLowerCase();
  
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            responseText = 'Hello, How are you?';
        } else if (lowerCaseMessage.includes('how are you')) {
            responseText = 'I am good, thank you! How about you?';
        }else if (lowerCaseMessage.includes('yasir')) {
            responseText = 'Yasir Rasheed Qureshi';
        }else if (lowerCaseMessage.includes('cco118488')) {
            responseText = 'Teacher Rizwan Bhatti';
        }else if (lowerCaseMessage.includes('it')) {
            responseText = 'Saylani Mass IT Programing';
        }else if (lowerCaseMessage.includes('fine')) {
            responseText = 'Great';
        }
         else if (lowerCaseMessage.includes('bye')) {
            responseText = 'Goodbye! Have a nice day!';
        } else if (lowerCaseMessage.includes('thank you')) {
            responseText = 'You are welcome!';
        } else {
            responseText = 'Sorry, I didn\'t understand that. Can you please rephrase?';
        }
  
        const responseElement = document.createElement('div');
        responseElement.classList.add('chat-message');
        responseElement.textContent = responseText;
        responseElement.style.backgroundColor = '#f1f0f0'; // Different background for bot responses
  
        setTimeout(() => {
            chatMessages.appendChild(responseElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000); // Delay response by 1 second for a more natural feel
    }
  
    sendButton.addEventListener('click', sendMessage);
  
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
