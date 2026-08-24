import {
  Merge,
  Split,
  Minimize2,
  RotateCw,
  FileImage,
  Unlock,
  Lock,
  Layers,
  Stamp,
  FileSignature,
  Type,
  FileText,
  FileUp,
  FileDown,
  ScanLine,
  Zap,
  Shield,
  HelpCircle,
  Wrench,
  Scissors,
  Trash2,
  GripVertical,
  Copy,
  PlusCircle,
  Globe,
  BookOpen,
  ImagePlus,
  Table as TableIcon,
  Presentation,
} from "lucide-react";

// Glass-style icon tints per FILE TYPE (like iLovePDF's per-tool coloring,
// but translucent/blurred instead of flat solid blocks)
const glass = {
  orange: "border-orange-200/70 bg-orange-50/80 text-orange-600",
  green: "border-emerald-200/70 bg-emerald-50/80 text-emerald-600",
  blue: "border-blue-200/70 bg-blue-50/80 text-blue-600",
  purple: "border-purple-200/70 bg-purple-50/80 text-purple-600",
  yellow: "border-amber-200/70 bg-amber-50/80 text-amber-600",
};

export const toolCategories = [
  { id: "all", label: "All" },
  { id: "organize", label: "Organize PDF" },
  { id: "optimize", label: "Optimize PDF" },
  { id: "convert", label: "Convert PDF" },
  { id: "edit", label: "Edit PDF" },
  { id: "security", label: "PDF Security" },
  { id: "intelligence", label: "PDF Intelligence" },
];

// Order follows iLovePDF's tool grid first (for a familiar layout), then
// any PagePuff-only tools that don't have an iLovePDF equivalent are
// appended at the end.
export const tools = [
  // ---- matches iLovePDF order ----
  { title: "Merge PDF", description: "Combine two or more PDF files into a single document, in the exact order you choose", icon: Merge, href: "/merge-pdf", category: "organize", iconColor: glass.orange, featured: true },
  { title: "Split PDF", description: "Break one PDF into multiple smaller files, or pull out just the pages you need", icon: Split, href: "/split-pdf", category: "organize", iconColor: glass.orange, featured: true },
  { title: "Compress PDF", description: "Shrink a large PDF down to a smaller file size while keeping it easy to read", icon: Minimize2, href: "/compress-pdf", category: "optimize", iconColor: glass.green, featured: true },
  { title: "PDF to Word", description: "Turn a PDF into an editable Word document you can open and change in Microsoft Word", icon: FileText, href: "/pdf-to-word", category: "convert", iconColor: glass.blue, featured: true },
  { title: "PDF to PowerPoint", description: "Turn a PDF into an editable PowerPoint slideshow you can present or update", icon: Presentation, href: "/pdf-to-powerpoint", category: "convert", iconColor: glass.orange },
  { title: "PDF to Excel", description: "Pull tables and data out of a PDF into an editable Excel spreadsheet", icon: FileDown, href: "/pdf-to-excel", category: "convert", iconColor: glass.green },
  { title: "Word to PDF", description: "Turn a Word document into a PDF that looks the same on every device", icon: FileUp, href: "/word-to-pdf", category: "convert", iconColor: glass.blue, featured: true },
  { title: "PowerPoint to PDF", description: "Turn a PowerPoint slideshow into a PDF you can share or print easily", icon: Presentation, href: "/powerpoint-to-pdf", category: "convert", iconColor: glass.orange },
  { title: "Excel to PDF", description: "Turn an Excel spreadsheet into a clean, print-ready PDF", icon: TableIcon, href: "/excel-to-pdf", category: "convert", iconColor: glass.green },
  { title: "Edit PDF", description: "Add or change text, images, and shapes directly inside a PDF - no extra software needed", icon: Type, href: "/edit-pdf", category: "edit", iconColor: glass.purple },
  { title: "PDF to JPG", description: "Save each page of a PDF as a JPG image, or pull out the images already inside it", icon: FileImage, href: "/pdf-to-jpg", category: "convert", iconColor: glass.green },
  { title: "JPG to PDF", description: "Turn one or more photos or images into a single PDF file", icon: ImagePlus, href: "/jpg-to-pdf", category: "convert", iconColor: glass.yellow, featured: true },
  { title: "Sign PDF", description: "Draw, type, or upload your signature and place it anywhere on a PDF", icon: FileSignature, href: "/sign-pdf", category: "edit", iconColor: glass.blue },
  { title: "Watermark", description: "Stamp your PDF with a text watermark, like a logo, name, or \"confidential\" label", icon: Stamp, href: "/watermark-pdf", category: "edit", iconColor: glass.purple },
  { title: "Rotate PDF", description: "Fix pages that are sideways or upside-down by rotating them to the correct angle", icon: RotateCw, href: "/rotate-pdf", category: "organize", iconColor: glass.purple },
  { title: "HTML to PDF", description: "Turn any webpage into a saved, shareable PDF file", icon: Globe, href: "/html-to-pdf", category: "convert", iconColor: glass.yellow },
  { title: "Unlock PDF", description: "Remove a password from a PDF so you (and others) can open it freely", icon: Unlock, href: "/unlock-pdf", category: "security", iconColor: glass.blue },
  { title: "Protect PDF", description: "Add a password to a PDF so only people you trust can open it", icon: Lock, href: "/protect-pdf", category: "security", iconColor: glass.blue },
  { title: "Organize PDF", description: "Drag pages into a new order, delete pages, or rearrange your document however you like", icon: Layers, href: "/organize-pdf", category: "organize", iconColor: glass.orange },
  { title: "Repair PDF", description: "Fix a PDF that won't open properly and recover as much of its content as possible", icon: Wrench, href: "/repair-pdf", category: "optimize", iconColor: glass.green },
  { title: "OCR PDF", description: "Turn a scanned document or image-only PDF into text you can search, copy, and edit", icon: ScanLine, href: "/ocr-pdf", category: "intelligence", iconColor: glass.green },

  // ---- PagePuff-only tools (no iLovePDF equivalent) - appended at the end ----
  { title: "Extract Pages", description: "Pull out just the pages you need from a PDF and save them as their own file", icon: Scissors, href: "/extract-pages", category: "organize", iconColor: glass.orange },
  { title: "Delete Pages", description: "Remove unwanted pages from a PDF and download the cleaned-up version", icon: Trash2, href: "/delete-pages", category: "organize", iconColor: glass.orange },
  { title: "Reorder Pages", description: "Drag and drop to change the order pages appear in your PDF", icon: GripVertical, href: "/reorder-pages", category: "organize", iconColor: glass.orange },
  { title: "Duplicate Pages", description: "Make a copy of one or more pages within the same PDF document", icon: Copy, href: "/duplicate-pages", category: "organize", iconColor: glass.orange },
  { title: "Insert Pages", description: "Add pages from a different PDF into your document at exactly the spot you want", icon: PlusCircle, href: "/insert-pages", category: "organize", iconColor: glass.orange },
  { title: "PDF to HTML", description: "Turn a PDF's content into an HTML webpage file", icon: Globe, href: "/pdf-to-html", category: "convert", iconColor: glass.yellow },
  { title: "Text to PDF", description: "Turn plain text into a formatted, ready-to-share PDF", icon: FileText, href: "/text-to-pdf", category: "convert", iconColor: glass.blue },
  { title: "PDF to Text", description: "Pull the plain text out of a PDF so you can copy, search, or reuse it", icon: FileText, href: "/pdf-to-text", category: "convert", iconColor: glass.blue },
  { title: "EPUB to PDF", description: "Turn an EPUB e-book into a PDF you can read on any device", icon: BookOpen, href: "/epub-to-pdf", category: "convert", iconColor: glass.blue },
  { title: "PDF to EPUB", description: "Turn a PDF into an EPUB e-book file for your favorite e-reader app", icon: BookOpen, href: "/pdf-to-epub", category: "convert", iconColor: glass.blue },
  { title: "Edit Metadata", description: "Change a PDF's title, author, and other hidden details stored inside the file", icon: FileText, href: "/edit-metadata", category: "intelligence", iconColor: glass.purple },
];

