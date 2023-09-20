# Google Drive File Uploader

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

The **Google Drive File Uploader** is a solution developed to address the need for a free and alternative way to host and store images and files when facing limitations such as an expired **AWS S3** subscription or a lack of alternative payment methods.

### Why This Solution?

This solution was created to provide an accessible method for individuals and organizations to host their images and files without incurring additional costs. By leveraging Google Drive's free storage capabilities and the Google Drive API, users can easily upload and manage their assets while ensuring accessibility and cost-efficiency.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Google Cloud Console Setup](#google-cloud-console-setup)
  - [Obtaining Client ID and Client Secret](#obtaining-client-id-and-client-secret)
  - [Configuring the OAuth Playground](#configuring-the-oauth-playground)
  - [Project Setup](#project-setup)
- [Usage](#usage)
  - [Instructions](#instructions)
  - [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Getting Started

Welcome to the setup guide for the **Google Drive File Uploader**. This guide will walk you through the necessary steps to get your file uploading solution up and running.

Before you begin, it's essential to ensure that you have the required credentials and dependencies in place. This includes setting up a Google Cloud Console project, obtaining the necessary OAuth credentials, and installing the required packages.

Please follow the step-by-step instructions below to configure your environment and deploy the Google Drive File Uploader. Once set up, you'll have a cost-effective and efficient solution for hosting and managing your images and files using Google Drive.

Let's get started!

### Prerequisites

List any prerequisites or dependencies users need to have installed before starting. For example:

- Node.js (v14 or higher)
- Yarn or npm

### Google Cloud Console Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.

### Obtaining Client ID and Client Secret

3. In the Google Cloud Console, navigate to "APIs & Services" > "Credentials."

4. Click "Create credentials" and choose "OAuth client ID."

5. Select "Web application" as the application type.

6. Provide a meaningful name for your OAuth 2.0 client.

7. Under "Authorized redirect URIs," set the redirect URI to your OAuth Playground URL (e.g., `https://developers.google.com/oauthplayground`).

8. Click "Create" to generate your OAuth 2.0 client ID.

9. Record both the Client ID and Client Secret for later use.

### Configuring the OAuth Playground

10. Visit the [Google Developers OAuth Playground](https://developers.google.com/oauthplayground).

11. In the settings (gear icon) on the top right corner of the page, enable "Use your own OAuth credentials."

12. Enter the previously obtained Client ID and Client Secret.

13. In the OAuth 2.0 scopes, search for and select "https://www.googleapis.com/auth/drive."

14. Click "Authorize APIs."

15. Follow the prompts to grant necessary permissions when redirected to Google.

16. After authorization, click "Exchange authorization code for tokens."

17. Retrieve and save the `refresh_token` from the response for future use.

### Project Setup

18. Clone this repository to your local machine.

19. Open the `.env` file in the project's root directory.

20. Add the following environment variables to your `.env` file:

    ```env
    CLIENT_ID=<Your Client ID>
    SECRET_ID=<Your Client Secret>
    REDIRECTION_URI=<Your OAuth Playground Redirect URI>
    REFRESH_TOKEN=<Your Refresh Token>
    ```

21. Save the file.

22. Install the required packages using the following command:

    ```sh
    yarn install
    ```

23. Start the project using:

    ```sh
    yarn dev
    ```

24. Your Next.js application is now operational and ready for seamless file uploads to Google Drive.

### Screenshots

### Screenshots

![Screenshot](https://drive.google.com/uc?id=1BOKK3xP-S2ueM7qY2SpsOO1-AsP2wfQp)

## Troubleshooting

If you encounter any issues or run into problems while using the **Google Drive File Uploader**, check the following troubleshooting tips:

### 1. Upload Errors

**Issue:** You are unable to upload files, and you receive an error message.

**Solution:**

- Ensure that your internet connection is stable.
- Verify that you have correctly set up your Google Drive API credentials and added them to your project.
- Check your Google Drive storage to ensure you have sufficient space.

### 2. OAuth Token Expiration

**Issue:** Your OAuth token expires after a certain period, causing authentication issues.

**Solution:**

- OAuth tokens typically have an expiration period. If your token expires, you need to refresh it by obtaining a new token.
- Refer to the Google Drive API documentation or your OAuth library documentation for instructions on how to refresh OAuth tokens.
- You may need to exchange the authorization code for new tokens using the OAuth 2.0 flow.

### 3. Unhandled Errors

**Issue:** You encounter unhandled errors or unexpected behavior in the application.

**Solution:**

- Check the application logs for error messages and stack traces to identify the issue.
- Review your code for potential bugs or issues in the implementation.
- Visit our [GitHub Issues](https://github.com/your-username/your-repo/issues) page to see if others have reported similar problems and find potential solutions or workarounds.

If you continue to experience issues or have questions that are not addressed here, please refer to the [Help and Support](#help-and-support) section for additional assistance.

## License

This project is licensed under the MIT License. For further details, refer to the [LICENSE](LICENSE) file.
