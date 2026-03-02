# Build Fix - SSR Window Reference Error

## Issue
Build was failing with error:
```
ReferenceError: window is not defined
```

## Root Cause
In `components/Hero.tsx`, we were accessing `window.innerWidth` directly in the render method (inside the style prop):

```tsx
// ❌ WRONG - Causes SSR error
style={{ 
  transform: window.innerWidth > 768 ? `...` : 'scale(1.1)'
}}
```

This caused a server-side rendering error because `window` is not available during SSR.

## Solution
Added a state variable to track mobile status and set it in `useEffect`:

```tsx
// ✅ CORRECT - Safe for SSR
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Check if mobile on client side only
  setIsMobile(window.innerWidth <= 768);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

// Then use in render:
style={{ 
  transform: isMobile ? 'scale(1.1)' : `translate3d(0, ${scrollY * 0.5}px, 0) scale(1.1)`
}}
```

## Why This Works
1. `useState(false)` provides a default value for SSR
2. `useEffect` only runs on the client side after hydration
3. The component renders safely on the server with the default value
4. On the client, it updates to the correct value based on window width

## Files Modified
- `components/Hero.tsx`

## Verification
- ✅ No TypeScript errors
- ✅ No diagnostic issues
- ✅ Safe for server-side rendering
- ✅ Maintains all mobile optimizations

## Other Window References
All other `window` references in the codebase are already inside `useEffect` hooks, so they're safe:
- `components/Navbar.tsx` - ✅ Safe
- `components/LoadingBar.tsx` - ✅ Safe
- `components/CallToAction.tsx` - ✅ Safe

## Next Steps
The build should now succeed on Vercel. The fix:
- Maintains all mobile optimizations
- Preserves parallax effect on desktop
- Ensures proper SSR compatibility
- No breaking changes
