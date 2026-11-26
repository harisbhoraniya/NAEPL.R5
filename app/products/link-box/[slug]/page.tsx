'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Layers, 
  FileText, 
  ArrowRight, 
  ChevronRight,
  Search,
  Check,
  X
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { TrustRow } from '@/components/TrustRow';
import { 
  linkBoxProductsDetails, 
  aluminiumEnclosuresData,
  stainlessSteelJunctionBoxesData,
  mildSteelJunctionBoxesData,
  pushButtonPanelsData
} from '@/data/linkBoxProductsData';

const LinkBoxDetailPage: React.FC = () => {
  const params = useParams();
  const rawSlug = (params?.slug as string) || 'aluminium-die-cast';
  const product = linkBoxProductsDetails[rawSlug] || linkBoxProductsDetails['aluminium-die-cast'];

  const [searchTerm, setSearchTerm] = useState('');

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
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products" className="hover:text-emerald-400 transition-colors">Products</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/products/link-box" className="hover:text-emerald-400 transition-colors">Junction Boxes &amp; Enclosures</Link>
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
                href="/products/link-box"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-all border border-white/10"
              >
                <ArrowLeft size={16} />
                <span>All Enclosures Range</span>
              </Link>

              <Link
                href="/contact"
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

                {/* Status indicator on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-sm backdrop-blur-sm">
                    {product.specs.protection}
                  </span>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Ingress Rating</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-emerald-800">{product.specs.protection.split(' ')[0]}</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Enclosure Body</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900 truncate" title={product.specs.material}>{product.specs.material.split('(')[0]}</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Gasket Seal</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900 truncate" title={product.specs.gasket}>{product.specs.gasket.split(' ')[0]} Gasket</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Operating Temp</p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900">{product.specs.operatingTemp}</p>
                </div>
              </div>

              {/* Brochure Download Link */}
              <div className="w-full mt-4">
                <Link
                  href="/brochure?doc=link-box-brochure"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-xl text-[13px] transition-colors border border-slate-200"
                >
                  <FileText size={16} className="text-slate-500" />
                  <span>Download Enclosures Catalogue</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Detailed Engineering Description & Highlights */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#004428] mb-2 before:content-[''] before:inline-block before:w-5 before:h-[1.5px] before:bg-[#004428]">
                ENGINEERING SPECIFICATIONS · NAEPL LINKBOX
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
                {product.title}
              </h2>

              {product.description && (
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed font-normal mb-6">
                  {product.description}
                </p>
              )}

              {/* Key Features List (Exact Canonical UI) */}
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

              {/* Detailed Technical Specifications Grid */}
              <div>
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-[12.5px] mb-3.5 flex items-center gap-2">
                  <Zap size={17} className="text-[#004428]" />
                  <span>Technical Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Enclosure Material</span>
                    <span className="font-semibold text-slate-800">{product.specs.material}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Ingress Protection</span>
                    <span className="font-semibold text-slate-800">{product.specs.protection}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Gasket Seal</span>
                    <span className="font-semibold text-slate-800">{product.specs.gasket}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Operating Temp Range</span>
                    <span className="font-semibold text-slate-800">{product.specs.operatingTemp}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Mounting Provisions</span>
                    <span className="font-semibold text-slate-800">{product.specs.mounting}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">Surface Finish / Standards</span>
                    <span className="font-semibold text-slate-800">{product.specs.finish} · {product.specs.standards}</span>
                  </div>
                  {product.specs.colours && (
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:col-span-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
                          Available Colours &amp; Finishes
                        </span>
                        {product.brochurePage && (
                          <span className="text-[10.5px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                            {product.brochurePage}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {product.coloursList?.map((c, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs"
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full inline-block border border-black/15 shadow-inner shrink-0"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span>{c.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Technical Sizing & Part Numbers (Exact N-LOC Table UI) ── */}
      <section className="py-10 sm:py-14 bg-[#f8fafc] border-y border-slate-200" id="specifications">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

          {/* Table Card (Exact N-LOC Table UI) */}
          <div className="bg-white border border-emerald-900/15 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 bg-emerald-50/70 border-b border-emerald-900/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">
                  {product.title} Dimensions &amp; Specifications
                </h3>
                <p className="text-[12.5px] text-slate-500 mt-0.5">
                  Standard catalogue models and dimensions from the official NAEPL engineering brochure.
                </p>
              </div>

              {/* Search bar matching N-LOC */}
              <div className="relative flex-1 sm:w-[260px]">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700/60 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Part No., dimensions..."
                  className="w-full pl-9 pr-8 py-1.5 bg-white border border-emerald-200 rounded-xl text-[12px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004428]/20 focus:border-[#004428] transition-all"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              
              {/* Aluminium Table */}
              {product.tableType === 'aluminium' && (
                <Table>
                  <TableHeader className="bg-[#004428]">
                    <TableRow className="border-b border-[#003820] hover:bg-[#004428]">
                      <TableHead className="font-bold text-white text-[12px] uppercase tracking-wider py-2.5 px-4 text-center whitespace-nowrap">Part Model No.</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Width A (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Length B (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Height C (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Internal Mounting Plate</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">DIN Rail T15</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">DIN Rail T35</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">External Hinges Set</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">External Mounting Bracket Set</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchTerm.toLowerCase().trim();
                      const filtered = q
                        ? aluminiumEnclosuresData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.width.includes(q) ||
                              r.length.includes(q) ||
                              r.height.includes(q)
                          )
                        : aluminiumEnclosuresData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={9} className="text-center py-8 text-slate-500 text-[13px] bg-white">
                              No matching sizes found for &ldquo;<span className="font-semibold text-slate-800">{searchTerm}</span>&rdquo;.{' '}
                              <button
                                type="button"
                                onClick={() => setSearchTerm('')}
                                className="text-[#004428] font-bold hover:underline ml-1.5 cursor-pointer"
                              >
                                Clear filter
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-emerald-100/70 hover:bg-emerald-50/70 odd:bg-white even:bg-emerald-50/25 transition-colors">
                          <TableCell className="py-2.5 px-4 font-mono text-[13px] text-center whitespace-nowrap">
                            <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#004428] border border-emerald-200/80 font-bold">
                              {row.partNo}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.width}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.length}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.height}</TableCell>
                          <TableCell className="text-center py-2.5 px-3.5">
                            {row.mountingPlate ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100/80 text-[#004428]">
                                <Check size={14} className="stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="text-slate-300 font-bold">—</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center py-2.5 px-3.5">
                            {row.dinRailT15 ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100/80 text-[#004428]">
                                <Check size={14} className="stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="text-slate-300 font-bold">—</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center py-2.5 px-3.5">
                            {row.dinRailT35 ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100/80 text-[#004428]">
                                <Check size={14} className="stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="text-slate-300 font-bold">—</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center py-2.5 px-3.5">
                            {row.hingesSet ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100/80 text-[#004428]">
                                <Check size={14} className="stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="text-slate-300 font-bold">—</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center py-2.5 px-3.5">
                            {row.mountingBracket ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100/80 text-[#004428]">
                                <Check size={14} className="stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="text-slate-300 font-bold">—</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

              {/* Stainless Steel Table */}
              {product.tableType === 'stainless-steel' && (
                <Table>
                  <TableHeader className="bg-[#004428]">
                    <TableRow className="border-b border-[#003820] hover:bg-[#004428]">
                      <TableHead className="font-bold text-white text-[12px] uppercase tracking-wider py-2.5 px-4 text-center whitespace-nowrap">Part Model No.</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Width B (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Length H (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Height P (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-4 text-center">Weight (kg)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchTerm.toLowerCase().trim();
                      const filtered = q
                        ? stainlessSteelJunctionBoxesData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.width.includes(q) ||
                              r.length.includes(q) ||
                              r.height.includes(q) ||
                              r.weight.includes(q)
                          )
                        : stainlessSteelJunctionBoxesData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-slate-500 text-[13px] bg-white">
                              No matching sizes found for &ldquo;<span className="font-semibold text-slate-800">{searchTerm}</span>&rdquo;.{' '}
                              <button
                                type="button"
                                onClick={() => setSearchTerm('')}
                                className="text-[#004428] font-bold hover:underline ml-1.5 cursor-pointer"
                              >
                                Clear filter
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-emerald-100/70 hover:bg-emerald-50/70 odd:bg-white even:bg-emerald-50/25 transition-colors">
                          <TableCell className="py-2.5 px-4 font-mono text-[13px] text-center whitespace-nowrap">
                            <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#004428] border border-emerald-200/80 font-bold">
                              {row.partNo}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.width}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.length}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.height}</TableCell>
                          <TableCell className="text-slate-900 font-semibold text-[13px] py-2.5 px-4 text-center">{row.weight}</TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

              {/* Mild Steel Table */}
              {product.tableType === 'mild-steel' && (
                <Table>
                  <TableHeader className="bg-[#004428]">
                    <TableRow className="border-b border-[#003820] hover:bg-[#004428]">
                      <TableHead className="font-bold text-white text-[12px] uppercase tracking-wider py-2.5 px-4 text-center whitespace-nowrap">Part Model No.</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Enclosure H</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Enclosure W</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Enclosure D</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Panel H</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Panel W</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchTerm.toLowerCase().trim();
                      const filtered = q
                        ? mildSteelJunctionBoxesData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.enclosureH.includes(q) ||
                              r.enclosureW.includes(q) ||
                              r.enclosureD.includes(q) ||
                              r.panelH.includes(q) ||
                              r.panelW.includes(q)
                          )
                        : mildSteelJunctionBoxesData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-slate-500 text-[13px] bg-white">
                              No matching sizes found for &ldquo;<span className="font-semibold text-slate-800">{searchTerm}</span>&rdquo;.{' '}
                              <button
                                type="button"
                                onClick={() => setSearchTerm('')}
                                className="text-[#004428] font-bold hover:underline ml-1.5 cursor-pointer"
                              >
                                Clear filter
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-emerald-100/70 hover:bg-emerald-50/70 odd:bg-white even:bg-emerald-50/25 transition-colors">
                          <TableCell className="py-2.5 px-4 font-mono text-[13px] text-center whitespace-nowrap">
                            <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#004428] border border-emerald-200/80 font-bold">
                              {row.partNo}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.enclosureH}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.enclosureW}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.enclosureD}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.panelH}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.panelW}</TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

              {/* Push Button Table */}
              {product.tableType === 'push-button' && (
                <Table>
                  <TableHeader className="bg-[#004428]">
                    <TableRow className="border-b border-[#003820] hover:bg-[#004428]">
                      <TableHead className="font-bold text-white text-[12px] uppercase tracking-wider py-2.5 px-4 text-center whitespace-nowrap">Part Model No.</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Width B (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Length H (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Height P (mm)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-4 text-center whitespace-nowrap">Weight (kg)</TableHead>
                      <TableHead className="font-bold text-emerald-100 text-[12px] uppercase tracking-wider py-2.5 px-3.5 text-center whitespace-nowrap">Holes (N°)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(() => {
                      const q = searchTerm.toLowerCase().trim();
                      const filtered = q
                        ? pushButtonPanelsData.filter(
                            (r) =>
                              r.partNo.toLowerCase().includes(q) ||
                              r.holes.includes(q) ||
                              r.width.includes(q) ||
                              r.length.includes(q) ||
                              r.height.includes(q) ||
                              r.weight.includes(q)
                          )
                        : pushButtonPanelsData;

                      if (filtered.length === 0) {
                        return (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-slate-500 text-[13px] bg-white">
                              No matching sizes found for &ldquo;<span className="font-semibold text-slate-800">{searchTerm}</span>&rdquo;.{' '}
                              <button
                                type="button"
                                onClick={() => setSearchTerm('')}
                                className="text-[#004428] font-bold hover:underline ml-1.5 cursor-pointer"
                              >
                                Clear filter
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      }

                      return filtered.map((row, idx) => (
                        <TableRow key={idx} className="border-b border-emerald-100/70 hover:bg-emerald-50/70 odd:bg-white even:bg-emerald-50/25 transition-colors">
                          <TableCell className="py-2.5 px-4 font-mono text-[13px] text-center whitespace-nowrap">
                            <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#004428] border border-emerald-200/80 font-bold">
                              {row.partNo}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.width}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.length}</TableCell>
                          <TableCell className="text-slate-700 font-medium text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">{row.height}</TableCell>
                          <TableCell className="text-slate-900 font-semibold text-[13px] py-2.5 px-4 text-center">{row.weight}</TableCell>
                          <TableCell className="font-bold text-[#004428] text-[13px] py-2.5 px-3.5 text-center whitespace-nowrap">
                            <span className="inline-block px-2.5 py-0.5 bg-emerald-100/70 text-[#004428] rounded-md font-bold">
                              {row.holes} {row.holes === '1' ? 'Hole' : 'Holes'}
                            </span>
                          </TableCell>
                        </TableRow>
                      ));
                    })()}
                  </TableBody>
                </Table>
              )}

            </div>
          </div>

          {/* ── Redirecting Navigation Bar Below Table ── */}
          <div className="mt-8 p-6 sm:p-7 bg-[#0b1310] rounded-2xl border border-white/10 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 block mb-1">
                FAST DIRECT INQUIRY &middot; NAEPL LINKBOX
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Need Custom Machining, Holes, or Pre-Assembled Enclosures?
              </h3>
              <p className="text-[13px] text-white/70 mt-1 max-w-[560px]">
                We supply pre-drilled enclosures, terminal blocks, DIN rails, and IP68 cable glands as ready-to-mount kits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/products/link-box"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1b231f] hover:bg-[#25322c] text-white/90 hover:text-white font-medium text-[13px] transition-all border border-white/15 cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>All Enclosures Range</span>
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

      {/* ── 4. Engineering Support & RFQ Banner ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004428] via-[#00331e] to-[#0a110e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: A4 Brochure Mockup Card + Download PDF Brochure Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mr-auto">
              <div className="w-full aspect-[210/297] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm relative group mb-4">
                <img
                  src="/assets/brochure_covers/link_box_brochure_cover.webp"
                  alt="NAEPL Enclosures Catalog Brochure (A4)"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              <Link href="/brochure?doc=link-box-brochure"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-400/40 font-semibold px-4 sm:px-5 py-3.5 rounded-xl text-[12.5px] sm:text-[13.5px] uppercase tracking-wide transition-all shadow-md text-center hover:bg-emerald-500/25 leading-snug"
              >
                <FileText size={16} className="text-emerald-300 shrink-0" />
                <span>Download Enclosures Brochure</span>
              </Link>
            </div>

            {/* Right Column: Technical Consultation Info + Request Quotation */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-4 border border-emerald-400/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>NAEPL Technical Consultation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Need Custom Machining, Sizing, or Terminal Assembly?
              </h2>

              <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[620px]">
                Our enclosure engineering team helps OEMs, contractors, and consultants with custom cutouts, terminal rail configurations, cable gland drilling, and application-specific ingress certification.
              </p>

              <div>
                <Link href="/contact"
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

      {/* ── 5. Trust Row ── */}
      <TrustRow />

    </main>
  );
};

export default LinkBoxDetailPage;
