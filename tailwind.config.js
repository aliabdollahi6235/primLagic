/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // مسیر فایل‌های پروژه
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bgLight: '#F8F9FC',         // پس‌زمینه کلی
        darkText: '#1A1A1A',        // متن اصلی (مشکی نرم)
        mutedText: '#64748B',       // متن توضیحات (خاکستری)
        primaryAccent: '#3B82F6',   // آبی برند (Blue-500)
        secondaryAccent: '#8B5CF6', // بنفش برند (Violet-500)
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
      }
    },
  },
  plugins: [],
}