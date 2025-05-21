import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../public/images');
const files = await readdir(inputDir);

async function convertToWebP() {
  for (const file of files) {
    if (file.endsWith('.jpeg') || file.endsWith('.jpg')) {
      const filePath = join(inputDir, file);
      const outputFile = file.replace(/\.(jpe?g)$/, '.webp');
      const outputPath = join(inputDir, outputFile);
      
      // Skip if WebP version already exists
      if (existsSync(outputPath)) {
        console.log(`Skipping ${file}, WebP version already exists`);
        continue;
      }

      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Converted ${file} to WebP`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }
  }
}

convertToWebP().catch(console.error);
