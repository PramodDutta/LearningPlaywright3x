// Synthetic training fixture: all personal details and identifiers are fictional.
const user = {
    id: 1001,
    username: "pramod_dutta",
    firstName: "Pramod",
    middleName: null,
    lastName: "Dutta",
    fullName: "Pramod Dutta",
    age: 65,
    dateOfBirth: "1961-04-15",
    gender: "Male",
    email: "pramod.dutta@example.com",
    alternateEmail: "pramod.work@example.com",
    phone: "+91-98765-43210",
    isActive: true,
    isEmailVerified: true,
    profilePicture: "https://example.com/images/pramod.jpg",

    address: {
        houseNumber: "42B",
        street: "MG Road",
        landmark: "Near Central Park",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560001",
        country: "India",
        coordinates: {
            latitude: 12.9716,
            longitude: 77.5946,
        },
    },

    permanentAddress: {
        village: "Rampur",
        district: "Patna",
        state: "Bihar",
        postalCode: "800001",
        country: "India",
    },

    languages: ["English", "Hindi", "Bengali"],
    hobbies: ["Reading", "Travelling", "Gardening", "Photography"],
    skills: [
        "JavaScript",
        "Playwright",
        "API Testing",
        "SQL",
        "Git",
    ],

    education: [
        {
            degree: "Bachelor of Technology",
            specialization: "Computer Science",
            institution: "Delhi Technical University",
            graduationYear: 1983,
            grade: "8.4 CGPA",
        },
        {
            degree: "Master of Business Administration",
            specialization: "Information Systems",
            institution: "Indian Institute of Management",
            graduationYear: 1987,
            grade: "Distinction",
        },
    ],

    employment: {
        company: "Tech Solutions Pvt. Ltd.",
        jobTitle: "Senior QA Architect",
        department: "Quality Engineering",
        employeeId: "EMP-2048",
        employmentType: "Full-time",
        joiningDate: "2015-06-01",
        annualSalary: 1800000,
        currency: "INR",
        isRemote: true,
        officeDays: ["Monday", "Wednesday"],
        manager: {
            name: "Ananya Sharma",
            email: "ananya.sharma@example.com",
        },
    },

    workExperience: [
        {
            company: "Quality Labs",
            role: "Test Engineer",
            from: 1987,
            to: 1995,
        },
        {
            company: "Automation Systems",
            role: "QA Manager",
            from: 1995,
            to: 2015,
        },
    ],

    family: {
        maritalStatus: "Married",
        spouse: {
            name: "Sunita Dutta",
            age: 61,
        },
        children: [
            { name: "Rahul Dutta", age: 34, occupation: "Software Engineer" },
            { name: "Neha Dutta", age: 30, occupation: "Doctor" },
        ],
        emergencyContact: {
            name: "Rahul Dutta",
            relationship: "Son",
            phone: "+91-99887-76655",
        },
    },

    socialMedia: {
        linkedIn: "https://example.com/profiles/pramod-dutta",
        github: "https://example.com/profiles/pramod-dutta",
        twitter: "https://example.com/profiles/pramod-dutta",
    },

    preferences: {
        theme: "dark",
        language: "English",
        timezone: "Asia/Kolkata",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        favoriteColors: ["Blue", "Black", "Green"],
    },

    bankAccounts: [
        {
            bankName: "Example Bank",
            accountType: "Savings",
            accountNumber: "XXXX-XXXX-4821",
            isPrimary: true,
        },
    ],

    documents: {
        panCard: "ABCDE1234F",
        passportNumber: "P1234567",
        drivingLicense: "KA01-2020-1234567",
    },

    loginHistory: [
        { date: "2026-08-08T09:30:00Z", device: "MacBook Pro", success: true },
        { date: "2026-08-07T17:45:00Z", device: "iPhone", success: true },
    ],

    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2026-08-08T09:30:00Z",
    lastLoginAt: "2026-08-08T09:30:00Z",

    getIntroduction() {
        return `Hi, I am ${this.fullName}, a ${this.employment.jobTitle} from ${this.address.city}.`;
    },

    getFullAddress() {
        return `${this.address.houseNumber}, ${this.address.street}, ${this.address.city}, ${this.address.state} - ${this.address.postalCode}`;
    },
};

console.log(user);
console.log(user.getIntroduction());
console.log(user.getFullAddress());
