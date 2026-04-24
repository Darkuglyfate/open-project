import image_74116c188249951a1327de1c4fb8cf5fd4b7c20e from 'figma:asset/74116c188249951a1327de1c4fb8cf5fd4b7c20e.png'
import svgPaths from "./svg-6qgfb1w4q0";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "../app/components/AnimatedSection";
import { PortfolioSlider } from "../app/components/PortfolioSlider";
import { ProcessSection } from "../app/components/ProcessSection";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { AnimatedCounter } from "../app/components/AnimatedCounter";
import { BeforeAfterSection } from "../app/components/BeforeAfterSlider";
import { BrushCursor } from "../app/components/BrushCursor";
import { HeroPaintOverlay, HERO_TEXTURE_KB_CLASS } from "../app/components/HeroPaintOverlay";

import { CheckCircle2, Menu, X } from "lucide-react";

import imgMural from "figma:asset/212e35829f2a34f125b6fa5b5b4d686f7c4e0be8.png";
import imgAb6AXuDeXxBpgIiSfoDPqRly1XexYuUOirDsFl0PhxvxkEcoXIom03MNhZ6YEjNrZFaLNgQYqcMpfAhWpcRkzDyJw8MP7Tg8Vwj32SxY8G2VfKvUMcueeEcbL6IpDj3ANpoMgrEoM7Vt0XyuYYjl1Cznjn8Tw46ZhxzBny84VdzbokXNdy3AFcjUi66G3LGf1XTaL9Ujun0YpGqbEVxDsZqlcLWrlpNHjPqWbrsdHBhxqThvjVxT3Qe0Zv6LJBc7QSdCnvzw from "figma:asset/e7cc6693649691a7773a3f8d18c024ea486886f0.png";
import imgAb6AXuDPcybkLYp956HAI9Ogs8Ad2ZoRpMZhZVeczuDgMuoZpk9NdxfZQJrHNkyFktMjN9BWGEtCoNeDGyGt19SAzL5ZnDy1MxOa9JGb4PcUl35D6Sh4GzT5B5HPbf30N0QYlScXq4FN8ABRpHcpnTwkeVztMg6QoeZrXuhSprtt1HcyaqnVnDpM0AAaPQqfMpgrO6HdXlDbIMo163STfbYhcP3JHklVPd8FtnjQeu4XZwUxObdI77UdOj1L9EMyQYq4 from "figma:asset/94998c724566ba2e3e3675b186fe6adbe8798e3d.png";
import imgAb6AXuBqEhelZhYnoS8UwBbCp64GVuT13JJuymTcYiz8Wzs4D51Lytz9NvdXcAAg1HaIdo4KRihBjt5EpaZtdlEbHfWlMh1IuORmynmRTxBvfygo5LaWvDfiY3CrpqQugTwzqqTv4Ic4ECdIodLcGpVdZgdb0OSfQwmbo6A50BLzGRh789K9UizJqw895S3IaGNnmZaLk3RMBlZ12V7UNm9BHnAgAh79EvPWii5CmtQoJmyJfpz3K8OWthOavtb10Zycy from "figma:asset/5cdce15ddd480926cfa52c6ab4dc3e18d1e83859.png";
import imgAb6AXuAg1P6UDvCv5Hru4Gc5GyM0NXrpDdxTpWiyRgcGtgFv8DkMqjb5U2Pn9Ea6Wc5XA7QZmiX0WTkOy9Vs3HFiu2J4FuJVan9TwW9Q11LesT9SwJ6RweWlbhwVzgeaaQojGfOidPtclgWq3Mu6HPuXqb0OBlozuc7XJdZeBdsKrh1H4T9UFkIzWA2L7898TinOYkuEa02LD3KeIqDmtw8GqwFaSg99Z0G37KlwQrbGu7Dy0FJfOb9QiQg5XpBhYrtins from "figma:asset/6877bdabbd0b290ac9d02043b9fe1220ad8c5b5a.png";
import imgLogo from "figma:asset/7f28416faabe9c29ee905a285bdf4755dea77561.png";
import imgLogo1 from "figma:asset/ecc122bf99c360c13a421830378a056bbd8f0132.png";
import imgLogo2 from "figma:asset/55caadfcf4b321b2b6e90ada574dd7125ec2ca9f.png";
import imgLogo3 from "figma:asset/da13bceb24dd4a72b7f8504838cb40e108419813.png";
import imgLogo4 from "figma:asset/49e12b98ac0d82c1ea7e0e4a99e911b8c1ae984b.png";
import imgLogo5 from "figma:asset/ffad327855799a8b164a87fb9da458319135a81b.png";
import imgNavLogo from "figma:asset/3fe5e53c59c3b64683a909a028aacb21034fe2ae.png";
import imgSanuzle from "figma:asset/fa8dedf646e6aaf7f3104bb7c8580922d558c416.png";
import imgConcreteRough from "figma:asset/95807f5afa9e3ef6c178e720bbc741e1732036d3.png";
import imgConcreteWide from "figma:asset/87f38da7ce6054bed1f4bf8e8f3aec9ecba0222c.png";

function LuxuryInteriorMural() {
  return (
    <div className="flex-[1_0_0] w-full h-full overflow-hidden" data-name="Luxury interior mural" style={{ minHeight: '400px' }}>
      <img
        src={imgMural}
        alt="Luxury interior mural"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="Container">
      <LuxuryInteriorMural />
      
    </div>
  );
}

