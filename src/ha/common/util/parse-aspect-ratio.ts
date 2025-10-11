export default function parseAspectRatio(input: string): { w: number; h: number } | null {
  if (!input) return null;
  
  const match = input.match(/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/);
  if (!match) return null;
  
  const w = parseFloat(match[1]);
  const h = parseFloat(match[2]);
  
  if (w <= 0 || h <= 0) return null;
  
  return { w, h };
}