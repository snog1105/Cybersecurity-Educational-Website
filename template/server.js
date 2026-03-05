import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:4321" }));
app.use(express.json());

app.post("/api/analyze", async (req, res) => {
    try {
        const { contentType, content } = req.body;

        const apiKey = "PODac3UQxv1aiBR1Hve1QSBjXCcRUcEu";
        const yourContent = encodeURIComponent(content);
        let url = "";
        if (contentType == "email") {
            url = `https://ipqualityscore.com/api/json/email/${apiKey}/${yourContent}`;
        } else if (contentType == "phone") {
            url = `https://ipqualityscore.com/api/json/phone/${apiKey}/${yourContent}?country[]=US`;
        } else if (contentType == "website") {
            url = `https://ipqualityscore.com/api/json/url/${apiKey}/${yourContent}`;
        }

        // Debug logs for troubleshooting
        console.log("Received contentType:", contentType);
        console.log("Received content:", content);
        console.log("Requesting URL:", url);

        const response = await fetch(url);
        const data = await response.json();

        // Log the API response for debugging
        console.log("API response:", data);

        res.json(data);

    } catch (error) {
        console.error("Error analyzing content:", error);
        res.status(500).json({ error: "An error occurred while analyzing content." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

