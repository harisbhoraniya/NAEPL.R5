'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  FileText,
  Layers,
  Zap,
  Info
} from 'lucide-react';
import { TrustRow } from '@/components/TrustRow';
import { cncProductsDetails, CncProductDetail } from '@/data/cncProductsData';

const CncProductDetailPage: React.FC = () => {
  const params = useParams();
  const rawSlug = (params?.slug as string) || 'copper-machined-components';
  const product: CncProductDetail =
    cncProductsDetails[rawSlug] || cncProductsDetails['copper-machined-components'];

  return (
    <main className="w-full bg-[#f8fafc] text-[#111827]">
      {/* ── 1. Hero Banner ── */}
      <section className="relative w-full bg-gradient-to-br from-[#07130e] via-[#0b2017] to-[#040806] text-white pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden border-b border-emerald-950/40">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#8c2442]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products" className="hover:text-emerald-400 transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link
              href="/products/cnc-machine-component"
              className="hover:text-emerald-400 transition-colors"
            >
              CNC Machined Components
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-emerald-300 font-semibold truncate">{product.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[800px]">
              {/* Product Badge Pill */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-[12px] font-bold tracking-wider uppercase mb-3.5">
                <span>{product.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
                {product.title}
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-light">
                {product.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products/cnc-machine-component"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-all border border-white/10"
              >
                <ArrowLeft size={16} />
                <span>All CNC Components Range</span>
              </Link>

              <Link
                href={`/contact?subject=RFQ%20for%20${encodeURIComponent(product.title)}`}
                className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white font-bold px-5 py-2.5 rounded-xl text-[13px] uppercase tracking-wide transition-all shadow-md hover:shadow-lg border border-emerald-500/30"
              >
                <span>Request RFQ</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Emerald to Maroon Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] z-20 pointer-events-none" />
      </section>

      {/* ── 2. Product Visual Showcase & Core Specifications ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Image Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-sm relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto max-h-[360px] object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge overlay on top-left of image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-sm backdrop-blur-sm">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Quick Spec Highlights 2x2 grid below image */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Material
                  </p>
                  <p
                    className="text-[13px] sm:text-[14px] font-bold text-emerald-800 truncate"
                    title={product.specs.material}
                  >
                    {product.specs.material}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Tolerances
                  </p>
                  <p
                    className="text-[13px] sm:text-[14px] font-bold text-slate-900 truncate"
                    title={product.specs.tolerance}
                  >
                    {product.specs.tolerance}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Surface Finish
                  </p>
                  <p
                    className="text-[13px] sm:text-[14px] font-bold text-slate-900 truncate"
                    title={product.specs.surfaceFinish}
                  >
                    {product.specs.surfaceFinish}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Processes
                  </p>
                  <p
                    className="text-[13px] sm:text-[14px] font-bold text-slate-900 truncate"
                    title={product.specs.processes}
                  >
                    {product.specs.processes}
                  </p>
                </div>
              </div>

              {/* Brochure Download Link */}
              <div className="w-full mt-4">
                <Link
                  href="/brochure?doc=cnc-brochure"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-xl text-[13px] transition-colors border border-slate-200"
                >
                  <FileText size={16} className="text-slate-500" />
                  <span>Download CNC Catalogue</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Detailed Engineering Description & Highlights */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                CNC PRECISION ENGINEERING · NAEPL
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
                {product.title}
              </h2>

              {/* KEY FEATURES & ADVANTAGES (Exact Canonical UI) */}
              <div className="mb-8">
                <h3 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2.5">
                  <Layers size={18} className="text-[#004428]" />
                  <span>KEY FEATURES &amp; ADVANTAGES</span>
                </h3>
                <ul className="space-y-3.5">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 size={18} className="text-[#00663d] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Technical Specifications Grid */}
              <div>
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-[12.5px] mb-3.5 flex items-center gap-2">
                  <Zap size={17} className="text-[#004428]" />
                  <span>Technical Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Material Grades
                    </span>
                    <span className="font-semibold text-slate-800">{product.specs.material}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Machining Tolerance
                    </span>
                    <span className="font-semibold text-slate-800">{product.specs.tolerance}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Surface Roughness
                    </span>
                    <span className="font-semibold text-slate-800">
                      {product.specs.surfaceFinish}
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Processes &amp; Equipment
                    </span>
                    <span className="font-semibold text-slate-800">{product.specs.processes}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Available Finishes
                    </span>
                    <span className="font-semibold text-slate-800">{product.specs.finishes}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Inspection Metrology
                    </span>
                    <span className="font-semibold text-slate-800">{product.specs.inspection}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:col-span-2">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Input File Formats Accepted
                    </span>
                    <span className="font-semibold text-slate-800">{product.specs.inputFiles}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. The 4 Core Engineering Pillars (Brochure Pages 94-97) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428] after:content-[''] after:inline-block after:w-5 after:h-[1.5px] after:bg-[#004428]">
              ENGINEERING PILLARS · BROCHURE STANDARDS ({product.brochurePage})
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Built on 4 Core Engineering Principles
            </h2>
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              Every precision turned and milled component conforms to standard engineering practices
              for CAD integrity, alloy purity, process control, and finish durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {product.pillarsList.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#004428]/20 group-hover:text-[#004428]/35 transition-colors mb-3">
                  {pillar.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                  {pillar.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Component Range Showcase ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                CUSTOM PROFILES &amp; GEOMETRIES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Component Range &amp; Custom Machined Profiles
              </h2>
              <p className="text-[14px] sm:text-[15px] text-slate-600 mt-2 max-w-[720px]">
                Illustrative profiles produced to customer CAD drawings, 3D STEP models, or physical
                samples.
              </p>
            </div>

            <Link
              href={`/contact?subject=Custom%20Profile%20Inquiry%20-%20${encodeURIComponent(product.title)}`}
              className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white font-bold px-5 py-2.5 rounded-xl text-[13px] uppercase tracking-wide transition-all shadow-sm hover:shadow-md self-start sm:self-auto shrink-0"
            >
              <span>Submit Custom Drawing</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {product.componentRange.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200/90 rounded-xl p-4 sm:p-4.5 flex items-center gap-3.5 hover:border-emerald-500/40 hover:bg-emerald-50/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100/70 border border-emerald-200 text-[#004428] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-[#00663d]" />
                </div>
                <span className="font-semibold text-slate-800 text-[13.5px] sm:text-[14px] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Illustrative Profiles Disclaimer Note */}
          <div className="mt-8 p-4 sm:p-4.5 bg-emerald-50/60 border border-emerald-200/70 rounded-xl flex items-start sm:items-center gap-3 text-emerald-950 text-[13px] sm:text-[13.5px]">
            <Info size={18} className="text-[#004428] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="font-semibold">Custom Manufacturing Guarantee:</strong> Pictures and
              profiles shown are illustrative; every part is produced strictly to customer drawing or
              sample.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: A4 Brochure Mockup Card + Download PDF Brochure Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/cnc_brochure_cover.webp"
                  alt="NAEPL CNC Machined Components Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link
                href="/brochure?doc=cnc-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12px] sm:text-[13px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download CNC Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>NAEPL Technical Consultation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Have a Custom CAD Drawing, 3D STEP File, or Physical Sample?
              </h2>

              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our CNC precision machining engineering team reviews your drawings, GD&amp;T
                tolerances, and material specifications for feasibility and optimal manufacturing
                efficiency. We deliver fast quotation turnaround with prototype samples.
              </p>

              <div>
                <Link
                  href={`/contact?subject=RFQ%20for%20${encodeURIComponent(product.title)}`}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-[#004428] font-bold px-7 py-3.5 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                >
                  <span>Request Quotation &amp; Samples</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Trust Row / Certified Engineering ── */}
      <TrustRow />
    </main>
  );
};

export default CncProductDetailPage;
