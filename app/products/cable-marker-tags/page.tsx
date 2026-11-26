'use client';

import React from 'react';
import Link from 'next/link';
import { BackToProducts } from '@/components/BackToProducts';
import { TrustRow } from '@/components/TrustRow';
import { 
  CheckCircle2, 
  ArrowRight,
  FileText
} from 'lucide-react';

interface IdentificationProductItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  desc: string;
  link: string;
}

const identificationProductsList: IdentificationProductItem[] = [
  {
    id: 'carrier-strips',
    title: 'Carrier Strips (Coated & Uncoated)',
    category: 'IDENTIFICATION SYSTEMS · PAGE 34',
    badge: 'MODULAR CARRIER STRIPS',
    image: '/assets/nloc/cable_marker_tag.webp',
    desc: 'Modular stainless steel carrier strips with bendable lock ends for slide-in characters. Available in Uncoated (NLU06–NLU22) and Pure Polyester Coated (NLC06–NLC22) in AISI 316/316L & 304/304L (7 to 26 characters capacity, 100/Box).',
    link: '/products/n-loc/carrier-strips',
  },
  {
    id: 'marker-plates',
    title: 'Stainless Steel Marker Plates & Specialized Tags',
    category: 'IDENTIFICATION SYSTEMS · PAGES 35 & 37',
    badge: 'LASER & EMBOSSED PLATES',
    image: '/assets/nloc/marker_plates.webp',
    desc: 'Precision laser-etched and mechanically embossed marker plates (NL7407, NL8909, NL5019, NL8919, NL6338) plus Page 37 specialized profiles: Round (R-25, R-38), Oval (OV-46), Square (SQ-30), Valve (V-50), and Equipment (EQ-100).',
    link: '/products/n-loc/marker-plates',
  },
  {
    id: 'alphanumeric-characters',
    title: 'Stainless Steel Alphanumeric Characters & Systems',
    category: 'IDENTIFICATION SYSTEMS · PAGES 34 & 36',
    badge: 'EMBOSSED CHARACTERS',
    image: '/assets/nloc/alphanumeric_characters.jpg',
    desc: 'Individual embossed letters NLA–NLZ (26 alphabets), numerals NL0–NL9 (10 digits), symbols (>< ± / & + - ~), blank spacer tags (100/bag), and Page 36 mechanical embossing (3mm & 4mm) and fiber laser marking systems.',
    link: '/products/n-loc/alphanumeric-characters',
  },
];

