# 🛡️ HackProof: Cybersecurity Educational Website

![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![Status](https://img.shields.io/badge/Status-Active-success)

**An interactive cybersecurity education website designed to help people recognize online scams, protect personal information, and develop safer digital habits through practical lessons, interactive tools, and real-world examples.**

HackProof makes cybersecurity easier to understand for people of all ages and technical backgrounds, especially senior citizens, students, and individuals with limited technical experience.

The website combines educational resources with interactive features that allow users to learn about cybersecurity threats, evaluate suspicious online activity, and practice recognizing potential scams.

## 📚 Topics Covered

- Phishing and email scams
- Malware and ransomware
- Password security and multi-factor authentication
- Identity theft prevention
- Safe web browsing
- Public Wi-Fi safety
- Social engineering attacks
- Data privacy and digital footprints
- Cryptography and network security

## 🌐 Why This Matters

Online scams can affect anyone, regardless of their age or technical experience. Many scams rely on convincing messages, suspicious links, or impersonation to trick people into sharing personal information or money.

HackProof was inspired by a close family friend who lost thousands of dollars to a phone scam. This experience motivated me to create a resource that could help others recognize similar warning signs before becoming victims.

The goal is to make cybersecurity education practical and accessible so users can better protect themselves online.

## ✨ Features

### 🔍 Content Analyzer

The Content Analyzer allows users to evaluate potentially suspicious websites, email addresses, and phone numbers.

It uses the IPQualityScore API to provide risk assessments and additional technical information that may indicate suspicious activity.

Users can:
- Select a website, email address, or phone number for analysis.
- Enter the information they want to evaluate.
- Receive a risk assessment based on the available indicators.
- View additional technical details about the analysis.

The analyzer is intended to help users investigate unfamiliar links and contact information before trusting them.

**Note:** A safe result does not guarantee that a website, email address, or phone number is trustworthy. Users should continue to exercise caution.

### 📖 Cybersecurity Learning Modules

HackProof provides educational modules covering cybersecurity topics such as:

- Phishing
- Malware
- Cryptography
- Network security

Each module includes an educational video and an explanation of the topic in straightforward language.

These resources help users understand common cybersecurity threats and ways to protect themselves.

### 📝 Interactive Quizzes

Users can complete quizzes to test their understanding of cybersecurity concepts.

The quizzes reinforce information covered in the learning modules and help users practice identifying common threats.

### 📚 Cybersecurity Glossary

HackProof includes a searchable glossary of common cybersecurity terms.

Users can look up unfamiliar words and read explanations written in accessible language.

The glossary helps make technical cybersecurity concepts easier to understand.

### 🎯 Cyber Challenge

The Cyber Challenge provides opportunities for users to apply their cybersecurity knowledge through interactive activities and scenarios.

### 💡 Cyber Tip of the Day

HackProof includes cybersecurity tips that encourage users to practice safer online habits.

## 👥 Who It's For

- Students learning about cybersecurity
- Parents and families
- Teachers and classrooms
- Senior citizens improving their digital literacy
- Anyone interested in recognizing online scams and protecting personal information

## 🚀 Live Website

**Try HackProof here:**

https://hackproof-tau.vercel.app/

The website is accessible through a browser and does not require users to create an account.

## 🛠️ Technologies Used

### Frontend
- Astro
- HTML5
- CSS3
- JavaScript
- React

### Backend
- Node.js
- Express.js
- IPQualityScore API

### Development and Deployment
- Visual Studio Code
- GitHub
- Vercel

The Content Analyzer uses a separate backend to communicate with IPQualityScore and return analysis results to the frontend.

## 💻 Getting Started

Follow these instructions to run HackProof locally.

### Prerequisites

Before getting started, make sure you have:

- Node.js and npm installed
- Git installed
- A code editor such as Visual Studio Code
- An IPQualityScore API key if you want to use the Content Analyzer

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/snog1105/Cybersecurity-Educational-Website.git
```

Navigate to the project directory:

```bash
cd Cybersecurity-Educational-Website/template
```

### 2. Install Dependencies

Install the required packages:

```bash
npm install
```

### 3. Configure Environment Variables

The Content Analyzer requires an IPQualityScore API key.

Inside the `template` directory, create a `.env` file using the existing `.env.example` file as a reference.

For local development, the configuration should look like this:

```env
IPQS_API_KEY=your_ipqualityscore_api_key_here
CORS_ORIGIN=http://localhost:4321
PORT=5000
PUBLIC_API_URL=http://localhost:5000
```

Replace `your_ipqualityscore_api_key_here` with your own IPQualityScore API key.

**Important:** Never upload your actual API key or `.env` file to a public GitHub repository.

The frontend uses `PUBLIC_API_URL` to communicate with the backend, while the backend uses `IPQS_API_KEY` to send requests to IPQualityScore.

### 4. Start the Backend Server

Open a terminal in the `template` directory and run:

```bash
npm start
```

This starts the Express backend, which handles requests from the Content Analyzer.

By default, the backend runs on:

```text
http://localhost:5000
```

Keep this terminal running.

### 5. Start the Website

Open a second terminal in the same `template` directory and run:

```bash
npm run dev
```

Astro will start the development server.

Open the local address displayed in your terminal, which is typically:

```text
http://localhost:4321
```

You can now explore HackProof locally.

### 6. Test the Content Analyzer

To test the Content Analyzer:

1. Open the Content Analysis section.
2. Select Website, Email, or Phone Number.
3. Enter an appropriate test value.
4. Click Analyze.
5. Review the returned assessment and technical details.

The Content Analyzer requires the backend server to be running and a valid IPQualityScore API key.

The educational pages and other frontend features can be explored separately.

## 🔐 Security and Privacy

HackProof is designed to make cybersecurity education accessible without requiring users to create accounts or provide passwords.

The website does not use an application database to store user accounts or Content Analyzer submissions.

When users submit websites, email addresses, or phone numbers for analysis, the backend forwards that information to IPQualityScore to perform the requested check.

The API key is configured on the backend through an environment variable rather than being directly included in the frontend code.

HackProof provides educational guidance and risk assessments, but it cannot guarantee that every online threat will be detected.

## 🔮 Future Improvements

Future plans for HackProof include:

- Interactive phishing scam simulations
- Phone scam simulations
- Expanded Cyber Challenge activities
- Multiple difficulty levels for cybersecurity challenges
- Additional lessons covering emerging cybersecurity threats
- More opportunities for users to practice responding to realistic online scams

These improvements would allow users to practice cybersecurity skills in situations similar to those they might encounter in everyday life.

## 🎯 Mission

HackProof aims to make cybersecurity education understandable and accessible to everyone.

By combining educational resources with interactive tools, the website helps users recognize potential online threats and develop safer digital habits.

Beyond the website, I have also organized cybersecurity awareness workshops for senior citizens to help them recognize scams and protect themselves online.

My goal is to continue expanding HackProof and make practical cybersecurity education available to more people.

---

If HackProof helps you learn something new about staying safe online, consider giving the repository a ⭐!
