'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface ProductSubItem {
  id: string;
  title: string;
  path: string;
}

// 01. Stainless Steel Cable Ties
const cableTieProducts: ProductSubItem[] = [
  { id: 'roller-ball', title: 'Roller Ball Cable Ties', path: '/products/n-loc/roller-ball' },
  { id: 'zig-zag', title: 'Roller Ball Spring Type Cable Ties', path: '/products/n-loc/zig-zag' },
  { id: 'roller-ball-hd', title: 'Roller Ball Heavy Duty Cable Ties', path: '/products/n-loc/roller-ball-hd' },
  { id: 'zig-zag-hd', title: 'Roller Ball Spring Type Heavy Duty', path: '/products/n-loc/zig-zag-hd' },
  { id: 'releasable', title: 'Releasable Cable Ties', path: '/products/n-loc/releasable' },
  { id: 'ladder', title: 'Ladder Cable Ties', path: '/products/n-loc/ladder' },
];

// 02. Cable Marker Tags & Identification
const cableMarkerTagProducts: ProductSubItem[] = [
  { id: 'carrier-strips', title: 'Carrier Strips (Coated & Uncoated)', path: '/products/n-loc/carrier-strips' },
  { id: 'marker-plates', title: 'Marker Plates & Custom Tags', path: '/products/n-loc/marker-plates' },
  { id: 'alphanumeric-characters', title: 'Alphanumeric Characters', path: '/products/n-loc/alphanumeric-characters' },
];

// 03. Cable Cleats
const cableCleatProducts: ProductSubItem[] = [
  { id: 'trefoil-cleat', title: 'Trefoil Cable Cleats', path: '/products/cable-cleat/trefoil-cleat' },
  { id: 'single-cleat', title: 'Single Cable Cleats', path: '/products/cable-cleat/single-cleat' },
];

// 04. Electrical Lugs & Terminals (LUGX)
const lugProducts: ProductSubItem[] = [
  { id: 'copper-one-hole-standard', title: 'Copper 1-Hole Standard Lugs', path: '/products/lugx/copper-one-hole-standard' },
  { id: 'copper-one-hole-long-barrel', title: 'Copper 1-Hole Long Barrel Lugs', path: '/products/lugx/copper-one-hole-long-barrel' },
  { id: 'copper-one-hole-heavy-duty', title: 'Copper 1-Hole Heavy Duty Lugs', path: '/products/lugx/copper-one-hole-heavy-duty' },
  { id: 'copper-one-hole-bell-mouth', title: 'Copper 1-Hole Bell Mouth Lugs', path: '/products/lugx/copper-one-hole-bell-mouth' },
  { id: 'copper-one-hole-narrow-palm', title: 'Copper 1-Hole Narrow Palm Lugs', path: '/products/lugx/copper-one-hole-narrow-palm' },
  { id: 'copper-two-hole-heavy-duty', title: 'Copper 2-Hole Heavy Duty Lugs', path: '/products/lugx/copper-two-hole-heavy-duty' },
  { id: 'copper-two-hole-long-barrel', title: 'Copper 2-Hole Long Barrel Lugs', path: '/products/lugx/copper-two-hole-long-barrel' },
  { id: 'copper-two-hole-long-barrel-heavy-duty', title: 'Copper 2-Hole Long Heavy Duty', path: '/products/lugx/copper-two-hole-long-barrel-heavy-duty' },
  { id: 'copper-four-hole-transformer', title: 'Copper 4-Hole Transformer Lugs', path: '/products/lugx/copper-four-hole-transformer' },
  { id: 'aluminium-one-hole-standard', title: 'Aluminium 1-Hole Standard Terminals', path: '/products/lugx/aluminium-one-hole-standard' },
  { id: 'aluminium-two-hole-standard', title: 'Aluminium 2-Hole Standard Terminals', path: '/products/lugx/aluminium-two-hole-standard' },
  { id: 'aluminium-one-hole-long-barrel', title: 'Aluminium 1-Hole Long Barrel Terminals', path: '/products/lugx/aluminium-one-hole-long-barrel' },
  { id: 'copper-ring-open-closed-soldering', title: 'Copper Ring Terminals (Soldering)', path: '/products/lugx/copper-ring-open-closed-soldering' },
  { id: 'bimetallic-friction-welded', title: 'Bi-Metallic Friction-Welded Terminals', path: '/products/lugx/bimetallic-friction-welded' },
  { id: 'bimetallic-copper-ring', title: 'Bi-Metallic Copper Ring Terminals', path: '/products/lugx/bimetallic-copper-ring' },
  { id: 'copper-crimping-pin', title: 'Copper Crimping Pin Terminals', path: '/products/lugx/copper-crimping-pin' },
  { id: 'copper-crimping-ring', title: 'Copper Crimping Ring Terminals', path: '/products/lugx/copper-crimping-ring' },
  { id: 'copper-crimping-fork', title: 'Copper Crimping Fork Terminals', path: '/products/lugx/copper-crimping-fork' },
  { id: 'copper-ring-tongue-fork', title: 'Copper Ring Tongue Fork Terminals', path: '/products/lugx/copper-ring-tongue-fork' },
];

