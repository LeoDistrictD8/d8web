import fs from 'fs';
import path from 'path';

export function getImagePaths(folder: string): string[] {
  const imageDir = path.join(process.cwd(), 'public', folder);
  const files = fs.readdirSync(imageDir);

  return files
    .filter(file => /\.(png|jpe?g|gif|webp|svg)$/i.test(file))
    .map(file => `/${folder}/${file}`);
}