function Container1() {
  return (
    <div className="hidden lg:flex absolute content-stretch flex-col h-[819px] items-start justify-center right-[-96px] top-[-200.5px] w-[640px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-tight relative shrink-0 text-[#2d3435] text-[30px] sm:text-[52px] lg:text-[72px] tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.8px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">Роспись стен и</p>
        <p className="mb-0">фасадов под</p>
        <p>ваш объект</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-full relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[#5a6061] text-[16px] lg:text-[20px] w-full">
        <p className="mb-0">Квартиры, дома, офисы и фасады. От эскиза до</p>
        <p>реализации с точным расчетом и договором.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#2d3435] content-stretch flex flex-col items-center justify-center px-[24px] py-[13px] sm:px-[40px] sm:py-[21px] relative w-full sm:w-auto cursor-pointer hover:bg-[#404d4e] transition-colors"
      data-name="Button"
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[14px] sm:text-[16px] text-center w-full sm:w-[153.55px]">
        <p className="leading-[20px]">Рассчитать проект</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="border border-[#2d3435] content-stretch flex flex-col items-center justify-center px-[24px] py-[13px] sm:px-[41px] sm:py-[21px] relative w-full sm:w-auto cursor-pointer hover:bg-[#2d3435] hover:text-white transition-colors group"
      data-name="Button"
      onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d3435] group-hover:text-white text-[14px] sm:text-[16px] text-center w-full sm:w-[142.39px] transition-colors">
        <p className="leading-[20px]">Смотреть работы</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-stretch sm:items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-[1/span_12] lg:col-[1/span_6] content-stretch flex flex-col gap-[24px] lg:gap-[32px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <AnimatedSection delay={100}><Heading /></AnimatedSection>
      <AnimatedSection delay={250}><Container4 /></AnimatedSection>
      <AnimatedSection delay={400}><Container5 /></AnimatedSection>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] gap-x-0 lg:gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[auto] lg:grid-rows-[_418px] lg:h-[418px] max-w-[1536px] min-h-px min-w-px relative" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="min-h-[600px] md:min-h-[921px] relative shrink-0 w-full overflow-hidden bg-[#e0e2e2]" data-name="Hero Section">
      {/* Фактура декоративного бетона / микроцемента - усиленная */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Базовая широкая текстура — Ken-Burns анимация */}
        <img 
          src={imgConcreteWide}
          alt="Wide Concrete Texture" 
          className={`w-full h-full object-cover opacity-[0.4] mix-blend-multiply grayscale ${HERO_TEXTURE_KB_CLASS}`}
        />
        {/* Дополнительный слой с выраженной фактурой */}
        <img 
          src={imgConcreteRough}
          alt="Rough Concrete Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.25] mix-blend-color-burn grayscale"
        />
        {/* Плавный градиент-растворение */}
        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#f9f9f9] to-transparent"></div>
      </div>

      {/* Анимированные мазки кисти (cinemagraph-эффект) */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.08, mixBlendMode: "multiply" }}>
        <HeroPaintOverlay />
      </div>
      
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full relative z-10">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[16px] sm:px-[48px] lg:px-[96px] py-[90px] sm:py-[180px] lg:py-[251.5px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[30px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]"><AnimatedCounter target={12} suffix="+ лет опыта" duration={1800} /></p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#757c7d] text-[12px] tracking-[2.4px] uppercase w-[162.88px]">
        <p className="leading-[16px]">Профессионализм</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[162.88px]" data-name="Container">
      <Margin />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[30px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]"><AnimatedCounter target={180} suffix="+ объектов" duration={2000} /></p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#757c7d] text-[12px] tracking-[2.4px] uppercase w-[97.14px]">
        <p className="leading-[16px]">Портфолио</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[97.14px]" data-name="Container">
      <Margin1 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[30px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]"><AnimatedCounter target={50000} suffix="+ м²" duration={2400} locale={true} /></p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#757c7d] text-[12px] tracking-[2.4px] uppercase w-[134.31px]">
        <p className="leading-[16px]">Площадь работ</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[134.31px]" data-name="Container">
      <Margin2 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[30px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">Россия и мир</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#757c7d] text-[12px] tracking-[2.4px] uppercase w-[176.91px]">
        <p className="leading-[16px]">География проектов</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[176.91px]" data-name="Container">
      <Margin3 />
      <Container18 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[32px] gap-y-[32px] max-w-[inherit] relative w-full">
        <Container7 />
        <Container10 />
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function SectionTrustMetrics() {
  return (
    <div className="bg-[#f2f4f4] relative shrink-0 w-full" data-name="Section - Trust Metrics">
      <div className="content-stretch flex flex-col items-center px-[20px] sm:px-[32px] py-[48px] sm:py-[64px] relative w-full text-center bg-[#00000000]">
        <Container6 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[48px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[48px] text-center">Избранные работы</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start w-full max-w-[576px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#5a6061] text-[16px] w-full text-center">
        <p className="mb-0">Реализуем проекты для частных и коммерческих пространств, создавая</p>
        <p>уникальную визуальную идентичность.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container20 />
    </div>
  );
}

function Ab6AXuDeXxBpgIiSfoDPqRly1XexYuUOirDsFl0PhxvxkEcoXIom03MNhZ6YEjNrZFaLNgQYqcMpfAhWpcRkzDyJw8MP7Tg8Vwj32SxY8G2VfKvUMcueeEcbL6IpDj3ANpoMgrEoM7Vt0XyuYYjl1Cznjn8Tw46ZhxzBny84VdzbokXNdy3AFcjUi66G3LGf1XTaL9Ujun0YpGqbEVxDsZqlcLWrlpNHjPqWbrsdHBhxqThvjVxT3Qe0Zv6LJBc7QSdCnvzw() {
  return (
    <div className="h-[440.88px] relative shrink-0 w-full" data-name="AB6AXuDeXxBpgIISfoDPqRly1XexYuUOirDSFl0PhxvxkEcoXIom03mNhZ6yEjNrZFaL_Ng_QYqcMPFAhWpcRkzDyJw8M_P7Tg8vwj32sxY8g2VfKvUMcueeEcbL6IpDj3ANpoMgrEoM7VT0xyuYYjl1cznjn8Tw46zhxzBny84VdzbokX_ndy3a_fcjUI-66G3LGf1xTaL9Ujun0-YpGqbEVx_DS_ZqlcL-wrlp-NHjPQWbrsdHBhxqTHVJVxT3qe0Zv6lJBc7qSdCnvzw">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%] object-cover" src="https://images.unsplash.com/photo-1613685302226-a4b6e15cf75d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHdhbGwlMjBtdXJhbCUyMGFydCUyMHBhaW50aW5nJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0Mjg4NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080" />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[12px] py-[4px] right-[24.01px] top-[24px]" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d3435] text-[10px] tracking-[1px] uppercase w-[46.06px]">
        <p className="leading-[15px]">150sqm</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute aspect-[3/4] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-[0.01px] top-0" data-name="Container">
      <Ab6AXuDeXxBpgIiSfoDPqRly1XexYuUOirDsFl0PhxvxkEcoXIom03MNhZ6YEjNrZFaLNgQYqcMpfAhWpcRkzDyJw8MP7Tg8Vwj32SxY8G2VfKvUMcueeEcbL6IpDj3ANpoMgrEoM7Vt0XyuYYjl1Cznjn8Tw46ZhxzBny84VdzbokXNdy3AFcjUi66G3LGf1XTaL9Ujun0YpGqbEVxDsZqlcLWrlpNHjPqWbrsdHBhxqThvjVxT3Qe0Zv6LJBc7QSdCnvzw />
      <Overlay />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[472.88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[181.41px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Котедж
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[512.88px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#5a6061] text-[14px] tracking-[0.35px] w-[321.59px]">
        <p className="leading-[20px]">ХУДОЖЕСТВЕННАЯ РОСПИСЬ • МОСКВА</p>
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-white col-1 h-[628.89px] justify-self-stretch relative row-1 shrink-0" data-name="Project Card 1">
      <Container22 />
      <Heading2 />
      <Container23 />
    </div>
  );
}

function Ab6AXuDPcybkLYp956HAI9Ogs8Ad2ZoRpMZhZVeczuDgMuoZpk9NdxfZQJrHNkyFktMjN9BWGEtCoNeDGyGt19SAzL5ZnDy1MxOa9JGb4PcUl35D6Sh4GzT5B5HPbf30N0QYlScXq4FN8ABRpHcpnTwkeVztMg6QoeZrXuhSprtt1HcyaqnVnDpM0AAaPQqfMpgrO6HdXlDbIMo163STfbYhcP3JHklVPd8FtnjQeu4XZwUxObdI77UdOj1L9EMyQYq() {
  return (
    <div className="h-[440.89px] relative shrink-0 w-full" data-name="AB6AXuDPcybkL-YP956H--A_i9ogs8Ad2ZO_rpMZhZVeczuDgMUOZpk9_NdxfZ_QJr-HNkyFKTMjN9bW_GEtCONeDGyGT19sAzL5-ZNDy1-MXOa9jGB4pcUl35D6Sh4GzT5b5hPBF30N0qYLScXq4fN8aB-RP_hcpnTwkeVztMG6_QOEZrXuhSprtt1hcyaqnVNDpM0aAaPQqfMpgrO6Hd-XlDbIMo163sTFBYhcP3JHklVPd8ftnjQEU4xZwUXObdI77udOj1L9EMyQYq4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 top-0 w-full object-cover" src={imgAb6AXuDPcybkLYp956HAI9Ogs8Ad2ZoRpMZhZVeczuDgMuoZpk9NdxfZQJrHNkyFktMjN9BWGEtCoNeDGyGt19SAzL5ZnDy1MxOa9JGb4PcUl35D6Sh4GzT5B5HPbf30N0QYlScXq4FN8ABRpHcpnTwkeVztMg6QoeZrXuhSprtt1HcyaqnVnDpM0AAaPQqfMpgrO6HdXlDbIMo163STfbYhcP3JHklVPd8FtnjQeu4XZwUxObdI77UdOj1L9EMyQYq4} />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[12px] py-[4px] right-[24px] top-[24px]" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d3435] text-[10px] tracking-[1px] uppercase w-[47.83px]">
        <p className="leading-[15px]">420sqm</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute aspect-[3/4] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 top-0" data-name="Container">
      <Ab6AXuDPcybkLYp956HAI9Ogs8Ad2ZoRpMZhZVeczuDgMuoZpk9NdxfZQJrHNkyFktMjN9BWGEtCoNeDGyGt19SAzL5ZnDy1MxOa9JGb4PcUl35D6Sh4GzT5B5HPbf30N0QYlScXq4FN8ABRpHcpnTwkeVztMg6QoeZrXuhSprtt1HcyaqnVnDpM0AAaPQqfMpgrO6HdXlDbIMo163STfbYhcP3JHklVPd8FtnjQeu4XZwUxObdI77UdOj1L9EMyQYq />
      <Overlay1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[472.89px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[226.55px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]"> Компания "ПИК"</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[512.89px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#5a6061] text-[14px] tracking-[0.35px] w-[218.34px]">
        <p className="leading-[20px]">Рисунок в санузле - Москва</p>
      </div>
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="bg-white h-[532.89px] relative shrink-0 w-full" data-name="Project Card 2">
      <Container24 />
      <Heading3 />
      <Container25 />
    </div>
  );
}

function ProjectCard2Margin() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch pt-[96px] relative row-1 self-start shrink-0" data-name="Project Card 2:margin">
      <ProjectCard1 />
    </div>
  );
}

function Ab6AXuBqEhelZhYnoS8UwBbCp64GVuT13JJuymTcYiz8Wzs4D51Lytz9NvdXcAAg1HaIdo4KRihBjt5EpaZtdlEbHfWlMh1IuORmynmRTxBvfygo5LaWvDfiY3CrpqQugTwzqqTv4Ic4ECdIodLcGpVdZgdb0OSfQwmbo6A50BLzGRh789K9UizJqw895S3IaGNnmZaLk3RMBlZ12V7UNm9BHnAgAh79EvPWii5CmtQoJmyJfpz3K8OWthOavtb10Zycy() {
  return (
    <div className="h-[440.88px] relative shrink-0 w-full" data-name="AB6AXuBqEhelZhYnoS__8uwBB_Cp64GVuT13JJuymTcYiz8wzs4d-51_LYTZ9nvdXC-A_ag1HAIdo4kRihBjt5EpaZtdlEBHfWL-MH1iuORmynmR-TXBvfygo5LAWvDfiY3CRPQQugTwzqqTV4ic4ECdIODLcGpVDZgdb0oSfQWMBO6-a_50BLzGRh789k9UizJQW895s3IaGNnmZaLk3rMBlZ-12v_7UNm9bHnAgAh79EvPWii5cmtQOJmyJfpz3_k8oWTHOavtb10ZYCY">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgSanuzle} />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[12px] py-[4px] right-[24px] top-[24px]" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d3435] text-[10px] tracking-[1px] uppercase w-[40.02px]">
        <p className="leading-[15px]">85sqm</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute aspect-[3/4] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-[0.01px] top-0" data-name="Container">
      <Ab6AXuBqEhelZhYnoS8UwBbCp64GVuT13JJuymTcYiz8Wzs4D51Lytz9NvdXcAAg1HaIdo4KRihBjt5EpaZtdlEbHfWlMh1IuORmynmRTxBvfygo5LaWvDfiY3CrpqQugTwzqqTv4Ic4ECdIodLcGpVdZgdb0OSfQwmbo6A50BLzGRh789K9UizJqw895S3IaGNnmZaLk3RMBlZ12V7UNm9BHnAgAh79EvPWii5CmtQoJmyJfpz3K8OWthOavtb10Zycy />
      <Overlay2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[472.88px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[179.17px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px] whitespace-nowrap">Юридическая компания</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[512.88px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#5a6061] text-[14px] tracking-[0.35px] w-[257.11px]">
        <p className="mb-0 whitespace-nowrap">Геометрический рисунок - Москва</p>
      </div>
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="bg-white col-3 h-[628.89px] justify-self-stretch relative row-1 shrink-0" data-name="Project Card 3">
      <Container26 />
      <Heading4 />
      <Container27 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_628.89px] relative shrink-0 w-full" data-name="Container">
      <ProjectCard />
      <ProjectCard2Margin />
      <ProjectCard2 />
    </div>
  );
}

function SectionPortfolio() {
  return (
    <div id="portfolio" className="content-stretch flex flex-col gap-[80px] items-start max-w-[1536px] relative shrink-0 w-full lg:w-[1088px]" data-name="Section - Portfolio">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-tight relative shrink-0 text-[#2d3435] text-[32px] sm:text-[40px] lg:text-[48px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-tight">Что мы делаем</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[120px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] relative shrink-0 text-[#2d3435] text-[20px] w-[121.19px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">Квартиры и</p>
        <p>дома</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[0.625px] right-[48px] top-[198.88px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[137px] justify-center leading-[22.75px] relative shrink-0 text-[#5a6061] text-[14px] w-[131.59px]">
        <p className="mb-0">Индивидуальные</p>
        <p className="mb-0">решения для жилых</p>
        <p className="mb-0">интерьеров,</p>
        <p className="mb-0">подчеркивающие</p>
        <p className="mb-0">характер</p>
        <p>пространства.</p>
      </div>
    </div>
  );
}

// Brush-stroke SVG bottom border (shared для всех Background-карточек)
function BrushStrokeBorder() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[14px] pointer-events-none overflow-visible">
      <svg viewBox="0 0 400 14" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <path
          d="M0,7 C40,4 100,10 180,6 S280,3 400,8"
          fill="none"
          stroke="#2d3435"
          strokeWidth="4"
          strokeLinecap="round"
          style={{
            strokeDasharray: 430,
            strokeDashoffset: 430,
            transition: "stroke-dashoffset 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
          className="group-hover:[stroke-dashoffset:0]"
        />
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="group bg-white h-[320px] sm:h-[360px] lg:h-[389.75px] justify-self-stretch relative shrink-0 overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-name="Background">
      <div className="absolute h-[25.341px] left-[48px] top-[48px] w-[22.5px] z-10 transition-transform duration-300 group-hover:scale-110" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4999 25.3412">
          <path d={svgPaths.p2fbd6f40} fill="#2d3435" id="Icon" />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[100px] z-10">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] relative shrink-0 text-[#2d3435] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="mb-0">Квартиры и</p>
          <p>дома</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[180px] z-10">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-start leading-[22.75px] relative shrink-0 text-[#5a6061] text-[15px] w-full">
          <p className="mb-0">Индивидуальные решения для жилых интерьеров, подчеркивающие характер пространства.</p>
        </div>
      </div>
      <BrushStrokeBorder />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[120px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[84px] justify-center leading-[28px] relative shrink-0 text-[#2d3435] text-[20px] w-[138.34px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">Офисы и</p>
        <p className="mb-0">бизнес-</p>
        <p>пространства</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[0.75px] right-[48px] top-[227px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[114px] justify-center leading-[22.75px] relative shrink-0 text-[#5a6061] text-[14px] w-[144.94px]">
        <p className="mb-0">Создание а��мосферы</p>
        <p className="mb-0">продуктивности и</p>
        <p className="mb-0">трансляция</p>
        <p className="mb-0">ценностей бренда</p>
        <p>через искусство.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="group bg-white h-[320px] sm:h-[360px] lg:h-[389.75px] justify-self-stretch relative shrink-0 overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-name="Background">
      <div className="absolute h-[26.25px] left-[48px] top-[48px] w-[28.904px] z-10 transition-transform duration-300 group-hover:scale-110" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9038 26.2499">
          <path d={svgPaths.p24256900} fill="#2d3435" id="Icon" />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[100px] z-10">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[84px] justify-center leading-[28px] relative shrink-0 text-[#2d3435] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="mb-0">Офисы и</p>
          <p className="mb-0">бизнес-</p>
          <p>пространства</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[208px] z-10">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-start leading-[22.75px] relative shrink-0 text-[#5a6061] text-[15px] w-full">
          <p className="mb-0">Создание атмосферы продуктивности и трансляция ценностей бренда через искусство.</p>
        </div>
      </div>
      <BrushStrokeBorder />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[120px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[20px] w-[78.56px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">Фасады</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[0.75px] right-[48px] top-[171px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[114px] justify-center leading-[22.75px] relative shrink-0 text-[#5a6061] text-[14px] w-[147.97px]">
        <p className="mb-0">Масштабная роспись</p>
        <p className="mb-0">зданий устойчивыми к</p>
        <p className="mb-0">внешним</p>
        <p className="mb-0">воздействиям</p>
        <p>материалами.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="group bg-white h-[320px] sm:h-[360px] lg:h-[389.75px] justify-self-stretch relative shrink-0 overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-name="Background">
      <div className="absolute h-[26.192px] left-[48px] top-[48px] w-[15.75px] z-10 transition-transform duration-300 group-hover:scale-110" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7499 26.1922">
          <path d={svgPaths.p25739a00} fill="#2d3435" id="Icon" />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[100px] z-10">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[28px]">Фасады</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[152px] z-10">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-start leading-[22.75px] relative shrink-0 text-[#5a6061] text-[15px] w-full">
          <p className="mb-0">Масштабная роспись зданий устойчивыми к внешним воздействиям материалами.</p>
        </div>
      </div>
      <BrushStrokeBorder />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[120px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] relative shrink-0 text-[#2d3435] text-[20px] w-[159.45px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">Нестандартные</p>
        <p>проекты</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[0.875px] right-[48px] top-[199.13px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[91px] justify-center leading-[22.75px] relative shrink-0 text-[#5a6061] text-[14px] w-[151.42px]">
        <p className="mb-0">Художественное</p>
        <p className="mb-0">оформление любых</p>
        <p className="mb-0">поверхнос��ей, меб��ли</p>
        <p>и арт-объектов.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="group bg-white h-[320px] sm:h-[360px] lg:h-[389.75px] justify-self-stretch relative shrink-0 overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-name="Background">
      <div className="absolute h-[24.963px] left-[48px] top-[48px] w-[25.904px] z-10 transition-transform duration-300 group-hover:scale-110" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9037 24.9626">
          <path d={svgPaths.pe112c80} fill="#2d3435" id="Icon" />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[100px] z-10">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] relative shrink-0 text-[#2d3435] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="mb-0">Нестандартные</p>
          <p>проекты</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[180px] z-10">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-start leading-[22.75px] relative shrink-0 text-[#5a6061] text-[15px] w-full">
          <p className="mb-0">Художественное оформление любых поверхностей, мебели и арт-объектов.</p>
        </div>
      </div>
      <BrushStrokeBorder />
    </div>
  );
}

function Container29() {
  const services = [
    {
      icon: <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4999 25.3412"><path d={svgPaths.p2fbd6f40} fill="#2d3435" /></svg>,
      title: "Квартиры и дома",
      desc: "Индивидуальные решения для жилых интерьеров, подчеркивающие характер пространства.",
    },
    {
      icon: <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9038 26.2499"><path d={svgPaths.p24256900} fill="#2d3435" /></svg>,
      title: "Офисы и бизнес-пространства",
      desc: "Создание атмосферы продуктивности и трансляция ценностей бренда через искусство.",
    },
    {
      icon: <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7499 26.1922"><path d={svgPaths.p25739a00} fill="#2d3435" /></svg>,
      title: "Фасады",
      desc: "Масштабная роспись зданий устойчивыми к внешним воздействиям материалами.",
    },
    {
      icon: <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9037 24.9626"><path d={svgPaths.pe112c80} fill="#2d3435" /></svg>,
      title: "Нестандартные проекты",
      desc: "Художественное оформление любых поверхностей, мебели и арт-объектов.",
    },
  ];

  return (
    <>
      {/* Мобиль: компактная сетка 2×2 */}
      <div className="sm:hidden gap-[12px] grid grid-cols-2 relative shrink-0 w-full">
        {services.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 flex flex-col gap-[12px] p-[16px] relative overflow-hidden group">
            <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              {s.icon}
            </div>
            <div className="font-['Noto_Serif:Regular',sans-serif] text-[16px] text-[#2d3435] leading-tight" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              {s.title}
            </div>
            <div className="font-['Manrope:Regular',sans-serif] text-[12px] text-[#5a6061] leading-[1.55]">
              {s.desc}
            </div>
            {/* Brush-stroke bottom border — SVG path animation */}
            <div className="absolute bottom-0 left-0 w-full h-[12px] pointer-events-none">
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <path
                  d="M0,6 C20,3 50,9 90,5 S140,2 200,7"
                  fill="none"
                  stroke="#2d3435"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 220,
                    strokeDashoffset: 220,
                    transition: "stroke-dashoffset 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                  className="group-hover:[stroke-dashoffset:0]"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {/* sm+: оригинальные карточки */}
      <div className="hidden sm:grid gap-x-[24px] gap-y-[24px] grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full" data-name="Container">
        <Background />
        <Background1 />
        <Background2 />
        <Background3 />
      </div>
    </>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] sm:gap-[80px] items-start max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container29 />
    </div>
  );
}

function SectionServices() {
  return (
    <div id="services" className="bg-[#ebeeef] relative shrink-0 w-full" data-name="Section - Services">
      <div className="content-stretch flex flex-col items-center pb-[48px] sm:pb-[128px] pt-[48px] sm:pt-[160px] px-[16px] sm:px-[48px] lg:px-[96px] relative w-full">
        <Container28 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-tight relative shrink-0 text-[#2d3435] text-[28px] sm:text-[36px] lg:text-[48px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-tight">Почему ARTALYANS</p>
      </div>
    </div>
  );
}

function Container35() {
  const items = [
    { title: "Точный расчет", desc: "Прозрачная смета без скрытых расходов и изменений в процессе." },
    { title: "Бесплатный эскиз", desc: "Визуализируем идею на вашем объекте еще до начала работ." },
    { title: "Работа по договору", desc: "Юридические гарантии качества, сроков и ответственности." },
    { title: "Реализация в срок", desc: "Строгое соблюдение графика производства художественных работ." },
  ];

  return (
    <div className="flex flex-col w-full mt-4" data-name="Accordion Container">
      {items.map((item, i) => (
        <div key={i} className={`group border-b border-[#2d3435]/20 py-[24px] cursor-pointer transition-colors hover:border-[#2d3435] ${i === 0 ? 'border-t' : ''}`}>
          <div className="flex items-center justify-between">
            <h4 className="font-['Noto_Serif:Regular',sans-serif] text-[20px] lg:text-[24px] text-[#2d3435] transition-transform duration-300 group-hover:translate-x-2">
              {item.title}
            </h4>
            <div className="w-[32px] h-[32px] rounded-full border border-[#2d3435]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2d3435] group-hover:text-white shrink-0 ml-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-45">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[150px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="font-['Manrope:Regular',sans-serif] text-[15px] lg:text-[16px] text-[#5a6061] mt-[16px] pr-[48px]">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex w-full lg:flex-[1_0_0] flex-col gap-[32px] lg:gap-[48px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading10 />
      <Container35 />
    </div>
  );
}

function Ab6AXuAg1P6UDvCv5Hru4Gc5GyM0NXrpDdxTpWiyRgcGtgFv8DkMqjb5U2Pn9Ea6Wc5XA7QZmiX0WTkOy9Vs3HFiu2J4FuJVan9TwW9Q11LesT9SwJ6RweWlbhwVzgeaaQojGfOidPtclgWq3Mu6HPuXqb0OBlozuc7XJdZeBdsKrh1H4T9UFkIzWA2L7898TinOYkuEa02LD3KeIqDmtw8GqwFaSg99Z0G37KlwQrbGu7Dy0FJfOb9QiQg5XpBhYrtins() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuAG1p6uDvCv5Hru4gc5gyM0nXRP_ddx-TPWiy-rgcGtgFv8DkMqjb5U2PN9ea6Wc5xA7Q-ZmiX0wTKOy9VS3hFIU2J4FuJVan9TwW9Q11lesT9SW_J6rweWLBHWVzgeaaQOJ_GFOidPTCLGWq3MU6hPUXqb0OBlozuc7X_jdZeBdsKrh1H_4T_9-uFKIzW__A2l7898TinOYkuEa02lD3keIqDMTW8gqwFaSG99Z0G37KLWQrbGU7Dy0FJfOB9qiQg5xp_BHYrtins">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Интерьер с минималистичной росписью" className="absolute h-full w-full object-cover top-0 left-0" src={image_74116c188249951a1327de1c4fb8cf5fd4b7c20e} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-white bottom-[-32px] content-stretch flex flex-col items-start left-[-32px] max-w-[320px] pl-[32px] pr-[52.83px] py-[32px]" data-name="Background">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[84px] justify-center leading-[28px] relative shrink-0 text-[#5f5e5e] text-[18px] w-[235.17px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">{`"Искусство должно быть`}</p>
        <p className="mb-0">часть�� архитектуры, а не</p>
        <p>{`просто украшением."`}</p>
      </div>
    </div>
  );
}

function Background4Fixed() {
  return (
    <div
      className="absolute bg-white bottom-0 lg:bottom-[-32px] left-0 lg:left-[-32px] content-stretch flex flex-col items-start max-w-[calc(100%-16px)] lg:max-w-[320px] pl-[20px] lg:pl-[32px] pr-[20px] lg:pr-[52.83px] py-[20px] lg:py-[32px]"
      data-name="Background"
    >
      <div
        className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[#5f5e5e] text-[15px] lg:text-[18px] w-full"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="mb-0">{`"Искусство должно быть`}</p>
        <p className="mb-0">частью архитектуры, а не</p>
        <p>{`просто украшением."`}</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex w-full lg:flex-[1_0_0] flex-col h-[260px] sm:h-[380px] lg:h-[500px] items-start justify-center min-h-px min-w-px relative overflow-hidden" data-name="Container">
      <Ab6AXuAg1P6UDvCv5Hru4Gc5GyM0NXrpDdxTpWiyRgcGtgFv8DkMqjb5U2Pn9Ea6Wc5XA7QZmiX0WTkOy9Vs3HFiu2J4FuJVan9TwW9Q11LesT9SwJ6RweWlbhwVzgeaaQojGfOidPtclgWq3Mu6HPuXqb0OBlozuc7XJdZeBdsKrh1H4T9UFkIzWA2L7898TinOYkuEa02LD3KeIqDmtw8GqwFaSg99Z0G37KlwQrbGu7Dy0FJfOb9QiQg5XpBhYrtins />
      <Background4Fixed />
    </div>
  );
}

function SectionWhyArtalyans() {
  return (
    <div id="about" className="content-stretch flex flex-col lg:flex-row gap-[48px] lg:gap-[96px] items-center max-w-[1536px] pt-[32px] relative shrink-0 w-full" data-name="Section - Why ARTALYANS">
      <Container34 />
      <Container48 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-tight relative shrink-0 text-[#2d3435] text-[28px] sm:text-[36px] lg:text-[48px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-tight">Как строится ��абота</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-[rgba(117,124,125,0.2)] w-[67.09px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[60px]">01</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[63.97px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">Бриф</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[60px] justify-center leading-[20px] relative shrink-0 text-[#5a6061] text-[14px] w-[202.67px]">
        <p className="mb-0">Обсуждаем идею, замеряем</p>
        <p className="mb-0">объект и определяем</p>
        <p>стилистическое направление.</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="flex-[1_0_0] min-h-[220px] min-w-px relative self-stretch w-full" data-name="Step 1">
      <Container51 />
      <Heading12 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-[rgba(117,124,125,0.2)] w-[67.09px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[60px]">02</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[68.67px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">Эскиз</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[60px] justify-center leading-[20px] relative shrink-0 text-[#5a6061] text-[14px] w-[231.56px]">
        <p className="mb-0">Художники создают визуализацию</p>
        <p className="mb-0">проекта с учетом освещения и</p>
        <p>архитектуры.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="flex-[1_0_0] min-h-[220px] min-w-px relative self-stretch w-full" data-name="Step 2">
      <Container53 />
      <Heading13 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-[rgba(117,124,125,0.2)] w-[67.09px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[60px]">03</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[166.14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">Согласование</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[60px] justify-center leading-[20px] relative shrink-0 text-[#5a6061] text-[14px] w-[197.56px]">
        <p className="mb-0">Финальная корректировка</p>
        <p className="mb-0">деталей, выбор материалов и</p>
        <p>подписание договора.</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="flex-[1_0_0] min-h-[220px] min-w-px relative self-stretch w-full" data-name="Step 3">
      <Container55 />
      <Heading14 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-[rgba(117,124,125,0.2)] w-[67.09px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[60px]">04</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[24px] w-[142.88px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">Реализация</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[60px] justify-center leading-[20px] relative shrink-0 text-[#5a6061] text-[14px] w-[207.84px]">
        <p className="mb-0">Профессиональное нанесение</p>
        <p className="mb-0">росписи и финальн��я приемка</p>
        <p>работ.</p>
      </div>
    </div>
  );
}

function Container58Fixed() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[60px] justify-center leading-[20px] relative shrink-0 text-[#5a6061] text-[14px] w-[207.84px]">
        <p className="mb-0">Профессиональное нанесение</p>
        <p className="mb-0">росписи и финальная приемка</p>
        <p>работ.</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="flex-[1_0_0] min-h-[220px] min-w-px relative self-stretch w-full" data-name="Step 4">
      <Container57 />
      <Heading15 />
      <Container58Fixed />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row items-start justify-between gap-[48px] sm:gap-[24px] relative shrink-0 w-full" data-name="Container">
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container50 />
    </div>
  );
}

function SectionProcess() {
  return (
    <div id="process" className="bg-[#f2f4f4] relative shrink-0 w-full" data-name="Section - Process">
      <div className="content-stretch flex flex-col items-center px-[20px] sm:px-[48px] lg:px-[96px] py-[80px] sm:py-[120px] lg:py-[160px] relative w-full">
        <Container49 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#757c7d] text-[12px] text-center tracking-[3.6px] uppercase w-[174.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[16px]">{`Media & Partners`}</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-tight relative shrink-0 text-[#757c7d] text-[20px] sm:text-[30px] text-center tracking-[1.6px] uppercase w-full max-w-[450px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-tight">Клиенты и публикации</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="aspect-[48/48] h-full max-w-[141.3300018310547px] relative shrink-0" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex h-[40px] lg:h-[48px] items-start justify-center justify-self-stretch relative self-center shrink-0" data-name="Container">
      <Logo />
    </div>
  );
}

function Logo1() {
  return (
    <div className="aspect-[48/48] h-full max-w-[141.3300018310547px] relative shrink-0" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo1} />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[40px] lg:h-[48px] items-start justify-center justify-self-stretch relative self-center shrink-0" data-name="Container">
      <Logo1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="aspect-[32/32] h-full max-w-[141.3300018310547px] relative shrink-0" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo2} />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center justify-self-stretch relative self-center shrink-0" data-name="Container">
      <Logo2 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="aspect-[40/40] h-full max-w-[141.33999633789062px] relative shrink-0" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo3} />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-center justify-self-stretch relative self-center shrink-0" data-name="Container">
      <Logo3 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="aspect-[48/48] h-full max-w-[141.3300018310547px] relative shrink-0" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo4} />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[40px] lg:h-[48px] items-start justify-center justify-self-stretch relative self-center shrink-0" data-name="Container">
      <Logo4 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="aspect-[32/32] h-full max-w-[141.3300018310547px] relative shrink-0" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo5} />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center justify-self-stretch relative self-center shrink-0" data-name="Container">
      <Logo5 />
    </div>
  );
}

function Background5() {
  return (
    <div className="opacity-40 relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[32px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 relative w-full">
        <Container61 />
        <Container62 />
        <Container63 />
        <Container64 />
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function SectionClients() {
  return (
    null
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-tight relative shrink-0 text-[#2d3435] text-[28px] sm:text-[36px] lg:text-[48px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">Получить расчёт и</p>
        <p>консультацию</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-normal relative shrink-0 text-[#5a6061] text-[14px] sm:text-[16px] text-center w-full">
        <p className="leading-[24px]">Расскажите о задаче, и мы предложим подходящее решение в течение дня.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(117,124,125,0.4)] w-full">
          <p className="leading-[normal]">Ваше имя</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[62px] justify-self-stretch relative shrink-0 w-full group" data-name="Input">
      <input 
        type="text" 
        name="name"
        placeholder="Ваше имя"
        required
        className="w-full h-full bg-transparent border border-[rgba(173,179,180,0.4)] px-[20px] py-[19px] font-['Manrope:Regular',sans-serif] text-[18px] text-[#171717] outline-none hover:border-[rgba(173,179,180,0.8)] focus:border-[#171717] focus:bg-white focus:shadow-sm transition-all duration-300 placeholder:text-[rgba(117,124,125,0.4)] rounded-none"
      />
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[62px] justify-self-stretch relative shrink-0 w-full group" data-name="Input">
      <input 
        type="tel" 
        name="phone"
        placeholder="Телефон"
        required
        className="w-full h-full bg-transparent border border-[rgba(173,179,180,0.4)] px-[20px] py-[19px] font-['Manrope:Regular',sans-serif] text-[18px] text-[#171717] outline-none hover:border-[rgba(173,179,180,0.8)] focus:border-[#171717] focus:bg-white focus:shadow-sm transition-all duration-300 placeholder:text-[rgba(117,124,125,0.4)] rounded-none"
      />
    </div>
  );
}

function Container69() {
  return (
    <div className="gap-x-[24px] lg:gap-x-[48px] gap-y-[24px] grid grid-cols-1 sm:grid-cols-2 relative shrink-0 w-full" data-name="Container">
      <Input />
      <Input1 />
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(117,124,125,0.4)] w-full">
          <p className="leading-[28px]">Опишите ваш проект</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="relative shrink-0 w-full min-h-[140px] group" data-name="Textarea">
      <textarea 
        name="project"
        placeholder="Опишите ваш проект"
        required
        className="w-full h-full min-h-[140px] bg-transparent border border-[rgba(173,179,180,0.4)] px-[20px] py-[17px] font-['Manrope:Regular',sans-serif] text-[18px] text-[#171717] outline-none hover:border-[rgba(173,179,180,0.8)] focus:border-[#171717] focus:bg-white focus:shadow-sm transition-all duration-300 placeholder:text-[rgba(117,124,125,0.4)] rounded-none resize-y"
      />
    </div>
  );
}

function Button2({ isSubmitting }: { isSubmitting?: boolean }) {
  return (
    <button 
      disabled={isSubmitting} 
      type="submit" 
      className="bg-[#2d3435] content-stretch flex flex-col items-center justify-center px-[64px] py-[20px] relative shrink-0 hover:bg-[#1a1e1e] hover:shadow-lg focus:ring-4 focus:ring-[#2d3435]/20 active:scale-[0.98] transition-all duration-300 cursor-pointer w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:active:scale-100" 
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] text-center tracking-[0.4px] min-w-[150.81px]">
        <p className="leading-[24px] flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-[#f9f9f9]/30 border-t-[#f9f9f9] rounded-full animate-spin"></span>
              Отправка...
            </>
          ) : (
            "Отправить заявку"
          )}
        </p>
      </div>
    </button>
  );
}

function Container73({ isSubmitting }: { isSubmitting?: boolean }) {
  return (
    <div className="content-stretch flex items-start justify-center pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Button2 isSubmitting={isSubmitting} />
    </div>
  );
}

function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      project: formData.get('project'),
    };
    
    try {
      await emailjs.send(
        "service_zabiaiv",
        "template_3u065yc",
        {
          from_name: data.name,
          phone: data.phone,
          message: data.project,
          to_email: "info@newartalyans.ru",
        },
        "r6ocrylJ1S5_OiFhq"
      );
      setIsSuccess(true);
    } catch (error) {
      console.error("Ошибка при отправке", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full py-[80px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] transition-all duration-500 animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 className="w-8 h-8 text-[#2d3435]" strokeWidth={2} />
        </div>
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[28px] text-[#171717] text-center">Заявка успешно отправлена!</h3>
        <p className="font-['Manrope:Regular',sans-serif] text-[18px] text-[#737373] text-center max-w-[420px] leading-relaxed">
          Спасибо за обращение. Мы свяжемся с вами в ближайшее время для обсуждения деталей проекта.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 bg-transparent text-[#2d3435] border border-[#2d3435] px-[32px] py-[16px] font-['Manrope:Extra_Bold',sans-serif] text-[16px] hover:bg-[#2d3435] hover:text-white transition-all duration-300 rounded-none active:scale-[0.98]"
        >
          Отправить еще
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Form">
      <Container69 />
      <Textarea />
      <Container73 isSubmitting={isSubmitting} />
    </form>
  );
}

function SectionFinalCta() {
  return (
    <div id="contact" className="bg-[#f2f4f4] content-stretch flex flex-col gap-[40px] lg:gap-[64px] items-start max-w-full pb-[64px] sm:pb-[112px] pt-[64px] sm:pt-[128px] px-[16px] sm:px-[48px] lg:px-[96px] relative shrink-0 w-full" data-name="Section - Final CTA">
      <Container67 />
      <Form />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] sm:gap-[128px] items-center pt-[60px] sm:pt-[96px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <AnimatedSection delay={0}><SectionTrustMetrics /></AnimatedSection>
      <AnimatedSection delay={0} className="w-full px-[16px] sm:px-[48px] lg:px-[96px]"><PortfolioSlider /></AnimatedSection>
      <AnimatedSection delay={0} className="w-full"><BeforeAfterSection /></AnimatedSection>
      <AnimatedSection delay={0}><SectionServices /></AnimatedSection>
      <AnimatedSection delay={0} className="flex justify-center w-full px-[20px] sm:px-[48px] lg:px-[96px]"><SectionWhyArtalyans /></AnimatedSection>
      <AnimatedSection delay={0}><ProcessSection /></AnimatedSection>
      <AnimatedSection delay={0} className="flex justify-center w-full px-[20px] sm:px-[48px] lg:px-[96px]"><SectionClients /></AnimatedSection>
      <AnimatedSection delay={0}><SectionFinalCta /></AnimatedSection>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[18px] w-[102.69px]">
        <p className="leading-[28px]">ARTALYANS</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.35px] w-[68.19px]">
        <p className="leading-[20px]">Instagram</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.35px] w-[56.41px]">
        <p className="leading-[20px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.35px] w-[91.89px]">
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.35px] w-[112.09px]">
        <p className="leading-[20px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.35px] w-[310.03px]">
        <p className="leading-[20px]">© 2024 ARTALYANS Studio. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-0 max-w-[inherit] w-full">
        <div className="content-stretch flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[16px] sm:gap-0 max-w-[inherit] w-full">
          <Container75 />
          <div className="flex flex-wrap gap-[20px] sm:gap-[32px]">
            <Link />
            <Link1 />
            <Link2 />
            <Link3 />
          </div>
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start px-[16px] sm:px-[32px] py-[40px] sm:py-[48px] relative w-full">
        <Container74 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[24px] tracking-[-1.2px] w-[131.53px]">
        <p className="leading-[32px]">ARTALYANS</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 group" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] group-hover:text-[#2d3435] transition-colors duration-200 text-[14px] tracking-[0.35px] w-[58.28px]">
        <p className="leading-[20px]">Работы</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 group" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] group-hover:text-[#2d3435] transition-colors duration-200 text-[14px] tracking-[0.35px] w-[58.13px]">
        <p className="leading-[20px]">Услуги</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 group" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] group-hover:text-[#2d3435] transition-colors duration-200 text-[14px] tracking-[0.35px] w-[54.53px]">
        <p className="leading-[20px]">Процесс</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 group" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] group-hover:text-[#2d3435] transition-colors duration-200 text-[14px] tracking-[0.35px] w-[41.13px]">
        <p className="leading-[20px]">О нас</p>
      </div>
    </div>
  );
}

function Link9({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 group" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#737373] group-hover:text-[#2d3435] transition-colors duration-200 text-[14px] tracking-[0.35px] w-[55.81px]">
        <p className="leading-[20px]">Контакты</p>
      </div>
    </div>
  );
}

function ContactsModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(45,52,53,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f2f4f4] relative w-full max-w-[400px] mx-[16px] my-auto px-[24px] sm:px-[32px] pt-[32px] pb-[80px] flex flex-col gap-[20px] max-h-[85vh] overflow-y-auto shadow-2xl pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute bottom-[24px] right-[24px] w-[44px] h-[44px] flex items-center justify-center text-[#737373] hover:text-[#2d3435] hover:bg-white bg-[rgba(45,52,53,0.05)] rounded-full transition-all cursor-pointer z-[1000] shadow-sm"
          aria-label="Закрыть"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col gap-[6px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[22px] text-[#2d3435] not-italic">
            Контакты
          </h2>
          <p className="font-['Manrope:Regular',sans-serif] text-[13px] text-[#737373] not-italic leading-[1.5]">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <a href="tel:+79683772770" className="flex items-center gap-[12px] group/phone no-underline relative z-10">
            <div className="w-[40px] h-[40px] bg-[#2d3435] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" fill="#f9f9f9"/>
              </svg>
            </div>
            <div>
              <p className="font-['Manrope:Regular',sans-serif] text-[11px] text-[#737373] not-italic mb-[1px]">Телефон</p>
              <p className="font-['Manrope:Extra_Bold',sans-serif] text-[15px] text-[#2d3435] group-hover/phone:text-[#e02020] transition-colors not-italic">
                +7 (968) 377-27-70
              </p>
            </div>
          </a>

          <a href="mailto:info@newartalyans.ru" className="flex items-center gap-[12px] group/email no-underline relative z-10">
            <div className="w-[40px] h-[40px] bg-[#2d3435] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#f9f9f9"/>
              </svg>
            </div>
            <div>
              <p className="font-['Manrope:Regular',sans-serif] text-[11px] text-[#737373] not-italic mb-[1px]">Электронная почта</p>
              <p className="font-['Manrope:Extra_Bold',sans-serif] text-[15px] text-[#2d3435] group-hover/email:text-[#e02020] transition-colors not-italic">
                info@newartalyans.ru
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-[12px] mt-[10px] relative z-10">
          <p className="font-['Manrope:Regular',sans-serif] text-[11px] text-[#737373] not-italic tracking-[0.5px] uppercase">
            Мы в социальных сетях
          </p>
          <div className="flex gap-[10px]">
            <a href="https://t.me/newartalyans" target="_blank" rel="noopener noreferrer"
              className="w-[40px] h-[40px] bg-[#2d3435] hover:bg-[#0088cc] flex items-center justify-center transition-colors" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21.946 4.345L18.74 19.26c-.236 1.05-.854 1.31-1.73.814l-4.78-3.52-2.307 2.22c-.255.255-.47.47-.963.47l.343-4.87 8.856-8c.384-.342-.083-.532-.596-.19L5.84 14.37l-4.71-1.472c-1.024-.32-1.044-1.025.213-1.516L20.633 3.07c.853-.308 1.6.19 1.313 1.275z" fill="#f9f9f9"/>
              </svg>
            </a>
            <a href="https://max.ru/u/f9LHodD0cOIbBaSaBrgGClNQLDYvVNh5cBX_9bO9YMIJHOEfZ5qm65U3NG4" target="_blank" rel="noopener noreferrer"
              className="w-[40px] h-[40px] bg-[#2d3435] hover:bg-[#ff4500] flex items-center justify-center transition-colors" aria-label="Max">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <text x="3" y="17" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" fill="#f9f9f9">M</text>
              </svg>
            </a>
            <a href="https://instagram.com/art.alyanz" target="_blank" rel="noopener noreferrer"
              className="w-[40px] h-[40px] bg-[#2d3435] hover:bg-[#e1306c] flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#f9f9f9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Приоритет 3: блокировка скролла body при открытом меню
  const toggleMobileMenu = (open: boolean) => {
    setMobileOpen(open);
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    toggleMobileMenu(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden lg:flex content-stretch gap-[48px] items-center relative shrink-0" data-name="Container">
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 onClick={() => setContactsOpen(true)} />
      </div>

      {/* Mobile hamburger button */}
      <button
        className="lg:hidden flex items-center justify-center w-[44px] h-[44px] text-[#2d3435] shrink-0"
        onClick={() => toggleMobileMenu(!mobileOpen)}
        aria-label="Открыть меню"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[9990] bg-white flex flex-col"
          style={{ top: 0 }}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-[16px] py-[16px] border-b border-[#e4e8e8]">
            <span className="font-['Liberation_Serif:Bold',sans-serif] text-[22px] text-[#171717] tracking-[-0.5px]">
              ARTALYANS
            </span>
            <button
              onClick={() => toggleMobileMenu(false)}
              className="flex items-center justify-center w-[44px] h-[44px] text-[#2d3435]"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-[16px] pt-[32px] gap-0 flex-1 overflow-y-auto">
            {[
              { label: "Работы", id: "portfolio" },
              { label: "Услуги", id: "services" },
              { label: "Процесс", id: "process" },
              { label: "О нас", id: "about" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="w-full text-left py-[20px] border-b border-[#e4e8e8] font-['Noto_Serif:Regular',sans-serif] text-[28px] text-[#2d3435] hover:text-[#757c7d] transition-colors"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setContactsOpen(true); toggleMobileMenu(false); }}
              className="w-full text-left py-[20px] border-b border-[#e4e8e8] font-['Noto_Serif:Regular',sans-serif] text-[28px] text-[#2d3435] hover:text-[#757c7d] transition-colors"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Контакты
            </button>
          </div>

          {/* Bottom: phone + CTA */}
          <div className="px-[16px] pb-[32px] pt-[24px] flex flex-col gap-[16px] border-t border-[#e4e8e8]">
            <a
              href="tel:+79683772770"
              className="font-['Manrope:Extra_Bold',sans-serif] text-[20px] text-[#e02020] no-underline"
            >
              +7 (968) 377-27-70
            </a>
            <button
              onClick={() => { toggleMobileMenu(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full bg-[#2d3435] text-[#f9f9f9] font-['Manrope:Semi_Bold',sans-serif] text-[16px] py-[16px] hover:bg-[#404d4e] transition-colors"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      )}

      {contactsOpen && <ContactsModal onClose={() => setContactsOpen(false)} />}
    </>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#2d3435] content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative shrink-0 cursor-pointer hover:bg-[#404d4e] transition-colors"
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[14px] text-center w-[123.8px]">
        <p className="leading-[20px]">Обсудить проект</p>
      </div>
    </div>
  );
}

function Container78({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">

      {/* ── МОБИЛЬНАЯ ШАПКА (скрыта на lg+) ── */}
      <div className="flex lg:hidden items-center justify-between w-full">
        {/* Логотип слева */}
        <div className="flex items-center gap-[6px]">
          <Link4 />
          <img
            src={imgNavLogo}
            alt="Artalyans logo"
            className="h-[32px] w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Справа: телефон-плашка + гамбургер */}
        <div className="flex items-center gap-[8px]">
          <a
            href="tel:+79683772770"
            className="relative z-[1] font-['Manrope:Extra_Bold',sans-serif] text-[11px] text-white no-underline bg-[#e02020] hover:bg-[#b01010] active:bg-[#901010] transition-colors px-[10px] py-[6px] inline-flex items-center cursor-pointer shrink-0"
            style={{ borderRadius: "2px" }}
          >
            +7 (968) 377-27-70
          </a>
          <Container79 />
        </div>
      </div>

      {/* ── ДЕСКТОПНАЯ ШАПКА (скрыта до lg) ── */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex items-center gap-[10px] shrink-0">
          <Link4 />
          <img
            src={imgNavLogo}
            alt="Artalyans logo"
            className="h-[56px] w-auto object-contain mix-blend-multiply"
          />
        </div>
        <Container79 />
        <a
          href="tel:+79683772770"
          className="font-['Manrope:Extra_Bold',sans-serif] font-black text-[20px] text-[#e02020] not-italic shrink-0 hover:text-[#b01010] transition-colors tracking-wide"
        >
          +7 (968) 377-27-70
        </a>
        <Button3 onClick={onOpenModal} />
      </div>

    </div>
  );
}

function TopNavBar({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <div className="absolute z-[50] content-stretch flex flex-col items-start left-0 right-0 px-[16px] sm:px-[32px] py-[16px] sm:py-[24px] top-0 w-full" data-name="TopNavBar">
      <div className="absolute inset-0 backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] -z-10 pointer-events-none" />
      <Container78 onOpenModal={onOpenModal} />
    </div>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // EmailJS настройки — замените на свои ключи с emailjs.com
  // Service ID, Template ID и Public Key берутся из вашего аккаунта EmailJS
  // Шаблон должен использовать переменные: {{from_name}}, {{phone}}, {{message}}, {{to_email}}
  const EMAILJS_SERVICE_ID = "service_zabiaiv";
  const EMAILJS_TEMPLATE_ID = "template_3u065yc";
  const EMAILJS_PUBLIC_KEY = "r6ocrylJ1S5_OiFhq";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          phone: phone,
          message: message,
          to_email: "info@newartalyans.ru",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      setError("Ошибка отправки. Попробуйте позже или напишите нам напрямую.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(45,52,53,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f2f4f4] relative w-full max-w-[600px] mx-[16px] sm:mx-[24px] px-[24px] sm:px-[64px] py-[48px] sm:py-[64px] flex flex-col gap-[32px] sm:gap-[40px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Закрыть */}
        <button
          onClick={onClose}
          className="absolute top-[24px] right-[24px] text-[#757c7d] hover:text-[#2d3435] transition-colors cursor-pointer bg-transparent border-0 p-0"
          aria-label="Закрыть"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!sent ? (
          <>
            {/* Заголовок */}
            <div className="flex flex-col gap-[12px]">
              <div className="font-['Manrope:Semi_Bold',sans-serif] text-[12px] tracking-[2.4px] uppercase text-[#757c7d] not-italic">
                Обратная связь
              </div>
              <div
                className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[36px] leading-[44px] text-[#2d3435]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                Обсудим ваш проект
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                required
                className="w-full h-[62px] px-[13px] py-[19px] bg-transparent border border-[rgba(173,179,180,0.4)] font-['Manrope:Regular',sans-serif] font-normal text-[18px] text-[#2d3435] placeholder-[rgba(117,124,125,0.4)] outline-none focus:border-[#2d3435] transition-colors"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон"
                required
                className="w-full h-[62px] px-[13px] py-[19px] bg-transparent border border-[rgba(173,179,180,0.4)] font-['Manrope:Regular',sans-serif] font-normal text-[18px] text-[#2d3435] placeholder-[rgba(117,124,125,0.4)] outline-none focus:border-[#2d3435] transition-colors"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Опишите ваш проект"
                rows={4}
                className="w-full px-[13px] py-[17px] bg-transparent border border-[rgba(173,179,180,0.4)] font-['Manrope:Regular',sans-serif] font-normal text-[18px] text-[#2d3435] placeholder-[rgba(117,124,125,0.4)] outline-none focus:border-[#2d3435] transition-colors resize-none"
              />
              {error && (
                <div className="text-[#e02020] font-['Manrope:Regular',sans-serif] text-[14px] text-center">
                  {error}
                </div>
              )}
              <div className="flex justify-center pt-[8px]">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#2d3435] text-[#f9f9f9] font-['Manrope:Extra_Bold',sans-serif] text-[16px] tracking-[0.4px] px-[64px] py-[20px] hover:bg-[#404d4e] transition-colors cursor-pointer border-0 not-italic disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-[24px] py-[32px]">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="28" fill="#2d3435" />
              <path d="M18 28L25 35L38 21" stroke="#f9f9f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div
              className="font-['Noto_Serif:Regular',sans-serif] font-normal text-[30px] leading-[36px] text-[#2d3435] text-center"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Заявка отправлена!
            </div>
            <div className="font-['Manrope:Regular',sans-serif] font-normal text-[16px] text-[#757c7d] text-center">
              Мы свяжемся с вами в ближайшее время
            </div>
            <button
              onClick={onClose}
              className="mt-[16px] bg-[#2d3435] text-[#f9f9f9] font-['Manrope:Semi_Bold',sans-serif] text-[14px] px-[40px] py-[14px] hover:bg-[#404d4e] transition-colors cursor-pointer border-0 not-italic"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Приоритет 7: кнопка «Вернуться наверх»
function BackToTopButtonReal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Вернуться наверх"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "20px",
        zIndex: 8990,
        width: "44px",
        height: "44px",
        background: "#2d3435",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#404d4e"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2d3435"; }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 13V5M5 9l4-4 4 4" stroke="#f9f9f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function Body() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[160px] items-start relative size-full" data-name="Body">
      <Main />
      <Footer />
      <TopNavBar onOpenModal={() => setModalOpen(true)} />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      <BackToTopButtonReal />
      <BrushCursor />
    </div>
  );
}