// 05. Electrical Enclosures & Junction Boxes
const junctionBoxProducts: ProductSubItem[] = [
  { id: 'aluminium-die-cast', title: 'Aluminium Die Cast Enclosures', path: '/products/link-box/aluminium-die-cast' },
  { id: 'stainless-steel', title: 'Stainless Steel Enclosures', path: '/products/link-box/stainless-steel' },
  { id: 'mild-steel', title: 'Mild Steel Junction Boxes', path: '/products/link-box/mild-steel' },
  { id: 'push-button', title: 'SS Push Button Panels', path: '/products/link-box/push-button' },
];

// 06. CNC Machined Components
const cncProducts: ProductSubItem[] = [
  { id: 'copper-machined', title: 'Copper Machined Components', path: '/products/cnc-machine-component/copper-machined-components' },
  { id: 'stainless-steel-cnc', title: 'Stainless Steel CNC Components', path: '/products/cnc-machine-component/stainless-steel-cnc-components' },
  { id: 'aluminium-machined', title: 'Aluminium Machined Components', path: '/products/cnc-machine-component/aluminium-machined-components' },
  { id: 'custom-alloy-cnc', title: 'Chrome Steel & Alloy Parts', path: '/products/cnc-machine-component/custom-alloy-cnc-parts' },
];

