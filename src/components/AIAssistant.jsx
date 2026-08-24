import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'مرحباً! أنا حياة، مساعدك الذكي في مجمع تواصل للعلوم الحيوية والتكنولوجيا. كيف يمكنني مساعدتك اليوم؟\n\nHello! I am Hayah (Life), your intelligent assistant for Tawasol Life Sciences Technology Hub. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { text: 'Tell me about Tawasol Hub', action: 'hub-info' },
    { text: 'Investment opportunities', action: 'investment' },
    { text: 'Research areas', action: 'research' },
    { text: 'Partnership programs', action: 'partnerships' },
    { text: 'Global network', action: 'network' },
    { text: 'Contact information', action: 'contact' }
  ];

  const getAIResponse = (userMessage, action = null) => {
    const message = userMessage.toLowerCase();

    if (action === 'hub-info' || message.includes('tawasol') || message.includes('hub')) {
      return `🏛️ **مجمع تواصل للعلوم الحيوية والتكنولوجيا**

مجمع تواصل هو مشروع رائد يمثل تتويج 30 عاماً من الاستثمار الاستراتيجي في الرعاية الصحية والتعليم والتكنولوجيا. يهدف المجمع إلى:

✨ **الرؤية**: تشكيل مستقبل مصر من خلال الاستثمار في دمج الصحة والمعرفة والابتكار

🎯 **المكونات الرئيسية**:
• جامعة ذكية متخصصة في العلوم الحيوية
• مراكز البحث والتطوير والمختبرات السريرية
• مركز تصنيع الأدوية
• مركز الابتكار الرقمي والذكاء الاصطناعي
• مرافق حاضنة الشركات الناشئة

💰 **الاستثمار**: 8.2 مليار جنيه مصري
🎯 **العائد المستهدف**: 15-20%

---

🏛️ **Tawasol Life Sciences Technology Hub**

Tawasol Hub represents the culmination of 30 years of strategic investment in healthcare, education, and technology. The hub aims to:

✨ **Vision**: Shape Egypt's future by investing in the integration of health, knowledge, and innovation

🎯 **Key Components**:
• Smart University specialized in Life Sciences
• R&D Centers and Clinical Labs
• Pharmaceutical Manufacturing Hub
• Digital/AI Innovation Center
• Startup Incubation Facilities

💰 **Investment**: 8.2 Billion EGP
🎯 **Target IRR**: 15-20%`;
    }

    if (action === 'investment' || message.includes('investment') || message.includes('fund')) {
      return `💰 **فرص الاستثمار - صندوق تواصل للرعاية الصحية والتعليم**

📊 **تفاصيل الصندوق**:
• رأس المال: مليار جنيه مصري
• نوع الصندوق: استثمار مغلق
• التخصص: الرعاية الصحية والتعليم
• العائد المستهدف: 15-20% سنوياً

🎯 **مجالات الاستثمار**:
• التكنولوجيا الحيوية والأدوية
• الأجهزة الطبية والتشخيص
• التعليم الطبي والتدريب
• الذكاء الاصطناعي في الصحة
• البحث والتطوير

📈 **المزايا الاستراتيجية**:
• الوصول إلى السوق المصري والإقليمي
• شراكات مع جامعات عالمية
• دعم حكومي قوي
• فريق إدارة خبير

---

💰 **Investment Opportunities - Tawasol Healthcare Education Fund**

📊 **Fund Details**:
• Capital: 1 Billion EGP
• Type: Closed Investment Fund
• Focus: Healthcare & Education
• Target IRR: 15-20%

🎯 **Investment Areas**:
• Biotechnology & Pharmaceuticals
• Medical Devices & Diagnostics
• Medical Education & Training
• AI in Healthcare
• Research & Development`;
    }

    if (action === 'research' || message.includes('research') || message.includes('بحث')) {
      return `🔬 **مجالات البحث والتطوير**

🧬 **التخصصات الأساسية**:
• علوم الصيدلة الحيوية
• التكنولوجيا الحيوية
• الطب الدقيق والجينوم
• الذكاء الاصطناعي الطبي
• الأجهزة الطبية المتقدمة

🏥 **المختبرات والمرافق**:
• مختبرات الجزيئات والجينوم
• مراكز التجارب السريرية
• مختبرات الذكاء الاصطناعي الطبي
• مرافق تطوير الأدوية
• مختبرات الأجهزة الطبية

🌍 **الشراكات البحثية**:
• جامعة كامبريدج (المملكة المتحدة)
• سنغافورة بايوبوليس
• مثلث البحوث (الولايات المتحدة)
• مجمع بوسطن للتكنولوجيا الحيوية

---

🔬 **Research & Development Areas**

🧬 **Core Specializations**:
• Biopharmaceutical Sciences
• Biotechnology
• Precision Medicine & Genomics
• Medical AI
• Advanced Medical Devices

🏥 **Labs & Facilities**:
• Molecular & Genomic Labs
• Clinical Trial Centers
• Medical AI Labs
• Drug Development Facilities
• Medical Device Labs`;
    }

    if (action === 'partnerships' || message.includes('partnership') || message.includes('شراكة')) {
      return `🤝 **برامج الشراكة العالمية**

🌍 **الشركاء الاستراتيجيون**:
• مجمع كامبريدج الطبي الحيوي (المملكة المتحدة)
• سنغافورة بايوبوليس (سنغافورة)
• مثلث البحوث (الولايات المتحدة)
• مجمع بوسطن للتكنولوجيا الحيوية
• تحالف وادي ميديكون (الدنمارك/السويد)

🎯 **أنواع الشراكات**:
• البحث والتطوير المشترك
• تبادل الطلاب والباحثين
• نقل التكنولوجيا
• الاستثمار المشترك
• التدريب والتأهيل

💼 **فرص الشراكة**:
• شركات الأدوية العالمية
• الجامعات والمعاهد البحثية
• صناديق الاستثمار
• الحكومات والمنظمات الدولية

---

🤝 **Global Partnership Programs**

🌍 **Strategic Partners**:
• Cambridge Biomedical Campus (UK)
• Singapore Biopolis (Singapore)
• Research Triangle Park (USA)
• Boston Biotech Cluster
• Medicon Valley Alliance (Denmark/Sweden)

🎯 **Partnership Types**:
• Joint R&D Projects
• Student & Researcher Exchange
• Technology Transfer
• Joint Investment
• Training & Capacity Building`;
    }

    if (action === 'network' || message.includes('network') || message.includes('شبكة')) {
      return `🌐 **الشبكة العالمية لمراكز العلوم الحيوية**

🏆 **المركز الرئيسي**: تواصل — مصر

🌍 **الشبكة الحالية**: مصر تربط 22 مركزاً شريكاً عبر أفريقيا والخليج وآسيا وأوروبا وأمريكا الشمالية وأستراليا.
• أفريقيا: كيب تاون، UM6P المغرب
• الخليج: دبي، الرياض، الدوحة
• أوروبا: كامبريدج، أكسفورد، بازل، هايدلبرغ، كوبنهاغن، ويلكم جينوم
• آسيا والمحيط الهادئ: سنغافورة، شنغهاي، طوكيو، سيدني
• أمريكا الشمالية: بوسطن، مثلث البحوث، سان فرانسيسكو، سان دييغو، مونتريال، تورونتو

🔗 **التعاون**: أبحاث مشتركة، تبادل معرفة، تدريب، نقل تقنية، وابتكار صحي رقمي.

---

🌐 **Global Life Sciences Hub Network**

🏆 **Flagship Hub**: Tawasol — Egypt

🌍 **Current network**: Egypt connects 22 partner nodes across Africa, the Gulf, Asia, Europe, North America, and Australia.
• Africa: Cape Town and UM6P Morocco
• Gulf: Dubai, Riyadh, and Doha
• Europe: Cambridge, Oxford, Basel, Heidelberg, Medicon Valley, and Wellcome Genome Campus
• Asia-Pacific: Singapore, Shanghai, Tokyo, and Sydney
• North America: Boston, Research Triangle Park, San Francisco, San Diego, Montréal, and Toronto

🔗 **Collaboration**: joint research, knowledge exchange, training, technology transfer, and digital-health innovation.`;
    }

    if (action === 'contact' || message.includes('contact') || message.includes('اتصال')) {
      return `📞 **معلومات الاتصال**

🏢 **مجمع تواصل للعلوم الحيوية والتكنولوجيا**
📧 البريد الإلكتروني: contact@tawasolholding.com
📱 الهاتف: +20 2 0000 0000
📍 العنوان: القاهرة، مصر

يمكنك استكشاف أقسام **البحوث** و**الابتكار** و**الطب عن بعد** مباشرةً من شريط التنقل داخل المنصة.

---

📞 **Contact Information**

🏢 **Tawasol Life Sciences Technology Hub**
📧 Email: contact@tawasolholding.com
📱 Phone: +20 2 0000 0000
📍 Address: Cairo, Egypt

You can explore the internal **Research**, **Innovation**, and **Telemedicine** sections directly from the platform navigation.`;
    }

    // Default response
    return `شكراً لك على سؤالك! أنا هنا لمساعدتك في معرفة المزيد عن مجمع تواصل للعلوم الحيوية والتكنولوجيا. يمكنني مساعدتك في:

• معلومات عن المجمع والمشاريع
• فرص الاستثمار والشراكة
• مجالات البحث والتطوير
• الشبكة العالمية للمراكز
• معلومات الاتصال

استخدم الأزرار السريعة أدناه أو اكتب سؤالك مباشرة.

---

Thank you for your question! I'm here to help you learn more about Tawasol Life Sciences Technology Hub. I can assist you with:

• Hub and project information
• Investment and partnership opportunities
• Research and development areas
• Global network of centers
• Contact information

Use the quick action buttons below or type your question directly.`;
  };

  const handleSendMessage = (message = inputMessage, action = null) => {
    if (!message.trim() && !action) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message || quickActions.find(qa => qa.action === action)?.text || '',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: getAIResponse(message, action),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">حياة</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">حياة (Hayah)</h3>
            <p className="text-blue-200 text-sm">AI Assistant</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-red-300 transition-colors duration-200 p-1 hover:bg-white/10 rounded"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/20 text-white'
              }`}
            >
              <div className="whitespace-pre-wrap text-sm">{message.content}</div>
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/20 text-white p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-t border-white/20">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage('', action.action)}
              className="text-xs bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors duration-200"
            >
              {action.text}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/20">
        <div className="flex space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="اكتب رسالتك هنا... / Type your message here..."
            className="flex-1 bg-white/10 text-white placeholder-gray-400 p-3 rounded-lg border border-white/20 focus:outline-none focus:border-blue-400 resize-none"
            rows="2"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white p-3 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
