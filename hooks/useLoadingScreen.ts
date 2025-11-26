/**
 * useLoadingScreen Hook
 * 
 * Custom React hook to manage loading screen state and lifecycle
 * Simplifies integration of LoadingScreen component in your app
 * 
 * Features:
 * - Automatic loading state management
 * - Simulated loading delay (configurable)
 * - Callbacks for lifecycle events
 * - TypeScript support
 */

import { useState, useEffect, useCallback } from 'react';

interface UseLoadingScreenOptions {
  /**
   * Initial loading state
   * @default true
   */
  initialLoading?: boolean;

  /**
   * Minimum time to show loading screen in milliseconds
   * Prevents flickering on fast connections
   * @default 1500
   */
  minimumLoadingTime?: number;

  /**
   * Delay before starting fade-out animation in milliseconds
   * @default 1000
   */
  fadeOutDelay?: number;

  /**
   * Duration of fade-out animation in milliseconds
   * @default 600
   */
  fadeOutDuration?: number;

  /**
   * Callback when loading starts
   */
  onLoadingStart?: () => void;

  /**
   * Callback when loading completes
   */
  onLoadingComplete?: () => void;

  /**
   * Callback when component is completely hidden
   */
  onHidden?: () => void;
}

interface UseLoadingScreenReturn {
  /**
   * Whether loading screen should be visible
   */
  isLoading: boolean;

  /**
   * Function to manually complete loading
   */
  completeLoading: () => void;

  /**
   * Function to manually start loading
   */
  startLoading: () => void;

  /**
   * Function to reset loading state
   */
  resetLoading: () => void;
}

/**
 * useLoadingScreen Hook
 * 
 * Manages loading screen state and lifecycle
 * 
 * @example
 * const { isLoading, completeLoading } = useLoadingScreen({
 *   minimumLoadingTime: 2000,
 *   onLoadingComplete: () => console.log('Loading done!')
 * });
 * 
 * useEffect(() => {
 *   // Simulate data fetching
 *   setTimeout(() => {
 *     completeLoading();
 *   }, 3000);
 * }, [completeLoading]);
 * 
 * return <LoadingScreen isVisible={isLoading} />;
 */
export function useLoadingScreen({
  initialLoading = true,
  minimumLoadingTime = 1500,
  fadeOutDelay = 1000,
  fadeOutDuration = 600,
  onLoadingStart,
  onLoadingComplete,
  onHidden,
}: UseLoadingScreenOptions = {}): UseLoadingScreenReturn {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [startTime] = useState(Date.now());

  /**
   * Complete loading with minimum time check
   * Ensures loading screen shows for at least minimumLoadingTime
   */
  const completeLoading = useCallback(() => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

    // Wait for remaining time before hiding
    setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();

      // Callback when completely hidden
      setTimeout(() => {
        onHidden?.();
      }, fadeOutDelay + fadeOutDuration);
    }, remainingTime);
  }, [startTime, minimumLoadingTime, fadeOutDelay, fadeOutDuration, onLoadingComplete, onHidden]);

  /**
   * Start loading
   */
  const startLoading = useCallback(() => {
    setIsLoading(true);
    onLoadingStart?.();
  }, [onLoadingStart]);

  /**
   * Reset loading state
   */
  const resetLoading = useCallback(() => {
    setIsLoading(initialLoading);
  }, [initialLoading]);

  // Auto-complete loading after minimum time (for demo purposes)
  useEffect(() => {
    if (initialLoading) {
      onLoadingStart?.();
    }
  }, []);

  return {
    isLoading,
    completeLoading,
    startLoading,
    resetLoading,
  };
}

export default useLoadingScreen;
