# Use a base image that has Bun pre-installed or install Bun manually
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

RUN apt-get update && apt-get install -y \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdbus-1-3 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libxkbcommon0 \
    libxshmfence1 \
    libx11-xcb1 \
    libdrm2 \
    libxext6 \
    libx11-6 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libpango-1.0-0 \
    libcairo2 \
    libglib2.0-0 \
    libasound2 \
    libexpat1 \
    libfontconfig1 \
    libgtk-3-0 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
    wget

# Copy the package.json and bun.lockb files
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

RUN bun playwright install

# Copy the rest of the application code to the working directory
COPY . .

# Command to run Playwright tests using Bun
CMD ["bun", "run", "playwright", "test"]