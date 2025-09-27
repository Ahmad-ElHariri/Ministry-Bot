import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

interface WelcomePageProps {
  onStartChat: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStartChat }) => {
  const teamMembers = [
    'ياسمين حرب',
    'أحمد الحريري',
    'أحمد المسالخي',
    'آية عنتر',
    'حيدر توبة'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-3">
              <img 
                src="/Screenshot 2025-09-24 161000.png" 
                alt="Ministry Bot Logo" 
                className="h-10 w-10"
              />
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                Lebanese Ministry Bot – مساعد الوزارات اللبنانية
              </h1>
            </div>
            <div className="flex items-center space-x-reverse space-x-2 text-sm text-gray-600">
              <span>متصل</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-6 shadow-lg">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            مرحباً بكم في مساعد الوزارات اللبنانية الذكي
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            مرحباً! هذا هو مساعدكم الذكي للمراسيم التنظيمية والقوانين اللبنانية.
            <br />
            نحن هنا لمساعدتكم في الحصول على المعلومات القانونية والتنظيمية للوزارات اللبنانية بسهولة وسرعة.
          </p>

          <button
            onClick={onStartChat}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            ابدأ المحادثة
          </button>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-green-600 ml-2" />
            <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              فريق التطوير
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {member.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-gray-900" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  {member}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              دعم باللغة العربية
            </h4>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
              واجهة مصممة خصيصاً للغة العربية مع دعم كامل للكتابة من اليمين إلى اليسار
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-red-600 rounded-sm"></div>
            </div>
            <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              المراسيم والقوانين
            </h4>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
              الحصول على معلومات حول المراسيم التنظيمية والقوانين اللبنانية من جميع الوزارات
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6">
                <img 
                  src="/Screenshot 2025-09-24 161000.png" 
                  alt="Cedar" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              قاعدة بيانات قانونية
            </h4>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
              مجموعة شاملة من النصوص التنظيمية اللبنانية مع تقنية ذكية للبحث والاستعلام
            </p>
          </div>
        </div>

        {/* Backend Status Notice */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse ml-2"></div>
            <h4 className="font-bold text-green-800" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              حالة النظام
            </h4>
          </div>
          <p className="text-green-700 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            النظام متصل بقاعدة البيانات الخاصة بالمراسيم التنظيمية اللبنانية ويعمل بكامل طاقته.
            <br />
            <span className="font-semibold">متاح الآن:</span> البحث في المراسيم التنظيمية والقوانين اللبنانية الرسمية.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;