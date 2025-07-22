import React, { useState } from 'react';
import { 
  Link2, QrCode, Code, Download, Copy, ExternalLink, MessageCircle, 
  Users, Hash, FileText, Clock, Share2, Smartphone, Globe 
} from 'lucide-react';

const Tools = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    linkText: '',
    groupInvite: '',
    statusText: '',
    businessName: '',
    email: '',
    website: '',
    address: ''
  });
  
  const [outputs, setOutputs] = useState({});
  const [activeTab, setActiveTab] = useState('basic');

  const tools = [
    { title: 'WhatsApp Link Generator', description: 'Create clickable WhatsApp links', icon: Link2, color: 'bg-green-500', id: 'basic' },
    { title: 'QR Code Generator', description: 'Generate QR codes for contacts', icon: QrCode, color: 'bg-blue-500', id: 'basic' },
    { title: 'Chat Button Creator', description: 'Embed chat buttons on websites', icon: Code, color: 'bg-purple-500', id: 'basic' },
    { title: 'Group Link Generator', description: 'Create shareable group invite links', icon: Users, color: 'bg-orange-500', id: 'group' },
    { title: 'Status Link Creator', description: 'Direct links to WhatsApp Status', icon: Hash, color: 'bg-pink-500', id: 'status' },
    { title: 'Business Card Generator', description: 'Create digital business cards', icon: FileText, color: 'bg-indigo-500', id: 'business' },
    { title: 'Click-to-Call Generator', description: 'Generate phone call links', icon: Smartphone, color: 'bg-red-500', id: 'call' },
    { title: 'Multi-Platform Links', description: 'Cross-platform messaging links', icon: Globe, color: 'bg-teal-500', id: 'multi' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateOutputs = () => {
    if (!formData.phoneNumber) return;
    
    const cleanPhone = formData.phoneNumber.replace(/[^\d]/g, '');
    const encodedText = encodeURIComponent(formData.linkText);
    const waLink = `https://wa.me/${cleanPhone}${formData.linkText ? `?text=${encodedText}` : ''}`;
    
    const newOutputs = {
      // Basic Tools
      waLink,
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(waLink)}`,
      chatButton: `<a href="${waLink}" target="_blank" style="display:inline-flex;align-items:center;background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-family:Arial,sans-serif;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right:8px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/></svg>Chat with us</a>`,
      
      // Group Link
      groupLink: formData.groupInvite ? `https://chat.whatsapp.com/${formData.groupInvite}` : '',
      
      // Status Link
      statusLink: formData.statusText ? `whatsapp://send?text=${encodeURIComponent(formData.statusText)}` : '',
      statusWeb: formData.statusText ? `https://wa.me/?text=${encodeURIComponent(formData.statusText)}` : '',
      
      // Business Card (vCard format)
      businessCard: `BEGIN:VCARD
VERSION:3.0
FN:${formData.businessName || 'Business Contact'}
TEL:${cleanPhone}
EMAIL:${formData.email}
URL:${formData.website}
ADR:;;${formData.address};;;;
NOTE:WhatsApp Business Contact
END:VCARD`,
      
      // Click-to-Call
      callLink: `tel:${cleanPhone}`,
      
      // Multi-Platform Links
      telegramLink: `https://t.me/${cleanPhone}`,
      signalLink: `sgnl://send?phone=${cleanPhone}`,
      viberLink: `viber://chat?number=${cleanPhone}`,
      skypeLink: `skype:${cleanPhone}?call`
    };
    
    setOutputs(newOutputs);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const downloadFile = async (content, filename, type = 'text/plain') => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadQR = async () => {
    if (!outputs.qrCode) return;
    try {
      const response = await fetch(outputs.qrCode);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'whatsapp-qr.png';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const renderInputSection = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            placeholder="+919876543210"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            placeholder="Your Business"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Pre-filled Message</label>
        <textarea
          value={formData.linkText}
          onChange={(e) => handleInputChange('linkText', e.target.value)}
          placeholder="Hello! I'm interested in your services..."
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Group Invite Code</label>
          <input
            type="text"
            value={formData.groupInvite}
            onChange={(e) => handleInputChange('groupInvite', e.target.value)}
            placeholder="ABC123DEF456"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="contact@business.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            placeholder="https://mybusiness.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status Message</label>
          <input
            type="text"
            value={formData.statusText}
            onChange={(e) => handleInputChange('statusText', e.target.value)}
            placeholder="Check out our latest update!"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            placeholder="123 Business Street, City"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
          />
        </div>
      </div>
      
      <button
        onClick={generateOutputs}
        className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
      >
        Generate All Tools
      </button>
    </div>
  );

  const renderOutputSection = () => {
    if (!outputs.waLink) {
      return (
        <div className="text-center py-12 text-gray-500">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Generate tools to see all outputs</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Basic Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Link</label>
            <div className="relative">
              <input type="text" value={outputs.waLink} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 pr-10 text-xs" />
              <button onClick={() => copyToClipboard(outputs.waLink)} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Copy className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Click-to-Call Link</label>
            <div className="relative">
              <input type="text" value={outputs.callLink} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 pr-10 text-xs" />
              <button onClick={() => copyToClipboard(outputs.callLink)} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Copy className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* QR Code and Chat Button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">QR Code</label>
            <img src={outputs.qrCode} alt="QR" className="mx-auto border rounded-lg mb-2" style={{width: '120px', height: '120px'}} />
            <button onClick={downloadQR} className="text-xs bg-[#25D366] text-white px-3 py-1 rounded hover:bg-[#128C7E]">
              <Download className="w-3 h-3 inline mr-1" />Download
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Chat Button Preview</label>
            <div className="p-4 bg-gray-50 rounded-lg text-center mb-2">
              <div dangerouslySetInnerHTML={{ __html: outputs.chatButton.replace('12px 24px', '8px 16px') }} />
            </div>
            <button onClick={() => copyToClipboard(outputs.chatButton)} className="text-xs bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
              <Copy className="w-3 h-3 inline mr-1" />Copy HTML
            </button>
          </div>
        </div>

        {/* Group and Status Links */}
        {(outputs.groupLink || outputs.statusLink) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outputs.groupLink && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Invite Link</label>
                <div className="relative">
                  <input type="text" value={outputs.groupLink} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 pr-10 text-xs" />
                  <button onClick={() => copyToClipboard(outputs.groupLink)} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Copy className="w-4 h-4 text-orange-500" />
                  </button>
                </div>
              </div>
            )}
            
            {outputs.statusLink && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status Link (Mobile)</label>
                <div className="relative">
                  <input type="text" value={outputs.statusWeb} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 pr-10 text-xs" />
                  <button onClick={() => copyToClipboard(outputs.statusWeb)} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Copy className="w-4 h-4 text-pink-500" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Multi-Platform Links */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Multi-Platform Links</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { name: 'Telegram', link: outputs.telegramLink, color: 'bg-blue-500' },
              { name: 'Signal', link: outputs.signalLink, color: 'bg-blue-600' },
              { name: 'Viber', link: outputs.viberLink, color: 'bg-purple-600' },
              { name: 'Skype', link: outputs.skypeLink, color: 'bg-blue-400' }
            ].map((platform, index) => (
              <button
                key={index}
                onClick={() => copyToClipboard(platform.link)}
                className={`${platform.color} text-white px-3 py-2 rounded text-xs font-medium hover:opacity-80 transition-opacity`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Business Card */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Card (vCard)</label>
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(outputs.businessCard)}
              className="bg-indigo-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-indigo-600 transition-colors flex items-center"
            >
              <Copy className="w-4 h-4 mr-2" />Copy vCard
            </button>
            <button
              onClick={() => downloadFile(outputs.businessCard, 'business-contact.vcf', 'text/vcard')}
              className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />Download .vcf
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            Complete WhatsApp
            <span className="text-[#25D366] block">Toolkit Suite</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            8 powerful tools in one place. Generate links, QR codes, business cards, and more.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <tool.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-[#1C1C1C] mb-1">{tool.title}</h3>
                <p className="text-xs text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Generator */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 text-center">All-in-One Generator</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {renderInputSection()}
              {renderOutputSection()}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Advanced WhatsApp Automation?</h2>
          <p className="text-lg text-white/90 mb-8">Get chatbots, analytics, team collaboration, and more with AskMeister Pro.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#25D366] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;