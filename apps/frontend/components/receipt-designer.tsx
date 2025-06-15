"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Palette,
  Type,
  ImageIcon,
  Save,
  RotateCcw,
  Download,
  Upload,
  Smartphone,
  Monitor,
  Tablet,
  Plus,
  Minus,
  Copy,
  Trash2,
  Undo,
  Redo,
  Grid,
  Settings,
  Layers,
  Star,
  Heart,
  ShoppingCart,
  Coffee,
  Zap,
  Crown,
  Gift,
  Award,
  Target,
  Sparkles,
  Edit3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  FileUp,
  X,
  Maximize,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const colorPresets = [
  {
    name: "REWE Rot",
    primary: "#CC071E",
    secondary: "#FFE5E5",
    accent: "#8B0000",
  },
  {
    name: "Natur Grün",
    primary: "#16a34a",
    secondary: "#dcfce7",
    accent: "#15803d",
  },
  {
    name: "Ocean Blau",
    primary: "#0ea5e9",
    secondary: "#e0f2fe",
    accent: "#0284c7",
  },
  {
    name: "Royal Lila",
    primary: "#9333ea",
    secondary: "#f3e8ff",
    accent: "#7c3aed",
  },
  {
    name: "Sunset Orange",
    primary: "#ea580c",
    secondary: "#fed7aa",
    accent: "#c2410c",
  },
  {
    name: "Elegant Schwarz",
    primary: "#1f2937",
    secondary: "#f3f4f6",
    accent: "#374151",
  },
];

const fontOptions = [
  { name: "Modern Sans", value: "Inter, system-ui, sans-serif", preview: "Aa" },
  { name: "Klassisch Serif", value: "Georgia, serif", preview: "Aa" },
  { name: "Technisch Mono", value: "Courier New, monospace", preview: "Aa" },
  { name: "Elegant Script", value: "Brush Script MT, cursive", preview: "Aa" },
  { name: "Corporate", value: "Arial, sans-serif", preview: "Aa" },
  { name: "Friendly", value: "Comic Sans MS, cursive", preview: "Aa" },
];

const iconLibrary = [
  { name: "Star", icon: Star, category: "general" },
  { name: "Heart", icon: Heart, category: "general" },
  { name: "Shopping Cart", icon: ShoppingCart, category: "shopping" },
  { name: "Coffee", icon: Coffee, category: "food" },
  { name: "Zap", icon: Zap, category: "general" },
  { name: "Crown", icon: Crown, category: "premium" },
  { name: "Gift", icon: Gift, category: "shopping" },
  { name: "Award", icon: Award, category: "premium" },
  { name: "Target", icon: Target, category: "general" },
  { name: "Sparkles", icon: Sparkles, category: "premium" },
];

const layoutTemplates = [
  {
    name: "Klassisch",
    id: "classic",
    description: "Traditionelles Beleg-Layout",
    preview: "📄",
    settings: { padding: 16, borderRadius: 8, showBorder: true },
  },
  {
    name: "Modern",
    id: "modern",
    description: "Minimalistisches Design",
    preview: "✨",
    settings: { padding: 24, borderRadius: 12, showBorder: false },
  },
  {
    name: "Premium",
    id: "premium",
    description: "Luxuriöses Layout mit Akzenten",
    preview: "👑",
    settings: { padding: 20, borderRadius: 16, showBorder: true },
  },
  {
    name: "Kompakt",
    id: "compact",
    description: "Platzsparendes Design",
    preview: "📱",
    settings: { padding: 12, borderRadius: 6, showBorder: false },
  },
];

interface ReceiptElement {
  id: string;
  type: "text" | "logo" | "icon" | "divider" | "qr";
  content: string;
  style: {
    fontSize: number;
    fontWeight: string;
    color: string;
    align: string;
    margin: number;
    bold: boolean;
    italic: boolean;
  };
  position: { x: number; y: number };
  visible: boolean;
}

