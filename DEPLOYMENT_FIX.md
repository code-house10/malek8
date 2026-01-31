# Troubleshooting Vercel Deployment

It seems you are encountering a `404: NOT_FOUND` error when trying to deploy to Vercel. This usually happens due to a corrupted session or invalid project link.

Please follow these steps to resolve the issue:

1.  **Clear Previous Configuration (if any):**
    Open your terminal in the project folder and run:
    ```powershell
    Remove-Item -Recurse -Force .vercel
    ```
    *(If this returns an error saying the item does not exist, that's fine, proceed to the next step.)*

2.  **Logout of Vercel (to ensure a clean session):**
    ```powershell
    npx vercel logout
    ```

3.  **Login to Vercel:**
    ```powershell
    npx vercel login
    ```
    Select your login method (GitHub, Email, etc.) and complete the authentication in your browser.

4.  **Deploy the Project:**
    Run the deployment command:
    ```powershell
    npx vercel
    ```
    - Follow the prompts:
        - Set up and deploy? **Y**
        - Which scope? (Select your account/team)
        - Link to existing project? **N** (unless you have one already created)
        - Project name? (Press Enter for default `tranzit-next`)
        - In which directory is your code located? (Press Enter for `./`)
        - Want to modify these settings? **N**

5.  **Production Deployment (Optional):**
    Once the preview deployment works, you can deploy to production with:
    ```powershell
    npx vercel --prod
    ```

## Common Issues

-   **Asset Errors:** If images are missing, ensure they are in the `public` folder. We have already configured `next.config.ts` to handle static exports correctly if needed.
-   **Build Errors:** We have verified that `npm run build` passes locally. If it fails on Vercel, check the "Build Logs" in your Vercel dashboard.
