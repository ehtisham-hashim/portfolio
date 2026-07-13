"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollSnapper() {
  useEffect(() => {
    const SWIPE_THRESHOLD = 30;
    const mainSections = Array.from(document.querySelectorAll(".main-section"));
    if (mainSections.length === 0) return;

    const lastSection = mainSections[mainSections.length - 1];
    let touchStartY = 0;
    let lastTouchY = 0;
    let touchDirection = 0;
    let isSnapping = false;
    let currentSnapTween = null;
    let snapTweenStartTime = null;
    let currentTargetIndex = -1;
    let snapperActive = true;

    function isMobileDevice() {
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function shouldSkipSnapping() {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return false;
      return window.scrollY >= aboutSection.offsetTop - 5;
    }

    function setViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", vh + "px");
      ScrollTrigger.refresh();
      if (isSnapping && currentTargetIndex >= 0) touchSnapToTarget(currentTargetIndex);
    }

    function touchSnapToTarget(targetIndex = null) {
      const panelTops = mainSections.map((section) => section.offsetTop);
      const scroll = Math.round(window.scrollY);

      if (targetIndex === null) {
        let currentIndex = panelTops.findIndex((top) => scroll < top);
        if (currentIndex === -1) {
          currentIndex = panelTops.length;
          if (
            touchDirection > 0 ||
            scroll > lastSection.offsetTop + lastSection.offsetHeight
          ) {
            return;
          }
        }

        currentIndex--;
        targetIndex = Math.min(
          Math.max(currentIndex + touchDirection, 0),
          panelTops.length - 1
        );
      }

      currentTargetIndex = targetIndex;
      const target = panelTops[currentTargetIndex];
      if (target !== scroll) {
        // blockOverflow = true, pauseScrollTrigger = true
        snapTo(target, 0.8, 0, true, true);
      }
    }

    function snapTo(
      targetY,
      duration,
      resetDelay,
      blockOverflow = false,
      pauseScrollTrigger = false
    ) {
      if (currentSnapTween?.isActive()) {
        currentSnapTween.kill();
        duration = Math.max(
          0,
          duration - (Date.now() - snapTweenStartTime) / 1000
        );
      }

      isSnapping = true;
      if (blockOverflow) {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          document.body.style.overflow = "";
        }, duration / 2);
      }

      if (pauseScrollTrigger) ScrollTrigger.disable();
      snapTweenStartTime = Date.now();

      currentSnapTween = gsap.to(window, {
        scrollTo: targetY,
        duration: duration,
        ease: "power3.inOut",
        onComplete: () => {
          if (pauseScrollTrigger) {
            ScrollTrigger.enable();
          }

          setTimeout(() => {
            isSnapping = false;
          }, resetDelay * 1000);
        },
      });
    }

    if (isMobileDevice()) {
      setViewportHeight();
      window.addEventListener("resize", setViewportHeight);
      window.addEventListener("orientationchange", setViewportHeight);
    }

    const handleTouchStart = (e) => {
      if (shouldSkipSnapping()) return;
      if (isSnapping) {
        if (e.cancelable) e.preventDefault();
        return;
      }
      touchStartY = lastTouchY = e.touches[0].clientY;
      touchDirection = 0;
    };

    const handleTouchMove = (e) => {
      if (shouldSkipSnapping()) return;
      const currentY = e.touches[0].clientY;
      const delta = lastTouchY - currentY;
      if (Math.abs(delta) > 5) {
        touchDirection = delta > 0 ? 1 : 0;
      }

      lastTouchY = currentY;
      if (isSnapping && e.cancelable) e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (shouldSkipSnapping()) return;
      if (isSnapping) {
        if (e.cancelable) e.preventDefault();
        return;
      }

      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;
      touchSnapToTarget();
    };

    const handleKeyDown = (e) => {
      if (shouldSkipSnapping()) return;
      if (
        ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(
          e.key
        )
      ) {
        const panelTops = mainSections.map((section) => section.offsetTop);
        const scroll = Math.round(window.scrollY);
        const direction =
          e.key === "ArrowDown" || e.key === "PageDown"
            ? 1
            : e.key === "ArrowUp" || e.key === "PageUp"
            ? -1
            : e.key === "Home"
            ? -Infinity
            : e.key === "End"
            ? Infinity
            : 0;

        let currentIndex = panelTops.findIndex(
          (top) => scroll + (direction > 0 ? 0 : -1) < top
        );
        if (currentIndex === -1) {
          snapperActive = false;
          return;
        }

        e.preventDefault();
        let targetIndex;
        if (!snapperActive) {
          snapperActive = true;
          targetIndex = currentIndex;
        } else {
          if (direction > 0) {
            currentIndex--;
          }

          if (direction === Infinity) {
            targetIndex = panelTops.length - 1;
          } else if (direction === -Infinity) {
            targetIndex = 0;
          } else {
            targetIndex = Math.min(
              Math.max(currentIndex + direction, 0),
              panelTops.length - 1
            );
          }
        }

        snapTo(panelTops[targetIndex], 0.8, 0);
      }
    };

    const handleWheel = (e) => {
      if (shouldSkipSnapping()) return;
      if (isSnapping) {
        e.preventDefault();
        return;
      }

      const scroll = Math.round(window.scrollY);
      const direction = e.deltaY > 0 ? 1 : -1;
      const panelTops = mainSections.map((section) => section.offsetTop);
      let currentIndex = panelTops.findIndex(
        (top) => scroll + (direction > 0 ? 0 : -1) < top
      );

      if (currentIndex === -1) {
        currentIndex = panelTops.length;
        if (direction > 0 || scroll > lastSection.offsetTop) {
          snapperActive = false;
          return;
        }
      }

      e.preventDefault();
      let targetIndex;
      if (!snapperActive) {
        snapperActive = true;
        targetIndex = currentIndex;
      } else {
        if (direction > 0) {
          currentIndex--;
        }
        targetIndex = Math.min(
          Math.max(currentIndex + direction, 0),
          panelTops.length - 1
        );
      }

      const target = panelTops[targetIndex];
      if (target !== scroll) {
        snapTo(target, 0.8, 0.4);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (isMobileDevice()) {
        window.removeEventListener("resize", setViewportHeight);
        window.removeEventListener("orientationchange", setViewportHeight);
      }
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}