export function ReceiptDesigner() {
  const [selectedColor, setSelectedColor] = useState(colorPresets[0]);
  const [customColors, setCustomColors] = useState({
    primary: "#CC071E",
    secondary: "#FFE5E5",
    accent: "#8B0000",
  });
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(layoutTemplates[0]);
  const [previewDevice, setPreviewDevice] = useState("smartphone");
  const [zoom, setZoom] = useState([100]);
  const [showGrid, setShowGrid] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Receipt content state with individual toggles
  const [storeName, setStoreName] = useState("REWE Markt");
  const [showStoreName, setShowStoreName] = useState(true);
  const [storeAddress, setStoreAddress] = useState(
    "Berlin Mitte\nFriedrichstraße 123, 10117 Berlin",
  );
  const [showStoreAddress, setShowStoreAddress] = useState(true);
  const [customMessage, setCustomMessage] = useState(
    "Vielen Dank für Ihren Einkauf!",
  );
  const [showCustomMessage, setShowCustomMessage] = useState(true);
  const [footerText, setFooterText] = useState("Powered by QuittMe");
  const [showFooter, setShowFooter] = useState(true);
  const [showDateTime, setShowDateTime] = useState(true);
  const [showTotal, setShowTotal] = useState(true);
  const [showItems, setShowItems] = useState(true);

  // Logo settings
  const [logoUrl, setLogoUrl] = useState("");
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [showLogo, setShowLogo] = useState(true);
  const [logoSize, setLogoSize] = useState(64);
  const [logoAspectRatio, setLogoAspectRatio] = useState<string>("original");
  const [logoPosition, setLogoPosition] = useState<string>("center");
  const [logoMargin, setLogoMargin] = useState(16);

  // Element management
  const [elements, setElements] = useState<ReceiptElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Settings
  const [showQR, setShowQR] = useState(true);
  const [paperWidth, setPaperWidth] = useState(80); // mm
  const [borderRadius, setBorderRadius] = useState(8);
  const [padding, setPadding] = useState(16);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  // Save state to history
  const saveToHistory = () => {
    const currentState = {
      elements,
      customColors,
      selectedFont,
      selectedTemplate,
      storeName,
      showStoreName,
      storeAddress,
      showStoreAddress,
      customMessage,
      showCustomMessage,
      footerText,
      showFooter,
      showDateTime,
      showTotal,
      showItems,
      logoUrl,
      uploadedLogo,
      showLogo,
      logoSize,
      logoAspectRatio,
      logoPosition,
      logoMargin,
      showQR,
      paperWidth,
      borderRadius,
      padding,
    };

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(currentState);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Undo functionality
  const undo = () => {
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1];
      restoreState(previousState);
      setHistoryIndex(historyIndex - 1);
    }
  };

  // Redo functionality
  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      restoreState(nextState);
      setHistoryIndex(historyIndex + 1);
    }
  };

  // Restore state from history
  const restoreState = (state: any) => {
    setElements(state.elements || []);
    setCustomColors(state.customColors || customColors);
    setSelectedFont(state.selectedFont || selectedFont);
    setSelectedTemplate(state.selectedTemplate || selectedTemplate);
    setStoreName(state.storeName || "");
    setShowStoreName(state.showStoreName ?? true);
    setStoreAddress(state.storeAddress || "");
    setShowStoreAddress(state.showStoreAddress ?? true);
    setCustomMessage(state.customMessage || "");
    setShowCustomMessage(state.showCustomMessage ?? true);
    setFooterText(state.footerText || "");
    setShowFooter(state.showFooter ?? true);
    setShowDateTime(state.showDateTime ?? true);
    setShowTotal(state.showTotal ?? true);
    setShowItems(state.showItems ?? true);
    setLogoUrl(state.logoUrl || "");
    setUploadedLogo(state.uploadedLogo || null);
    setShowLogo(state.showLogo ?? true);
    setLogoSize(state.logoSize || 64);
    setLogoAspectRatio(state.logoAspectRatio || "original");
    setLogoPosition(state.logoPosition || "center");
    setLogoMargin(state.logoMargin || 16);
    setShowQR(state.showQR ?? true);
    setPaperWidth(state.paperWidth || 80);
    setBorderRadius(state.borderRadius || 8);
    setPadding(state.padding || 16);
  };

  // Reset to defaults
  const resetToDefaults = () => {
    saveToHistory();
    setElements([]);
    setCustomColors({
      primary: "#CC071E",
      secondary: "#FFE5E5",
      accent: "#8B0000",
    });
    setSelectedFont(fontOptions[0]);
    setSelectedTemplate(layoutTemplates[0]);
    setStoreName("REWE Markt");
    setShowStoreName(true);
    setStoreAddress("Berlin Mitte\nFriedrichstraße 123, 10117 Berlin");
    setShowStoreAddress(true);
    setCustomMessage("Vielen Dank für Ihren Einkauf!");
    setShowCustomMessage(true);
    setFooterText("Powered by QuittMe");
    setShowFooter(true);
    setShowDateTime(true);
    setShowTotal(true);
    setShowItems(true);
    setLogoUrl("");
    setUploadedLogo(null);
    setShowLogo(true);
    setLogoSize(64);
    setLogoAspectRatio("original");
    setLogoPosition("center");
    setLogoMargin(16);
    setShowQR(true);
    setPaperWidth(80);
    setBorderRadius(8);
    setPadding(16);
    setSelectedElement(null);
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      saveToHistory();
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedLogo(result);
        setLogoUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTemplateImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result as string;
          const template = JSON.parse(result);
          saveToHistory();

          if (template.colors) setCustomColors(template.colors);
          if (template.font) setSelectedFont(template.font);
          if (template.template) setSelectedTemplate(template.template);
          if (template.elements) setElements(template.elements);
          if (template.settings) {
            const s = template.settings;
            setStoreName(s.storeName || storeName);
            setShowStoreName(s.showStoreName ?? showStoreName);
            setStoreAddress(s.storeAddress || storeAddress);
            setShowStoreAddress(s.showStoreAddress ?? showStoreAddress);
            setCustomMessage(s.customMessage || customMessage);
            setShowCustomMessage(s.showCustomMessage ?? showCustomMessage);
            setFooterText(s.footerText || footerText);
            setShowFooter(s.showFooter ?? showFooter);
            setShowDateTime(s.showDateTime ?? showDateTime);
            setShowTotal(s.showTotal ?? showTotal);
            setShowItems(s.showItems ?? showItems);
            setLogoUrl(s.logoUrl || "");
            setUploadedLogo(s.uploadedLogo || null);
            setShowLogo(s.showLogo ?? showLogo);
            setLogoSize(s.logoSize || logoSize);
            setLogoAspectRatio(s.logoAspectRatio || logoAspectRatio);
            setLogoPosition(s.logoPosition || logoPosition);
            setLogoMargin(s.logoMargin || logoMargin);
            setShowQR(s.showQR ?? showQR);
            setPaperWidth(s.paperWidth || paperWidth);
            setBorderRadius(s.borderRadius || borderRadius);
            setPadding(s.padding || padding);
          }
        } catch (error) {
          alert(
            "Fehler beim Importieren der Vorlage. Bitte überprüfen Sie das Dateiformat.",
          );
        }
      };
      reader.readAsText(file);
    }
  };

  const addElement = (type: ReceiptElement["type"], content = "") => {
    saveToHistory();
    const newElement: ReceiptElement = {
      id: Date.now().toString(),
      type,
      content,
      style: {
        fontSize: 14,
        fontWeight: "normal",
        color: customColors.primary,
        align: "center",
        margin: 8,
        bold: false,
        italic: false,
      },
      position: { x: 0, y: elements.length * 40 },
      visible: true,
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement.id);
  };

  const updateElement = (id: string, updates: Partial<ReceiptElement>) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, ...updates } : el)),
    );
  };

  const deleteElement = (id: string) => {
    saveToHistory();
    setElements(elements.filter((el) => el.id !== id));
    if (selectedElement === id) setSelectedElement(null);
  };

  const duplicateElement = (id: string) => {
    saveToHistory();
    const element = elements.find((el) => el.id === id);
    if (element) {
      const newElement = {
        ...element,
        id: Date.now().toString(),
        position: { x: element.position.x + 10, y: element.position.y + 10 },
      };
      setElements([...elements, newElement]);
      setSelectedElement(newElement.id);
    }
  };

  const applyTemplate = (template: (typeof layoutTemplates)[0]) => {
    saveToHistory();
    setSelectedTemplate(template);
    setPadding(template.settings.padding);
    setBorderRadius(template.settings.borderRadius);
  };

  const exportTemplate = () => {
    const template = {
      colors: customColors,
      font: selectedFont,
      template: selectedTemplate,
      elements,
      settings: {
        storeName,
        showStoreName,
        storeAddress,
        showStoreAddress,
        customMessage,
        showCustomMessage,
        footerText,
        showFooter,
        showDateTime,
        showTotal,
        showItems,
        logoUrl,
        uploadedLogo,
        showLogo,
        logoSize,
        logoAspectRatio,
        logoPosition,
        logoMargin,
        showQR,
        paperWidth,
        borderRadius,
        padding,
      },
    };

    const blob = new Blob([JSON.stringify(template, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-template-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getDeviceWidth = () => {
    switch (previewDevice) {
      case "smartphone":
        return "320px";
      case "tablet":
        return "400px";
      case "desktop":
        return "500px";
      default:
        return "320px";
    }
  };

  const selectedElementData = elements.find((el) => el.id === selectedElement);

  return (
    <div className="space-y-6">
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Vollbild-Vorschau</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-center">
              <div
                className="bg-white dark:bg-gray-100 rounded-lg shadow-2xl relative overflow-hidden"
                style={{
                  width: "400px",
                  borderRadius: `${borderRadius}px`,
                  padding: `${padding}px`,
                  fontFamily: selectedFont.value,
                  borderTop: `4px solid ${customColors.primary}`,
                }}
              >
                {/* Same receipt content as main preview */}
                {/* Receipt content would be rendered here - same as below */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold mb-2">Beleg-Designer Pro</h2>
          <p className="text-muted-foreground">
            Erstelle professionelle, vollständig anpassbare digitale Belege
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={undo} disabled={historyIndex <= 0}>
            <Undo className="w-4 h-4 mr-2" />
            Rückgängig
          </Button>
          <Button
            variant="outline"
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
          >
            <Redo className="w-4 h-4 mr-2" />
            Wiederholen
          </Button>
          <input
            ref={importInputRef}
            type="file"
            accept=".json"
            onChange={handleTemplateImport}
            className="hidden"
          />
          <Button
            variant="outline"
            onClick={() => importInputRef.current?.click()}
          >
            <FileUp className="w-4 h-4 mr-2" />
            Importieren
          </Button>
          <Button variant="outline" onClick={exportTemplate}>
            <Download className="w-4 h-4 mr-2" />
            Exportieren
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4 mr-2" />
            Design speichern
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Design Controls */}
        <div className="xl:col-span-1 space-y-6">
          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="content">Inhalt</TabsTrigger>
              <TabsTrigger value="elements">Elemente</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Design Tab */}
            <TabsContent value="design" className="space-y-4">
              {/* Color Scheme */}
              <Card className="animate-slide-in-up delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Palette className="w-4 h-4" />
                    Farbschema
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {colorPresets.map((color) => (
                      <div
                        key={color.name}
                        className={`p-2 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 ${
                          selectedColor.name === color.name
                            ? "border-green-600 bg-green-50 dark:bg-green-950/20"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                        onClick={() => {
                          saveToHistory();
                          setSelectedColor(color);
                          setCustomColors({
                            primary: color.primary,
                            secondary: color.secondary,
                            accent: color.accent,
                          });
                        }}
                      >
                        <div className="flex gap-1 mb-1">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color.primary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color.secondary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color.accent }}
                          />
                        </div>
                        <span className="text-xs font-medium">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Custom Colors */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium">Eigene Farben</label>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-xs text-muted-foreground">
                          Primär
                        </label>
                        <Input
                          type="color"
                          value={customColors.primary}
                          onChange={(e) => {
                            saveToHistory();
                            setCustomColors({
                              ...customColors,
                              primary: e.target.value,
                            });
                          }}
                          className="h-8 p-1"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground">
                          Sekundär
                        </label>
                        <Input
                          type="color"
                          value={customColors.secondary}
                          onChange={(e) => {
                            saveToHistory();
                            setCustomColors({
                              ...customColors,
                              secondary: e.target.value,
                            });
                          }}
                          className="h-8 p-1"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground">
                          Akzent
                        </label>
                        <Input
                          type="color"
                          value={customColors.accent}
                          onChange={(e) => {
                            saveToHistory();
                            setCustomColors({
                              ...customColors,
                              accent: e.target.value,
                            });
                          }}
                          className="h-8 p-1"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Typography */}
              <Card className="animate-slide-in-up delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Type className="w-4 h-4" />
                    Typografie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {fontOptions.map((font) => (
                    <div
                      key={font.name}
                      className={`p-2 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedFont.name === font.name
                          ? "border-green-600 bg-green-50 dark:bg-green-950/20"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                      onClick={() => {
                        saveToHistory();
                        setSelectedFont(font);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{font.name}</span>
                        <span
                          className="text-lg"
                          style={{ fontFamily: font.value }}
                        >
                          {font.preview}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Layout Templates */}
              <Card className="animate-slide-in-up delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Grid className="w-4 h-4" />
                    Layout-Vorlagen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {layoutTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`p-2 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedTemplate.id === template.id
                          ? "border-green-600 bg-green-50 dark:bg-green-950/20"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                      onClick={() => applyTemplate(template)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{template.preview}</span>
                        <div>
                          <div className="text-sm font-medium">
                            {template.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {template.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-4">
              <Card className="animate-slide-in-up delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <ImageIcon className="w-4 h-4" />
                    Logo & Branding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Logo anzeigen</span>
                    <Switch
                      checked={showLogo}
                      onCheckedChange={(checked) => {
                        saveToHistory();
                        setShowLogo(checked);
                      }}
                    />
                  </div>

                  {showLogo && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Logo-URL</label>
                        <Input
                          placeholder="https://example.com/logo.png"
                          value={logoUrl}
                          onChange={(e) => setLogoUrl(e.target.value)}
                        />
                      </div>

                      <div className="flex gap-2">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Logo hochladen
                        </Button>
                        {(uploadedLogo || logoUrl) && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => {
                              saveToHistory();
                              setUploadedLogo(null);
                              setLogoUrl("");
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      {(uploadedLogo || logoUrl) && (
                        <div className="space-y-4">
                          {/* Logo Preview */}
                          <div className="text-center p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
                            <img
                              src={
                                uploadedLogo || logoUrl || "/placeholder.svg"
                              }
                              alt="Store logo"
                              className="mx-auto rounded border"
                              style={{
                                maxWidth: `${logoSize}px`,
                                maxHeight: `${logoSize}px`,
                                aspectRatio:
                                  logoAspectRatio === "original"
                                    ? "auto"
                                    : logoAspectRatio,
                                objectFit: "contain",
                              }}
                            />
                          </div>

                          {/* Logo Size Control */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Logo-Größe
                            </label>
                            <Slider
                              value={[logoSize]}
                              onValueChange={(value) => setLogoSize(value[0])}
                              max={120}
                              min={24}
                              step={4}
                              className="w-full"
                            />
                            <div className="text-xs text-muted-foreground">
                              {logoSize}px
                            </div>
                          </div>

                          {/* Aspect Ratio Control */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Seitenverhältnis
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { label: "Original", value: "original" },
                                { label: "Quadrat", value: "1/1" },
                                { label: "Breit", value: "16/9" },
                                { label: "Hoch", value: "9/16" },
                              ].map((ratio) => (
                                <Button
                                  key={ratio.value}
                                  variant={
                                    logoAspectRatio === ratio.value
                                      ? "default"
                                      : "outline"
                                  }
                                  size="sm"
                                  onClick={() =>
                                    setLogoAspectRatio(ratio.value)
                                  }
                                  className="text-xs"
                                >
                                  {ratio.label}
                                </Button>
                              ))}
                            </div>
                          </div>

                          {/* Logo Position */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Position
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { label: "Links", value: "left" },
                                { label: "Mitte", value: "center" },
                                { label: "Rechts", value: "right" },
                              ].map((pos) => (
                                <Button
                                  key={pos.value}
                                  variant={
                                    logoPosition === pos.value
                                      ? "default"
                                      : "outline"
                                  }
                                  size="sm"
                                  onClick={() => setLogoPosition(pos.value)}
                                  className="text-xs"
                                >
                                  {pos.label}
                                </Button>
                              ))}
                            </div>
                          </div>

                          {/* Logo Margin */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Abstand unten
                            </label>
                            <Slider
                              value={[logoMargin]}
                              onValueChange={(value) => setLogoMargin(value[0])}
                              max={32}
                              min={0}
                              step={2}
                              className="w-full"
                            />
                            <div className="text-xs text-muted-foreground">
                              {logoMargin}px
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="animate-slide-in-up delay-200">
                <CardHeader>
                  <CardTitle className="text-sm">Laden-Informationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Laden-Name anzeigen
                      </span>
                      <Switch
                        checked={showStoreName}
                        onCheckedChange={(checked) => {
                          saveToHistory();
                          setShowStoreName(checked);
                        }}
                      />
                    </div>
                    {showStoreName && (
                      <Input
                        placeholder="Laden-Name"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Adresse anzeigen
                      </span>
                      <Switch
                        checked={showStoreAddress}
                        onCheckedChange={(checked) => {
                          saveToHistory();
                          setShowStoreAddress(checked);
                        }}
                      />
                    </div>
                    {showStoreAddress && (
                      <textarea
                        className="w-full p-2 text-sm border rounded-md resize-none"
                        rows={3}
                        placeholder="Laden-Adresse"
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Persönliche Nachricht
                      </span>
                      <Switch
                        checked={showCustomMessage}
                        onCheckedChange={(checked) => {
                          saveToHistory();
                          setShowCustomMessage(checked);
                        }}
                      />
                    </div>
                    {showCustomMessage && (
                      <Input
                        placeholder="Danke-Nachricht"
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-slide-in-up delay-300">
                <CardHeader>
                  <CardTitle className="text-sm">Beleg-Elemente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Artikel anzeigen
                    </span>
                    <Switch
                      checked={showItems}
                      onCheckedChange={(checked) => {
                        saveToHistory();
                        setShowItems(checked);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Gesamtsumme anzeigen
                    </span>
                    <Switch
                      checked={showTotal}
                      onCheckedChange={(checked) => {
                        saveToHistory();
                        setShowTotal(checked);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Datum/Zeit anzeigen
                    </span>
                    <Switch
                      checked={showDateTime}
                      onCheckedChange={(checked) => {
                        saveToHistory();
                        setShowDateTime(checked);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      QR-Code anzeigen
                    </span>
                    <Switch
                      checked={showQR}
                      onCheckedChange={(checked) => {
                        saveToHistory();
                        setShowQR(checked);
                      }}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Footer anzeigen
                      </span>
                      <Switch
                        checked={showFooter}
                        onCheckedChange={(checked) => {
                          saveToHistory();
                          setShowFooter(checked);
                        }}
                      />
                    </div>
                    {showFooter && (
                      <Input
                        placeholder="Footer-Text"
                        value={footerText}
                        onChange={(e) => setFooterText(e.target.value)}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Elements Tab */}
            <TabsContent value="elements" className="space-y-4">
              <Card className="animate-slide-in-up delay-100">
                <CardHeader>
                  <CardTitle className="text-sm">Elemente hinzufügen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => addElement("text", "Neuer Text")}
                  >
                    <Type className="w-4 h-4 mr-2" />
                    Text hinzufügen
                  </Button>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Icons</label>
                    <div className="grid grid-cols-5 gap-1">
                      {iconLibrary.map((iconItem) => {
                        const IconComponent = iconItem.icon;
                        return (
                          <Button
                            key={iconItem.name}
                            variant="outline"
                            size="sm"
                            className="p-2 h-8"
                            onClick={() => addElement("icon", iconItem.name)}
                          >
                            <IconComponent className="w-3 h-3" />
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => addElement("divider", "---")}
                  >
                    <Minus className="w-4 h-4 mr-2" />
                    Trennlinie
                  </Button>
                </CardContent>
              </Card>

              {/* Element Properties */}
              {selectedElementData && (
                <Card className="animate-slide-in-up delay-150">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Edit3 className="w-4 h-4" />
                      Element bearbeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedElementData.type === "text" && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Text</label>
                        <Input
                          value={selectedElementData.content}
                          onChange={(e) =>
                            updateElement(selectedElementData.id, {
                              content: e.target.value,
                            })
                          }
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Schriftgröße
                      </label>
                      <Slider
                        value={[selectedElementData.style.fontSize]}
                        onValueChange={(value) =>
                          updateElement(selectedElementData.id, {
                            style: {
                              ...selectedElementData.style,
                              fontSize: value[0],
                            },
                          })
                        }
                        max={32}
                        min={8}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-xs text-muted-foreground">
                        {selectedElementData.style.fontSize}px
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Farbe</label>
                      <Input
                        type="color"
                        value={selectedElementData.style.color}
                        onChange={(e) =>
                          updateElement(selectedElementData.id, {
                            style: {
                              ...selectedElementData.style,
                              color: e.target.value,
                            },
                          })
                        }
                        className="h-8 p-1"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ausrichtung</label>
                      <div className="grid grid-cols-3 gap-1">
                        {[
                          {
                            label: <AlignLeft className="w-4 h-4" />,
                            value: "left",
                          },
                          {
                            label: <AlignCenter className="w-4 h-4" />,
                            value: "center",
                          },
                          {
                            label: <AlignRight className="w-4 h-4" />,
                            value: "right",
                          },
                        ].map((align) => (
                          <Button
                            key={align.value}
                            variant={
                              selectedElementData.style.align === align.value
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              updateElement(selectedElementData.id, {
                                style: {
                                  ...selectedElementData.style,
                                  align: align.value,
                                },
                              })
                            }
                          >
                            {align.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant={
                          selectedElementData.style.bold ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          updateElement(selectedElementData.id, {
                            style: {
                              ...selectedElementData.style,
                              bold: !selectedElementData.style.bold,
                            },
                          })
                        }
                      >
                        <Bold className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={
                          selectedElementData.style.italic
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          updateElement(selectedElementData.id, {
                            style: {
                              ...selectedElementData.style,
                              italic: !selectedElementData.style.italic,
                            },
                          })
                        }
                      >
                        <Italic className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Abstand</label>
                      <Slider
                        value={[selectedElementData.style.margin]}
                        onValueChange={(value) =>
                          updateElement(selectedElementData.id, {
                            style: {
                              ...selectedElementData.style,
                              margin: value[0],
                            },
                          })
                        }
                        max={32}
                        min={0}
                        step={2}
                        className="w-full"
                      />
                      <div className="text-xs text-muted-foreground">
                        {selectedElementData.style.margin}px
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Element List */}
              <Card className="animate-slide-in-up delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Layers className="w-4 h-4" />
                    Elemente ({elements.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 max-h-60 overflow-y-auto">
                  {elements.map((element, index) => (
                    <div
                      key={element.id}
                      className={`p-2 rounded border cursor-pointer transition-all duration-200 ${
                        selectedElement === element.id
                          ? "border-green-600 bg-green-50 dark:bg-green-950/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedElement(element.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            #{index + 1}
                          </span>
                          <span className="text-sm font-medium capitalize">
                            {element.type}
                          </span>
                          <Switch
                            checked={element.visible}
                            onCheckedChange={(checked) =>
                              updateElement(element.id, { visible: checked })
                            }
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              duplicateElement(element.id);
                            }}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-red-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteElement(element.id);
                            }}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground truncate mt-1">
                        {element.content || "Leer"}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card className="animate-slide-in-up delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Settings className="w-4 h-4" />
                    Layout-Einstellungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Papierbreite (mm)
                    </label>
                    <Slider
                      value={[paperWidth]}
                      onValueChange={(value) => setPaperWidth(value[0])}
                      max={120}
                      min={58}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground">
                      {paperWidth}mm
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ecken-Radius</label>
                    <Slider
                      value={[borderRadius]}
                      onValueChange={(value) => setBorderRadius(value[0])}
                      max={20}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground">
                      {borderRadius}px
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Innenabstand</label>
                    <Slider
                      value={[padding]}
                      onValueChange={(value) => setPadding(value[0])}
                      max={32}
                      min={8}
                      step={2}
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground">
                      {padding}px
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Raster anzeigen</span>
                    <Switch checked={showGrid} onCheckedChange={setShowGrid} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Preview */}
        <div className="xl:col-span-3">
          <Card className="animate-slide-in-up delay-400">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live-Vorschau</CardTitle>
                <div className="flex items-center gap-4">
                  {/* Zoom Control */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setZoom([Math.max(50, zoom[0] - 25)])}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-sm font-medium w-12 text-center">
                      {zoom[0]}%
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setZoom([Math.min(200, zoom[0] + 25)])}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Device Selector */}
                  <div className="flex gap-1">
                    <Button
                      variant={
                        previewDevice === "smartphone" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setPreviewDevice("smartphone")}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={
                        previewDevice === "tablet" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setPreviewDevice("tablet")}
                    >
                      <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={
                        previewDevice === "desktop" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setPreviewDevice("desktop")}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg min-h-[600px]">
                <div
                  className="bg-white dark:bg-gray-100 rounded-lg shadow-2xl transition-all duration-500 relative overflow-hidden"
                  style={{
                    width: getDeviceWidth(),
                    transform: `scale(${zoom[0] / 100})`,
                    transformOrigin: "top center",
                    borderRadius: `${borderRadius}px`,
                    padding: `${padding}px`,
                    fontFamily: selectedFont.value,
                    borderTop: `4px solid ${customColors.primary}`,
                  }}
                >
                  {/* Grid Overlay */}
                  {showGrid && (
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, #ccc 1px, transparent 1px),
                          linear-gradient(to bottom, #ccc 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  )}

                  {/* Logo */}
                  {showLogo && (logoUrl || uploadedLogo) && (
                    <div
                      className="mb-4"
                      style={{
                        textAlign: logoPosition as any,
                        marginBottom: `${logoMargin}px`,
                      }}
                    >
                      <img
                        src={uploadedLogo || logoUrl || "/placeholder.svg"}
                        alt="Store logo"
                        className="rounded-lg object-contain"
                        style={{
                          width: `${logoSize}px`,
                          height: `${logoSize}px`,
                          aspectRatio:
                            logoAspectRatio === "original"
                              ? "auto"
                              : logoAspectRatio,
                          objectFit: "contain",
                          display:
                            logoPosition === "center"
                              ? "block"
                              : "inline-block",
                          margin: logoPosition === "center" ? "0 auto" : "0",
                        }}
                      />
                    </div>
                  )}

                  {/* Store Info */}
                  <div className="text-center mb-6">
                    {showLogo && !(logoUrl || uploadedLogo) && (
                      <div className="mb-4">
                        <div
                          className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: customColors.primary }}
                        >
                          <span className="text-white font-bold text-xl">
                            {storeName.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}

                    {showStoreName && (
                      <h3
                        className="font-bold text-lg text-gray-900 mb-2"
                        style={{ color: customColors.primary }}
                      >
                        {storeName}
                      </h3>
                    )}

                    {showStoreAddress &&
                      storeAddress.split("\n").map((line, index) => (
                        <p key={index} className="text-sm text-gray-600">
                          {line}
                        </p>
                      ))}
                  </div>

                  {/* Custom Elements */}
                  <div className="space-y-2 mb-4">
                    {elements
                      .filter((el) => el.visible)
                      .map((element) => {
                        if (element.type === "text") {
                          return (
                            <div
                              key={element.id}
                              className={`cursor-pointer transition-all duration-200 ${
                                selectedElement === element.id
                                  ? "ring-2 ring-green-500 ring-opacity-50"
                                  : ""
                              }`}
                              style={{
                                fontSize: `${element.style.fontSize}px`,
                                fontWeight: element.style.bold
                                  ? "bold"
                                  : element.style.fontWeight,
                                fontStyle: element.style.italic
                                  ? "italic"
                                  : "normal",
                                color: element.style.color,
                                textAlign: element.style.align as any,
                                margin: `${element.style.margin}px 0`,
                              }}
                              onClick={() => setSelectedElement(element.id)}
                            >
                              {element.content}
                            </div>
                          );
                        }

                        if (element.type === "icon") {
                          const iconData = iconLibrary.find(
                            (icon) => icon.name === element.content,
                          );
                          if (iconData) {
                            const IconComponent = iconData.icon;
                            return (
                              <div
                                key={element.id}
                                className={`flex justify-center cursor-pointer transition-all duration-200 ${
                                  selectedElement === element.id
                                    ? "ring-2 ring-green-500 ring-opacity-50"
                                    : ""
                                }`}
                                style={{
                                  margin: `${element.style.margin}px 0`,
                                }}
                                onClick={() => setSelectedElement(element.id)}
                              >
                                <IconComponent
                                  className="w-6 h-6"
                                  style={{
                                    color: element.style.color,
                                    fontSize: `${element.style.fontSize}px`,
                                  }}
                                />
                              </div>
                            );
                          }
                        }

                        if (element.type === "divider") {
                          return (
                            <div
                              key={element.id}
                              className={`cursor-pointer transition-all duration-200 ${
                                selectedElement === element.id
                                  ? "ring-2 ring-green-500 ring-opacity-50"
                                  : ""
                              }`}
                              style={{ margin: `${element.style.margin}px 0` }}
                              onClick={() => setSelectedElement(element.id)}
                            >
                              <hr
                                style={{ borderColor: element.style.color }}
                              />
                            </div>
                          );
                        }

                        return null;
                      })}
                  </div>

                  {/* Receipt Items */}
                  {showItems && (
                    <div className="border-t border-b border-gray-200 py-4 mb-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-900">Milch 3,5% 1L</span>
                        <span className="text-gray-900">€1.29</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-900">Brot Vollkorn</span>
                        <span className="text-gray-900">€2.49</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-900">Äpfel 1kg</span>
                        <span className="text-gray-900">€3.99</span>
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  {showTotal && (
                    <div className="flex justify-between font-bold text-lg mb-4">
                      <span className="text-gray-900">Gesamt:</span>
                      <span style={{ color: customColors.primary }}>€7.77</span>
                    </div>
                  )}

                  {/* Custom Message */}
                  {showCustomMessage && customMessage && (
                    <div className="text-center mb-4">
                      <p
                        className="text-sm"
                        style={{ color: customColors.primary }}
                      >
                        {customMessage}
                      </p>
                    </div>
                  )}

                  {/* QR Code */}
                  {showQR && (
                    <div className="text-center mb-4">
                      <div
                        className="w-20 h-20 mx-auto mb-2 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: customColors.secondary }}
                      >
                        <div className="w-16 h-16 bg-gray-900 rounded grid grid-cols-4 gap-px p-1">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div
                              key={i}
                              className={`${Math.random() > 0.5 ? "bg-white" : "bg-gray-900"} rounded-sm`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        Für QuittMe App scannen
                      </p>
                    </div>
                  )}

                  {/* Footer */}
                  {(showFooter || showDateTime) && (
                    <div className="text-center mt-6 pt-4 border-t border-gray-200">
                      {showDateTime && (
                        <p className="text-xs text-gray-500 mb-2">
                          {new Date().toLocaleDateString("de-DE")} •{" "}
                          {new Date().toLocaleTimeString("de-DE")}
                        </p>
                      )}
                      {showFooter && footerText && (
                        <Badge
                          className="mt-2"
                          style={{
                            backgroundColor: customColors.accent,
                            color: "white",
                          }}
                        >
                          {footerText}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4 mt-6 animate-fade-in-up delay-500">
            <Button
              variant="outline"
              className="flex-1"
              onClick={resetToDefaults}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Zurücksetzen
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsFullscreen(true)}
            >
              <Maximize className="w-4 h-4 mr-2" />
              Vollbild-Vorschau
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Design aktivieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
