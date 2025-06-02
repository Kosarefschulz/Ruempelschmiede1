#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Setting up Professional Next.js Project${NC}"
echo "========================================"

# Create project structure
echo -e "${GREEN}📁 Creating project structure...${NC}"
mkdir -p {src/{app/{api,artikel,datenschutz,impressum,kontakt,leistungen,preise,ueber-uns},components/{ui,sections,forms,calculator,layout},layouts,lib,hooks,services,types,styles},public/{images,fonts},config}

# Create package.json
echo -e "${GREEN}📦 Creating package.json...${NC}"
cat > package.json << 'EOF'
{
  "name": "entruempelung-nrw-pro",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@heroicons/react": "^2.1.1",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.3",
    "react-hook-form": "^7.49.3",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.4",
    "next-seo": "^6.4.0",
    "sharp": "^0.33.2"
  },
  "devDependencies": {
    "@types/node": "^20.11.17",
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3"
  }
}
EOF

echo -e "${GREEN}✅ Setup files created! Now run: npm install${NC}"