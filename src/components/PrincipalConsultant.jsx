import React from 'react';
import abhishekImage from '../1622222932182.jpeg';
import { 
  TrendingUp, 
  Compass, 
  Cpu, 
  BookOpen, 
  Scale, 
  Music, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MessageCircle, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const areasOfInterest = [
  {
    title: 'Business & Upcoming Markets',
    icon: TrendingUp,
  },
  {
    title: 'Political Intelligence & Issue Mapping',
    icon: Compass,
  },
  {
    title: 'Technology & Innovation',
    icon: Cpu,
  },
  {
    title: 'History & Civilisations',
    icon: BookOpen,
  },
  {
    title: 'Religious Thought & Philosophy',
    icon: Scale,
  },
  {
    title: 'Music & Events',
    icon: Music,
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abhishek-thakur-5719a0164?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/AbhishekTh93559',
    icon: Twitter,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/axtadvisory',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
      </svg>
    ),
  },
  {
    name: 'Insta',
    url: 'https://www.instagram.com/thakur_kaha?stkn=MXhuM296MXhweWZ3eg==',
    icon: Instagram,
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@thakur_kaha',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 192 192" fill="currentColor">
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.745C77.2952 44.745 62.637 57.0674 56.666 78.4735C53.3087 90.5147 54.4988 103.882 59.9877 114.77C67.4335 129.544 80.999 138.163 98.1187 138.995C115.111 139.82 129.418 133.523 138.388 121.233C146.402 110.252 148.887 95.8459 145.474 80.2033C143.799 72.5284 140.71 65.5186 136.31 59.3908C126.786 46.1264 113.111 38.6472 97.3355 38.6472C65.5908 38.6472 39.8398 64.3982 39.8398 96.1428C39.8398 127.887 65.5908 153.638 97.3355 153.638C113.805 153.638 129.13 146.772 139.427 134.787L151.785 145.399C138.644 160.697 119.088 169.458 97.3355 169.458C56.9038 169.458 24.0195 136.574 24.0195 96.1428C24.0195 55.7112 56.9038 22.8269 97.3355 22.8269C117.436 22.8269 135.034 32.4172 147.234 49.3972C152.923 57.3197 156.91 66.3897 159.082 76.3458C163.428 96.242 160.264 114.542 150.158 128.401C138.746 144.037 120.536 152.029 98.9839 150.985C77.2023 149.927 60.1064 139.068 50.7937 120.569C44.0768 107.247 42.6186 90.8753 46.7329 76.0889C53.9463 50.223 72.1818 36.9248 97.222 36.9248C97.3627 36.9248 97.5028 36.9248 97.6435 36.9255C127.359 37.1147 145.021 55.7661 146.772 87.8719C145.066 88.2257 143.318 88.5997 141.537 88.9883ZM97.222 123.175C84.7745 123.175 75.3374 116.147 70.9328 103.545C68.1729 95.6481 68.3245 86.8837 71.3601 78.8953C75.2936 68.5445 83.9922 60.5654 97.222 60.5654C111.455 60.5654 120.892 70.7303 122.924 88.0837C114.772 89.8451 106.012 90.7262 97.222 90.7262C81.8213 90.7262 70.0767 96.1264 70.0767 106.926C70.0767 116.516 78.9328 123.175 97.222 123.175Z" />
      </svg>
    ),
  },
  {
    name: 'Gmail',
    url: 'mailto:abhishekthakur@axtadvisory.com',
    icon: Mail,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/',
    icon: MessageCircle,
  }
];

export default function PrincipalConsultant({ onOpenConsultation }) {
  return (
    <section 
      id="principal-consultant" 
      className="py-14 sm:py-28 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10 scroll-mt-24"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-stretch">
        
        {/* LEFT COLUMN: Principal Consultant Full Photo Frame */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative w-full h-full min-h-[360px] sm:min-h-[460px] md:min-h-[500px] aspect-[4/5] lg:aspect-auto group bg-[#0d0f12]">
            <img 
              src={abhishekImage} 
              alt="Abhishek Thakur - Principal Consultant" 
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* RIGHT COLUMN: All Principal Consultant Content */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
          
          {/* Header & Bio */}
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
              PRINCIPAL CONSULTANT
            </span>

            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mt-3 sm:mt-4">
              Abhishek Thakur
            </h2>

            <p className="font-mono text-xs sm:text-sm text-secondary tracking-widest uppercase mt-2 font-medium">
              Strategic Counsel | Business · Politics · Life
            </p>

            <p className="font-body text-sm sm:text-base md:text-[17px] text-gray-200 font-light leading-relaxed mt-4 sm:mt-6">
              A multidisciplinary strategist with experience across entrepreneurship, business development, market research and political strategy.
            </p>
          </div>

          {/* Areas of Interest */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-secondary" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
                Areas of Interest
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {areasOfInterest.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3 sm:p-3.5 bg-white/[0.03] border border-white/10 rounded-xl flex items-center gap-3 hover:bg-white/[0.07] hover:border-secondary/30 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-body text-xs sm:text-sm text-gray-200 font-medium group-hover:text-white transition-colors">
                      {area.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links & Consultation CTA */}
          <div className="pt-4 border-t border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary font-bold mb-3.5">
              Social Links
            </h3>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 bg-white/[0.05] border border-white/15 rounded-full text-xs font-mono text-gray-200 hover:text-white hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-300 flex items-center gap-2 shadow-sm active:scale-95"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
