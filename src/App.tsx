import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, ChevronRight, ArrowRight, Github, MessageSquare, Info, Heart, Instagram, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}


const responses = {
  greeting: [
    "Yo yo! Wassup? How can I hook you up?", 
    "Ayo! Need some help, bestie?", 
    "Wassup, pookie? What’s on your mind?"
  ],

  unknown: [
    "Bruh, I’m lowkey confused. Try again?", 
    "Huh? My brain just blue-screened. Say that one more time?", 
    "Not gonna lie, I got no clue. Reword that for me?"
  ],

  thanks: [
    "No prob, bestie!", 
    "I gotchu, king/queen!", 
    "All love, fam!"
  ],

  goodbye: [
    "Aight, peace out!", 
    "Catch ya later, alligator!", 
    "Stay vibey, don’t be mid!"
  ],

  help: [
    "I gotchu, just hit me up!", 
    "I’m built different—ask me anything!", 
    "Need help? Say less, I got your back."
  ],

  excited: [
    "Omg yas, slay!", 
    "That’s big W energy!", 
    "Ayy, that’s so fire!"
  ],

  sad: [
    "Aww, pookie, it’s okay!", 
    "Sending virtual hugs!", 
    "It be like that sometimes. Lemme know if you need to vent."
  ],

  funny: [
    "Bro, that’s straight-up goofy.", 
    "I can’t, I’m wheezing.", 
    "Nahhh, you wild for that one."
  ],

  savage: [
    "That’s a whole L, not gonna lie.", 
    "Ratio + didn’t ask.", 
    "Oop—spicy take, but I respect it."
  ]
};

function Navbar({ userName }: { userName?: string | null }) {
  return (
    <nav className="bg-grey-900 border-b border-green-500">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">GPTars</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/923313103442?text=Hey%20Sarmad!%20I%20want%20to%20chat%20with%20you." className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Whatsapp</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://www.instagram.com/sarmad0/" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">insta</span>
            </a>
            {userName && (
              <div className="hidden sm:block px-3 py-1 bg-green-500 text-black rounded">
                {userName}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-green-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>Developed</span>
            
            <span>by</span>
            <span className="text-green-500 font-bold">Sarms</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="tel:+923313103442" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper function to generate responses based on input
function generateResponse(input: string, userName: string): string {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
    return `${responses.greeting[Math.floor(Math.random() * responses.greeting.length)]} What’s good, ${userName}?`;
}
if (lowerInput.includes('thank')) {
    return `${responses.thanks[Math.floor(Math.random() * responses.thanks.length)]} You already know, ${userName}.`;
}
if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
    return `${responses.goodbye[Math.floor(Math.random() * responses.goodbye.length)]} Stay vibey, ${userName}.`;
}
if (lowerInput.includes('help')) {
    return `${responses.help[Math.floor(Math.random() * responses.help.length)]} Say less, ${userName}.`;
}
if (lowerInput.includes('sad') || lowerInput.includes('feeling down')) {
    return `${responses.sad[Math.floor(Math.random() * responses.sad.length)]} You good, ${userName}?`;
}
if (lowerInput.includes('excited') || lowerInput.includes('hyped')) {
    return `${responses.excited[Math.floor(Math.random() * responses.excited.length)]} Let’s gooo, ${userName}!`;
}
if (lowerInput.includes('funny') || lowerInput.includes('joke')) {
    return `${responses.funny[Math.floor(Math.random() * responses.funny.length)]} You wild for that, ${userName}.`;
}
if (lowerInput.includes('insult') || lowerInput.includes('roast me')) {
    return `${responses.savage[Math.floor(Math.random() * responses.savage.length)]} You sure you ready for this, ${userName}?`;
}
if (lowerInput.includes('mid')) {
    return `Nah, ${userName}, that’s straight-up mid.`;
}
if (lowerInput.includes('fire') || lowerInput.includes('lit')) {
    return `Big W, ${userName}, that’s straight heat.`;
}
if (lowerInput.includes('rizz')) {
    return `Bro, you got that unspoken rizz, ${userName}.`;
}
if (lowerInput.includes('cap')) {
    return `Nah, that’s cap, ${userName}. Try again.`;
}
if (lowerInput.includes('ratio')) {
    return `L + ratio + didn’t ask, ${userName}.`;
}
if (lowerInput.includes('skibidi')) {
    return `Bro, what timeline are we in, ${userName}?`;
}

  
  if (lowerInput.length > 0) {
    return `I understand you're asking about "${input}". While I'm a simple demo version, I can engage in basic conversation. Feel free to ask me something else, ${userName}!`;
  }
  
  return responses.unknown[Math.floor(Math.random() * responses.unknown.length)];
}

function WelcomePage({ onStart }: { onStart: (name: string) => void }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Please enter a valid name (at least 2 characters)');
      return;
    }
    onStart(name.trim());
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-gray-900 border border-green-500 rounded-lg shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8" />
            <h1 className="text-3xl font-bold">GPTars</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                enter your name sir
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-2 bg-black border border-green-500 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="your name pls"
              />
              {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors"
            >
              start chat <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ChatInterface({ userName }: { userName: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Send welcome message when chat starts
    const welcomeMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: `Hey ${userName}! What's up? Your AI assistant is here—how can I help you today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [userName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate processing time for more natural interaction
    setTimeout(() => {
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: generateResponse(input, userName),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 500 + Math.random() * 1000); // Random delay between 500-1500ms
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col">
      <Navbar userName={userName} />
      <div className="flex-1 container mx-auto max-w-4xl p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'assistant' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded ${
                  message.role === 'assistant'
                    ? 'bg-gray-900 border border-green-500'
                    : 'bg-green-500 text-black'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-1 mb-1 text-xs opacity-50">
                    <ChevronRight className="w-3 h-3" />
                    GPTars
                  </div>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
                <div className="text-xs opacity-50 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your message..."
            className="flex-1 px-4 py-2 bg-gray-900 border border-green-500 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const [userName, setUserName] = useState<string | null>(null);

  if (!userName) {
    return <WelcomePage onStart={setUserName} />;
  }

  return <ChatInterface userName={userName} />;
}

export default App;