export const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Your files are ready in seconds, no waiting around",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your files never leave your device - nothing is ever uploaded anywhere",
  },
  {
    icon: Globe,
    title: "Works Anywhere",
    description: "Use it on your phone, tablet, or computer - any browser, anytime",
  },
];

export const stats = [
  { value: "Secure", label: "Local Processing" },
  { value: "Fast", label: "Optimized Engine" },
  { value: "0", label: "Data Stored" },
  { value: "Free", label: "Accessibility" },
];

export const aboutSocials = [
  {
    name: "GitHub",
    href: "#",
    label: "GitHub",
    color: "hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300",
  },
];

export const aboutSkills = [
  { label: "Game Development", detail: "Unity & C#" },
  { label: "Web Development", detail: "Full-Stack Apps" },
  { label: "App Development", detail: "Cross-Platform" },
  { label: "Digital Creation", detail: "UI/UX Design" },
];

export const contactMethods = [
  {
    name: "GitHub",
    description: "Bug reports & contributions",
    value: "GitHub",
    href: "#",
    color: "hover:bg-gray-100 hover:border-gray-300",
  },
];

export const contactFaqs = [
  {
    q: "How quickly will I get a response?",
    a: "I typically respond within 24-48 hours for email inquiries. For urgent matters, Twitter/X DMs usually get faster responses.",
  },
  {
    q: "Can I request new features?",
    a: "Absolutely! I love hearing feature suggestions. Send them via email or create an issue on GitHub.",
  },
  {
    q: "Is PagePuff open source?",
    a: "The core functionality uses open-source libraries. For full source access or collaboration opportunities, please reach out directly.",
  },
];

