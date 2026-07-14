import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let sharp = null;
let PDFDocument = null;
try {
  sharp = require("sharp");
} catch {
  // SVG files remain available when Sharp is not installed.
}
try {
  ({ PDFDocument } = require("pdf-lib"));
} catch {
  // PNG and SVG files remain available when pdf-lib is not installed.
}

const [, , configPathArg, outputPathArg] = process.argv;
if (!configPathArg || !outputPathArg) {
  console.error("Usage: node render-carousel.mjs <config.json> <output-directory>");
  process.exit(1);
}

const configPath = path.resolve(configPathArg);
const outputPath = path.resolve(outputPathArg);
const config = JSON.parse(await fs.readFile(configPath, "utf8"));

const C = {
  sage: "#7D8965",
  sand: "#E7D9C5",
  white: "#F5EEDF",
  ink: "#414735",
  ...(config.palette ?? {}),
};
const serif = "Iowan Old Style, Georgia, serif";
const sans = "Avenir Next, Arial, sans-serif";

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function color(value) {
  return C[value] ?? value;
}

function textLines(values, options) {
  const {
    x, y, size, ink, family = serif, weight = 600, gap = 1.05, tracking = -1,
  } = options;
  const tspans = values.map((value, index) => (
    `<tspan x="${x}" dy="${index === 0 ? 0 : Math.round(size * gap)}">${esc(value)}</tspan>`
  )).join("");
  return `<text x="${x}" y="${y}" fill="${color(ink)}" font-family="${family}" font-size="${size}" font-weight="${weight}" letter-spacing="${tracking}">${tspans}</text>`;
}

function meta(slide, ink) {
  return `
    <text x="72" y="78" fill="${ink}" font-family="${sans}" font-size="19" font-weight="600" letter-spacing="3.8">POWER WITHIN · ${esc(config.brand.episode)}</text>
    <text x="1008" y="78" text-anchor="end" fill="${ink}" font-family="${sans}" font-size="19" letter-spacing="3">${esc(slide.number)} / ${String(config.slides.length).padStart(2, "0")}</text>
  `;
}

function footer(ink) {
  return `
    <line x1="72" y1="1260" x2="244" y2="1260" stroke="${ink}" stroke-width="2" opacity="0.72"/>
    <text x="72" y="1302" fill="${ink}" font-family="${sans}" font-size="20" letter-spacing="2">${esc(config.brand.series)}</text>
  `;
}

