document.addEventListener('DOMContentLoaded', () => {
    const questions = {
        "Section 1: Governance & Accountability": [
            "Does your organisation have a person responsible for data privacy?",
            "Do you keep written records of all personal data processing activities?",
            "Do you review your privacy policies at least once a year?",
            "Do you have a clear privacy policy available to customers/clients?",
            "Is your privacy policy easy for non-lawyers to understand?",
            "Do senior managers regularly review data protection compliance?",
            "Do you have a system to track and update compliance measures?",
            "Are data privacy responsibilities included in staff job roles?",
            "Is data protection part of your company’s core governance structure?",
            "Do you regularly audit your data processing practices?",
            "Is there a clear chain of responsibility for privacy-related decisions?",
            "Do you maintain a central register of privacy-related risks?",
            "Do you review vendor compliance with privacy obligations?",
            "Do you have a budget for data protection and cybersecurity activities?",
            "Do you conduct internal privacy impact assessments for new projects?"
        ],
        "Section 2: Legal Basis & Customer Rights": [
            "Do you have a documented legal reason for processing all customers’ or clients’ personal data?",
            "Do you keep a record of which legal basis applies to each type of data?",
            "When you rely on consent, is it clear and specific?",
            "Do you let customers/clients withdraw consent easily?",
            "Is customer consent separate from other agreements (not hidden in terms)?",
            "Do you inform customers/clients why their data is collected before collection?",
            "Do you tell customers how long you will keep their data?",
            "Can customers access the data you hold about them?",
            "Can customers request corrections to inaccurate data?",
            "Can customers request deletion of their data?",
            "Do you tell customers who else you share their data with?",
            "If you reject a customer’s request about their data, do you explain why?",
            "Do you inform customers if their data will be transferred abroad?",
            "Do you respond to customer rights requests within required timelines?",
            "Do you verify the identity of customers before processing a rights request?"
        ],
        "Section 3: Data Security & IT Systems": [
            "Do you have strong passwords and two-factor authentication in place?",
            "Are company devices encrypted?",
            "Do you regularly update software and security patches?",
            "Is sensitive data stored securely with restricted access?",
            "Do you use firewalls to protect your network?",
            "Do you back up important data regularly?",
            "Are backups stored securely and tested for recovery?",
            "Do you monitor your systems for suspicious activity?",
            "Do you have controls to prevent unauthorised data downloads?",
            "Do you use secure methods for sending data (e.g., encryption)?",
            "Is access to customer data limited to authorised staff only?",
            "Do you have separate accounts for different users?",
            "Is data securely deleted when no longer needed?",
            "Do you test your cybersecurity measures regularly?",
            "Do you have a process to securely manage lost or stolen devices?"
        ],
        "Section 4: Training & Awareness": [
            "Do all staff receive privacy training?",
            "Is training refreshed at least once a year?",
            "Do new employees receive training before handling customer data?",
            "Is privacy training tailored to different job roles?",
            "Are staff aware of phishing and online fraud risks?",
            "Do you run regular security awareness campaigns?",
            "Do staff know how to report a privacy incident?",
            "Do you test staff understanding with quizzes or exercises?",
            "Do senior leaders participate in privacy training?",
            "Is training documented and attendance recorded?"
        ],
        "Section 5: Working with Third Parties & Sending Data Abroad": [
            "Do you check third-party privacy compliance before working with them?",
            "Do you have written contracts covering data protection with third parties?",
            "Do you review third-party compliance regularly?",
            "Do you limit the data shared with third parties to what’s necessary?",
            "Do you check where third parties store your customer data?",
            "Do you require security measures from third parties?",
            "Do you have a process to stop sharing data if a third party fails to comply?",
            "Do you have approval procedures for sending data abroad?",
            "Do you check that data sent abroad has adequate legal protection?",
            "Do you use standard contractual clauses where required?",
            "Do you keep a list of all third parties you share data with?",
            "Do you inform customers about third parties who receive their data?",
            "Do you have a process to review and renew third-party contracts?",
            "Do you verify that cloud service providers meet privacy standards?",
            "Do you assess the risk before onboarding a new vendor?"
        ],
        "Section 6: Incident Response & Breach Management": [
            "Do you have a written incident response plan?",
            "Do staff know what to do if a data breach occurs?",
            "Do you have a system to detect data breaches?",
            "Do you record all incidents, even minor ones?",
            "Do you investigate the cause of breaches?",
            "Do you fix security gaps quickly after a breach?",
            "Do you notify affected customers if required?",
            "Do you notify regulators if required?",
            "Do you review incidents to prevent repeats?",
            "Do you run breach simulation exercises?"
        ],
        "Section 7: Data Limitation Health Check": [
            "Do you only collect data you actually need?",
            "Do you avoid collecting sensitive data unless absolutely necessary?",
            "Do you check if existing data can be used before collecting more?",
            "Do you keep customer data only as long as needed?",
            "Do you delete or anonymise old customer data?",
            "Do you review data retention periods regularly?",
            "Do you store archived data securely?",
            "Do you ensure data accuracy before use?",
            "Do you remove duplicate records?",
            "Do you keep marketing data separate from operational data?",
            "Do you check consent before using data for marketing?",
            "Do you avoid reusing data for purposes not originally agreed to?",
            "Do you track how customer data moves within your company?",
            "Do you control access to archived or backup data?",
            "Do you limit access to customer data to those who need it?",
            "Do you protect printed copies of customer data?",
            "Do you secure portable storage devices containing customer data?",
            "Do you have a process for customers to update their details?",
            "Do you review stored data for accuracy and relevance?",
            "Do you make sure personal data is not kept “just in case”?"
        ]
    };

    const form = document.getElementById('healthCheckForm');
    let questionCounter = 0;

    for (const section in questions) {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section;
        form.appendChild(sectionTitle);

        questions[section].forEach(questionText => {
            questionCounter++;
            const group = document.createElement('div');
            group.className = 'question-group';

            group.innerHTML = `
                <span class="question-text">${questionCounter}. ${questionText}</span>
                <div class="options-container">
                    <label>
                        <input type="radio" name="q${questionCounter}" value="2" required> Yes
                    </label>
                    <label>
                        <input type="radio" name="q${questionCounter}" value="1"> Partly
                    </label>
                    <label>
                        <input type="radio" name="q${questionCounter}" value="0"> No
                    </label>
                </div>
            `;
            form.appendChild(group);
        });
    }

    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        if (!form.checkValidity()) {
             alert('Please answer all questions before calculating the score.');
             return;
        }

        let totalScore = 0;
        const checkedRadios = form.querySelectorAll('input[type="radio"]:checked');
        
        checkedRadios.forEach(radio => {
            totalScore += parseInt(radio.value);
        });

        let riskLevelText = '';
        let riskLevelClass = '';

        if (totalScore >= 160) {
            riskLevelText = "Your Company is at a low risk level. (Good compliance) 👍";
            riskLevelClass = "low-risk";
        } else if (totalScore >= 120) {
            riskLevelText = "Your Company is at a moderate risk level. (Needs improvement) 🤔";
            riskLevelClass = "moderate-risk";
        } else if (totalScore >= 80) {
            riskLevelText = "Your Company is at a high risk level. (Serious compliance gaps) 😟";
            riskLevelClass = "high-risk";
        } else {
            riskLevelText = "Your Company is at a critical risk level. (Urgent action required) 🚨";
            riskLevelClass = "critical-risk";
        }

        resultDiv.innerHTML = `
            <h3>Your Score: ${totalScore} / 200</h3>
            <p>${riskLevelText}</p>
        `;
        resultDiv.className = 'result-display'; // Reset classes
        resultDiv.classList.add(riskLevelClass);
        resultDiv.style.display = 'block';

        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
});