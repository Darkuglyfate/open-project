import { motion } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Бриф",
    desc: "Обсуждаем идею, замеряем объект и определяем стилистическое направление.",
  },
  {
    num: "02",
    title: "Эскиз",
    desc: "Художники создают визуализацию проекта с учетом освещения и архитектуры.",
  },
  {
    num: "03",
    title: "Согласование",
    desc: "Финальная корректировка деталей, выбор материалов и подписание договора.",
  },
  {
    num: "04",
    title: "Реализация",
    desc: "Профессиональное нанесение росписи и финальная приемка работ.",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="process" className="bg-[#f2f4f4] relative w-full overflow-hidden" data-name="Section - Process">
      <div className="flex flex-col items-center px-[16px] sm:px-[48px] lg:px-[96px] py-[48px] sm:py-[120px] lg:py-[160px] relative w-full max-w-[1536px] mx-auto">
        
        {/* Заголовок — только на sm+ (на мобиле будет внутри тёмного блока) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden sm:flex flex-col items-center relative w-full mb-[40px] sm:mb-[96px]"
        >
          <h2 className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[#2d3435] text-[28px] sm:text-[36px] lg:text-[48px] text-center leading-tight">
            Как строится работа
          </h2>
        </motion.div>

        {/* Мобиль: тёмный блок с заголовком внутри */}
        <div className="sm:hidden w-full bg-[#2d3435]">
          {/* Заголовок внутри тёмного блока */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="px-[20px] pt-[28px] pb-[20px] border-b border-white/10"
          >
            <h2 className="font-['Noto_Serif:Regular',sans-serif] font-normal text-white text-[26px] leading-tight m-0">
              Как строится работа
            </h2>
          </motion.div>

          {/* Шаги */}
          <div className="px-[20px] py-[8px]">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex items-start gap-[16px] py-[20px] ${index !== steps.length - 1 ? "border-b border-white/10" : ""}`}
              >
                {/* Номер + вертикальная линия */}
                <div className="flex flex-col items-center shrink-0 w-[36px]">
                  <span className="font-['Noto_Serif:Regular',sans-serif] text-[22px] text-white/20 leading-none">
                    {step.num}
                  </span>
                  {index !== steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="w-[1px] flex-1 bg-white/15 origin-top mt-[10px]"
                      style={{ minHeight: "20px" }}
                    />
                  )}
                </div>
                {/* Контент */}
                <div className="flex flex-col gap-[6px] pt-[1px]">
                  <h3 className="font-['Noto_Serif:Regular',sans-serif] text-[17px] text-white leading-tight m-0">
                    {step.title}
                  </h3>
                  <p className="font-['Manrope:Regular',sans-serif] text-[12px] text-white/55 leading-[1.55] m-0">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* sm+: оригинальный горизонтальный вид */}
        <div className="hidden sm:flex items-stretch justify-between gap-[24px] relative w-full" ref={containerRef}>
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="flex-[1_0_0] flex flex-col relative group"
            >
              <div className="relative mb-[24px]">
                <div className="font-['Noto_Serif:Regular',sans-serif] text-[60px] text-[rgba(117,124,125,0.2)] leading-none transition-colors duration-500 group-hover:text-[#2d3435]/30">
                  {step.num}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute top-[30px] left-[70px] right-[-20px] h-[1px] overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.15, ease: "easeInOut" }}
                      className="w-full h-full bg-[rgba(117,124,125,0.2)] origin-left"
                    />
                  </div>
                )}
              </div>
              
              <h3 className="font-['Noto_Serif:Regular',sans-serif] text-[24px] text-[#2d3435] mb-[16px] leading-tight">
                {step.title}
              </h3>
              
              <p className="font-['Manrope:Regular',sans-serif] text-[14px] text-[#5a6061] leading-[1.4] m-0 max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}