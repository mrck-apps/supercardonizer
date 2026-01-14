# Supercardonizer Luck Machine

This is a Next.js project created with Firebase Studio. It's a fun "Luck Machine" that randomly determines a prize.

## Running Locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Gemini API key:
    ```
    GEMINI_API_KEY=YOUR_API_KEY
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) in your browser.

## Deployment on Render.com

1.  **Push to GitHub:** Make sure your project is in a GitHub repository.

2.  **Create a New Web Service on Render:**
    *   Go to the Render Dashboard and click **New +** > **Web Service**.
    *   Connect your GitHub repository.

3.  **Configure the service:**
    *   **Name:** Choose a name (e.g., `supercardonizer`).
    *   **Region:** Choose a region close to you.
    *   **Branch:** Select your main branch (e.g., `main`).
    *   **Root Directory:** Leave this blank.
    *   **Build Command:** `./render-build.sh`
    *   **Start Command:** `npm start`
    *   **Environment Variables:**
        *   Click **+ Add Environment Variable**.
        *   **Key:** `GEMINI_API_KEY`
        *   **Value:** Paste your actual Gemini API Key.
        *   **Key:** `NODE_VERSION`
        *   **Value:** `18`

4.  **Deploy:**
    *   Click **Create Web Service**. Render will automatically build and deploy your application.

That's it! Your application will be live at the URL provided by Render.
