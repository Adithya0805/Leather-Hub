import fs from "fs";
import path from "path";
import sharp from "sharp";

interface CropRegion {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface ImageTask {
  productSlug: string;
  viewName: string;
  sourceFile: string;
  crop?: CropRegion;
  // If true, this is macro texture shot that belongs last in the gallery
  isMacro?: boolean;
  altText: string;
}

const ASSETS_DIR = path.resolve(process.cwd(), "assets-original");
const OUTPUT_DIR = path.resolve(process.cwd(), "public/images/products");

const WIDTHS = [480, 960, 1600];

// Define tasks for all 4 products
const IMAGE_TASKS: ImageTask[] = [
  // ==========================================
  // 1. REVERSIBLE BELT (reversible-formal-casual-belt)
  // ==========================================
  {
    productSlug: "reversible-formal-casual-belt",
    viewName: "hero",
    sourceFile: "belt-hero-black.jpg",
    altText: "Dino Leathers Executive Ratchet Belt with brushed silver buckle in Jet Black coiled on travertine pedestal",
  },
  {
    productSlug: "reversible-formal-casual-belt",
    viewName: "angle-lifestyle",
    sourceFile: "belt-variation-cognac.jpg",
    altText: "Dino Leathers Executive Belt in rich Ambur Cognac Tan leather variation coiled on stone pedestal",
  },
  {
    productSlug: "reversible-formal-casual-belt",
    viewName: "hardware-mechanism",
    sourceFile: "belt-track-mechanism.jpg",
    altText: "Close-up of innovative 32-notch micro-ratchet track mechanism and automatic quick-release lever",
  },
  {
    productSlug: "reversible-formal-casual-belt",
    viewName: "giftbox-display",
    sourceFile: "belt-giftbox-display.jpg",
    altText: "Handcrafted matte black and walnut gift box unboxing display with certificate of authenticity",
  },
  {
    productSlug: "reversible-formal-casual-belt",
    viewName: "worn-lifestyle",
    sourceFile: "belt-worn-lifestyle.jpg",
    altText: "Dino Leathers belt styled on formal tailored trousers and crisp collared shirt",
  },
  {
    productSlug: "reversible-formal-casual-belt",
    viewName: "macro-grain",
    sourceFile: "belt-buckle-macro.jpg",
    isMacro: true,
    altText: "High-definition macro texture of brushed steel buckle and full-grain Ambur bovine leather",
  },

  // ==========================================
  // 2. BI-FOLD WALLET (classic-bifold-coin-wallet)
  // ==========================================
  {
    productSlug: "classic-bifold-coin-wallet",
    viewName: "hero",
    sourceFile: "PNG Levi's brand and colour variations.jpg",
    // Focus on center & right wallets (Espresso Black & Ambur Tan)
    crop: { left: 340, top: 140, width: 1100, height: 740 },
    altText: "Dino Leathers Classic Bi-Fold Coin Wallet in handcrafted Ambur Tan and Espresso Black",
  },
  {
    productSlug: "classic-bifold-coin-wallet",
    viewName: "tan-display",
    sourceFile: "PNG Levi's brand and colour variations.jpg",
    // Focus on the rightmost Ambur Tan wallet in gift box
    crop: { left: 950, top: 140, width: 630, height: 680 },
    altText: "Ambur Tan Full-Grain Bovine Bi-Fold Wallet seated in handcrafted wooden presentation box",
  },
  {
    productSlug: "classic-bifold-coin-wallet",
    viewName: "interior-passcase",
    sourceFile: "PNG Tommy Hilfiger variation premium quality.jpg",
    // Focus on wallet flip flap and card slots
    crop: { left: 160, top: 40, width: 750, height: 800 },
    altText: "Interior layout of Bi-Fold Wallet showing vertical passcase card flap and currency lining",
  },
  {
    productSlug: "classic-bifold-coin-wallet",
    viewName: "macro-grain",
    sourceFile: "PNG Tommy Hilfiger variation premium quality.jpg",
    // Close-up on the rich leather grain texture of the front flap
    crop: { left: 160, top: 400, width: 480, height: 480 },
    isMacro: true,
    altText: "Macro shot of natural uncorrected grain pores and reinforced bonded saddle-stitching",
  },

  // ==========================================
  // 3. SLIM RFID CARDHOLDER (minimalist-slim-rfid-cardholder)
  // ==========================================
  {
    productSlug: "minimalist-slim-rfid-cardholder",
    viewName: "hero",
    sourceFile: "PNG 2 HAWK Wings colour varies.jpg",
    // Center focus on the two slim cardholders (Tan and Black)
    crop: { left: 400, top: 40, width: 1150, height: 840 },
    altText: "Dino Leathers Minimalist Slim RFID Cardholder with quick-draw card sleeves in Tan and Black",
  },
  {
    productSlug: "minimalist-slim-rfid-cardholder",
    viewName: "tan-sleeve",
    sourceFile: "PNG 2 HAWK Wings colour varies.jpg",
    // Focus on the bottom-right Tan cardholder
    crop: { left: 420, top: 490, width: 680, height: 400 },
    altText: "Crazy Horse Tan Slim RFID Cardholder showing horizontal precision-cut card slots",
  },
  {
    productSlug: "minimalist-slim-rfid-cardholder",
    viewName: "black-interior",
    sourceFile: "PNG 2 HAWK Wings colour varies.jpg",
    // Focus on the top-right Black cardholder
    crop: { left: 430, top: 50, width: 680, height: 420 },
    altText: "Deep Espresso Black Slim RFID Cardholder with multi-slot card arrangement",
  },
  {
    productSlug: "minimalist-slim-rfid-cardholder",
    viewName: "macro-grain",
    sourceFile: "PNG 2 HAWK Wings colour varies.jpg",
    // Close up on the oil-waxed bovine leather surface
    crop: { left: 430, top: 520, width: 380, height: 360 },
    isMacro: true,
    altText: "Macro close-up of wax-infused Crazy Horse bovine leather grain and hand-burnished edges",
  },

  // ==========================================
  // 4. 2-IN-1 GIFT BOX (ambur-heritage-2in1-gift-box)
  // ==========================================
  {
    productSlug: "ambur-heritage-2in1-gift-box",
    viewName: "hero",
    sourceFile: "PNG tommy Hilfiger with quality wooden box.jpg",
    // Full view of both wooden gift presentation boxes
    crop: { left: 40, top: 100, width: 1520, height: 780 },
    altText: "Ambur Heritage 2-in-1 Executive Gift Set in rigid wooden keepsake packaging boxes",
  },
  {
    productSlug: "ambur-heritage-2in1-gift-box",
    viewName: "unboxing-tan",
    sourceFile: "PNG tommy Hilfiger with quality wooden box.jpg",
    // Focus on the Tan wallet in the open wooden box
    crop: { left: 50, top: 120, width: 730, height: 750 },
    altText: "Luxury unboxing view of Ambur Tan leather goods enclosed in natural timber keepsake box",
  },
  {
    productSlug: "ambur-heritage-2in1-gift-box",
    viewName: "unboxing-black",
    sourceFile: "PNG tommy Hilfiger with quality wooden box.jpg",
    // Focus on Black wallet in open box
    crop: { left: 520, top: 120, width: 730, height: 750 },
    altText: "Midnight Onyx leather goods presented in custom magnetic-closure gift packaging",
  },
  {
    productSlug: "ambur-heritage-2in1-gift-box",
    viewName: "macro-packaging",
    sourceFile: "PNG tommy Hilfiger with quality wooden box.jpg",
    // Detail on the wood grain of the lid and leather texture
    crop: { left: 100, top: 330, width: 500, height: 500 },
    isMacro: true,
    altText: "Detail of artisan wooden keepsake gift box construction and premium leather corner finish",
  },
];

interface GeneratedAssetMeta {
  productSlug: string;
  viewName: string;
  isMacro: boolean;
  altText: string;
  squareImages: {
    width: number;
    webp: string;
    jpg: string;
    sizeWebp: number;
    sizeJpg: number;
  }[];
  cardImages: {
    width: number;
    webp: string;
    jpg: string;
    sizeWebp: number;
    sizeJpg: number;
  }[];
  blurDataUrl: string;
}

async function run() {
  console.log("Starting Dino Leathers Image Optimization Pipeline...\n");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const results: GeneratedAssetMeta[] = [];
  let totalInputBytes = 0;
  let totalOutputBytes = 0;

  for (const task of IMAGE_TASKS) {
    const srcPath = path.join(ASSETS_DIR, task.sourceFile);
    if (!fs.existsSync(srcPath)) {
      console.error(`Missing source file: ${srcPath}`);
      continue;
    }

    const srcStat = fs.statSync(srcPath);
    totalInputBytes += srcStat.size;

    const prodDir = path.join(OUTPUT_DIR, task.productSlug);
    if (!fs.existsSync(prodDir)) {
      fs.mkdirSync(prodDir, { recursive: true });
    }

    console.log(`Processing [${task.productSlug}] -> view: ${task.viewName}...`);

    // Sharp strips EXIF, GPS, and device metadata by default unless .keepMetadata() is invoked
    let baseSharp = sharp(srcPath);

    // Apply crop if specified
    if (task.crop) {
      baseSharp = baseSharp.extract(task.crop);
    }

    // Light, elegant exposure normalization (preserves natural hues without harsh shifts)
    baseSharp = baseSharp.modulate({
      brightness: 1.02,
      saturation: 1.03,
    });

    const assetMeta: GeneratedAssetMeta = {
      productSlug: task.productSlug,
      viewName: task.viewName,
      isMacro: !!task.isMacro,
      altText: task.altText,
      squareImages: [],
      cardImages: [],
      blurDataUrl: "",
    };

    // 1. Generate 1:1 Gallery images (widths: 480, 960, 1600)
    for (const w of WIDTHS) {
      const h = w; // 1:1
      const webpName = `${task.productSlug}-${task.viewName}-1x1-${w}.webp`;
      const jpgName = `${task.productSlug}-${task.viewName}-1x1-${w}.jpg`;

      const webpPath = path.join(prodDir, webpName);
      const jpgPath = path.join(prodDir, jpgName);

      // WebP
      const webpBuffer = await baseSharp
        .clone()
        .resize(w, h, { fit: "cover", position: "centre" })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuffer);
      totalOutputBytes += webpBuffer.length;

      // JPEG fallback
      const jpgBuffer = await baseSharp
        .clone()
        .resize(w, h, { fit: "cover", position: "centre" })
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(jpgPath, jpgBuffer);
      totalOutputBytes += jpgBuffer.length;

      assetMeta.squareImages.push({
        width: w,
        webp: `/images/products/${task.productSlug}/${webpName}`,
        jpg: `/images/products/${task.productSlug}/${jpgName}`,
        sizeWebp: webpBuffer.length,
        sizeJpg: jpgBuffer.length,
      });
    }

    // 2. Generate 4:5 Card images (widths: 480, 960, 1600 -> heights: 600, 1200, 2000)
    for (const w of WIDTHS) {
      const h = Math.round((w * 5) / 4); // 4:5 aspect ratio
      const webpName = `${task.productSlug}-${task.viewName}-4x5-${w}.webp`;
      const jpgName = `${task.productSlug}-${task.viewName}-4x5-${w}.jpg`;

      const webpPath = path.join(prodDir, webpName);
      const jpgPath = path.join(prodDir, jpgName);

      // WebP
      const webpBuffer = await baseSharp
        .clone()
        .resize(w, h, { fit: "cover", position: "centre" })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuffer);
      totalOutputBytes += webpBuffer.length;

      // JPEG fallback
      const jpgBuffer = await baseSharp
        .clone()
        .resize(w, h, { fit: "cover", position: "centre" })
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(jpgPath, jpgBuffer);
      totalOutputBytes += jpgBuffer.length;

      assetMeta.cardImages.push({
        width: w,
        webp: `/images/products/${task.productSlug}/${webpName}`,
        jpg: `/images/products/${task.productSlug}/${jpgName}`,
        sizeWebp: webpBuffer.length,
        sizeJpg: jpgBuffer.length,
      });
    }

