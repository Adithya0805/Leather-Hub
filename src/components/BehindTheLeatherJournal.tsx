"use client";

import React, { useState } from "react";
import { BookOpen, ArrowRight, X, Clock, Calendar, ShieldCheck, Tag } from "lucide-react";

interface JournalArticle {
  id: string;
  tag: string;
  title: string;
  metaDescription: string;
  readTime: string;
  date: string;
  fullExcerpt: string;
  keyTakeaways: string[];
}

const ARTICLES: JournalArticle[] = [
  {
    id: "ambur-heritage",
    tag: "Origins & Heritage",
    title: "Why Ambur Leather Has No Rival: A Century of Heritage Along the Palar River",
    metaDescription:
      "Discover how Ambur, Tamil Nadu became South India's leather capital. Explore the 200-year history of vegetable tanning, Chola roots, and global export mastery.",
    readTime: "4 min read",
    date: "Ambur Guild Chronicle",
    fullExcerpt:
      "Tucked along the northern banks of the Palar River in Tamil Nadu, the town of Ambur has shaped the global leather trade for over two centuries. What began during the ancient Chola era with natural botanical tanning—using native Avaram senna bark and crushed Myrobalan nuts—transformed during the 19th century into one of the world's most disciplined tanning enclaves. Today, Ambur houses over 700 certified manufacturing units and more than 100,000 skilled generational craftsmen supplying top luxury houses in Milan, London, and Paris.",
    keyTakeaways: [
      "Mineral-rich Palar river waters provide ideal PH equilibrium for natural drum tanning.",
      "Traditional indigenous barks (Avaram & Kadukkai) replace toxic synthetic tanning salts.",
      "Ambur crafts the leather foundations for elite European fashion houses quietly behind the scenes.",
    ],
  },
  {
    id: "full-grain-vs-bonded",
    tag: "Material Science",
    title: "Full-Grain vs. Bonded Leather: The Truth Commercial Brands Hide",
    metaDescription:
      "Stop paying luxury prices for plastic-coated cardboard. Learn the anatomical difference between 100% full-grain bovine hide and commercial bonded PU substitutes.",
    readTime: "5 min read",
    date: "Material Truth Series",
    fullExcerpt:
      "Walk into any commercial shopping mall and you will see wallets stamped 'Genuine Leather' with ₹3,000 price tags. In reality, 'genuine leather' is an industry loophole for bonded scrap: shredded leather trimmings mixed with glue, rolled into sheets, and coated with polyurethane plastic over a cardboard core. In contrast, 100% full-grain bovine leather preserves the outermost epidermal dermal layer where collagen fibers are densest. It never cracks, never flakes, and heals light scuffs naturally.",
    keyTakeaways: [
      "'Genuine Leather' is the lowest legal tier of reconstituted scrap dust.",
      "Commercial brands insert paperboard sandwiches inside to mimic full-grain firmness.",
      "Only unbuffed full-grain leather contains intact dermal pores that absorb body oils to form patina.",
    ],
  },
  {
    id: "science-of-patina",
    tag: "Organic Chemistry",
    title: "The Science of Leather Patina: How Full-Grain Bovine Hides Age Over Time",
    metaDescription:
      "Why does real full-grain leather get more beautiful with age? The biochemical science of oxidation, sebum absorption, and organic patina development explained.",
    readTime: "4 min read",
    date: "Leather Care Guide",
    fullExcerpt:
      "Patina is not wear-and-tear; it is organic biochemistry. When unsealed full-grain bovine leather is handled, its porous collagen matrix absorbs natural sebum from your fingertips, ambient ultraviolet light, and natural friction. This causes natural oxidation of the drum-dyed vegetable oils, transforming a matte workshop surface into a deep, glossy caramel marble finish. Synthetic PU leather cannot oxidize—it merely breaks down and bubbles within months.",
    keyTakeaways: [
      "Natural skin lipids and ambient UV rays oxidize drum-tanned oils into deep caramel tones.",
      "Friction creates microscopic heat that smooths outer collagen fibers into a glassy sheen.",
      "Synthetic leathers cannot develop patina; plastic only delaminates and cracks.",
    ],
  },
  {
    id: "brass-die-monogramming",
    tag: "Workshop Craft",
    title: "Hand-Stamped Brass Die Monogramming: Crafting Your Personalized Heirloom",
    metaDescription:
      "Learn how Dino Leathers hand-presses heated brass typefaces into full-grain leather wallets and belts at our MC Road workshop in Ambur (PIN 635802).",
    readTime: "3 min read",
    date: "Artisan Bench Technique",
    fullExcerpt:
      "Modern fast-fashion brands use cheap screen printing or burning laser markers that burn away the grain and rub off in months. Dino Leathers follows the traditional bookbinder's method: heated solid brass die debossing. We assemble individual foundry brass letters in our workshop arbor press, heat them to exactly 115°C, and apply measured mechanical pressure. The bovine collagen fibers compress permanently, creating an indelible impression that lasts for decades.",
    keyTakeaways: [
      "Solid foundry brass typeface transfers heat evenly without singeing the grain.",
      "115°C is the calibrated thermal threshold that softens bovine collagen without scorching.",
      "Zero surface inks used—the deboss is permanently sculpted into the physical hide.",
    ],
  },
];

export function BehindTheLeatherJournal() {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 bg-[#FBF9F5] text-[#2C1A11] border-b border-[#EADDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]">
              <BookOpen className="w-3.5 h-3.5 text-[#7A3E1D]" />
              <span>Behind the Leather • Educational Journal</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1A11]">
              The Ambur Tannery Chronicle
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#6B5B52] max-w-md leading-relaxed">
            Demystifying the luxury leather trade through materials science, 
            Chola tanning heritage, and radical workshop transparency.
          </p>
        </div>

        {/* 4 Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-[#EADDD3] p-6 shadow-warm hover:border-[#7A3E1D] hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#7A3E1D] font-bold uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-[#9A8C84] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2C1A11] leading-snug group-hover:text-[#7A3E1D] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-[#6B5B52] leading-relaxed line-clamp-3">
                  {article.metaDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EADDD3]/60 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#9A8C84] uppercase">
                  {article.date}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A3E1D] hover:text-[#633216] transition-colors cursor-pointer group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-[#FBF9F5] rounded-3xl border border-[#EADDD3] max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6 text-[#2C1A11]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#EADDD3] flex items-center justify-center text-[#6B5B52] hover:text-[#2C1A11] hover:bg-[#F3ECE5] transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7A3E1D]">
                <Tag className="w-3.5 h-3.5" />
                <span>{selectedArticle.tag} • {selectedArticle.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#2C1A11]">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EADDD3] text-xs text-[#7A3E1D] font-mono leading-relaxed">
              <strong>SEO Meta Description:</strong> {selectedArticle.metaDescription}
            </div>

            <div className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed space-y-3">
              <p>{selectedArticle.fullExcerpt}</p>
            </div>

            <div className="bg-[#F3ECE5] p-5 rounded-2xl border border-[#EADDD3] space-y-2">
              <span className="font-mono text-xs uppercase font-bold text-[#7A3E1D] block">
                Key Craftsmanship Takeaways:
              </span>
              <ul className="space-y-2 text-xs text-[#2C1A11]">
                {selectedArticle.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7A3E1D] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#EADDD3]">
              <span className="text-xs font-mono text-[#9A8C84]">
                Dino Leathers Journal • MC Road, Ambur (PIN 635802)
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-full bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#633216] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
