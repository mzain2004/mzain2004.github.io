// Portfolio Data Store
// This file acts as the "database" for the portfolio.
// The Admin Panel will generate a new version of this file to save changes.

const portfolioData = {
    // --- Configuration ---
    githubUsername: "mzain2004",
    adminPassword: "admin123", // Change this in Admin Panel
    hiddenRepos: ["test-repo", "learning-git"], // Repos to hide from the portfolio

    // --- Personal Info ---
    startYear: 2021, // For calculating "Years Coding"

    // --- Manual Stats ---
    stats: {
        totalCommits: 77,
        hoursCoded: 850,
        coffeeCups: 420
    },

    // --- Skills ---
    skills: [
        { name: "Python", level: 90, category: "Backend" },
        { name: "JavaScript", level: 85, category: "Frontend" },
        { name: "React", level: 80, category: "Frontend" },
        { name: "AWS", level: 75, category: "Cloud" },
        { name: "Docker", level: 70, category: "DevOps" },
        { name: "Cyber Security", level: 85, category: "Security" },
    ],

    // --- Experience ---
    experience: [
        {
            title: "Frontend Developer Intern",
            company: "DEN (Remote)",
            duration: "3 Months",
            description: [
                "Built 5+ responsive UIs using modern HTML5, CSS3, and JavaScript.",
                "Improved code quality through collaborative reviews and version control.",
                "Developed portfolio showcasing 10+ frontend projects.",
            ],
        },
        {
            title: "Academic Projects",
            company: "Air University",
            duration: "Ongoing",
            description: [
                "Hands-on security labs and cloud learning simulations.",
                "Developed secure web applications with vulnerability patching.",
            ],
        },
    ],

    // --- Education ---
    education: [
        {
            degree: "BS Cyber Security",
            institution: "Air University Multan",
            year: "2025-2028",
        },
        {
            degree: "Data Science",
            institution: "Air University Islamabad",
            year: "2024-2025",
        },
        {
            degree: "Intermediate (ICS)",
            institution: "Punjab Group of Colleges",
            year: "2021-2023",
        },
    ],

    // --- Certifications ---
    certifications: [
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            link: "#",
        },
        {
            name: "Google Cybersecurity Certificate",
            issuer: "Google",
            date: "2023",
            link: "#",
        },
        {
            name: "CompTIA Security+",
            issuer: "CompTIA",
            date: "2023",
            link: "#",
        },
        {
            name: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "2024",
            link: "#",
        },
    ],
};

// Export for usage if needed (though currently used as a global script)
if (typeof module !== "undefined") {
    module.exports = portfolioData;
}
