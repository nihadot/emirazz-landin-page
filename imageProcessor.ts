import fs from 'fs';
import path from 'path';
import sharp from 'sharp'; // For image compression and conversion
import { fileURLToPath } from 'url';
import winston from 'winston'; // For structured logging

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'imageProcessor.log' }), // Log to file
  ],
});

// Define paths - Updated to use src/assets
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'src', 'assets'); // Changed from public to src/assets
const trashPath = path.join(assetsPath, 'trash'); // Raw images go here
const imagesPath = path.join(assetsPath, 'images'); // Processed images go here
const webpPath = path.join(assetsPath, 'webp'); // WebP images go here
const imagesIndexPath = path.join(assetsPath, 'images.ts'); // Changed from index.ts to images.ts

// Ensure folders exist
[imagesPath, webpPath].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    logger.info(`Created directory: ${dir}`);
  }
});

// Function to sanitize file names for valid TypeScript variable names
function sanitizeFileName(fileName: string): string {
  return fileName
    .replace(/[^a-zA-Z0-9_]/g, '_') // Replace invalid characters with underscores
    .replace(/^[0-9]/, '_$&') // Prefix leading numbers with an underscore
    .replace(/_+/g, '_'); // Replace multiple underscores with a single one
}

// Function to get file size in KB
function getFileSizeInKB(filePath: string): string {
  const stats = fs.statSync(filePath);
  const sizeInKB = (stats.size / 1024).toFixed(2);
  return `${sizeInKB} KB`;
}

// Function to compress and convert images
async function processImage(file: string) {
  const filePath = path.join(trashPath, file);
  const fileName = path.parse(file).name; // Get filename without extension
  const fileExt = path.extname(file).toLowerCase();
  const sanitizedFileName = sanitizeFileName(fileName); // Sanitize file name for valid variable names

  try {
    if (['.jpg', '.jpeg', '.png'].includes(fileExt)) {
      // Compress and convert non-WebP images
      const compressedImagePath = path.join(imagesPath, `${sanitizedFileName}.jpg`);
      const webpImagePath = path.join(webpPath, `${sanitizedFileName}.webp`);

      // Compress the image (reduce size without losing quality)
      await sharp(filePath)
        .jpeg({ quality: 80 }) // Adjust quality as needed
        .toFile(compressedImagePath);

      // Convert to WebP
      await sharp(filePath)
        .webp({ quality: 80 }) // Adjust quality as needed
        .toFile(webpImagePath);

      logger.info(`Processed and converted: ${file}`);
    } else if (fileExt === '.webp') {
      // Compress existing WebP images
      const compressedWebpPath = path.join(webpPath, `${sanitizedFileName}.webp`);
      const compressedImagePath = path.join(imagesPath, `${sanitizedFileName}.webp`);

      // Compress the WebP image (reduce size without losing quality)
      await sharp(filePath)
        .webp({ quality: 80 }) // Adjust quality as needed
        .toFile(compressedWebpPath);

      // Move the compressed WebP to the images folder
      fs.copyFileSync(compressedWebpPath, compressedImagePath);

      logger.info(`Compressed and moved WebP: ${file}`);
    } else {
      logger.warn(`Unsupported file format: ${file}`);
    }
  } catch (error) {
    logger.error(`Error processing ${file}:`, error);
  }
}