function artwork(name) {
  const art = {
    rings: `
      <g fill="none" stroke="${C.sage}" stroke-linecap="round">
        <path d="M 1180 302 A 566 566 0 1 1 548 1282" stroke-width="34"/>
        <path d="M 1088 454 A 418 418 0 1 1 654 1178" stroke-width="11" opacity="0.92"/>
        <path d="M 1016 582 A 286 286 0 1 1 760 1062" stroke-width="4" opacity="0.72"/>
      </g>
      <path d="M 962 660 C 884 716 868 816 910 900 C 940 960 984 998 1038 1024 C 1016 956 1022 894 1050 832 C 1080 764 1050 700 962 660 Z" fill="${C.white}"/>
    `,
    "open-edge": `
      <path d="M 1138 528 C 1018 592 998 724 1054 826 C 1082 878 1116 910 1160 934" fill="none" stroke="${C.sand}" stroke-width="18" stroke-linecap="round"/>
      <path d="M -92 1048 A 390 390 0 0 1 350 1268" fill="none" stroke="${C.white}" stroke-width="8" stroke-linecap="round" opacity="0.68"/>
    `,
    silence: `
      <g fill="none" stroke="${C.sage}" stroke-linecap="round">
        <path d="M 248 820 A 294 294 0 1 1 824 820" stroke-width="24"/>
        <path d="M 328 812 A 214 214 0 1 1 744 812" stroke-width="6" opacity="0.7"/>
      </g>
      <line x1="508" y1="512" x2="572" y2="512" stroke="${C.sand}" stroke-width="8" stroke-linecap="round"/>
    `,
    meeting: `
      <g fill="none" stroke-linecap="round">
        <path d="M 88 856 C 90 624 234 520 454 620" stroke="${C.sage}" stroke-width="24"/>
        <path d="M 992 856 C 990 624 846 520 626 620" stroke="${C.white}" stroke-width="24"/>
      </g>
      <line x1="474" y1="620" x2="606" y2="620" stroke="${C.ink}" stroke-width="2" opacity="0.28"/>
      <circle cx="540" cy="620" r="15" fill="${C.white}"/>
    `,
    path: `
      <path d="M 112 662 C 292 470 438 474 540 630 C 646 790 790 780 968 584" fill="none" stroke="${C.sand}" stroke-width="26" stroke-linecap="round"/>
      <path d="M 136 704 C 306 552 432 554 522 680 C 626 826 766 844 942 662" fill="none" stroke="${C.white}" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <circle cx="112" cy="662" r="15" fill="${C.white}"/>
      <circle cx="968" cy="584" r="15" fill="${C.white}"/>
    `,
    compass: `
      <g transform="translate(814 828)" fill="none" stroke-linecap="round">
        <circle r="252" stroke="${C.sage}" stroke-width="24" stroke-dasharray="980 610" transform="rotate(-34)"/>
        <circle r="188" stroke="${C.white}" stroke-width="6" stroke-dasharray="690 492" transform="rotate(20)" opacity="0.9"/>
        <path d="M -38 72 L 22 -82 L 68 -128 L 48 -54 L -38 72 Z" fill="${C.sage}" stroke="none"/>
        <circle r="14" fill="${C.white}" stroke="none"/>
      </g>
    `,
    fork: `
      <g fill="none" stroke-linecap="round">
        <path d="M 540 1168 C 540 1030 540 918 540 820 C 528 748 454 706 358 660 C 276 620 214 572 164 520" stroke="${C.white}" stroke-width="18"/>
        <path d="M 540 820 C 566 742 652 700 746 650 C 824 608 886 558 932 506" stroke="${C.sand}" stroke-width="18"/>
      </g>
      <circle cx="540" cy="820" r="14" fill="${C.white}"/>
    `,
    wave: `
      <g fill="none" stroke-linecap="round">
        <path d="M 62 770 C 232 566 398 562 542 732 C 682 896 830 890 1018 650" stroke="${C.sage}" stroke-width="30"/>
        <path d="M 90 814 C 254 650 388 644 518 786 C 658 936 810 944 990 730" stroke="${C.sand}" stroke-width="7" opacity="0.95"/>
      </g>
      <path d="M 516 744 L 610 770" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" opacity="0.62"/>
      <circle cx="540" cy="750" r="13" fill="${C.white}"/>
    `,
    breath: `
      <g transform="translate(540 790)" fill="none" stroke-linecap="round">
        <path d="M -344 0 C -230 -148 -94 -148 0 0 C 94 148 230 148 344 0" stroke="${C.sage}" stroke-width="20"/>
        <path d="M -276 0 C -184 -94 -72 -94 0 0 C 72 94 184 94 276 0" stroke="${C.white}" stroke-width="7" opacity="0.9"/>
        <circle r="13" fill="${C.ink}" stroke="none" opacity="0.56"/>
      </g>
    `,
    "inner-compass": `
      <g transform="translate(780 648)" fill="none" stroke-linecap="round">
        <circle r="190" stroke="${C.sand}" stroke-width="22" stroke-dasharray="760 434" transform="rotate(-38)"/>
        <circle r="126" stroke="${C.white}" stroke-width="6" stroke-dasharray="455 337" transform="rotate(28)" opacity="0.92"/>
        <path d="M -24 50 L 18 -62 L 48 -96 L 32 -38 L -24 50 Z" fill="${C.white}" stroke="none"/>
        <circle r="11" fill="${C.sand}" stroke="none"/>
      </g>
    `,
    separation: `
      <g fill="none" stroke-linecap="round">
        <path d="M 540 1090 C 520 960 472 864 370 790 C 304 742 258 696 220 650" stroke="${C.sage}" stroke-width="24"/>
        <path d="M 540 1090 C 560 960 608 864 710 790 C 776 742 822 696 860 650" stroke="${C.white}" stroke-width="10" opacity="0.94"/>
      </g>
      <circle cx="540" cy="1090" r="14" fill="${C.sand}"/>
    `,
    dilution: `
      <g transform="translate(540 800)" fill="none" stroke-linecap="round">
        <path d="M -258 -220 L -218 244 C -208 330 208 330 218 244 L 258 -220" stroke="${C.sage}" stroke-width="18"/>
        <path d="M -230 72 C -124 18 -42 122 48 74 C 142 24 186 72 230 54" stroke="${C.ink}" stroke-width="34" opacity="0.82"/>
        <path d="M -220 132 C -128 92 -54 176 42 132 C 136 90 178 126 220 114" stroke="${C.sage}" stroke-width="13" opacity="0.86"/>
        <path d="M 0 -330 C -28 -286 -42 -250 0 -224 C 42 -250 28 -286 0 -330 Z" fill="${C.white}" stroke="none"/>
      </g>
    `,
    boundary: `
      <g transform="translate(742 796)" fill="none" stroke-linecap="round">
        <circle r="246" stroke="${C.sage}" stroke-width="24" stroke-dasharray="1260 286" transform="rotate(-42)"/>
        <circle r="160" stroke="${C.white}" stroke-width="7" stroke-dasharray="760 246" transform="rotate(18)" opacity="0.94"/>
        <circle r="15" fill="${C.ink}" stroke="none" opacity="0.58"/>
      </g>
    `,
    none: "",
  };
  return art[name ?? "none"] ?? "";
}