// 07. Sheet Metal Press Parts & Banding
const sheetMetalProducts: ProductSubItem[] = [
  { id: 'sheet-metal-press-parts', title: 'Press Parts', path: '/products/sheet-metal-press-parts/sheet-metal-press-parts' },
  { id: 'stainless-steel-banding', title: 'Stainless Steel Banding', path: '/products/sheet-metal-press-parts/stainless-steel-banding' },
  { id: 'pre-cut-straps-buckles', title: 'Pre-Cut Straps & Buckles', path: '/products/sheet-metal-press-parts/pre-cut-straps-buckles' },
  { id: 'sign-mounting-brackets', title: 'Sign Mounting Brackets', path: '/products/sheet-metal-press-parts/sign-mounting-brackets' },
];

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname() || '/';

  // Dropdown Open State (Supports both hover and click)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveSub, setMobileActiveSub] = useState<string | null>(null);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileActiveSub(null);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isProductsActive =
    pathname.startsWith('/products') ||
    pathname.startsWith('/n-loc') ||
    pathname.startsWith('/cable-cleat') ||
    pathname.startsWith('/link-box') ||
    pathname.startsWith('/lugx') ||
    pathname.startsWith('/cnc') ||
    pathname.startsWith('/sheet-metal');

  const handleDropdownEnter = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
    dropdownCloseTimer.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="w-full max-w-[1440px] mx-auto flex h-16 items-center px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* ── Brand Logo (Fixed on Far Left) ── */}
        <Link
          href="/"
          className="flex items-center shrink-0 mr-4 xl:mr-8 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md"
          aria-label="NAEPL Home"
        >
          <img
            src="/assets/logo_naepl.webp?v=2"
            alt="N Gandhi Advance Engineering Private Limited"
            width={240}
            height={42}
            className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90"
          />
        </Link>

        {/* ── Desktop Navigation Links (Shifted slightly towards Left) ── */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-auto mr-8 xl:mr-20">
          {/* Home */}
          <Link
            href="/"
            className={cn(
              'inline-flex items-center justify-center h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150',
              pathname === '/'
                ? 'text-emerald-800 font-semibold bg-emerald-50'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
            )}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            href="/about-us"
            className={cn(
              'inline-flex items-center justify-center h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150',
              pathname === '/about-us' || pathname === '/about'
                ? 'text-emerald-800 font-semibold bg-emerald-50'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
            )}
          >
            About Us
          </Link>

          {/* ── Genuine Shadcn Products Dropdown with Sub-Dropdowns ── */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <Link
                  href="/products"
                  onClick={(e) => {
                    setDropdownOpen(false);
                    router.push('/products');
                  }}
                  className={cn(
                    'inline-flex items-center justify-center gap-1.5 h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150 cursor-pointer outline-none select-none',
                    isProductsActive || dropdownOpen
                      ? 'text-emerald-800 font-semibold bg-emerald-50'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
                  )}
                  aria-expanded={dropdownOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={cn(
                      'size-3.5 transition-transform duration-200 text-slate-500',
                      dropdownOpen && 'rotate-180 text-emerald-800'
                    )}
                  />
                </Link>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                sideOffset={4}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl z-50 select-none animate-in fade-in-0 zoom-in-95 duration-150"
              >
                {/* 1. Stainless Steel Cable Ties (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/n-loc');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/n-loc"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      Stainless Steel Cable Ties
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {cableTieProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[13px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* 2. Cable Marker Tags & Identification (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/cable-marker-tags');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/cable-marker-tags"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      Cable Marker Tag &amp; Identification
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {cableMarkerTagProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[13px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* 3. Cable Cleats & Accessories (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/cable-cleat');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/cable-cleat"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      Cable Cleats &amp; Accessories
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {cableCleatProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[13px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* 4. Electrical Lugs & Terminals (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/lugx');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/lugx"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      Electrical Lugs &amp; Terminals
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-80 max-h-[420px] overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {lugProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[12.5px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors truncate"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* 5. Electrical Enclosures & Junction Boxes (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/link-box');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/link-box"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      Enclosures &amp; Junction Boxes
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {junctionBoxProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[13px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* 6. CNC Machined Components (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/cnc-machine-component');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/cnc-machine-component"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      CNC Machined Components
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {cncProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[13px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* 7. Sheet Metal Press Parts & Banding (With Sub-Dropdown) */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/products/sheet-metal-press-parts');
                    }}
                    className="cursor-pointer text-[13.5px] font-medium py-2 px-3 rounded-lg text-slate-800 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-900 transition-colors"
                  >
                    <Link
                      href="/products/sheet-metal-press-parts"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(false);
                      }}
                      className="flex-1 text-left text-inherit"
                    >
                      Sheet Metal Press Parts &amp; Banding
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-72 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-800 shadow-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {sheetMetalProducts.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        asChild
                        className="cursor-pointer text-[13px] font-medium py-1.5 px-3 text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 rounded-md transition-colors"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Industry */}
          <Link
            href="/industry"
            className={cn(
              'inline-flex items-center justify-center h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150',
              pathname.startsWith('/industry')
                ? 'text-emerald-800 font-semibold bg-emerald-50'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
            )}
          >
            Industry
          </Link>

          {/* Quality & Certifications */}
          <Link
            href="/quality-certifications"
            className={cn(
              'inline-flex items-center justify-center h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150',
              pathname === '/quality-certifications'
                ? 'text-emerald-800 font-semibold bg-emerald-50'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
            )}
          >
            Quality &amp; Certifications
          </Link>

          {/* Catalogue */}
          <Link
            href="/catalogue"
            className={cn(
              'inline-flex items-center justify-center h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150',
              pathname === '/catalogue' || pathname === '/brochure'
                ? 'text-emerald-800 font-semibold bg-emerald-50'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
            )}
          >
            Catalogue
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center justify-center h-9 px-3 text-[13.5px] font-medium rounded-md whitespace-nowrap transition-colors duration-150',
              pathname === '/contact'
                ? 'text-emerald-800 font-semibold bg-emerald-50'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100/70'
            )}
          >
            Contact
          </Link>
        </nav>

        {/* ── Right Action Area (Clean Alignment) ── */}
        <div className="hidden lg:flex items-center shrink-0">
          {/* N. Gandhi Group Brand Badge */}
          <a
            href="https://www.ngandhi.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit N. Gandhi Group Website"
            className="flex items-center pl-3.5 border-l border-slate-200 hover:opacity-85 transition-opacity"
          >
            <img
              src="/assets/logo_ngandhi_group.png"
              alt="N. Gandhi Group"
              className="h-7.5 w-auto object-contain"
            />
          </a>
        </div>

        {/* ── Mobile Hamburger Trigger ── */}
        <div className="flex items-center lg:hidden ml-auto">
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in-0"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition ease-in-out duration-300 animate-in slide-in-from-right">
            {/* Sheet Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <img
                  src="/assets/logo_naepl.webp?v=2"
                  alt="NAEPL"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Sheet Nav Links */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex flex-col gap-1 text-[14px]">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg font-medium transition-colors',
                    pathname === '/'
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Home
                </Link>

                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg font-medium transition-colors',
                    pathname === '/about-us'
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  About Us
                </Link>

                {/* Collapsible Mobile Products */}
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={cn(
                      'flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left',
                      isProductsActive
                        ? 'bg-emerald-50 text-emerald-800 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    )}
                  >
                    <span>Products</span>
                    <ChevronDown
                      className={cn(
                        'size-4 text-slate-400 transition-transform duration-200',
                        mobileProductsOpen && 'rotate-180 text-emerald-800'
                      )}
                    />
                  </button>

                  {mobileProductsOpen && (
                    <div className="ml-3 pl-3 border-l-2 border-emerald-200 mt-1 flex flex-col gap-1 py-1 animate-in fade-in-0 duration-150">
                      {/* 1. SS Cable Ties */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'cable-ties' ? null : 'cable-ties')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>Stainless Steel Cable Ties</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'cable-ties' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'cable-ties' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1">
                          {cableTieProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 2. Cable Marker Tags */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'tags' ? null : 'tags')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>Cable Marker Tag &amp; Identification</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'tags' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'tags' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1">
                          <Link
                            href="/products/cable-marker-tags"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-2 py-1 text-[12.5px] font-semibold text-emerald-800 hover:text-emerald-900 border-b border-slate-100 pb-1.5 mb-0.5"
                          >
                            All Marker Tags Range &rarr;
                          </Link>
                          {cableMarkerTagProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 3. Cable Cleats */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'cleats' ? null : 'cleats')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>Cable Cleats &amp; Accessories</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'cleats' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'cleats' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1">
                          {cableCleatProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 4. Electrical Lugs */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'lugs' ? null : 'lugs')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>Electrical Lugs &amp; Terminals</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'lugs' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'lugs' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1 max-h-56 overflow-y-auto">
                          {lugProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800 truncate"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 5. Enclosures */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'enclosures' ? null : 'enclosures')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>Enclosures &amp; Junction Boxes</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'enclosures' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'enclosures' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1">
                          {junctionBoxProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 6. CNC Machined */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'cnc' ? null : 'cnc')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>CNC Machined Components</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'cnc' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'cnc' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1">
                          {cncProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 7. Sheet Metal Press Parts & Banding */}
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveSub(mobileActiveSub === 'sheet-metal' ? null : 'sheet-metal')
                        }
                        className="flex items-center justify-between px-2.5 py-2 text-[13px] font-semibold text-slate-800 hover:text-emerald-800 text-left cursor-pointer"
                      >
                        <span>Sheet Metal Press Parts &amp; Banding</span>
                        <ChevronDown
                          className={cn(
                            'size-3.5 transition-transform',
                            mobileActiveSub === 'sheet-metal' && 'rotate-180 text-emerald-800'
                          )}
                        />
                      </button>
                      {mobileActiveSub === 'sheet-metal' && (
                        <div className="ml-2 pl-2 border-l border-slate-200 flex flex-col gap-1 py-1">
                          {sheetMetalProducts.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2 py-1 text-[12.5px] text-slate-600 hover:text-emerald-800"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Link
                  href="/industry"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg font-medium transition-colors',
                    pathname.startsWith('/industry')
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Industry
                </Link>

                <Link
                  href="/quality-certifications"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg font-medium transition-colors',
                    pathname === '/quality-certifications'
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Quality &amp; Certifications
                </Link>

                <Link
                  href="/catalogue"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg font-medium transition-colors',
                    pathname === '/catalogue'
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Catalogue
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg font-medium transition-colors',
                    pathname === '/contact'
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Sheet Footer */}
            <div className="border-t border-slate-100 p-5 bg-slate-50 flex flex-col gap-3">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg gap-2"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <PhoneCall className="size-4" />
                  <span>Get a Quote</span>
                </Link>
              </Button>
              <div className="flex items-center justify-center pt-2">
                <a
                  href="https://www.ngandhi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700"
                >
                  <span>An Engineering Unit of</span>
                  <img
                    src="/assets/logo_ngandhi_group.png"
                    alt="N. Gandhi Group"
                    className="h-5 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
