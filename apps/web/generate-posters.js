const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public', 'videos');
const files = ['Observe.mp4', 'Understand.mp4', 'Evolve.mp4'];

for (const file of files) {
  const videoPath = path.join(publicDir, file);
  const posterPath = path.join(publicDir, file.replace('.mp4', '-poster.jpg'));
  
  if (fs.existsSync(videoPath)) {
    console.log(`Extracting frame for ${file}...`);
    try {
      // Extract the first frame
      execSync(`"${ffmpeg}" -i "${videoPath}" -ss 00:00:00.000 -vframes 1 "${posterPath}" -y`);
      console.log(`Successfully created ${posterPath}`);
    } catch (err) {
      console.error(`Failed to extract frame for ${file}:`, err.message);
    }
  } else {
    console.warn(`File not found: ${videoPath}`);
  }
}
