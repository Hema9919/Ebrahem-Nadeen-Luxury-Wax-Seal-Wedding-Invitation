import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F8F5EF] flex flex-col items-center justify-center p-4 text-center" dir="rtl">
      <h1 className="text-4xl font-arabic font-bold text-[#C6A15B] mb-2">404</h1>
      <p className="text-lg font-arabic text-[#F8F5EF] mb-6">عذراً، الصفحة غير موجودة</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#181818] border border-[#C6A15B]/50 text-[#E6CC8A] hover:bg-[#222222] transition-colors"
      >
        العودة إلى الدعوة
      </Link>
    </div>
  );
}