const CableMarkerTagsPage: React.FC = () => {
  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827]">
      {/* ── 1. Hero Banner ── */}
      <section className="relative w-full min-h-[365px] sm:min-h-[405px] md:min-h-[450px] flex items-end bg-[#0a110e] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/nloc/nloc_hero_banner.webp"
            alt="NAEPL Cable Marker Tags & Permanent Identification Systems"
            className="w-full h-full object-cover object-[center_center]"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,17,14,0.88) 0%, rgba(10,17,14,0.60) 50%, rgba(10,17,14,0.22) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,17,14,0.85) 0%, rgba(10,17,14,0.25) 40%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 w-full">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold text-[#8fd6ae] tracking-[0.14em] uppercase mb-4 sm:mb-5 drop-shadow-sm flex items-center gap-2.5">
            <span className="inline-block w-5 h-[1.5px] bg-[#8fd6ae]" />
            Cable Marker Tags &amp; Permanent Identification · N-LOC Series
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Permanent Asset Identification. <br className="hidden sm:inline" />
            <span className="text-[#8fd6ae]">Legible in Any Environment.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-[16.5px] text-white/90 font-light leading-relaxed max-w-[640px] mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
            Marine-grade stainless steel carrier strips, multi-line custom laser-etched marker plates, and raised embossed alphanumeric characters engineered to resist fire, saltwater corrosion, aggressive chemicals, and extreme outdoor weather.
          </p>

          {/* Quick Action CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="font-montserrat inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-bold tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-950/40"
            >
              <span>Explore Identification Range</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Accent Line (Corporate Emerald to Maroon) */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Back To Products Bar ── */}
      <BackToProducts />

      {/* ── 3. Product Overview Section ── */}
      <section className="py-10 sm:py-14 md:py-18 bg-white" id="overview">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 lg:gap-14 items-center">
          {/* Left Side: Product Image Showcase */}
          <div className="bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-sm">
            <img
              src="/assets/nloc/cable_marker_tag.webp"
              alt="NAEPL Stainless Steel Cable Marker Tags & Carrier Strips"
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Product Details & Core Technical Features */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.15em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
              PERMANENT IDENTIFICATION SYSTEMS · N-LOC
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-4 sm:mb-5">
              Clear Markings. <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Zero Degradation.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-700 mb-5 font-normal">
              NAEPL manufactures complete stainless steel identification systems designed for offshore rigs, petrochemical refineries, chemical processing plants, and critical utility networks. Whether utilizing modular slide-in character strips or factory laser-etched custom multi-line marker plates, our solutions guarantee clear, indelible legibility across decades of harsh environmental exposure.
            </p>

            {/* Highlights 2-column cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
                    AISI 316 / 316L &amp; 304 / 304L
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 m-0">
                    Maximum corrosion resistance against saltwater spray, corrosive industrial atmospheres, and chemical washdowns.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
                    TEMPERATURE TESTED (-80°C TO +538°C)
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 m-0">
                    Completely non-flammable and fireproof, maintaining physical integrity and readability through thermal extremes.
                  </p>
                </div>
              </div>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Fire-Proof &amp; Non-Flammable
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Permanent Laser &amp; Embossed Text
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 sm:px-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11.5px] sm:text-[12.5px] font-medium rounded-full select-none">
                Direct Cable Tie Integration (4.6mm &amp; 7.9mm)
              </span>
            </div>

            {/* Bottom Tagline Container */}
            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-500">
                Engineered for rapid field assembly and long-term asset compliance across global utilities.
              </p>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                Marked for Life. Built for Extremes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Product Range Showcase (OUR RANGE with ALL 3 Products) ── */}
      <section className="py-12 sm:py-16 pb-16 sm:pb-20 bg-slate-50 border-t border-b border-slate-200" id="products">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 sm:before:w-6 before:h-[1.5px] before:bg-[#004428]">
            OUR RANGE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.15] mt-1 mb-7 sm:mb-9">
            Explore the <span className="font-bold text-[#8c2442] ml-1 sm:ml-1.5">Cable Marker Tags &amp; Identification Systems Range</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {identificationProductsList.map((item) => (
              <Link
                key={item.id}
                id={item.id}
                href={item.link}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[380px] group scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300 block no-underline"
              >
                <div className="relative h-[190px] sm:h-[220px] bg-slate-50 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 tracking-tight m-0 mb-3 group-hover:text-[#004428] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-slate-200 mb-6 transition-all duration-300 group-hover:w-11 group-hover:bg-[#8c2442]" />
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed m-0 mb-6">
                    {item.desc}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-bold tracking-wider text-[#8c2442] uppercase transition-all duration-200 group-hover:gap-3">
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brochure Cover Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/n_loc_brochure_cover.webp"
                  alt="NAEPL Stainless Steel Cable Ties & Identification Systems Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link
                href="/brochure?doc=n-loc-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download N-LOC Brochure</span>
              </Link>
            </div>

            {/* Right Column: Custom Tagging Consultation Info */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>Custom Engineering &amp; Sizing Support</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Laser Marking, Specific Character Sets, or Pre-Loaded Carriers?
              </h2>

              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our identification specialists support project engineers with customized laser marking formats, sequential numbering, QR / Barcode etching, and custom-length carrier strips pre-assembled for rapid installation on site.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-[#004428] font-bold px-7 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                >
                  <span>Request Quotation &amp; Samples</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/products/n-loc"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] transition-all border border-white/15"
                >
                  <span>Explore Cable Ties Range</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Trust Row ── */}
      <TrustRow />
    </main>
  );
};

export default CableMarkerTagsPage;
