"use client";

import InfiniteText from "@/app/(vartix)/components/InfiniteText";
import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

/**
 * Props for the ModelSlider component
 * @param il - Array of image URLs to display in the slider
 */
type Props = {
  il: string[];
};

// Placeholder images (currently unused, kept for reference)
const placeholder = [
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
];

/**
 * Position classes for images in carousel
 * Maps image positions in a circular path around the carousel
 * bl (back-left) and br (back-right) are the back positions that wrap around
 */

const CAROUSEL_POSITIONS = [
  "bl",
  "lb",
  "lm",
  "lc",
  "center",
  "rc",
  "rm",
  "rb",
  "br",
];

export default function ModelSlider({ il }: Props) {
  // Store the image list from props
  const imageList = il;

  // Track the current center image index
  const [id, setId] = useState(5);
  // Store position classes for each image in the carousel
  const [relPos, setRelPos] = useState<string[]>([]);
  // Debounce flag to prevent rapid navigation clicks
  const [debounce, setDebounce] = useState(false);

  /**
   * Update image positions whenever the current index changes
   * Creates a carousel effect where images have different position classes
   * based on their distance from the center image
   */
  useEffect(() => {
    const totalImages = imageList.length;
    // Initialize all images as "off" (hidden/off-screen)
    const positions = new Array(totalImages).fill("off");

    // Get the actual center index (handles wrapping with modulo)
    const centerImageIndex = (id + totalImages) % totalImages;

    /**
     * Calculate positions for images in the carousel
     * Dynamically maps images to position classes based on their distance from center
     * Works with any number of position states (5, 7, 9, etc.)
     * Formula: offset = -(length / 2) keeps the center position perfectly centered
     */
    const centerOffset = -Math.floor(CAROUSEL_POSITIONS.length / 2);

    for (let j = 0; j < CAROUSEL_POSITIONS.length; j++) {
      const imageIndex = (centerImageIndex + centerOffset + j) % totalImages;
      positions[(imageIndex + totalImages) % totalImages] =
        CAROUSEL_POSITIONS[j];
    }

    // Pre-load all images to ensure smooth carousel transitions
    const preloadImages = () => {
      for (let i = 0; i < imageList.length; i++) {
        const image = new Image();
        image.src = imageList[i];
      }
    };
    preloadImages();

    // Update the component state with new positions
    setRelPos(positions);
  }, [id, imageList]);

  /**
   * Navigate to the next image (move carousel forward)
   * Ignores clicks if debounced to prevent rapid consecutive clicks
   */
  const handleNextImage = () => {
    if (debounce) return;
    setId(id + 1);
    applyDebounce();
  };

  /**
   * Navigate to the previous image (move carousel backward)
   * Ignores clicks if debounced to prevent rapid consecutive clicks
   */
  const handlePreviousImage = () => {
    if (debounce) return;
    setId(id - 1);
    applyDebounce();
  };

  /**
   * Apply debounce to prevent rapid navigation clicks
   * Sets a 1-second cooldown between carousel movements
   */
  const applyDebounce = () => {
    setDebounce(true);
    setTimeout(() => setDebounce(false), 1000);
  };
  return (
    <section id="model_slider">
      {/* Navigation Controls */}
      <div className="controls">
        {/* Previous button (left chevron) */}
        <button className="btn ctr prev" onClick={handlePreviousImage}>
          <BiChevronLeft />
        </button>
        {/* Next button (right chevron) */}
        <button className="btn ctr next" onClick={handleNextImage}>
          <BiChevronRight />
        </button>
      </div>
      <div className="scroller">
        <InfiniteText t="VARTIX" r={true} className="one" />
        <InfiniteText t="VARTIX" r={true} className="two" />
        <InfiniteText t="VARTIX" r={true} className="three" />
      </div>
      {/* Image Carousel Container */}
      <div className="slider">
        {/* Render each image with its calculated position class */}
        {imageList.map((img, i) => (
          <img
            src={img}
            alt=""
            // Position class determines where the image appears (center, left, right, etc.)
            className={`${relPos[i]}`}
            key={"rotaryimg" + i}
          />
        ))}
      </div>
    </section>
  );
}
