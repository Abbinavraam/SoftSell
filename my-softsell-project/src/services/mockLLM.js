// Mock LLM service with predefined responses
// This can be replaced with a real OpenAI API call

// Predefined Q&A pairs
const knowledgeBase = {
  "how do i sell my license": 
    "Selling your license with SoftShell is easy! Here's how it works:\n\n1. Submit your license details through our form\n2. We'll evaluate your license and provide a quote within 24-48 hours\n3. If you accept our offer, we'll guide you through the transfer process\n4. Once the transfer is complete, you'll receive payment within 3-5 business days\n\nWould you like to get started with a quote now?",
  
  "what types of software do you buy": 
    "We purchase licenses for a wide range of business and enterprise software, including:\n\n• Microsoft products (Office, Windows, Server, etc.)\n• Adobe Creative Cloud and other Adobe products\n• Autodesk software (AutoCAD, Revit, etc.)\n• Enterprise database software (Oracle, SQL Server)\n• Virtualization software (VMware, Citrix)\n• CAD/CAM software\n• ERP and CRM systems\n• And many more!\n\nIf you're unsure whether we buy your specific software, just ask or submit it for evaluation.",
  
  "how much is my license worth": 
    "The value of your software license depends on several factors:\n\n• Software type and version\n• License type (perpetual vs. subscription)\n• Remaining subscription time (if applicable)\n• Current market demand\n• Transfer restrictions\n\nTypically, licenses can be worth anywhere from 15% to 70% of the original purchase price, depending on these factors. For a specific valuation, please submit your license details through our quote form, and we'll provide you with a fair market offer.",
  
  "how long does the process take": 
    "The entire process typically takes 5-10 business days from start to finish:\n\n• Initial quote: 1-2 business days\n• Acceptance and documentation: 1-2 business days\n• License transfer: 2-5 business days (varies by software vendor)\n• Payment processing: 1-3 business days\n\nWe work to make the process as quick and smooth as possible, though some software vendors may have specific transfer procedures that can affect timing.",
  
  "is my data secure": 
    "Absolutely! Data security is our top priority:\n\n• All communications are encrypted using industry-standard SSL/TLS\n• We maintain strict data protection policies compliant with GDPR and other regulations\n• Your information is only used for the license valuation and transfer process\n• We never sell or share your personal data with third parties\n• Our systems undergo regular security audits\n\nIf you have specific security concerns, please let us know, and we'll be happy to address them.",
  
  "payment methods": 
    "We offer several secure payment methods:\n\n• Direct bank transfer (ACH/wire transfer)\n• PayPal\n• Check (US only)\n• Cryptocurrency (Bitcoin, Ethereum)\n\nYou can select your preferred payment method during the quote acceptance process.",
  
  "license transfer process": 
    "The license transfer process varies by software vendor, but generally follows these steps:\n\n1. You accept our purchase offer\n2. We provide you with transfer instructions specific to your software\n3. You initiate the transfer with the software vendor\n4. We confirm receipt of the license\n5. Payment is processed\n\nWe'll guide you through each step and provide support throughout the entire process.",
  
  "what if my license is rejected": 
    "There are a few reasons why a license might not be eligible for purchase:\n\n• Non-transferable license agreements\n• Expired licenses\n• Licenses with pending legal issues\n• Counterfeit or improperly acquired licenses\n\nIf we can't purchase your license, we'll explain why and, when possible, suggest alternatives. There's no obligation or fee for getting a quote, so there's no risk in submitting your license for evaluation.",
  
  "bulk license sales": 
    "Yes, we specialize in bulk license purchases! If you have multiple licenses to sell (such as during company downsizing or software migration), we offer:\n\n• Volume pricing benefits\n• Streamlined processing\n• Dedicated account manager\n• Customized transfer solutions\n\nBulk sales are often more efficient and can result in better overall value. Please indicate the number of licenses when requesting a quote.",
  
  "contact support": 
    "You can reach our support team through multiple channels:\n\n• Email: support@softshell.com\n• Phone: (555) 123-4567\n• Live chat on our website (Mon-Fri, 9am-5pm EST)\n• Contact form on our website\n\nOur support team is available Monday through Friday, 9am to 5pm EST, and typically responds within 24 hours."
};

// Function to find the best matching response
const findBestResponse = (query) => {
  // Normalize the query
  const normalizedQuery = query.toLowerCase().trim();
  
  // Direct match
  if (knowledgeBase[normalizedQuery]) {
    return knowledgeBase[normalizedQuery];
  }
  
  // Find the best partial match
  let bestMatch = null;
  let highestScore = 0;
  
  for (const key in knowledgeBase) {
    // Simple matching algorithm - count how many words from the key appear in the query
    const keyWords = key.split(' ');
    let matchScore = 0;
    
    for (const word of keyWords) {
      if (normalizedQuery.includes(word) && word.length > 2) {
        matchScore += 1;
      }
    }
    
    // Normalize score by key length to avoid bias toward longer keys
    const normalizedScore = matchScore / keyWords.length;
    
    if (normalizedScore > highestScore) {
      highestScore = normalizedScore;
      bestMatch = key;
    }
  }
  
  // Return the best match if score is above threshold, otherwise fallback
  if (bestMatch && highestScore > 0.3) {
    return knowledgeBase[bestMatch];
  }
  
  return getFallbackResponse(normalizedQuery);
};

// Fallback responses for when no good match is found
const getFallbackResponse = (query) => {
  // Check for common greetings
  if (/^(hi|hello|hey|greetings|howdy)/i.test(query)) {
    return "Hello! How can I assist you with SoftShell's license buying services today?";
  }
  
  // Check for gratitude
  if (/thank|thanks/i.test(query)) {
    return "You're welcome! Is there anything else I can help you with regarding software license sales?";
  }
  
  // Check for goodbye
  if (/bye|goodbye|see you|farewell/i.test(query)) {
    return "Thank you for chatting with SoftShell Assistant. Feel free to return if you have more questions about selling your software licenses!";
  }
  
  // Default fallback
  return "I'm not sure I understand your question about \"" + query + "\". Could you rephrase it or select one of the suggested topics below? I'm here to help with questions about selling software licenses, our buying process, payment methods, and more.";
};

// Simulate network delay for a more realistic experience
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main function to get a response from the mock LLM
export const mockLLMResponse = async (query) => {
  // Simulate network delay (500-1500ms)
  await delay(Math.random() * 1000 + 500);
  
  // Return the best matching response
  return findBestResponse(query);
};

// Optional: Real OpenAI implementation
// Uncomment and configure if you want to use the actual OpenAI API
/*
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const getOpenAIResponse = async (query) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are SoftShell Assistant, a helpful AI that specializes in answering questions about selling software licenses. Keep responses concise, friendly, and focused on SoftShell's services." },
        { role: "user", content: query }
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 150,
    });
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again later or contact our support team directly.";
  }
};
*/