'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Thermometer, 
  Layers, 
  FileText, 
  ArrowRight, 
  ChevronRight,
  Package,
  Search,
  X
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableCaption 
} from '@/components/ui/table';
import { TrustRow } from '@/components/TrustRow';
import { nlocProductsDetails } from '@/data/nlocProductsData';

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const slug = (params?.slug as string) || 'roller-ball';
  const product = nlocProductsDetails[slug] || nlocProductsDetails['roller-ball'];

  const [activeFinish, setActiveFinish] = useState<'uncoated' | 'coated'>('uncoated');

  const hasCoatedOption = Boolean(product.images.coated || product.tables.some((t) => t.finishType === 'coated'));

  // Separate tables into Uncoated and Coated for stacked layout
  const uncoatedTables = product.tables.filter(
    (tbl) => tbl.finishType === 'uncoated' || (!tbl.finishType && !hasCoatedOption) || tbl.finishType === 'all'
  );
  const coatedTables = product.tables.filter((tbl) => tbl.finishType === 'coated');

  const [uncoatedSubIdx, setUncoatedSubIdx] = useState<number>(0);
  const [uncoatedSearch, setUncoatedSearch] = useState<string>('');

  const [coatedSubIdx, setCoatedSubIdx] = useState<number>(0);
  const [coatedSearch, setCoatedSearch] = useState<string>('');

  // Reset to initial tab only when product slug changes
  useEffect(() => {
    setActiveSubTableIdx(0);
    setUncoatedSubIdx(0);
    setCoatedSubIdx(0);
    setUncoatedSearch('');
    setCoatedSearch('');
    setActiveFinish('uncoated');
  }, [slug]);

  const activeUncoatedTable = uncoatedTables[uncoatedSubIdx] || uncoatedTables[0];
  const activeCoatedTable = coatedTables[coatedSubIdx] || coatedTables[0];

  const [activeSubTableIdx, setActiveSubTableIdx] = useState<number>(0);

  const currentImage = (activeFinish === 'coated' && product.images.coated) 
    ? product.images.coated 
    : product.images.uncoated;

  const currentTemp = (activeFinish === 'coated' && product.specs.tempRangeCoated)
    ? product.specs.tempRangeCoated
    : (product.specs.tempRangeUncoated || product.specs.tempRange);

  return (
    <main className="w-full bg-[#fcfcfd] text-[#111827] min-h-screen">
      {/* ── 1. Top Breadcrumb & Hero Header ── */}
      <section className="relative w-full bg-[#0a110e] text-white pt-8 pb-12 sm:pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8fd6ae_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products" className="hover:text-emerald-400 transition-colors">Products</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href={product.category === 'IDENTIFICATION SYSTEMS' ? '/products/cable-marker-tags' : '/products/n-loc'} className="hover:text-emerald-400 transition-colors">
              {product.category === 'IDENTIFICATION SYSTEMS' ? 'Cable Marker Tag & Identification' : 'Stainless Steel Cable Ties'}
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-emerald-300 font-semibold truncate">{product.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[780px]">
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
                href={product.category === 'IDENTIFICATION SYSTEMS' ? '/products/cable-marker-tags' : '/products/n-loc'}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-all border border-white/10"
              >
                <ArrowLeft size={16} />
                <span>{product.category === 'IDENTIFICATION SYSTEMS' ? 'All Marker Tags Range' : 'All Cable Ties Range'}</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#004428] hover:bg-[#00331e] text-white font-bold px-5 py-2.5 rounded-xl text-[13px] uppercase tracking-wide transition-all shadow-md hover:shadow-lg border border-emerald-500/30"
              >
                <span>Request RFQ</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004428] via-[#0d8a68] to-[#8c2442] pointer-events-none" />
      </section>

      {/* ── 2. Product Overview & Key Engineering Highlights ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Product Showcase Image & Finish Toggle */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-[#f8fafc] border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 flex items-center justify-center shadow-sm relative overflow-hidden min-h-[320px] sm:min-h-[380px]">
                <img
                  src={currentImage}
                  alt={`${product.title} - ${activeFinish}`}
                  className="max-h-[300px] sm:max-h-[340px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                />

                {/* Status indicator on image */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-sm ${
                    activeFinish === 'coated'
                      ? 'bg-emerald-950 text-emerald-200 border-emerald-800'
                      : 'bg-white/95 text-slate-800 border-slate-300'
                  }`}>
                    {activeFinish === 'coated' ? ' Coated' : 'Metallic Uncoated'}
                  </span>
                </div>
              </div>

              {/* Coated / Uncoated Toggle Buttons */}
              {hasCoatedOption && (
                <div className="w-full mt-4">
                  <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 shadow-inner">
                    <button
                      type="button"
                      onClick={() => setActiveFinish('uncoated')}
                      className={`flex-1 py-2.5 text-[12px] sm:text-[13px] font-bold tracking-wide uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                        activeFinish === 'uncoated'
                          ? 'bg-[#004428] text-white shadow-md'
                          : 'bg-transparent text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>UNCOATED</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFinish('coated')}
                      className={`flex-1 py-2.5 text-[12px] sm:text-[13px] font-bold tracking-wide uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                        activeFinish === 'coated'
                          ? 'bg-[#004428] text-white shadow-md'
                          : 'bg-transparent text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>COATED</span>
                    </button>
                  </div>

                  {/* Surface Finish Color Options for Coated Variant */}
                  {activeFinish === 'coated' && (
                    <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-1.5 animate-fadeIn">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 m-0">
                        Surface Finish: Polyester and Nylon - Coated
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-5 h-5 rounded bg-black border border-slate-300 shadow-sm" title="Black" />
                        <span className="w-5 h-5 rounded bg-[#e11d48] border border-slate-300 shadow-sm" title="Red" />
                        <span className="w-5 h-5 rounded bg-[#16a34a] border border-slate-300 shadow-sm" title="Green" />
                        <span className="w-5 h-5 rounded bg-[#2563eb] border border-slate-300 shadow-sm" title="Blue" />
                        <span className="w-5 h-5 rounded bg-[#eab308] border border-slate-300 shadow-sm" title="Yellow" />
                        <span className="text-[11px] text-slate-500 italic ml-1">*Colour as per requirements</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Specification Badges Row */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Material Grade</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">SS 316/316L &amp; 304/304L</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <Thermometer size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Temp Rating</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">{currentTemp}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <Flame size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Flammability</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">Fire-proof</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                  <Package size={18} className="text-[#004428] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Standard Pack</p>
                    <p className="text-[12.5px] font-semibold text-slate-800 leading-tight mt-0.5">100 Nos. / Bag</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Product Narrative & Features */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                ENGINEERING SPECIFICATIONS · NAEPL N-LOC
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-4">
                Engineered for High-Tensile Reliability in Demanding Environments
              </h2>



              {/* Key Features List */}
              <div className="mb-8">
                <h3 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2.5">
                  <Layers size={18} className="text-[#004428]" />
                  <span>KEY FEATURES &amp; ADVANTAGES</span>
                </h3>
                <ul className="space-y-3.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-slate-700 leading-relaxed">
                      <CheckCircle2 size={18} className="text-[#00663d] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Technical Sizing & Part Numbers (Strictly filtered by Uncoated / Coated) ── */}
      {product.tables && product.tables.length > 0 && (
      <section className="py-10 sm:py-14 bg-[#f8fafc] border-y border-slate-200" id="specifications">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* TABLE 1: UNCOATED SPECIFICATIONS TABLE                          */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {(activeFinish === 'uncoated' || !hasCoatedOption) && activeUncoatedTable && (
            <div className="bg-white border border-emerald-900/15 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-5 py-3 bg-emerald-50/70 border-b border-emerald-900/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">
                    {activeUncoatedTable.title}
                  </h3>
                  {activeUncoatedTable.subtitle && (
                    <p className="text-[12.5px] text-slate-500 mt-0.5">
                      {activeUncoatedTable.subtitle}
                    </p>
                  )}
                </div>

                {/* Sub-Tabs for multiple widths within Uncoated */}
                <div className="flex flex-wrap items-center gap-3">
                  {uncoatedTables.length > 1 && (
                    <div className="flex items-center gap-1.5 p-1 bg-white border border-emerald-200/80 rounded-xl shadow-2xs">
                      {uncoatedTables.map((tbl, idx) => {
                        const widthLabel = tbl.shortTitle || tbl.title.split('–')[1] || tbl.title.split('-')[1] || `Option ${idx + 1}`;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setUncoatedSubIdx(idx)}
                            className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold uppercase tracking-wide transition-all cursor-pointer ${
                              uncoatedSubIdx === idx
                                ? 'bg-[#004428] text-white shadow-xs'
                                : 'text-emerald-950 hover:bg-emerald-50'
                            }`}
                          >
                            {widthLabel.trim()}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Search bar */}
                  <div className="relative flex-1 sm:w-[240px]">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700/60 pointer-events-none" />
                    <input
                      type="text"
                      value={uncoatedSearch}
                      onChange={(e) => setUncoatedSearch(e.target.value)}
                      placeholder="Search Uncoated part no..."
                      className="w-full pl-9 pr-8 py-1.5 bg-white border border-emerald-200 rounded-xl text-[12px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004428]/20 focus:border-[#004428] transition-all"
                    />
                    {uncoatedSearch && (
                      <button
                        type="button"
                        onClick={() => setUncoatedSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Shadcn Table Component */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-[#004428]">
                    <TableRow className="border-b border-[#003820] hover:bg-[#004428]">
                      {(activeUncoatedTable.columnHeaders || [
                        'Part No.',
                        'Width (mm)',
                        'Length (mm)',
                        'Thickness (mm)',
                        'Max Bundle Dia (mm)',
                        'Min. Loop Tensile (N)',
                      ]).map((headerText, hIdx) => (
                        <TableHead 
                          key={hIdx} 
                          className={`font-bold text-[12px] uppercase tracking-wider py-2.5 text-center ${
                            hIdx === 0 ? 'text-white px-4' : 'text-emerald-100 px-3.5'
                          }`}
                        >
                          {headerText}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = uncoatedSearch.toLowerCase().trim();
                      const filtered = q
                        ? activeUncoatedTable.rows.filter(r => 
                            r.partNo.toLowerCase().includes(q) ||
                            r.width.toLowerCase().includes(q) ||
                            r.length.toLowerCase().includes(q) ||
                            r.thickness.toLowerCase().includes(q) ||
                            r.maxBundleDia.toLowerCase().includes(q) ||
                            r.tensileStrength.toLowerCase().includes(q)
                          )
                        : activeUncoatedTable.rows;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-slate-500 text-[13px] bg-white">
                              No matching sizes found for "<span className="font-semibold text-slate-800">{uncoatedSearch}</span>".{' '}
                              <button
                                type="button"
                                onClick={() => setUncoatedSearch('')}
                                className="text-[#004428] font-bold hover:underline ml-1.5 cursor-pointer"
                              >
                                Clear filter
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, rIdx) => (
                        <TableRow 
                          key={rIdx}
                          className="border-b border-emerald-100/70 hover:bg-emerald-50/70 odd:bg-white even:bg-emerald-50/25 transition-colors"
                        >
                          <TableCell className="py-2 px-4 font-mono text-[13px] text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#004428] border border-emerald-200/80 font-bold">
                              {row.partNo}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.width}
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.length}
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.thickness}
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.maxBundleDia}
                          </TableCell>
                          <TableCell className="text-slate-900 font-semibold text-[13px] py-2 px-4 text-center">
                            {row.tensileStrength}
                          </TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* TABLE 2: COATED SPECIFICATIONS TABLE                            */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {activeFinish === 'coated' && hasCoatedOption && activeCoatedTable && (
            <div className="bg-white border border-emerald-900/15 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-5 py-3 bg-emerald-50/70 border-b border-emerald-900/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">
                    {activeCoatedTable.title}
                  </h3>
                  {activeCoatedTable.subtitle && (
                    <p className="text-[12.5px] text-slate-500 mt-0.5">
                      {activeCoatedTable.subtitle}
                    </p>
                  )}
                </div>

                {/* Sub-Tabs for multiple widths within Coated */}
                <div className="flex flex-wrap items-center gap-3">
                  {coatedTables.length > 1 && (
                    <div className="flex items-center gap-1.5 p-1 bg-white border border-emerald-200/80 rounded-xl shadow-2xs">
                      {coatedTables.map((tbl, idx) => {
                        const widthLabel = tbl.shortTitle || tbl.title.split('–')[1] || tbl.title.split('-')[1] || `Option ${idx + 1}`;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setCoatedSubIdx(idx)}
                            className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold uppercase tracking-wide transition-all cursor-pointer ${
                              coatedSubIdx === idx
                                ? 'bg-[#004428] text-white shadow-xs'
                                : 'text-emerald-950 hover:bg-emerald-50'
                            }`}
                          >
                            {widthLabel.trim()}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Search bar */}
                  <div className="relative flex-1 sm:w-[240px]">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700/60 pointer-events-none" />
                    <input
                      type="text"
                      value={coatedSearch}
                      onChange={(e) => setCoatedSearch(e.target.value)}
                      placeholder="Search Coated part no..."
                      className="w-full pl-9 pr-8 py-1.5 bg-white border border-emerald-200 rounded-xl text-[12px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004428]/20 focus:border-[#004428] transition-all"
                    />
                    {coatedSearch && (
                      <button
                        type="button"
                        onClick={() => setCoatedSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Shadcn Table Component */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-[#004428]">
                    <TableRow className="border-b border-[#003820] hover:bg-[#004428]">
                      {(activeCoatedTable.columnHeaders || [
                        'Part No.',
                        'Width (mm)',
                        'Length (mm)',
                        'Thickness (mm)',
                        'Max Bundle Dia (mm)',
                        'Min. Loop Tensile (N)',
                      ]).map((headerText, hIdx) => (
                        <TableHead 
                          key={hIdx} 
                          className={`font-bold text-[12px] uppercase tracking-wider py-2.5 text-center ${
                            hIdx === 0 ? 'text-white px-4' : 'text-emerald-100 px-3.5'
                          }`}
                        >
                          {headerText}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = coatedSearch.toLowerCase().trim();
                      const filtered = q
                        ? activeCoatedTable.rows.filter(r => 
                            r.partNo.toLowerCase().includes(q) ||
                            r.width.toLowerCase().includes(q) ||
                            r.length.toLowerCase().includes(q) ||
                            r.thickness.toLowerCase().includes(q) ||
                            r.maxBundleDia.toLowerCase().includes(q) ||
                            r.tensileStrength.toLowerCase().includes(q)
                          )
                        : activeCoatedTable.rows;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-slate-500 text-[13px] bg-white">
                              No matching sizes found for "<span className="font-semibold text-slate-800">{coatedSearch}</span>".{' '}
                              <button
                                type="button"
                                onClick={() => setCoatedSearch('')}
                                className="text-[#004428] font-bold hover:underline ml-1.5 cursor-pointer"
                              >
                                Clear filter
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, rIdx) => (
                        <TableRow 
                          key={rIdx}
                          className="border-b border-emerald-100/70 hover:bg-emerald-50/70 odd:bg-white even:bg-emerald-50/25 transition-colors"
                        >
                          <TableCell className="py-2 px-4 font-mono text-[13px] text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#004428] border border-emerald-200/80 font-bold">
                              {row.partNo}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.width}
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.length}
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.thickness}
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2 px-3.5 text-center">
                            {row.maxBundleDia}
                          </TableCell>
                          <TableCell className="text-slate-900 font-semibold text-[13px] py-2 px-4 text-center">
                            {row.tensileStrength}
                          </TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* ── Redirecting Navigation & Action Bar Below Table ── */}
          <div className="mt-8 p-6 sm:p-7 bg-[#0b1310] rounded-2xl border border-white/10 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 block mb-1">
                FAST DIRECT INQUIRY &middot; NAEPL N-LOC
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Need Custom Sizes, Bulk Quantities or Spec Sheets?
              </h3>
              <p className="text-[13px] text-white/70 mt-1 max-w-[560px]">
                Our application engineering team provides fast turnaround on RFQs, material test certificates (MTC), and project sizing support.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href={product.category === 'IDENTIFICATION SYSTEMS' ? '/products/n-loc/carrier-strips' : '/products/n-loc'}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1e2420] hover:bg-[#2b3530] text-white/95 font-medium text-[13px] transition-all border border-white/15"
              >
                <ArrowLeft size={15} />
                <span>{product.category === 'IDENTIFICATION SYSTEMS' ? 'Cable Marker Tag & Identification' : 'All Cable Ties'}</span>
              </Link>
              <Link
                href={`/contact?subject=RFQ%20for%20${encodeURIComponent(product.title)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#004d2e] hover:bg-[#005f38] text-white font-bold text-[13px] uppercase tracking-wider transition-all shadow-md border border-emerald-500/40"
              >
                <span>REQUEST RFQ</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── 4. Technical Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brochure Cover Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/n_loc_brochure_cover.webp"
                  alt="NAEPL Stainless Steel Cable Ties Catalog Brochure (A4)"
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

            {/* Right Column: Custom Sizing & Consultation Info */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <span>Custom Engineering &amp; Sizing Support</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Ties, Pre-Cut Lengths, or Material Certification?
              </h2>
              
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our application engineering team helps contractors, EPCs, and OEMs select the right stainless steel grade (SS304/SS316), protective polymer coating, and custom band widths for specific dynamic loads and environmental exposure.
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
                  href={product.category === 'IDENTIFICATION SYSTEMS' ? '/products/cable-marker-tags' : '/products/n-loc'}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl text-[13px] sm:text-[14px] transition-all border border-white/15"
                >
                  <span>{product.category === 'IDENTIFICATION SYSTEMS' ? 'Back to Marker Tags Range' : 'Back to N-LOC Series'}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Trust Row ── */}
      <TrustRow />
    </main>
  );
};

export default ProductDetailPage;
