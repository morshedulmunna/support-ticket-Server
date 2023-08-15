// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const dirs = [];

for (const dir of dirs) {
  console.log(dir);
  fs.rmSync(dir, { force: true });
  fs.cpSync('./prisma/generated/index.d.ts', dir, {
    force: true,
  });
}
