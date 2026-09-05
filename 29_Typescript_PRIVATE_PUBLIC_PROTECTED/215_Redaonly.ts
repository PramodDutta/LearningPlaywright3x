class PlaywrightConfig {
    private readonly baseURL: string;
    private readonly timeout: number;
    private readonly retries: number;

    constructor(url: string, timeout: number, retries: number) {
        this.baseURL = url;
        this.timeout = timeout;
        this.retries = retries;
    }
    showConfig(): void {
        console.log("URL: " + this.baseURL);
        console.log("Timeout: " + this.timeout + "ms");
        console.log("Retries: " + this.retries);
    }
}

let config = new PlaywrightConfig("https://staging.app.com", 30000, 2);
config.showConfig();

// config.baseURL = "https://other.com";
