/* Shared design tokens for inline JSX styles.
 * CSS-side equivalents live in :root in global.css - keep in sync if values change. */

export const ICON_GRAD        = 'linear-gradient(135deg, var(--blue-bright) 0%, var(--blue) 100%)';
export const ICON_GRAD_TEAL   = 'linear-gradient(135deg, var(--teal-bright) 0%, var(--teal) 100%)';
export const ICON_GRAD_VIOLET = 'linear-gradient(135deg, var(--violet-bright) 0%, var(--violet) 100%)';
export const ICON_GRAD_AMBER  = 'linear-gradient(135deg, var(--amber-bright) 0%, var(--amber) 100%)';

export const ICON_SHADOW_SM = '0 1px 4px var(--blue-a16)';
export const ICON_SHADOW_MD = '0 calc(2px * var(--ui-scale)) calc(8px * var(--ui-scale)) var(--blue-a16)';
export const ICON_SHADOW_LG = '0 calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale)) var(--blue-a24)';

export const ICON_SHADOW_TEAL_SM = '0 1px 4px var(--teal-a12)';
export const ICON_SHADOW_TEAL_MD = '0 calc(2px * var(--ui-scale)) calc(8px * var(--ui-scale)) var(--teal-a12)';
export const ICON_SHADOW_TEAL_LG = '0 calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale)) var(--teal-a20)';

export const ICON_SHADOW_VIOLET_SM = '0 1px 4px var(--violet-a12)';
export const ICON_SHADOW_VIOLET_MD = '0 calc(2px * var(--ui-scale)) calc(8px * var(--ui-scale)) var(--violet-a12)';
export const ICON_SHADOW_VIOLET_LG = '0 calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale)) var(--violet-a20)';

/* Cycling palette for icon lists - use ICON_PALETTE[i % ICON_PALETTE.length] */
export const ICON_PALETTE = [
  { grad: 'linear-gradient(135deg, var(--blue-bright)   0%, var(--blue)   100%)', shadow: '0 2px 8px var(--blue-a16)',    color: 'var(--blue)',   soft: 'var(--blue-soft)',   border: 'rgba(25,80,198,0.25)',  glow: 'var(--blue-glow)'   },
  { grad: 'linear-gradient(135deg, var(--teal-bright)   0%, var(--teal)   100%)', shadow: '0 2px 8px var(--teal-a12)',    color: 'var(--teal)',   soft: 'var(--teal-soft)',   border: 'var(--teal-a20)',       glow: 'var(--teal-glow)'   },
  { grad: 'linear-gradient(135deg, var(--violet-bright) 0%, var(--violet) 100%)', shadow: '0 2px 8px var(--violet-a12)',  color: 'var(--violet)', soft: 'var(--violet-soft)', border: 'var(--violet-a20)',     glow: 'var(--violet-glow)' },
  { grad: 'linear-gradient(135deg, var(--amber-bright)  0%, var(--amber)  100%)', shadow: '0 2px 8px var(--amber-a12)',   color: 'var(--amber)',  soft: 'var(--amber-soft)',  border: 'var(--amber-a20)',      glow: 'var(--amber-glow)'  },
  { grad: 'linear-gradient(135deg, #0ea5c9 0%, #0077a8 100%)',                    shadow: '0 2px 8px rgba(0,119,168,.2)', color: '#0077a8',     soft: '#e6f4f8',            border: 'rgba(0,119,168,0.25)',  glow: 'rgba(0,119,168,0.18)' },
  { grad: 'linear-gradient(135deg, #e05c8a 0%, #be2d6c 100%)',                    shadow: '0 2px 8px rgba(190,45,108,.2)',color: '#be2d6c',     soft: '#fce8f0',            border: 'rgba(190,45,108,0.25)', glow: 'rgba(190,45,108,0.18)' },
];
