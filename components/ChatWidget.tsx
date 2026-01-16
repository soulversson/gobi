import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { sendMessageStream } from '../services/gemini';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Góðan dag! Ég er gervigreindaraðstoðarmaður Gobi. Hvernig get ég aðstoðað þig í dag?',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const stream = sendMessageStream(userMsg.text);
      
      let fullResponse = '';
      const botMsgId = (Date.now() + 1).toString();
      
      // Add initial empty bot message
      setMessages(prev => [...prev, {
        id: botMsgId,
        role: 'model',
        text: '',
        timestamp: Date.now()
      }]);

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: fullResponse } : msg
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'Afsakið, eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur síðar.',
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-gobi-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gobi-primary mr-2 animate-pulse"></div>
              <span className="font-semibold">Gobi Aðstoð</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gobi-light space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gobi-primary text-white rounded-br-none'
                      : 'bg-white text-gobi-dark shadow-sm border border-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.role === 'model' ? (
                    <ReactMarkdown
                        components={{
                            strong: ({node, ...props}: any) => <span className="font-bold" {...props} />,
                            p: ({node, ...props}: any) => <p className="mb-2 last:mb-0" {...props} />,
                            ul: ({node, ...props}: any) => <ul className="list-disc ml-4 mb-2" {...props} />,
                            ol: ({node, ...props}: any) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                            li: ({node, ...props}: any) => <li className="mb-1" {...props} />,
                            a: ({node, ...props}: any) => <a className="underline text-gobi-primary hover:text-gobi-accent" target="_blank" rel="noopener noreferrer" {...props} />
                        }}
                    >
                        {msg.text}
                    </ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1].role === 'user' && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                    <Loader2 className="h-4 w-4 animate-spin text-gobi-primary" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Skrifaðu skilaboð..."
                className="flex-1 px-4 py-2 bg-slate-100 rounded-full border-none focus:ring-2 focus:ring-orange-100 outline-none text-slate-700 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-gobi-primary text-white rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gobi-primary hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;