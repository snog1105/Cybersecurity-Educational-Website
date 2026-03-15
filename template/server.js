import 'dotenv/config';
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:4321";

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Fail fast in environments where a required secret is missing
if (!process.env.IPQS_API_KEY) {
    const msg = "Required environment variable IPQS_API_KEY is not set.";
    if (process.env.NODE_ENV === 'production') {
        console.error(msg);
        process.exit(1);
    } else {
        console.warn(msg + " Copy .env.example to .env for local development.");
    }
}

app.post("/api/analyze", async (req, res) => {
    try {
        const { contentType, content } = req.body;

        const apiKey = process.env.IPQS_API_KEY;
        if (!apiKey) {
            console.error("Missing IPQS_API_KEY environment variable");
            return res.status(500).json({ error: "Server misconfiguration: missing API key." });
        }

        const yourContent = encodeURIComponent(content || "");
        let url = "";
        if (contentType == "email") {
            url = `https://ipqualityscore.com/api/json/email/${apiKey}/${yourContent}`;
        } else if (contentType == "phone") {
            url = `https://ipqualityscore.com/api/json/phone/${apiKey}/${yourContent}?country[]=US`;
        } else if (contentType == "website") {
            url = `https://ipqualityscore.com/api/json/url/${apiKey}/${yourContent}`;
        } else {
            return res.status(400).json({ error: "Invalid contentType" });
        }

        console.log("Requesting URL for contentType:", contentType);

        const response = await fetch(url);
        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error("Error analyzing content:", error);
        res.status(500).json({ error: "An error occurred while analyzing content." });
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

