import React, { useState, useEffect, useRef } from 'react';

const AIAssistant = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [sideBarOpen, setSideBarOpen] = useState(false);
   const [messages, setMessages] = useState([
      { role: 'assistant', text: 'SYSTEM_INITIALIZED: Greetings. I am the Devnexes OS Assistant. How can I facilitate your mission-critical deployment today?' }
   ]);
   const [inputValue, setInputValue] = useState('');
   const [isTyping, setIsTyping] = useState(false);
   const chatRef = useRef(null);

   useEffect(() => {
      if (chatRef.current) {
         chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
   }, [messages, isTyping]);

   const handleSend = async (e) => {
      e.preventDefault();
      if (!inputValue.trim()) return;

      const userMsg = { role: 'user', text: inputValue };
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
         setIsTyping(false);
         const assistantMsg = { 
            role: 'assistant', 
            text: `SIGNAL_RECEIVED: Processing demand for "${userMsg.text}". Our engineers are ready to facilitate your architecture. Would you like to view our specialized Case Studies?` 
         };
         setMessages(prev => [...prev, assistantMsg]);
      }, 1500);
   };

   useEffect(() => {
      window.toggleDevnexesAssistant = () => setIsOpen(prev => !prev);
      return () => delete window.toggleDevnexesAssistant;
   }, []);

   return (
      <>
         {/* 📟 TACTICAL CHAT TERMINAL */}
         {isOpen && (
            <div className="ai-terminal-lux animate-reveal-up">
               
               {/* 📂 SIDEBAR (LHS) */}
               <div className={`terminal-sidebar ${sideBarOpen ? 'open' : ''}`}>
                  <div className="sidebar-header">
                     <span className="sidebar-title">ASSISTANT_LOGS</span>
                  </div>
                  <div className="sidebar-content">
                     <div className="sidebar-item active">Current Thread</div>
                     <div className="sidebar-item">Cloud Architecture</div>
                     <div className="sidebar-item">Security Audit V3</div>
                  </div>
                  <div className="sidebar-footer">
                     {isLoggedIn ? (
                        <div className="user-profile">
                           <div className="user-avatar">AD</div>
                           <div className="user-info">
                              <p className="u-name">Admin User</p>
                              <button className="logout-link" onClick={() => setIsLoggedIn(false)}>Logout</button>
                           </div>
                        </div>
                     ) : (
                        <button className="google-login-btn" onClick={() => setIsLoggedIn(true)}>
                           <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                           Sign in with Google
                        </button>
                     )}
                  </div>
               </div>

               {/* HEADER (Screenshot Matched) */}
               <header className="terminal-header-gold">
                  <div className="th-left-gold">
                     <button className="sidebar-toggle" onClick={() => setSideBarOpen(!sideBarOpen)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                     </button>
                     <div className="gold-logo-circle" style={{ overflow: 'hidden' }}>
                        <img src="/favicon.png" alt="DX" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                     </div>
                     <span className="th-title">Devnexes Solutions</span>
                  </div>
                  <button className="th-close-gold" onClick={() => setIsOpen(false)}>×</button>
               </header>

               {/* MAIN BODY / LOGIN GATE */}
               {!isLoggedIn ? (
                  <div className="login-overlay">
                     <div className="login-box">
                        <div className="login-icon">🔒</div>
                        <h3>Access Restricted</h3>
                        <p>Authorized access only. Please sign in with your Google account to initiate a tactical session.</p>
                        <button className="login-cta" onClick={() => setIsLoggedIn(true)}>Authenticate with Google</button>
                     </div>
                  </div>
               ) : (
                  <>
                     <div className="terminal-body" ref={chatRef}>
                        {messages.map((m, idx) => (
                           <div key={idx} className={`terminal-msg ${m.role === 'assistant' ? 'ai-msg' : 'user-msg'}`}>
                              <span className="msg-label">{m.role === 'assistant' ? 'DEVN_OS' : 'CLIENT_INPUT'}</span>
                              <div className="msg-bubble">{m.text}</div>
                           </div>
                        ))}
                        
                        {isTyping && (
                           <div className="terminal-msg ai-msg">
                              <span className="msg-label">DEVN_OS</span>
                              <div className="msg-bubble typing-dots">
                                 <span>.</span><span>.</span><span>.</span>
                              </div>
                           </div>
                        )}
                     </div>

                     <form className="terminal-input-wrap" onSubmit={handleSend}>
                        <input 
                           type="text" 
                           placeholder="ENTER_PROMPT..." 
                           className="ti-field"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="ti-submit">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </button>
                     </form>
                  </>
               )}
            </div>
         )}

         <style>{`
            .ai-trigger-lux { 
               position: fixed; bottom: 40px; right: 40px; width: 65px; height: 65px; 
               cursor: pointer; z-index: 1000; display: flex; align-items: center; justify-content: center;
               transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
            }
            .trigger-inner { 
               background: #1a1a2e; width: 100%; height: 100%; border-radius: 50%; 
               display: flex; align-items: center; justify-content: center; position: relative; z-index: 2;
               box-shadow: 0 20px 40px rgba(0,0,0,0.2); border: 2px solid rgba(255,126,179,0.3);
            }
            .ai-trigger-lux:hover .trigger-inner { background: #ff8a00; transform: scale(1.1); box-shadow: 0 20px 40px rgba(255,138,0,0.3); border-color: #fff; }
            .trigger-pulse { 
               position: absolute; inset: 0; background: #ff8a00; border-radius: 50%; z-index: 1; 
               animation: trigger-pulse 2s infinite; opacity: 0.5;
            }
            @keyframes trigger-pulse { from { transform: scale(1); opacity: 0.5; } to { transform: scale(1.6); opacity: 0; } }

            .ai-terminal-lux { 
               position: fixed; bottom: 120px; right: 40px; width: 440px; height: 620px; 
               background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; z-index: 999;
               box-shadow: 0 50px 100px rgba(0,0,0,0.15); display: flex; flex-direction: column; overflow: hidden;
            }

            /* ORANGE HEADER */
            .terminal-header-gold { 
               background: #ff8a00; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center;
               border-top-left-radius: 12px; border-top-right-radius: 12px;
            }
            .th-left-gold { display: flex; align-items: center; gap: 12px; }
            .sidebar-toggle { background: none; border: none; color: #fff; opacity: 0.7; cursor: pointer; padding: 0; display: flex; }
            .gold-logo-circle { width: 28px; height: 28px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
            .th-title { color: #fff; font-size: 0.95rem; font-weight: 500; font-family: sans-serif; }
            .th-close-gold { background: none; border: none; color: #fff; font-size: 1.6rem; cursor: pointer; opacity: 0.6; line-height: 1; }

            /* SIDEBAR */
            .terminal-sidebar { 
               position: absolute; left: 0; top: 52px; bottom: 0; width: 220px; background: #fffaf8;
               border-right: 1px solid #e2e8f0; transform: translateX(-100%); transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
               z-index: 10; display: flex; flex-direction: column;
            }
            .terminal-sidebar.open { transform: translateX(0); box-shadow: 20px 0 50px rgba(0,0,0,0.05); }
            .sidebar-header { padding: 20px; border-bottom: 1px solid #e2e8f0; }
            .sidebar-title { font-size: 0.65rem; font-weight: 900; color: #94a3b8; letter-spacing: 2px; }
            .sidebar-content { flex: 1; padding: 15px 10px; }
            .sidebar-item { padding: 12px 15px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; color: #4b4b66; cursor: pointer; margin-bottom: 5px; }
            .sidebar-item.active { background: #fff; color: #ff8a00; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
            .sidebar-footer { padding: 20px; border-top: 1px solid #e2e8f0; background: #fff; }
            
            .google-login-btn { 
               width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; 
               padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;
               font-size: 0.75rem; font-weight: 700; color: #1a1a2e; cursor: pointer; transition: 0.2s;
            }
            .google-login-btn:hover { background: #f8fafc; border-color: #ff8a00; }

            .user-profile { display: flex; align-items: center; gap: 12px; }
            .user-avatar { width: 32px; height: 32px; background: #ff8a00; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; }
            .u-name { font-size: 0.8rem; font-weight: 700; color: #1a1a2e; margin: 0; }
            .logout-link { background: none; border: none; font-size: 0.65rem; color: #ef4444; font-weight: 800; cursor: pointer; padding: 0; text-decoration: underline; }

            /* LOGIN OVERLAY */
            .login-overlay { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px; background: #fffaf8; }
            .login-box { text-align: center; }
            .login-icon { font-size: 3rem; margin-bottom: 20px; }
            .login-box h3 { font-size: 1.2rem; font-weight: 750; color: #1a1a2e; margin-bottom: 10px; }
            .login-box p { font-size: 0.85rem; color: #64748b; margin-bottom: 25px; line-height: 1.6; }
            .login-cta { 
               background: #ff8a00; color: #fff; padding: 14px 28px; border: none; border-radius: 8px;
               font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: 0.3s;
            }
            .login-cta:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(255,138,0,0.3); }

            /* CHAT BODY */
            .terminal-body { flex: 1; padding: 25px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; scroll-behavior: smooth; position: relative; }
            .terminal-body::after { 
               content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
               width: 250px; height: 250px; opacity: 0.03; pointer-events: none;
               background: url('data:image/svg+xml;utf8,<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M25 5C13.9 5 5 13.9 5 25C5 29.8 6.7 34.2 9.5 37.7L25 25L40.5 37.7C43.3 34.2 45 29.8 45 25C45 13.9 36.1 5 25 5Z" fill="orange"/></svg>') center/contain no-repeat;
            }
            
            .msg-label { font-family: monospace; font-size: 0.5rem; font-weight: 950; color: #94a3b8; display: block; margin-bottom: 5px; opacity: 0.8; }
            .msg-bubble { padding: 12px 18px; border-radius: 4px; font-size: 0.85rem; line-height: 1.5; max-width: 85%; }
            .ai-msg .msg-bubble { background: #fffcf0; color: #1a1a2e; border: 1.5px solid #ffae4233; }
            .user-msg { align-self: flex-end; }
            .user-msg .msg-label { text-align: right; }
            .user-msg .msg-bubble { background: #ff8a00; color: #fff; font-weight: 700; }

            .terminal-input-wrap { padding: 20px; border-top: 1.5px solid #f2f2f5; display: flex; gap: 10px; background: #fff; }
            .ti-field { 
               flex: 1; background: #fdfdf8; border: 1.5px solid #e2e8f0; padding: 15px 20px; 
               font-size: 0.8rem; font-weight: 600; outline: none; transition: 0.3s; border-radius: 8px;
            }
            .ti-field:focus { border-color: #ff8a00; background: #fff; }
            .ti-submit { 
               background: #ff8a00; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; 
               color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: 0.3s;
            }
            .ti-submit:hover { transform: scale(1.05); }

            .animate-reveal-up { animation: revealUp 0.6s cubic-bezier(0.19, 1, 0.22, 1); }
            @keyframes revealUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
         `}</style>
      </>
   );
};

export default AIAssistant;
