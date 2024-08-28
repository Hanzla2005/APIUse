import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  showEmojiContainer: boolean = false;
  message: string = '';
  messages: { text: string, type: 'sent' | 'received' }[] = []; // Array to hold messages
  emojis: { name: string, code: string }[] = [
    { name: 'happy', code: '😊' },
    { name: 'sad', code: '😢' },
    { name: 'thumbs-up', code: '👍' },
    { name: 'heart', code: '❤️' },
    { name: 'angry', code: '😠' },
    { name: 'laugh', code: '😂' },
    { name: 'surprised', code: '😲' },
    { name: 'wink', code: '😉' },
    { name: 'cry', code: '😭' },
    { name: 'kiss', code: '😘' },
    { name: 'star', code: '⭐' },
    { name: 'thumbs-down', code: '👎' },
    { name: 'hand-left', code: '👋' },
    { name: 'hand-right', code: '👋' }
    // Add more emojis as needed
  ];

  constructor() { }

  ngOnInit() {
    // Initialization logic if needed
  }

  toggleEmojiContainer() {
    this.showEmojiContainer = !this.showEmojiContainer;
  }

  selectEmoji(emojiCode: string) {
    // Add the selected emoji to the message input field
    this.message += ` ${emojiCode}`;
    // Hide the emoji container after selecting an emoji
    this.showEmojiContainer = false;
  }

  sendMessage() {
    if (this.message.trim()) {
      // Add the message to the messages array with type 'sent'
      this.messages.push({ text: this.message, type: 'sent' });
      console.log('Sent message:', this.message);
      this.message = ''; // Clear the input after sending
      // Optionally, you can simulate a received message
      setTimeout(() => {
        this.messages.push({ text: 'This is a simulated response.', type: 'received' });
      }, 1000); // Simulate a response after 1 second
    }
  }

  
}