function cta(slide) {
  if (!slide.cta?.length) return "";
  const columnWidth = 468;
  const blocks = slide.cta.slice(0, 2).map((item, index) => {
    const x = 72 + index * columnWidth;
    const labelSize = item.label.length > 20 ? 14 : 19;
    const valueSize = item.value.length > 28 ? 12 : 17;
    return `
      <text x="${x}" y="1134" fill="${C.white}" font-family="${sans}" font-size="${labelSize}" font-weight="700" letter-spacing="${labelSize < 19 ? 0.3 : 1}">${esc(item.label)}</text>
      <text x="${x}" y="1180" fill="${C.sand}" font-family="${sans}" font-size="${valueSize}" font-weight="600" letter-spacing="${valueSize < 17 ? 0 : 0.3}">${esc(item.value)}</text>
    `;
  }).join("");
  return `
    <line x1="72" y1="1076" x2="1008" y2="1076" stroke="${C.sand}" stroke-width="2" opacity="0.66"/>
    ${blocks}
    ${slide.linkInBio ? `<text x="72" y="1262" fill="${C.white}" font-family="${sans}" font-size="17" font-weight="600" letter-spacing="2">LINK IN BIO</text>` : ""}
  `;
}

function renderSlide(slide) {
  const background = color(slide.background);
  const ink = color(slide.ink);
  const titleSize = slide.titleSize ?? (slide.bookend ? 76 : 64);
  const body = slide.body?.length ? textLines(slide.body, {
    x: 72,
    y: slide.bodyY ?? 520,
    size: slide.bodySize ?? 32,
    ink,
    family: sans,
    weight: slide.bodyWeight ?? 450,
    gap: 1.38,
    tracking: 0,
  }) : "";
  const question = slide.question?.length ? textLines(slide.question, {
    x: 72,
    y: slide.questionY ?? 948,
    size: slide.questionSize ?? 40,
    ink: slide.questionInk ?? "sand",
    family: serif,
    weight: 600,
    gap: 1.08,
    tracking: -0.5,
  }) : "";
  const divider = slide.dividerY ? `<line x1="72" y1="${slide.dividerY}" x2="1008" y2="${slide.dividerY}" stroke="${C.sand}" stroke-width="2" opacity="0.66"/>` : "";
  const content = `
    ${meta(slide, ink)}
    ${artwork(slide.art)}
    ${textLines(slide.title, { x: 72, y: slide.titleY ?? 190, size: titleSize, ink })}
    ${divider}
    ${body}
    ${question}
    ${cta(slide)}
    ${slide.cta?.length ? "" : footer(ink)}
  `;
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
    <rect width="1080" height="1350" fill="${background}"/>
    ${content}
  </svg>`;
}

await fs.mkdir(outputPath, { recursive: true });
const pngFiles = [];
for (const slide of config.slides) {
  const svg = renderSlide(slide);
  const svgPath = path.join(outputPath, `${slide.file}.svg`);
  await fs.writeFile(svgPath, svg, "utf8");
  if (sharp) {
    const pngPath = path.join(outputPath, `${slide.file}.png`);
    await sharp(Buffer.from(svg)).png().toFile(pngPath);
    pngFiles.push(pngPath);
  }
}

if (sharp && pngFiles.length) {
  const thumbWidth = 270;
  const thumbHeight = 338;
  const margin = 30;
  const sheetWidth = margin * 3 + thumbWidth * 2;
  const rows = Math.ceil(pngFiles.length / 2);
  const sheetHeight = margin * (rows + 1) + thumbHeight * rows;
  const composites = [];
  for (let index = 0; index < pngFiles.length; index += 1) {
    const input = await sharp(pngFiles[index]).resize({
      width: thumbWidth,
      height: thumbHeight,
      fit: "cover",
    }).png().toBuffer();
    composites.push({
      input,
      left: margin + (index % 2) * (thumbWidth + margin),
      top: margin + Math.floor(index / 2) * (thumbHeight + margin),
    });
  }
  await sharp({
    create: {
      width: sheetWidth,
      height: sheetHeight,
      channels: 3,
      background: C.ink,
    },
  }).composite(composites).png().toFile(path.join(outputPath, "contact-sheet.png"));

  if (PDFDocument) {
    const pdf = await PDFDocument.create();
    for (const pngPath of pngFiles) {
      const png = await pdf.embedPng(await fs.readFile(pngPath));
      const page = pdf.addPage([1080, 1350]);
      page.drawImage(png, { x: 0, y: 0, width: 1080, height: 1350 });
    }
    await fs.writeFile(path.join(outputPath, "linkedin-carousel.pdf"), await pdf.save());
  }
}

console.log(sharp
  ? `Built ${config.slides.length} SVG and PNG slides${PDFDocument ? ", plus LinkedIn PDF" : ""} in ${outputPath}`
  : `Built ${config.slides.length} SVG slides in ${outputPath}. Install Sharp or use another SVG renderer for PNG output.`);
