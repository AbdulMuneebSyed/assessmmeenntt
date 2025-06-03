"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import {
  // Physics
  Atom,
  Function,
  Ruler,
  Car,
  Scales,
  Lightning,
  Target,
  Gear,
  Wrench,
  Thermometer,
  Wind,
  WaveSine,
  Waves,
  Plug,
  Magnet,
  RadioButton,
  Waveform,
  Eye,
  Radioactive,
  Cpu,
  Radio,
  Flask,
  // Chemistry
  TestTube,
  GridNine,
  LinkSimple,
  Cube,
  Fire,
  ArrowsClockwise,
  CubeTransparent,
  Drop,
  BatteryCharging,
  Timer,
  Circuitry,
  Wine,
  Dna,
  Link,
  House,
  Eyedropper,
  Leaf,
  // Mathematics
  Calculator,
  MathOperations,
  Shuffle,
  ListNumbers,
  ArrowUp as ArrowUpIcon,
  Equals,
  Triangle,
  LineSegments,
  Intersect,
  Circle,
  Infinity,
  Brain,
  ChartBar,
  Mountains,
  BracketsAngle,
  SquaresFour,
  BracketsCurly,
  Graph,
  Sigma,
  TrendUp,
  VectorThree,
  ChartLineUp,
  DiceSix,
  // Fallback
  Book,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";

interface Chapter {
  subject: string;
  chapter: string;
  class: string;
  unit: string;
  yearWiseQuestionCount: Record<string, number>;
  questionSolved: number;
  status: string;
  isWeakChapter: boolean;
}