// Function to update images.ts with comments
function updateImagesTS(fileName: string, isWebP: boolean = false) {
  const sanitizedFileName = sanitizeFileName(fileName); // Sanitize file name for valid variable names

  try {
    // Get file sizes
    const imageSize = getFileSizeInKB(path.join(imagesPath, `${sanitizedFileName}.${isWebP ? 'webp' : 'jpg'}`));
    const webpSize = getFileSizeInKB(path.join(webpPath, `${sanitizedFileName}.webp`));

    // Create comment block
    const commentBlock = `// ${fileName}\n` +
                         `// - Original: ${imageSize}\n` +
                         `// - WebP: ${webpSize}\n`;

    if (!fs.existsSync(imagesIndexPath)) {
      // Create images.ts if it doesn't exist
      fs.writeFileSync(
        imagesIndexPath,
        commentBlock +
        (isWebP
          ? `export { default as ${sanitizedFileName} } from './images/${sanitizedFileName}.webp';\n` +
            `export { default as ${sanitizedFileName}WebP } from './webp/${sanitizedFileName}.webp';\n`
          : `export { default as ${sanitizedFileName} } from './images/${sanitizedFileName}.jpg';\n` +
            `export { default as ${sanitizedFileName}WebP } from './webp/${sanitizedFileName}.webp';\n`)
      );
      logger.info(`Created images.ts and added exports for ${sanitizedFileName}`);
    } else {
      // Append new exports to images.ts
      const content = fs.readFileSync(imagesIndexPath, 'utf8');
      if (isWebP) {
        if (
          !content.includes(`from './images/${sanitizedFileName}.webp'`) &&
          !content.includes(`from './webp/${sanitizedFileName}.webp'`)
        ) {
          fs.appendFileSync(
            imagesIndexPath,
            commentBlock +
            `export { default as ${sanitizedFileName} } from './images/${sanitizedFileName}.webp';\n` +
            `export { default as ${sanitizedFileName}WebP } from './webp/${sanitizedFileName}.webp';\n`
          );
          logger.info(`Added exports for ${sanitizedFileName} to images.ts`);
        } else {
          logger.info(`Exports for ${sanitizedFileName} already exist in images.ts`);
        }
      } else {
        if (
          !content.includes(`from './images/${sanitizedFileName}.jpg'`) &&
          !content.includes(`from './webp/${sanitizedFileName}.webp'`)
        ) {
          fs.appendFileSync(
            imagesIndexPath,
            commentBlock +
            `export { default as ${sanitizedFileName} } from './images/${sanitizedFileName}.jpg';\n` +
            `export { default as ${sanitizedFileName}WebP } from './webp/${sanitizedFileName}.webp';\n`
          );
          logger.info(`Added exports for ${sanitizedFileName} to images.ts`);
        } else {
          logger.info(`Exports for ${sanitizedFileName} already exist in images.ts`);
        }
      }
    }
  } catch (error) {
    logger.error(`Error updating images.ts for ${sanitizedFileName}:`, error);
  }
}

// Function to process all images in the trash folder
async function processTrashFolder() {
  try {
    const files = fs.readdirSync(trashPath);
    logger.info(`Found ${files.length} files in trash folder`);

    for (const file of files) {
      const fileExt = path.extname(file).toLowerCase();
      const fileName = path.parse(file).name;

      if (['.jpg', '.jpeg', '.png', '.webp'].includes(fileExt)) {
        // Check if the file already exists in images or webp folders
        const compressedExists = fs.existsSync(path.join(imagesPath, `${fileName}.jpg`)) ||
                                fs.existsSync(path.join(imagesPath, `${fileName}.webp`));
        const webpExists = fs.existsSync(path.join(webpPath, `${fileName}.webp`));

        if (!compressedExists && !webpExists) {
          await processImage(file); // Process the image
          updateImagesTS(fileName, fileExt === '.webp'); // Update images.ts
          fs.unlinkSync(path.join(trashPath, file)); // Remove from trash
          logger.info(`Removed ${file} from trash folder`);
        } else {
          logger.info(`Skipping duplicate: ${file}`);
        }
      } else {
        logger.warn(`Skipping unsupported file: ${file}`);
      }
    }
  } catch (error) {
    logger.error(`Error processing trash folder:`, error);
  }
}

// Run the script
processTrashFolder()
  .then(() => {
    logger.info('Image processing completed.');
  })
  .catch((error) => {
    logger.error('Unexpected error in image processing:', error);
  });