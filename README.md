# Wrike Basic API Integration

This project is a simple Node.js application that fetches all tasks from Wrike for the authenticated user and converts them into a unified format. The unified format is then saved as a JSON file.

## Prerequisites
- Node.js (version 20.x or higher)
- npm (Node Package Manager)
- A Wrike API token

## Installation
1. **Clone the Repository:**

    ```
    git clone https://github.com/Margarita-Harutyunyan/wrike-basic-api-integration.git
    cd wrike-basic-api-integration
    ```

2. **Install Dependencies:**

    Install the necessary packages using npm:
    ```
    npm install
    ```

3. **Generate a Wrike API Token:**

- Go to the [Wrike API portal](https://www.wrike.com/frontend/apps/index.html#api).
- Log in with your Wrike account.
- Generate a permanent access token by following the documentation [here](https://help.wrike.com/hc/en-us/articles/210409445-Wrike-API#UUID-a1b0051a-0537-2215-c542-3b04d7205f4b_tokens).
- Copy the generated token.

4. **Set Up Environment Variables:**
- Create a `.env` file in the root of your project:

    ```
    touch .env
    ```
    
- Open the .env file and add your Wrike API token:

    ```
    WRIKE_API_TOKEN=your_wrike_api_token
    ```
    
## Running the Application:
1. **Run the Application:**
    ```
    node main.js
    
     ```
2. **Output:**
- Check the results in a newly generated file, `tasks.json`.
