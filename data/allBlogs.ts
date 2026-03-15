import { blogs as blogsOriginal } from './blogs';
import { blogs2 } from './blogs2';
import { blogs3 } from './blogs3';
import { blogs4 } from './blogs4';
import { blogs5 } from './blogs5';
import { blogs6 } from './blogs6';

// Merge all batches, original posts take priority — duplicates removed by slug
const allRaw = [
  ...blogsOriginal,
  ...blogs2,
  ...blogs3,
  ...blogs4,
  ...blogs5,
  ...blogs6,
];

const seen = new Set<string>();
export const blogs = allRaw.filter((b) => {
  if (seen.has(b.slug)) return false;
  seen.add(b.slug);
  return true;
});
