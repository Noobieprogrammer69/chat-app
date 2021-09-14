import { ChatEngine,} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="9428eb7d-e84d-4904-8c9d-a8c7e0f3c69d"
            userName="MyChat"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;