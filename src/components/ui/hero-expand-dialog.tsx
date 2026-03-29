"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Project } from "@/data/projects";

// ============================================================
// Dialog Content (inner)
// ============================================================

function DialogContent({
  project,
  onClose,
  accentColor,
}: {
  project: Project;
  onClose: () => void;
  accentColor: string;
}) {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const stagger = (i: number): React.CSSProperties => ({
    opacity: contentVisible ? 1 : 0,
    transform: contentVisible ? "translateY(0)" : "translateY(16px)",
    transition: `all 0.45s cubic-bezier(0.32, 0.72, 0, 1) ${150 + i * 70}ms`,
  });

  return (
    <div
      style={{
        background: "#0F0F14",
        color: "#E8E6E1",
        overflowY: "auto",
        maxHeight: "85vh",
      }}
    >
      {/* Hero Image */}
      <div
        style={{
          position: "relative",
          height: 200,
          overflow: "hidden",
          background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}44)`,
        }}
      >
        <img
          src={project.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: contentVisible ? 0.5 : 0,
            transition: "opacity 0.6s ease 0.1s",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 30%, #0F0F14 100%)",
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {/* Title overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 24,
            right: 24,
            ...stagger(0),
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 6,
              background: `${accentColor}30`,
              color: accentColor,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              border: `1px solid ${accentColor}40`,
            }}
          >
            {project.category}
          </span>
          <h2
            style={{
              margin: "10px 0 0",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 24px 28px" }}>
        {/* Role & Period */}
        {(project.role || project.period) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 16,
              ...stagger(1),
            }}
          >
            <span style={{ fontSize: 13, color: "#A0A0A8", fontWeight: 500 }}>
              {project.role}
            </span>
            <span
              style={{
                fontSize: 12,
                color: "#6B6B73",
                fontFamily: "monospace",
              }}
            >
              {project.period}
            </span>
          </div>
        )}

        {/* Description */}
        {project.description && (
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: "#B8B8C0",
              margin: "0 0 24px",
              ...stagger(2),
            }}
          >
            {project.description}
          </p>
        )}

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
              gap: 12,
              marginBottom: 24,
              ...stagger(3),
            }}
          >
            {project.metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 12,
                  padding: "14px 12px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: accentColor,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#7A7A84",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {project.stack && project.stack.length > 0 && (
          <div style={{ marginBottom: 24, ...stagger(4) }}>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#6B6B73",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 10px",
              }}
            >
              Tech Stack
            </h4>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {project.stack.map((s, i) => (
                <span
                  key={i}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 12,
                    color: "#C8C8D0",
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tasks */}
        {project.tasks && project.tasks.length > 0 && <div style={{ ...stagger(5) }}>
          <h4
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#6B6B73",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 12px",
            }}
          >
            担当業務
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {project.tasks.map((task, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background:
                    i % 2 === 0
                      ? "rgba(255,255,255,0.025)"
                      : "transparent",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: accentColor,
                    marginTop: 6,
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#B0B0B8",
                  }}
                >
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>}
      </div>
    </div>
  );
}

// ============================================================
// HeroExpandDialog
// ============================================================

export function HeroExpandDialog({
  project,
  cardRect,
  isOpen,
  onClose,
}: {
  project: Project;
  cardRect: DOMRect;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<
    "closed" | "expanding" | "collapsing"
  >("closed");
  const overlayRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  useEffect(() => {
    if (isOpen && !closingRef.current) {
      setPhase("closed");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("expanding"));
      });
    }
    if (!isOpen) {
      closingRef.current = false;
      setPhase("closed");
    }
  }, [isOpen]);

  const handleClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setPhase("collapsing");
    setTimeout(onClose, 400);
  };

  if (phase === "closed" && !isOpen) return null;

  const isExpanded = phase === "expanding";

  return (
    <div
      ref={overlayRef}
      onClick={(e) =>
        e.target === overlayRef.current && handleClose()
      }
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: isExpanded
          ? "rgba(0,0,0,0.6)"
          : "rgba(0,0,0,0)",
        transition:
          "background-color 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: isExpanded
            ? "50%"
            : `${cardRect.top + cardRect.height / 2}px`,
          left: isExpanded
            ? "50%"
            : `${cardRect.left + cardRect.width / 2}px`,
          transform: isExpanded
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0.3)",
          width: "min(560px, 90vw)",
          maxHeight: "85vh",
          opacity: isExpanded ? 1 : 0,
          transition:
            "all 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <DialogContent
          project={project}
          onClose={handleClose}
          accentColor={project.color ?? "#A78BFA"}
        />
      </div>
    </div>
  );
}

// ============================================================
// useHeroExpandDialog — convenience hook
// ============================================================

export function useHeroExpandDialog() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const closingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const open = useCallback((project: Project, rect: DOMRect) => {
    if (closingTimerRef.current) {
      clearTimeout(closingTimerRef.current);
      closingTimerRef.current = null;
    }
    setSelectedProject(project);
    setCardRect(rect);
    setDialogOpen(true);
  }, []);

  const close = useCallback(() => {
    setDialogOpen(false);
    closingTimerRef.current = setTimeout(() => {
      setSelectedProject(null);
      setCardRect(null);
      closingTimerRef.current = null;
    }, 500);
  }, []);

  return { selectedProject, cardRect, dialogOpen, open, close };
}