export function ChapterList() {
  const {
    filteredChapters: chapters,
    selectedClass,
    selectedUnit,
    showNotStarted,
    showWeakChapters,
    availableUnits,
    setSelectedClass,
    setSelectedUnit,
    setShowNotStarted,
    setShowWeakChapters,
  } = useAppStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getChapterIcon = (chapter: string) => {
    const chapterLower = chapter.toLowerCase();

    if (chapterLower.includes("gravitation"))
      return <Atom size={18} color="#f50000" className="flex-shrink-0" />;
    if (
      chapterLower.includes("mathematics in physics") ||
      chapterLower.includes("math")
    )
      return <Function size={18} color="#5d4681" className="flex-shrink-0" />;
    if (chapterLower.includes("units") && chapterLower.includes("dimensions"))
      return <Ruler size={18} color="#5d4681" className="flex-shrink-0" />;
    if (chapterLower.includes("motion"))
      return <Car size={18} color="#5d4681" className="flex-shrink-0" />;
    if (chapterLower.includes("laws of motion"))
      return <Scales size={18} color="#5d4681" className="flex-shrink-0" />;
    if (chapterLower.includes("work power energy"))
      return <Lightning size={18} color="#ff6b35" className="flex-shrink-0" />;
    if (
      chapterLower.includes("center of mass") ||
      chapterLower.includes("momentum") ||
      chapterLower.includes("collision")
    )
      return <Target size={18} color="#5d4681" className="flex-shrink-0" />;
    if (chapterLower.includes("rotational"))
      return <Gear size={18} color="#5d4681" className="flex-shrink-0" />;
    if (chapterLower.includes("mechanical properties"))
      return <Wrench size={18} color="#5d4681" className="flex-shrink-0" />;
    if (
      chapterLower.includes("thermal") ||
      chapterLower.includes("thermodynamics")
    )
      return (
        <Thermometer size={18} color="#e74c3c" className="flex-shrink-0" />
      );
    if (
      chapterLower.includes("kinetic theory") ||
      chapterLower.includes("gases")
    )
      return <Wind size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("oscillations"))
      return <WaveSine size={18} color="#9b59b6" className="flex-shrink-0" />;
    if (chapterLower.includes("waves") || chapterLower.includes("sound"))
      return <Waves size={18} color="#2ecc71" className="flex-shrink-0" />;
    if (
      chapterLower.includes("electrostatics") ||
      chapterLower.includes("electric")
    )
      return <Lightning size={18} color="#f39c12" className="flex-shrink-0" />;
    if (chapterLower.includes("capacitance"))
      return <Plug size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("current electricity"))
      return <Plug size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("magnetic"))
      return <Magnet size={18} color="#8e44ad" className="flex-shrink-0" />;
    if (chapterLower.includes("electromagnetic"))
      return (
        <RadioButton size={18} color="#16a085" className="flex-shrink-0" />
      );
    if (chapterLower.includes("alternating current"))
      return <Waveform size={18} color="#27ae60" className="flex-shrink-0" />;
    if (chapterLower.includes("ray optics") || chapterLower.includes("optics"))
      return <Eye size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("wave optics"))
      return (
        <Radioactive size={18} color="#9b59b6" className="flex-shrink-0" />
      );
    if (chapterLower.includes("dual nature"))
      return <Atom size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("atomic"))
      return <Atom size={18} color="#2ecc71" className="flex-shrink-0" />;
    if (chapterLower.includes("nuclear"))
      return (
        <Radioactive size={18} color="#e74c3c" className="flex-shrink-0" />
      );
    if (chapterLower.includes("semiconductors"))
      return <Cpu size={18} color="#34495e" className="flex-shrink-0" />;
    if (chapterLower.includes("communication"))
      return <Radio size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("experimental"))
      return <Flask size={18} color="#95a5a6" className="flex-shrink-0" />;

    // Chemistry icons
    if (
      chapterLower.includes("basic concepts") ||
      chapterLower.includes("some basic")
    )
      return <TestTube size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("structure of atom"))
      return <Atom size={18} color="#3498db" className="flex-shrink-0" />;
    if (
      chapterLower.includes("classification") ||
      chapterLower.includes("periodicity")
    )
      return <GridNine size={18} color="#9b59b6" className="flex-shrink-0" />;
    if (chapterLower.includes("chemical bonding"))
      return <LinkSimple size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("states of matter"))
      return <Cube size={18} color="#2ecc71" className="flex-shrink-0" />;
    if (chapterLower.includes("thermodynamics") && chapterLower.includes("c"))
      return <Fire size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("equilibrium"))
      return <Ruler size={18} color="#8e44ad" className="flex-shrink-0" />;
    if (chapterLower.includes("redox"))
      return (
        <ArrowsClockwise size={18} color="#e74c3c" className="flex-shrink-0" />
      );
    if (chapterLower.includes("hydrogen"))
      return <Atom size={18} color="#3498db" className="flex-shrink-0" />;
    if (
      chapterLower.includes("s block") ||
      chapterLower.includes("p block") ||
      chapterLower.includes("d and f block")
    )
      return <Atom size={18} color="#27ae60" className="flex-shrink-0" />;
    if (chapterLower.includes("solid state"))
      return (
        <CubeTransparent size={18} color="#34495e" className="flex-shrink-0" />
      );
    if (chapterLower.includes("solutions"))
      return <Drop size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("electrochemistry"))
      return (
        <BatteryCharging size={18} color="#f39c12" className="flex-shrink-0" />
      );
    if (chapterLower.includes("kinetics"))
      return <Timer size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("surface chemistry"))
      return <Waves size={18} color="#16a085" className="flex-shrink-0" />;
    if (chapterLower.includes("isolation of metals"))
      return <Wrench size={18} color="#95a5a6" className="flex-shrink-0" />;
    if (chapterLower.includes("coordination"))
      return <Circuitry size={18} color="#8e44ad" className="flex-shrink-0" />;
    if (
      chapterLower.includes("haloalkanes") ||
      chapterLower.includes("haloarenes")
    )
      return <Atom size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (
      chapterLower.includes("alcohols") ||
      chapterLower.includes("phenols") ||
      chapterLower.includes("ethers")
    )
      return <Wine size={18} color="#9b59b6" className="flex-shrink-0" />;
    if (chapterLower.includes("aldehydes") || chapterLower.includes("ketones"))
      return <Flask size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("carboxylic"))
      return <Wrench size={18} color="#27ae60" className="flex-shrink-0" />;
    if (chapterLower.includes("amines"))
      return <Plug size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("biomolecules"))
      return <Dna size={18} color="#2ecc71" className="flex-shrink-0" />;
    if (chapterLower.includes("polymers"))
      return <Link size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("everyday life"))
      return <House size={18} color="#f39c12" className="flex-shrink-0" />;
    if (chapterLower.includes("practical chemistry"))
      return <Eyedropper size={18} color="#95a5a6" className="flex-shrink-0" />;
    if (chapterLower.includes("general organic"))
      return <Atom size={18} color="#34495e" className="flex-shrink-0" />;
    if (chapterLower.includes("hydrocarbons"))
      return <Fire size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("environmental"))
      return <Leaf size={18} color="#27ae60" className="flex-shrink-0" />;

    // Math icons
    if (chapterLower.includes("basic") || chapterLower.includes("basics"))
      return <Calculator size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("quadratic"))
      return <Function size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("complex"))
      return (
        <MathOperations size={18} color="#9b59b6" className="flex-shrink-0" />
      );
    if (
      chapterLower.includes("permutation") ||
      chapterLower.includes("combination")
    )
      return <Shuffle size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("sequences") || chapterLower.includes("series"))
      return (
        <ListNumbers size={18} color="#2ecc71" className="flex-shrink-0" />
      );
    if (chapterLower.includes("induction"))
      return (
        <ArrowUpIcon size={18} color="#8e44ad" className="flex-shrink-0" />
      );
    if (chapterLower.includes("binomial"))
      return <Equals size={18} color="#16a085" className="flex-shrink-0" />;
    if (chapterLower.includes("trigonometric"))
      return <Triangle size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("straight lines"))
      return (
        <LineSegments size={18} color="#34495e" className="flex-shrink-0" />
      );
    if (chapterLower.includes("pair of lines"))
      return <Intersect size={18} color="#95a5a6" className="flex-shrink-0" />;
    if (chapterLower.includes("circle"))
      return <Circle size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("parabola"))
      return (
        <LineSegments size={18} color="#f39c12" className="flex-shrink-0" />
      );
    if (chapterLower.includes("ellipse"))
      return <Circle size={18} color="#9b59b6" className="flex-shrink-0" />;
    if (chapterLower.includes("hyperbola"))
      return <Equals size={18} color="#e67e22" className="flex-shrink-0" />;
    if (chapterLower.includes("limits"))
      return <Infinity size={18} color="#2ecc71" className="flex-shrink-0" />;
    if (chapterLower.includes("reasoning"))
      return <Brain size={18} color="#8e44ad" className="flex-shrink-0" />;
    if (chapterLower.includes("statistics"))
      return <ChartBar size={18} color="#27ae60" className="flex-shrink-0" />;
    if (chapterLower.includes("heights") || chapterLower.includes("distances"))
      return <Mountains size={18} color="#16a085" className="flex-shrink-0" />;
    if (chapterLower.includes("properties of triangles"))
      return <Triangle size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("sets") || chapterLower.includes("relations"))
      return (
        <BracketsAngle size={18} color="#3498db" className="flex-shrink-0" />
      );
    if (chapterLower.includes("matrices"))
      return (
        <SquaresFour size={18} color="#9b59b6" className="flex-shrink-0" />
      );
    if (chapterLower.includes("determinants"))
      return (
        <BracketsCurly size={18} color="#e67e22" className="flex-shrink-0" />
      );
    if (chapterLower.includes("inverse trigonometric"))
      return <Function size={18} color="#e74c3c" className="flex-shrink-0" />;
    if (chapterLower.includes("functions"))
      return <Function size={18} color="#2ecc71" className="flex-shrink-0" />;
    if (
      chapterLower.includes("continuity") ||
      chapterLower.includes("differentiability")
    )
      return <Graph size={18} color="#8e44ad" className="flex-shrink-0" />;
    if (chapterLower.includes("differentiation"))
      return <Sigma size={18} color="#f39c12" className="flex-shrink-0" />;
    if (chapterLower.includes("application of derivatives"))
      return <TrendUp size={18} color="#16a085" className="flex-shrink-0" />;
    if (chapterLower.includes("integration"))
      return <Circle size={18} color="#27ae60" className="flex-shrink-0" />;
    if (chapterLower.includes("area under curves"))
      return <Equals size={18} color="#3498db" className="flex-shrink-0" />;
    if (chapterLower.includes("differential equations"))
      return (
        <BracketsCurly size={18} color="#e74c3c" className="flex-shrink-0" />
      );
    if (chapterLower.includes("vector"))
      return (
        <VectorThree size={18} color="#9b59b6" className="flex-shrink-0" />
      );
    if (chapterLower.includes("three dimensional"))
      return <Cube size={18} color="#34495e" className="flex-shrink-0" />;
    if (chapterLower.includes("linear programming"))
      return (
        <ChartLineUp size={18} color="#e67e22" className="flex-shrink-0" />
      );
    if (chapterLower.includes("probability"))
      return <DiceSix size={18} color="#2ecc71" className="flex-shrink-0" />;

    return <Book size={18} color="#7f8c8d" className="flex-shrink-0" />;
  };

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedChapters = useMemo(() => {
    return [...chapters].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.questionSolved - b.questionSolved;
      } else {
        return b.questionSolved - a.questionSolved;
      }
    });
  }, [chapters, sortOrder]);

  const getYearComparison = (chapter: Chapter) => {
    const count2025 = chapter.yearWiseQuestionCount["2025"] || 0;
    const count2024 = chapter.yearWiseQuestionCount["2024"] || 0;
    const trend =
      count2025 > count2024 ? "up" : count2025 < count2024 ? "down" : "same";

    return { count2025, count2024, trend };
  };

  return (
    <div className="space-y-4 w-full">
      {/* Filters Section */}
      <div className="space-y-3">
        {/* Mobile: Horizontal Scrolling Filters */}
        <div className="md:hidden">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-1">
            <div className="flex gap-2 py-1 min-w-max">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-[90px] h-8 text-xs">
                  <SelectValue placeholder="Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Class 11">11th</SelectItem>
                  <SelectItem value="Class 12">12th</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger className="w-[90px] h-8 text-xs">
                  <SelectValue placeholder="Units" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {availableUnits.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit.length > 8 ? unit.substring(0, 8) + "..." : unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant={showNotStarted ? "default" : "outline"}
                size="sm"
                onClick={() => setShowNotStarted(!showNotStarted)}
                className="h-8 text-xs whitespace-nowrap px-3"
              >
                Not Started
              </Button>

              <Button
                variant={showWeakChapters ? "default" : "outline"}
                size="sm"
                onClick={() => setShowWeakChapters(!showWeakChapters)}
                className={`h-8 text-xs whitespace-nowrap px-3 ${
                  showWeakChapters ? "bg-red-500 hover:bg-red-600" : ""
                }`}
              >
                Weak
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop: Regular Layout */}
        <div className="hidden md:flex flex-wrap gap-3">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="Class 11">Class 11</SelectItem>
              <SelectItem value="Class 12">Class 12</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedUnit} onValueChange={setSelectedUnit}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Units" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Units</SelectItem>
              {availableUnits.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant={showNotStarted ? "default" : "outline"}
            size="sm"
            onClick={() => setShowNotStarted(!showNotStarted)}
          >
            Not Started
          </Button>

          <Button
            variant={showWeakChapters ? "default" : "outline"}
            size="sm"
            onClick={() => setShowWeakChapters(!showWeakChapters)}
            className={`${
              showWeakChapters ? "bg-red-500 hover:bg-red-600" : ""
            }`}
          >
            Weak Chapters
          </Button>
        </div>
      </div>

      {/* Chapter Count */}
      <div className="text-sm text-muted-foreground px-1 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Showing all chapters ({sortedChapters.length})
        </span>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600"
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
          >
            <ArrowUpDown className="h-4 w-4 mr-1" />
            Sort
            <span className="ml-1">
              {sortOrder === "asc" ? (
                <ArrowUp className="inline h-3 w-3" />
              ) : (
                <ArrowDown className="inline h-3 w-3" />
              )}
            </span>
          </Button>
        </div>
      </div>

      {/* Chapter List */}
      <div className="space-y-2">
        {sortedChapters.map((chapter, index) => {
          const totalQuestions = Object.values(
            chapter.yearWiseQuestionCount
          ).reduce((a, b) => a + b, 0);
          const { count2025, count2024, trend } = getYearComparison(chapter);

          return (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg hover:bg-accent/50 transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Mobile Layout */}
              <div className="md:hidden p-3 space-y-2">
                {/* Top Row: Icon + Title + Status */}
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    {getChapterIcon(chapter.chapter)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm leading-tight group-hover:text-accent-foreground transition-colors duration-200">
                      {chapter.chapter}
                    </h3>
                  </div>
                  <div className="text-muted-foreground text-xs ">
                    {chapter.questionSolved} / {totalQuestions} Questions
                  </div>
                </div>
                {/* Second Row: Class/Unit + Weak Badge */}
                {/* Bottom Row: Questions + Year Comparison */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>2025: {count2025}</span>
                    {trend === "up" && (
                      <ArrowUp className="h-3 w-3 text-green-500" />
                    )}
                    {trend === "down" && (
                      <ArrowDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className="text-muted-foreground/60">
                      | 2024: {count2024}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between p-4 gap-4">
                {/* Left Section: Icon + Chapter Name + Class/Unit */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {getChapterIcon(chapter.chapter)}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate group-hover:text-accent-foreground transition-colors duration-200">
                      {chapter.chapter}
                    </h3>
                  </div>
                </div>

                {/* Right Section: Year Data + Questions + Status */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  {/* Year Comparison */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>2025: {count2025}q</span>
                    <span>|</span>
                    <span>2024: {count2024}q</span>
                    {trend === "up" && (
                      <ArrowUp className="h-3 w-3 text-green-500" />
                    )}
                    {trend === "down" && (
                      <ArrowDown className="h-3 w-3 text-red-500" />
                    )}
                  </div>

                  {/* Separator */}
                  <div className="text-muted-foreground">|</div>

                  {/* Questions Count */}
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">
                      {chapter.questionSolved} / {totalQuestions} Qs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {sortedChapters.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-2">No chapters found</div>
          <div className="text-sm text-muted-foreground">
            Try adjusting your filters
          </div>
        </div>
      )}
    </div>
  );
}