    // 3. Generate micro blur placeholder (16x16 WebP base64 data URI)
    const blurBuffer = await baseSharp
      .clone()
      .resize(16, 16, { fit: "cover" })
      .webp({ quality: 25 })
      .toBuffer();
    assetMeta.blurDataUrl = `data:image/webp;base64,${blurBuffer.toString("base64")}`;

    results.push(assetMeta);
  }

  // 4. Save metadata and blur map to src/data/product-images.ts
  const tsContent = `// Auto-generated by scripts/optimize-images.ts
// Do not edit manually. Re-run \`npm run optimize-images\` to regenerate.

export interface ProductImageAsset {
  productSlug: string;
  viewName: string;
  isMacro: boolean;
  altText: string;
  squareImages: {
    width: number;
    webp: string;
    jpg: string;
    sizeWebp: number;
    sizeJpg: number;
  }[];
  cardImages: {
    width: number;
    webp: string;
    jpg: string;
    sizeWebp: number;
    sizeJpg: number;
  }[];
  blurDataUrl: string;
}

export const PRODUCT_IMAGE_REGISTRY: Record<string, ProductImageAsset[]> = ${JSON.stringify(
    results.reduce((acc, curr) => {
      if (!acc[curr.productSlug]) {
        acc[curr.productSlug] = [];
      }
      acc[curr.productSlug].push(curr);
      return acc;
    }, {} as Record<string, GeneratedAssetMeta[]>),
    null,
    2
  )};

/**
 * Returns gallery image angles ordered so that macro shots appear strictly LAST.
 */
export function getProductGalleryAssets(productSlug: string): ProductImageAsset[] {
  const assets = PRODUCT_IMAGE_REGISTRY[productSlug] || [];
  const regular = assets.filter((a) => !a.isMacro);
  const macro = assets.filter((a) => a.isMacro);
  return [...regular, ...macro];
}
`;

  fs.writeFileSync(path.resolve(process.cwd(), "src/data/product-images.ts"), tsContent, "utf-8");
  console.log(`\nGenerated src/data/product-images.ts with full placeholder registry.`);

  console.log(`\n======================================================`);
  console.log(`Optimization Pipeline Complete!`);
  console.log(`Total source images processed: ${IMAGE_TASKS.length}`);
  console.log(`Total input bytes read: ${(totalInputBytes / 1024).toFixed(1)} KB`);
  console.log(`Total optimized bytes generated (all sizes + fallbacks): ${(totalOutputBytes / 1024).toFixed(1)} KB`);
  console.log(`======================================================\n`);
}

run().catch((err) => {
  console.error("Optimization failed:", err);
  process.exit(1);
});