export const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is PagePuff?",
        answer:
          "PagePuff is a free online tool that lets you work with PDF files directly in your browser. You can merge, split, compress, convert, rotate, and edit PDFs without uploading them to any server. All processing happens locally on your device for maximum privacy and speed.",
      },
      {
        question: "Is PagePuff really free?",
        answer:
          "Yes, PagePuff is completely free to use with no hidden costs. All features are available at no charge. We sustain the service through non-intrusive advertising. There are no premium tiers, file limits, or watermarks on your documents.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No account is required to use any of our PDF tools. You can optionally sign in with Google to keep a history of your actions across sessions, but this is completely optional. All core features work without signing in.",
      },
      {
        question: "What file size limits are there?",
        answer:
          "Since all processing happens in your browser, file limits depend on your device's available memory. Most modern devices can handle files up to 100MB without issues. For very large files (100MB+), performance may vary based on your device.",
      },
      {
        question: "What browsers are supported?",
        answer:
          "PagePuff works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version of your browser for the best experience. Mobile browsers are also fully supported.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    faqs: [
      {
        question: "Are my files uploaded to your servers?",
        answer:
          "No, your files are NEVER uploaded to our servers. All PDF processing happens entirely in your web browser using JavaScript. This means your sensitive documents never leave your device, ensuring complete privacy and security.",
      },
      {
        question: "Is PagePuff safe to use for sensitive documents?",
        answer:
          "Yes, PagePuff is extremely safe for sensitive documents. Since we process everything locally in your browser, confidential information like contracts, financial documents, or personal records never leave your computer. Your data stays on your device.",
      },
      {
        question: "What happens to my files after processing?",
        answer:
          "Your files exist only in your browser's memory while you're using the tool. When you close the tab or navigate away, all file data is automatically cleared. We don't store, cache, or have any access to your documents.",
      },
      {
        question: "Do you use cookies?",
        answer:
          "We use minimal cookies for essential functionality (like remembering theme preferences) and analytics to improve our service. We also use Google AdSense cookies for advertising. You can manage cookie preferences through your browser settings.",
      },
    ],
  },
  {
    title: "PDF Tools",
    icon: FileText,
    faqs: [
      {
        question: "How do I merge multiple PDFs?",
        answer:
          "Go to the Merge PDF tool, drag and drop your PDF files or click to browse and select them. You can reorder files by dragging them into your preferred order. You can also expand each file to see pages, rotate or remove specific pages. When ready, click 'Merge & Download' to combine them into a single PDF.",
      },
      {
        question: "How do I split a PDF into multiple files?",
        answer:
          "Use the Split PDF tool. Upload your PDF, then choose how to split: by specific page ranges (e.g., '1-5, 8-10'), extract all pages as separate files, or select specific pages visually. Click 'Split PDF' to process and download your split files.",
      },
      {
        question: "How does PDF compression work?",
        answer:
          "Our compression tool optimizes your PDF by removing redundant data, optimizing images, and streamlining the file structure. The compression maintains document quality while reducing file size, typically achieving 30-70% size reduction depending on the original file's content.",
      },
      {
        question: "Can I convert scanned PDFs to editable text?",
        answer:
          "Yes! Our OCR (Optical Character Recognition) tool can extract text from scanned documents and image-based PDFs. Upload your scanned PDF, and our tool will process it to extract readable, searchable text. The accuracy depends on the scan quality.",
      },
      {
        question: "How do I add a password to my PDF?",
        answer:
          "Use the Protect PDF tool. Upload your PDF, enter your desired password, and optionally set permissions (like preventing printing or copying). The tool will encrypt your PDF with industry-standard AES encryption.",
      },
      {
        question: "What image formats can I convert to PDF?",
        answer:
          "Our JPG to PDF tool supports JPG, JPEG, PNG, and other common image formats. You can upload multiple images and combine them into a single PDF, or convert each image to its own PDF file.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    icon: Zap,
    faqs: [
      {
        question: "Why is processing taking a long time?",
        answer:
          "Processing time depends on your file size and your device's capabilities. Large PDFs with many pages or high-resolution images take longer. If processing seems stuck, try refreshing the page and using a smaller file, or try on a device with more RAM.",
      },
      {
        question: "Why can't I upload my PDF?",
        answer:
          "Make sure your file has a .pdf extension and is a valid PDF document. Some PDFs may be corrupted or use unsupported features. If the file opens in other PDF readers, try saving it as a new PDF and uploading the new copy.",
      },
      {
        question: "The output PDF looks different from the original",
        answer:
          "PDF processing can sometimes affect formatting, especially for complex documents with special fonts or interactive elements. For best results, use source PDFs that are print-ready. If you're having issues, try using a different tool or contact us.",
      },
      {
        question: "My protected PDF won't unlock",
        answer:
          "Our unlock tool can only remove restrictions (like no-printing) from PDFs. If the PDF requires a password to open (fully encrypted), you'll need to enter the correct password. We cannot bypass password protection without the password.",
      },
      {
        question: "The download didn't start",
        answer:
          "Check if your browser is blocking downloads or pop-ups. Try using a different browser. If the issue persists, make sure you have enough disk space and try right-clicking the download button and selecting 'Save As'.",
      },
    ],
  },
];
