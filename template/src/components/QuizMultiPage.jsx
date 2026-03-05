import React, { useState } from 'react';

const questions = [
  // Malware Quiz (7 questions)
  { q: 'What is malware?', a: ['The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', 'The practice and study of techniques for secure communication in the presence of foes.'], correct: [2] },
  { q: 'Why do attackers create and use malware? ', a: ['In order to receive financial gain, espionage, and disruption.', 'To gain benefit', 'For fun', 'To take your personal information'], correct: [0] },
  { q: 'How does malware typically spread from one system to another? ', a: ['From machines', ' By links and software downloads', 'From peoples minds', 'By email attachments and links, infected websites and advertisements, and software downloads from untrusted sources.'], correct: [3] },
  { q: 'How many main types of malware are there?', a: ['5; viruses, worms, spyware, ransomware and trojan.', '4; Spear Phishing, Whaling, Smishing, Vishing', '3; Symmetric-key cryptography, Asymmetric-key cryptography and Hash functions', '3; Technical, physical and administrative protection.'], correct: [0] },
  { q: 'How do you avoid malware?', a: ['By burying it', 'By keeping your software updated, using strong passwords and multi-factor authentication, being cautious with downloads and emails, and utilizing reputable antivirus and anti-malware software.', 'From never using technology again', 'Keeping your password and information safe'], correct: [1] },
  { q: 'Scenario #1: A popup link/ Subject: "Click this popup link to gain $10,000"/Message: “We are offering a once in a lifetime opportunity to receive $10,000. Click the link on the popup and submit your credit card information below and then claim the $10,000!!!”/  Select all incorrect outcomes: (two answers)', a: ['Obligated tone (“once in a lifetime opportunity”)', 'Good choice of words', 'Fake link', 'A malicious popup', 'Beneficial opportunity'], correct: [1,4] },
  { q: 'Scenario #2: Subject: Office Employee Opens a Bad Email/ Message: An employee gets an email saying: “Invoice attached. Urgent!”/ Select all incorrect outcomes: (two answers)', a: ['Pressing tone (“Urgent!”)', 'Fake invoice', 'They should quickly open the email', 'If they open the attachment, it potentially could install a trojan or a virus that secretly steals company passwords and financial data.', 'They should download the invoice and save to the computer for reference'], correct: [2,4] },
  // Phishing Quiz (7 questions)
  { q: 'What is phishing?', a: ['The practice and study of techniques for secure communication in the presence of foes.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.'], correct: [2] },
  { q: 'What information do phishers want?', a: ['Your favorite TV show', 'Your birth certificate', 'The Global news', 'Phishers try to steal your passwords, account numbers, or Social Security numbers.'], correct: [3] },
  { q: 'How many main types of phishing are there?', a: ['4; Email Phishing, Spear Phishing, Smishing, Vishing', '5; viruses, worms, spyware, ransomware and trojan.', '3; Symmetric-key cryptography, Asymmetric-key cryptography and Hash functions.', '3; Technical, physical and administrative protection.'], correct: [0] },
  { q: 'How do you recognize phishing?', a: ['With your eyes', 'If theres a suspicious sender, any poor spelling and grammar, urgent or threatening language and strange or mismatched links.', 'When theres odd syntax', 'By emails'], correct: [1] },
  { q: 'How do you avoid phishing?', a: ['By checking the sender carefully, not clicking any suspicious links and looking for urgent or unusual requests.', 'By keeping your software updated, using strong passwords and multi-factor authentication, being cautious with downloads and emails, and utilizing reputable antivirus and anti-malware software.', ' By clicking on the url the phisher sends', 'Seeing who sent it'], correct: [1] },
  { q: 'Scenario #1: Bank Scam Email/ Subject: "Important: Your account will be suspended"/ Message: “Dear Customer, we noticed unusual activity on your account. Please click the link below to verify your identity.”/ Select all incorrect outcomes: (two answers)', a: ['Generic greeting (“Dear Customer”)', 'Good reminder to check your account', 'Threatening tone (“will be suspended”)', 'From a trusted source', 'Fake link (hovering might show something like secure-bank-login.xyz)'], correct: [1,3] },
  { q: 'Scenario #2: Online Shopping Scam/ Message: “Your order #12345 has been placed. If this wasn\'t you, click here to cancel.” / Select all incorrect outcomes: (two answers)', a: ['Could possibly get your money back', 'You never ordered anything', 'Link leads to a fake login page', 'Creates panic so youll click fast', 'Helpful message'], correct: [0,4] },
  // Cryptography Quiz (7 questions)
  { q: 'What is cryptography?', a: ['Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', 'A type of cyber crime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.', 'The practice and study of techniques for secure communication in the presence of unauthorized users.'], correct: [3] },
  { q: 'How is cryptography used?', a: ['To keep code safe', 'To validate password authenticity while also hiding stored passwords.', 'Keeping files and data in account', 'To drive a car'], correct: [1] },
  { q: 'What are the main applications of cryptography?', a: ['Secure communication, Digital signatures, Secure storage, Cryptocurrencies, and Authentication and access control.', 'Burger king, McDonald\'s, KFC, Chick-fil-a', '5; viruses, worms, spyware, ransomware and trojan.', '4; Spear Phishing, Whaling, Smishing, Vishing'], correct: [0] },
  { q: 'How many types of cryptography are there?', a: ['3; Technical, physical and administrative protection.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', '4; Spear Phishing, Whaling, Smishing, Vishing', '3; Symmetric-key cryptography, Asymmetric-key cryptography and Hash functions.'], correct: [3] },
  { q: 'What is the math behind cryptography?', a: ['Pre-Calculus', 'Mathematical operations like substitution, permutation, and modular arithmetic make it extremely challenging for unauthorized parties to decipher the ciphertext without knowing the key.', 'Geometry', 'A mathematical algorithm'], correct: [1] },
  { q: 'Scenario #1: Online Banking & Payments/ When you log in to your banks website, your username, password, and transactions are encrypted with SSL/TLS./ How is cryptography implemented?', a: ['This prevents attackers from stealing your credit card or login info over the internet.', 'This causes important information to be leaked', ' By giving the bank your personal information', 'By giving your credit card information to a robber'], correct: [0] },
  { q: 'Scenario #2: E-commerce (Amazon, eBay, etc.)/ When you check out online, your payment data is encrypted./ How is cryptography implemented?', a: [' By giving out your payment data to the public', ' By not responding back', 'Cryptographic protocols ensure your credit card number isnt sent in plain text.', 'Storing your payment information in the website'], correct: [2] },
  // Network Security Quiz (7 questions)
  { q: 'What is network security?', a: ['The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'The practice and study of techniques for secure communication in the presence of foes.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.'], correct: [0] },
  { q: 'What are the main importances of network security?', a: ['3; Technical, physical and administrative protection.', 'Protecting sensitive data from theft, loss, or corruption, preventing financial losses due to cyberattacks and maintaining business operations by preventing disruptions.', 'Giving out sensitive data', 'Keeping your accounts safe'], correct: [1] },
  { q: 'What are the key aspects of network security?', a: ['Secure communication, Digital signatures, Secure storage, Cryptocurrencies, and Authentication and access control.', '4; Spear Phishing, Whaling, Smishing, Vishing', '5; viruses, worms, spyware, ransomware and trojan.', 'Confidentiality, Integrity and Availability.'], correct: [3] },
  { q: 'How many types of network security are there?', a: ['5; viruses, worms, spyware, ransomware and trojan.', '3; Technical, physical and administrative protection.', '3; Symmetric-key cryptography, Asymmetric-key cryptography and Hash functions.', '4; Spear Phishing, Whaling, Smishing, Vishing'], correct: [1] },
  { q: 'What are the common network security measures?', a: ['Firewalls, antivirus software and encryption.', '4; Spear Phishing, Whaling, Smishing, Vishing', 'Secure communication, Digital signatures, Secure storage, Cryptocurrencies, and Authentication and access control.', '5; viruses, worms, spyware, ransomware and trojan.'], correct: [0] },
  { q: 'Scenario #1: Hospitals & Healthcare/ Hospitals use VPNs and access controls so doctors can safely view patient records./ How is network security implemented?', a: ['Patient records and information are leaked online', 'Strong security is required by law (like HIPAA in the U.S.) to prevent leaks of private medical info.', ' No Security applied when it comes to the hospital', 'Security is used'], correct: [1] },
  { q: 'Scenario #2: Schools & Universities/ Schools secure student data, online exams, and learning platforms with network authentication and monitoring tools./ How is network security implemented?', a: ['They cause student information to be viewed ', 'To keep kids out of school', 'It makes sure kids can’t play any videogames on their laptops during school', 'They block suspicious traffic and phishing attempts targeting students.'], correct: [1] },
  // Final Quiz (15 questions)
  { q: 'What is malware?', a: ['The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', 'The practice and study of techniques for secure communication in the presence of foes.'], correct: [2] },
  { q: 'What is phishing?', a: ['The practice and study of techniques for secure communication in the presence of foes.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.'], correct: [2] },
  { q: 'What is cryptography?', a: ['Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.', 'The practice and study of techniques for secure communication in the presence of unathorized users.'], correct: [3] },
  { q: 'What is Network Security?', a: ['The measures and practices implemented to protect a computer network and its resources from unauthorized access, misuse, or damage.', 'A type of cybercrime where malicious users attempt to trick individuals into revealing sensitive information, by disguising themselves as a trustworthy entity.', 'The practice and study of techniques for secure communication in the presence of foes.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.'], correct: [0] },
  { q: 'Scenario #1: A popup link/ Subject: "Click this popup link to gain $10,000"/Message: “We are offering a once in a lifetime opportunity to receive $10,000. Click the link on the popup and submit your credit card information below and then claim the $10,000!!!”/  Select all incorrect outcomes: (two answers)', a: ['Obligated tone (“once in a lifetime opportunity”)', 'Good choice of words', 'Fake link', 'A malicious popup', 'Beneficial opportunity'], correct: [1,4] },
  { q: 'Scenario #2: Online Shopping Scam/ Message: “Your order #12345 has been placed. If this wasnt you, click here to cancel.”/ Select all incorrect outcomes: (two answers)', a: ['Could possibly get your money back', 'You never ordered anything', 'Link leads to a fake login page', 'Creates panic so youll click fast', 'Helpful message'], correct: [0,4] },
  { q: 'Scenario #3: Online Banking & Payments/ When you log in to your banks website, your username, password, and transactions are encrypted with SSL/TLS./ Why is cryptography implemented?', a: ['This prevents attackers from stealing your credit card or login info over the internet.', 'This causes important information to be leaked', ' By giving the bank your personal information', 'By giving your credit card information to a robber'], correct: [0] },
  { q: 'Scenario #4: Schools & Universities/ Schools secure student data, online exams, and learning platforms with network authentication and monitoring tools./ Why is Network Security implemented?', a: ['They cause student information to be viewed ', 'To keep kids out of school', 'It makes sure kids can\'t play any video games on their laptops during school', 'They block suspicious traffic and phishing attempts targeting students.'], correct: [1] },
  { q: 'How does malware typically spread from one system to another? ', a: ['From machines', ' By links and software downloads', 'From peoples minds', 'By email attachments and links, infected websites and advertisements, and software downloads from untrusted sources.'], correct: [3] },
  { q: 'Why do attackers create and use malware? ', a: ['In order to receive financial gain, espionage, and disruption.', 'To gain benefit', 'For fun', 'To take your personal information'], correct: [0] },
  { q: 'What information do phishers want?', a: ['Your favorite TV show', 'Your birth certificate', 'The Global news', 'Phishers try to steal your passwords, account numbers, or Social Security numbers.'], correct: [3] },
  { q: 'How do you recognize phishing?', a: ['With your eyes', 'If theres a suspicious sender, any poor spelling and grammar, urgent or threatening language and strange or mismatched links.', 'When theres odd syntax', 'By emails'], correct: [1] },
  { q: 'How is cryptography used?', a: ['To keep code safe', 'To validate password authenticity while also hiding stored passwords.', 'Keeping files and data in account', 'To drive a car'], correct: [1] },
  { q: 'How many types of cryptography are there?', a: ['3; Technical, physical and administrative protection.', 'Any software intentionally designed to harm, disrupt, or gain unauthorized access to computer systems, networks, or devices.', '4; Email Phishing, Spear Phishing, Smishing, Vishing', '3; Symmetric-key cryptography, Asymmetric-key cryptography and Hash functions.'], correct: [3] },
  { q: 'How many types of Network Security are there?', a: ['5; viruses, worms, spyware, ransomware and trojan.', '3; Technical, physical and administrative protection.', '3; Symmetric-key cryptography, Asymmetric-key cryptography and Hash functions.', '4; Email Phishing, Spear Phishing, Smishing, Vishing'], correct: [1] },
  { q: 'What are the common Network Security measures?', a: ['Firewalls, antivirus software and encryption.', '4; Spear Phishing, Whaling, Smishing, Vishing', 'Secure communication, Digital signatures, Secure storage, Cryptocurrencies, and Authentication and access control.', '5; viruses, worms, spyware, ransomware and trojan.'], correct: [0] },
];

export default function QuizMultiPage() {
  const pageSizes = [7, 7, 7, 7, 15];
  const [page, setPage] = useState(0);
  // Track answers as arrays for multi-answer support
  const [answers, setAnswers] = useState(Array(questions.length).fill([]));
  const [showFeedback, setShowFeedback] = useState(false);

  const startIdx = pageSizes.slice(0, page).reduce((a, b) => a + b, 0);
  const endIdx = startIdx + pageSizes[page];
  const pageQuestions = questions.slice(startIdx, endIdx);

  const subtitles = [
    "Malware:",
    "Phishing:",
    "Cryptography:",
    "Network Security:",
    "Final Quiz:"
  ];

  // Handle answer selection for single/multi-answer questions
  function handleAnswer(qIdx, aIdx) {
    const q = pageQuestions[qIdx];
    const globalIdx = startIdx + qIdx;
    const isMulti = q.correct.length > 1;
    const newAnswers = [...answers];
    if (isMulti) {
      const arr = Array.isArray(newAnswers[globalIdx]) ? newAnswers[globalIdx] : [];
      if (arr.includes(aIdx)) {
        newAnswers[globalIdx] = arr.filter(x => x !== aIdx);
      } else {
        newAnswers[globalIdx] = [...arr, aIdx];
      }
    } else {
      newAnswers[globalIdx] = [aIdx];
    }
    setAnswers(newAnswers);
  }

  // Track correct answers for current page
  function getPageFeedback() {
    return pageQuestions.map((q, i) => {
      const correct = q.correct.slice().sort();
      const userAns = Array.isArray(answers[startIdx + i]) ? answers[startIdx + i].slice().sort() : [];
      const isCorrect = JSON.stringify(correct) === JSON.stringify(userAns);
      return { question: q.q, correct, userAns, isCorrect, options: q.a };
    });
  }

  function nextPage() {
    setShowFeedback(false);
    if (page < pageSizes.length - 1) setPage(page + 1);
  }
  function prevPage() {
    setShowFeedback(false);
    if (page > 0) setPage(page - 1);
  }

  function getScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const correct = questions[i].correct.slice().sort();
      const userAns = Array.isArray(answers[i]) ? answers[i].slice().sort() : [];
      if (JSON.stringify(correct) === JSON.stringify(userAns)) score++;
    }
    return score;
  }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1em 0'}}>
        <h1 className="site-title">Cybersecurity Quizzes</h1>
      </div>
      <h2 className="section-title">{subtitles[page]}</h2>
      <p className="lead">Page {page + 1} of {pageSizes.length}</p>
      {pageQuestions.map((q, i) => {
        const isMulti = q.correct.length > 1;
        const userAns = Array.isArray(answers[startIdx + i]) ? answers[startIdx + i] : [];
        return (
          <div key={startIdx + i} className="quiz-card">
            <strong>Q{startIdx + i + 1}: {q.q}</strong>
            <div style={{marginTop:'0.5em'}}>
              {q.a.map((ans, aIdx) => (
                <label key={aIdx} className="option">
                  <input
                    type={isMulti ? "checkbox" : "radio"}
                    name={`q${startIdx + i}${isMulti ? aIdx : ''}`}
                    checked={isMulti ? userAns.includes(aIdx) : userAns[0] === aIdx}
                    onChange={() => handleAnswer(i, aIdx)}
                  />
                  {ans}
                </label>
              ))}
            </div>
          </div>
        );
      })}
      <div className="pager" style={{marginTop:'2em'}}>
        <button className="btn secondary" onClick={prevPage} disabled={page === 0}>Previous</button>
        {!showFeedback ? (
          <button className="btn" onClick={() => setShowFeedback(true)}>
            {page < pageSizes.length - 1 ? "Submit Page" : "Submit Quiz"}
          </button>
        ) : (
          page < pageSizes.length - 1 ? (
            <button className="btn" onClick={nextPage}>Next Page</button>
          ) : (
            <button className="btn" onClick={() => alert(`Your score: ${getScore()} / ${questions.length}`)}>See Final Score</button>
          )
        )}
      </div>
      {/* Show feedback after submitting page */}
      {showFeedback && (
        <div className="feedback" style={{marginTop:'2em'}}>
          <h3>Feedback for this page:</h3>
          {getPageFeedback().map((fb, idx) => (
            <div key={idx} style={{marginBottom:'1em'}}>
              <strong>Q: {fb.question}</strong>
              <div>
                {fb.options.map((opt, optIdx) => (
                  <span key={optIdx} style={{display:'inline-block',marginRight:'1em'}}>
                    <span className={fb.correct.includes(optIdx) ? 'correct' : (fb.userAns.includes(optIdx) ? 'incorrect' : '')} style={{padding:'0.2em 0.6em',borderRadius:6,display:'inline-block'}}>
                      {opt}
                    </span>
                  </span>
                ))}
              </div>
              <div>
                {fb.isCorrect
                  ? <span style={{color: 'green'}}>Correct!</span>
                  : <span style={{color: 'red'}}>Incorrect.</span>
                }
              </div>
            </div>
          ))}
          <div>
            <strong>Current Score: {getScore()} / {questions.length}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
