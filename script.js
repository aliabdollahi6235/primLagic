document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. تنظیمات اولیه GSAP
    // ==========================================
    // ثبت پلاگین ScrollTrigger برای انیمیشن‌های اسکرولی
    gsap.registerPlugin(ScrollTrigger);

    // ساخت یک تایم‌لاین برای انیمیشن‌های شروع صفحه (Hero Section)
    const heroTimeline = gsap.timeline();

    // انیمیشن هدر (از بالا می‌آید)
    heroTimeline.from("#main-header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    // انیمیشن متن‌های اصلی (به ترتیب ظاهر می‌شوند)
    .from(".gsap-hero", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // فاصله زمانی بین هر المان
        ease: "power3.out"
    }, "-=0.5") // کمی زودتر از پایان انیمیشن قبلی شروع شود
    // انیمیشن تصویر داشبورد (چرخش سه‌بعدی ملایم)
    .from(".gsap-hero-img", {
        y: 100,
        opacity: 0,
        rotationX: 10,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.6");


    // ==========================================
    // 2. انیمیشن‌های اسکرول (ScrollTrigger)
    // ==========================================
    
    // انیمیشن برای تمام تیترهای سکشن‌ها (Section Headers)
    gsap.utils.toArray('.gsap-section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%", // وقتی بالای المان به ۸۵٪ ارتفاع صفحه رسید
                toggleActions: "play none none reverse" // رفتار: پخش، هیچ، هیچ، معکوس موقع برگشت
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });
    });

    // انیمیشن کارت‌های سرویس‌ها (حالت فنری)
    gsap.from(".gsap-service-card", {
        scrollTrigger: {
            trigger: "#services",
            start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)" // افکت پرشی/فنری
    });

    // انیمیشن سکشن "درباره ما" (چپ و راست)
    gsap.from(".gsap-about-text", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.from(".gsap-about-img", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    // انیمیشن لیست تکنولوژی‌ها (Tech Stack)
    gsap.from(".gsap-tech-stack > div", {
        scrollTrigger: {
            trigger: ".gsap-tech-stack",
            start: "top 85%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)"
    });


    // ==========================================
    // 3. افکت سه‌بعدی کارت‌ها (Vanilla Tilt)
    // ==========================================
    // چک می‌کنیم که کتابخانه لود شده باشد
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 10,        // حداکثر زاویه چرخش
            speed: 400,     // سرعت واکنش
            glare: true,    // افکت درخشش نور (Glare)
            "max-glare": 0.4, // شدت درخشش
            scale: 1.02,    // کمی زوم موقع هاور
            perspective: 1000,
            transition: true
        });
    }


    // ==========================================
    // 4. منوی موبایل (ساده)
    // ==========================================
    // اگر دکمه همبرگری دارید، این کد آن را فعال می‌کند
    const mobileBtn = document.querySelector('button.md\\:hidden'); // انتخاب دکمه موبایل
    const navMenu = document.querySelector('nav'); 

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            // اینجا می‌توانید کلاس hidden را تاگل کنید یا انیمیشن بزنید
            // برای سادگی در نسخه پروتوتایپ، یک الرت یا لاگ می‌گذاریم
            // در پروژه واقعی باید یک منوی کشویی باز شود
            console.log("Mobile menu clicked - Implement dropdown logic here");
            
            // نمونه باز شدن ساده:
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-16');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('w-full');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('p-6');
        });
    }

});