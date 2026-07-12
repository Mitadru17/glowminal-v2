/**
 * Glowminal Global Motion Tokens
 * Centralized motion language to ensure absolute continuity across the experience.
 * Avoid hardcoded values. Always use these tokens.
 */

// Easing Tokens (Framer Motion cubic-bezier curves)
export const EASING = {
  standard: [0.4, 0.0, 0.2, 1], // Standard physical movement
  expensive: [0.22, 1, 0.36, 1], // Cinematic, smooth deceleration (Apple/Linear feel)
  entrance: [0.0, 0.0, 0.2, 1], // Entering the screen
  exit: [0.4, 0.0, 1, 1], // Leaving the screen
  emphasized: [0.2, 0.0, 0.0, 1], // Dramatic focus
} as const;

// Duration Tokens (in seconds for Framer Motion)
export const DURATION = {
  instant: 0,
  ultraFast: 0.14,
  fast: 0.18,
  normal: 0.24,
  comfortable: 0.32,
  slow: 0.5,
  hero: 0.7,
  scene: 1.0,
} as const;

// Pre-configured transitions for easy composition
export const TRANSITIONS = {
  standard: { duration: DURATION.normal, ease: EASING.standard },
  expensive: { duration: DURATION.hero, ease: EASING.expensive },
  fast: { duration: DURATION.fast, ease: EASING.standard },
  fade: { duration: DURATION.comfortable, ease: EASING.entrance },
} as const;
