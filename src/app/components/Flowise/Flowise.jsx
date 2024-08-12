// src/components/Flowise/Flowise.tsx
import { BubbleChat } from 'flowise-embed-react';

const Flowise = () => {
  return (
    <BubbleChat
      chatflowid="4c6a8b10-693c-4331-a42a-d4b874a05326"
      apiHost="https://isanjit3-sanjit-ai.hf.space"
      theme={{
        button: {
          backgroundColor: "#EF4444",
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: "white",
          customIconSrc: "https://raw.githubusercontent.com/isanjit3/personal-site/bc858141628d2583574a543b10b179aadcd2bf04/public/assets/images/flowise/button_icon.png",
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: 'Talk with AI me! 🤖',
          tooltipBackgroundColor: 'black',
          tooltipTextColor: 'white',
          tooltipFontSize: 16,
        },
        chatWindow: {
          showTitle: true,
          title: 'Sanjit AI',
          titleAvatarSrc: '',
          showAgentMessages: false,
          welcomeMessage: 'Welcome to Sanjit AI! I\'m here to answer your questions about my experiences, projects, and skills. Feel free to ask, or even schedule a meeting with me. \
                          This is a work in progress, so some info might be off—thanks for your patience and feedback! 😊',
          errorMessage: 'Uh oh! Something went wrong. Please try again.',
          backgroundColor: "#181818",
          height: 700,
          width: 400,
          fontSize: 16,
          poweredByTextColor: "#303235",
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc: "https://raw.githubusercontent.com/isanjit3/personal-site/main/public/assets/images/flowise/bot_avatar.png",
          },
          userMessage: {
            backgroundColor: "#EF4444",
            textColor: "#ffffff",
            showAvatar: true,
            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
          },
          textInput: {
            placeholder: 'Type your question',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#EF4444',
            maxChars: 75,
            maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 75 characters.',
            autoFocus: true,
            sendMessageSound: false,
            receiveMessageSound: false,
          },
          feedback: {
            color: '#303235',
          },
          footer: {
            textColor: '#303235',
            text: '',
            company: '',
            companyLink: '',
          }
        }
      }}
    />
  );
};

export default Flowise;