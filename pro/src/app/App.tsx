import { useState } from 'react';
import { Camera, Image, Search, Check, User, MapPin, Calendar, Armchair, Umbrella, DollarSign, Users, Mail, Clock, AlertCircle } from 'lucide-react';

type Page = 'scan' | 'results' | 'reservations';

export default function App() {
  const [reservationCode, setReservationCode] = useState('');
  const [currentPage, setCurrentPage] = useState<Page>('reservations');

  const suggestedCodes = ['BEACH-2024-003', 'BEACH-2024-002', 'BEACH-2024-001'];

  const handleVerify = () => {
    setCurrentPage('results');
  };

  const handleScanAnother = () => {
    setReservationCode('');
    setCurrentPage('scan');
  };

  const reservations = [
    {
      id: 'BK-2024-UN-793',
      status: 'pending',
      name: 'محمد تامر المحمد المحمد',
      email: 'mohamed@example.com',
      date: '16 يناير 2025',
      time: '8:00 صباحاً - 2:00 مساءً',
      attendees: 4,
      umbrellas: 2,
      chairs: 4,
      total: 500
    },
    {
      id: 'BK-2024-UN-781',
      status: 'confirmed',
      name: 'مصطفى أحمد محمد',
      email: 'mohamed@example.com',
      date: '16 يناير 2025',
      time: '8:00 صباحاً - 2:00 مساءً',
      attendees: 4,
      umbrellas: 2,
      chairs: 4,
      total: 500
    }
  ];

  return (
    <div className="size-full flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-[250px] bg-gradient-to-br from-[#4A9EFF] to-[#2D7EE8] text-white p-6 flex flex-col shadow-lg">
        <div className="mb-12 flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-xl">✏️</span>
          </div>
          <h2 className="text-lg">إدارة الشواطئ</h2>
        </div>

        <nav className="flex-1 space-y-1">
          <button
            onClick={() => setCurrentPage('scan')}
            className={`w-full text-right px-4 py-2.5 rounded-lg transition-colors ${currentPage === 'scan' ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10'}`}
          >
            لوحة التحكم
          </button>
          <button
            onClick={() => setCurrentPage('reservations')}
            className={`w-full text-right px-4 py-2.5 rounded-lg transition-colors ${currentPage === 'reservations' ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10'}`}
          >
            الحجوزات
          </button>
          <button className="w-full text-right px-4 py-2.5 rounded-lg text-white/90 hover:bg-white/10 transition-colors">
            إضافة شاطئ
          </button>
          <button
            onClick={() => setCurrentPage('scan')}
            className="w-full text-right px-4 py-2.5 rounded-lg text-white/90 hover:bg-white/10 transition-colors"
          >
            مسح البارلود
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#F5F7FA] p-10 overflow-auto">
        <div className="max-w-[680px]">
          {/* Header */}
          <div className="mb-6 text-right">
            <h1 className="text-xl text-gray-800">
              مرحباً بك المدير الرئيسي 👋
            </h1>
            <p className="text-gray-400 text-xs mt-1">الأحد 7 أبريل 2026م</p>
          </div>

          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#4A9EFF] text-right">
            ← {currentPage === 'results' ? 'العودة للوحة التحكم' : currentPage === 'reservations' ? 'لوحة التحكم للأستاذ' : 'الصفحة الرئيسية للتحكم'}
          </div>

          {currentPage === 'scan' ? (
            <>
              {/* Scan Method Selection */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
                <h2 className="text-center text-base text-gray-800 mb-8">
                  اختر طريقة المسح
                </h2>

                <div className="grid grid-cols-2 gap-6">
                  <button className="p-10 rounded-xl border border-gray-200 bg-[#F8F9FB] hover:border-gray-300 transition-all">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">مسح بالكاميرا</span>
                    </div>
                  </button>

                  <button className="p-10 rounded-xl border-2 border-[#4A9EFF] bg-white hover:bg-blue-50 transition-all">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-white border-2 border-[#4A9EFF] rounded-lg flex items-center justify-center">
                        <Image className="w-6 h-6 text-[#4A9EFF]" />
                      </div>
                      <span className="text-gray-600 text-sm">إدخال يدوي</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Reservation Code Input */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-center text-base text-gray-800 mb-8">
                  أدخل رمز الحجز
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    value={reservationCode}
                    onChange={(e) => setReservationCode(e.target.value)}
                    placeholder="BEACH-2024-001"
                    className="w-full px-4 py-3.5 text-center border border-gray-200 rounded-xl focus:outline-none focus:border-[#4A9EFF] focus:ring-1 focus:ring-[#4A9EFF] text-gray-400 bg-white"
                    dir="ltr"
                  />

                  <button
                    onClick={handleVerify}
                    className="w-full bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Search className="w-4 h-4" />
                    <span className="text-sm">التحقق من الحجز</span>
                  </button>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-center text-xs text-gray-500 mb-4">
                      أمثلة يمكن تجربة جاهزية البحث
                    </p>
                    <div className="flex justify-center gap-3 flex-wrap">
                      {suggestedCodes.map((code) => (
                        <button
                          key={code}
                          onClick={() => setReservationCode(code)}
                          className="px-3 py-1.5 text-xs text-[#4A9EFF] hover:bg-blue-50 rounded-md transition-colors border border-transparent hover:border-blue-100"
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : currentPage === 'results' ? (
            <>
              {/* Reservation Details */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                {/* Success Message */}
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-white" strokeWidth={3} />
                  </div>
                  <h2 className="text-lg text-gray-800 mb-1">حجز صالح ✓</h2>
                  <p className="text-sm text-gray-500">تم التحقق من الحجز بنجاح</p>
                </div>

                {/* Details Grid */}
                <div className="bg-[#F8FAFB] rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">اسم المستفيد</span>
                        <User className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">خالد محمود</p>
                    </div>

                    {/* Beach */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">الشاطئ</span>
                        <MapPin className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">شاطئ الأحلام</p>
                      <p className="text-xs text-gray-400">الساحل الشمالي</p>
                    </div>

                    {/* Date */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">التاريخ</span>
                        <Calendar className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">2024-04-05</p>
                    </div>

                    {/* Chairs */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">الكراسي</span>
                        <Armchair className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">6</p>
                    </div>

                    {/* Umbrellas */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">الشماسي</span>
                        <Umbrella className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">2</p>
                    </div>

                    {/* Attendees */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">عدد الحاضر</span>
                        <Users className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">6 المحاضر</p>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className="text-xs text-gray-500">السعر</span>
                        <DollarSign className="w-4 h-4 text-[#4A9EFF]" />
                      </div>
                      <p className="text-sm text-gray-800">70</p>
                    </div>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
                  <p className="text-sm text-gray-700">✓ تم الدخول بنجاح</p>
                  <p className="text-xs text-gray-500 mt-1">رقم الحجز: BEACH-2024-001</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleScanAnother}
                    className="bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white py-3 rounded-xl transition-colors text-sm"
                  >
                    مسح حجز آخر
                  </button>
                  <button
                    onClick={() => setCurrentPage('reservations')}
                    className="bg-white hover:bg-gray-50 text-[#4A9EFF] border border-[#4A9EFF] py-3 rounded-xl transition-colors text-sm"
                  >
                    عرض الحجوزات
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Reservations List */}
              <div className="space-y-6">
                {reservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className={`bg-white rounded-xl shadow-sm p-6 ${reservation.status === 'confirmed' ? 'border-2 border-[#4A9EFF]' : ''}`}
                  >
                    {/* Header with Status and ID */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 font-mono">{reservation.id}</span>
                        <div className="w-5 h-5 bg-[#4A9EFF] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">ℹ</span>
                        </div>
                      </div>
                      <div>
                        {reservation.status === 'pending' ? (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm">في الانتظار</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg">
                            <Check className="w-4 h-4" />
                            <span className="text-sm">تم الدخول</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4">
                      {/* Email and Name Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2 mb-1">
                            <span className="text-xs text-gray-400">معلومات المستفيد</span>
                          </div>
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-sm text-gray-800">{reservation.name}</span>
                            <User className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-sm text-gray-600 font-mono">{reservation.email}</span>
                            <Mail className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                      </div>

                      {/* Date and Time Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-sm text-gray-800">{reservation.time}</span>
                            <Clock className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-sm text-gray-800">التاريخ: {reservation.date}</span>
                            <Calendar className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                      </div>

                      {/* Attendees, Umbrellas, Chairs Row */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="flex items-center gap-1">
                              <span className="text-sm text-gray-800">{reservation.chairs}</span>
                              <span className="text-xs text-gray-500">كراسي</span>
                            </div>
                            <Armchair className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="flex items-center gap-1">
                              <span className="text-sm text-gray-800">{reservation.umbrellas}</span>
                              <span className="text-xs text-gray-500">شماسي</span>
                            </div>
                            <Umbrella className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="flex items-center gap-1">
                              <span className="text-sm text-gray-800">{reservation.attendees}</span>
                              <span className="text-xs text-gray-500">عدد الحضور</span>
                            </div>
                            <Users className="w-4 h-4 text-[#4A9EFF]" />
                          </div>
                        </div>
                      </div>

                      {/* Total Price */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-[#4A9EFF]" />
                            <span className="text-sm text-gray-600">الإجمالي</span>
                          </div>
                          <span className="text-base text-green-600 font-semibold">{reservation.total} جنية</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}