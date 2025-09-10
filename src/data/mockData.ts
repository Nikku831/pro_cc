// Mock data for the CivicCompass prototype

export const mockManifestoData = {
  "Progressive Alliance": {
    totalPromises: 25,
    policyAreas: [
      { name: "Healthcare", promises: 8, percentage: 32 },
      { name: "Education", promises: 6, percentage: 24 },
      { name: "Environment", promises: 5, percentage: 20 },
      { name: "Economy", promises: 4, percentage: 16 },
      { name: "Housing", promises: 2, percentage: 8 }
    ],
    specificity: {
      specific: 68,
      vague: 32
    },
    timeline: {
      shortTerm: 45,
      longTerm: 55
    },
    highlights: [
      {
        category: "Healthcare",
        text: "Increase public hospital funding by 20% over the next two years and introduce universal drug coverage program.",
        specificity: "Specific",
        timeline: "Short-term"
      },
      {
        category: "Education", 
        text: "Provide free tuition for all post-secondary students, funded by progressive taxation reforms.",
        specificity: "Specific",
        timeline: "Long-term"
      },
      {
        category: "Environment",
        text: "Promote sustainable economic growth through strategic investments in green technology, aiming for net-zero emissions by 2050.",
        specificity: "Specific",
        timeline: "Long-term"
      },
      {
        category: "Economy",
        text: "Implement comprehensive economic reforms to ensure prosperity for working families.",
        specificity: "Vague",
        timeline: "Long-term"
      }
    ]
  },
  "Conservative Coalition": {
    totalPromises: 22,
    policyAreas: [
      { name: "Economy", promises: 7, percentage: 32 },
      { name: "Security", promises: 5, percentage: 23 },
      { name: "Healthcare", promises: 4, percentage: 18 },
      { name: "Education", promises: 4, percentage: 18 },
      { name: "Infrastructure", promises: 2, percentage: 9 }
    ],
    specificity: {
      specific: 55,
      vague: 45
    },
    timeline: {
      shortTerm: 60,
      longTerm: 40
    },
    highlights: [
      {
        category: "Economy",
        text: "Reduce corporate tax rate to 15% within first year to stimulate business growth and job creation.",
        specificity: "Specific",
        timeline: "Short-term"
      },
      {
        category: "Security",
        text: "Increase defense spending by $2 billion annually and enhance border security measures.",
        specificity: "Specific", 
        timeline: "Short-term"
      },
      {
        category: "Healthcare",
        text: "Strengthen our healthcare system through improved efficiency and reduced bureaucracy.",
        specificity: "Vague",
        timeline: "Long-term"
      },
      {
        category: "Education",
        text: "Expand school choice programs and increase funding for STEM education initiatives.",
        specificity: "Specific",
        timeline: "Short-term"
      }
    ]
  }
};

export const quizData = [
  {
    question: "What should be the government's economic priority?",
    description: "This helps us understand your views on government's role in the economy.",
    options: [
      {
        text: "Increase social welfare spending",
        description: "Prioritize programs that support citizens in need, funded by higher taxes on wealthy",
        value: "A"
      },
      {
        text: "Lower taxes for businesses",
        description: "Reduce corporate taxation to stimulate economic growth and job creation",
        value: "B"
      }
    ]
  },
  {
    question: "How should climate change be addressed?",
    description: "Your environmental policy preferences help determine party alignment.",
    options: [
      {
        text: "Through strict government regulations",
        description: "Implement mandatory emission standards and environmental protection laws",
        value: "A"
      },
      {
        text: "Through market-based incentives",
        description: "Use tax incentives and market mechanisms to encourage green practices",
        value: "B"
      }
    ]
  },
  {
    question: "What's your preferred approach to higher education?",
    description: "Education funding philosophy reveals ideological alignment.",
    options: [
      {
        text: "Free tuition for all students",
        description: "Government-funded higher education accessible to everyone regardless of income",
        value: "A"
      },
      {
        text: "Merit-based scholarships and loans",
        description: "Support based on academic achievement and financial need with loan programs",
        value: "B"
      }
    ]
  }
];

export const matchResults: Record<string, any> = {
  "AAA": {
    matches: [
      {
        party: "Progressive Alliance",
        percentage: 89,
        description: "Strong alignment with progressive values across all policy areas",
        reasons: [
          "Shared commitment to increased social welfare spending",
          "Aligned approach to environmental regulation and climate action",
          "Strong support for free higher education access",
          "Compatible views on government role in society"
        ]
      },
      {
        party: "Conservative Coalition", 
        percentage: 23,
        description: "Limited alignment on core economic and social policies",
        reasons: [
          "Significant disagreement on tax and spending priorities",
          "Different approaches to environmental policy implementation",
          "Contrasting views on education funding mechanisms"
        ]
      }
    ]
  },
  "BBB": {
    matches: [
      {
        party: "Conservative Coalition",
        percentage: 87,
        description: "Strong alignment with conservative fiscal and social policies",
        reasons: [
          "Shared preference for lower business taxation",
          "Compatible market-based approach to environmental issues", 
          "Aligned views on merit-based education funding",
          "Similar philosophy on limited government intervention"
        ]
      },
      {
        party: "Progressive Alliance",
        percentage: 31,
        description: "Some common ground but fundamental policy disagreements",
        reasons: [
          "Different priorities on government spending and taxation",
          "Contrasting approaches to environmental regulation",
          "Divergent views on higher education accessibility"
        ]
      }
    ]
  },
  "default": {
    matches: [
      {
        party: "Progressive Alliance",
        percentage: 72,
        description: "Moderate alignment with progressive policies",
        reasons: [
          "Some shared priorities on social programs",
          "Partial agreement on environmental approaches",
          "Mixed compatibility on education policies"
        ]
      },
      {
        party: "Conservative Coalition",
        percentage: 58,
        description: "Moderate alignment with conservative approaches",
        reasons: [
          "Some agreement on economic priorities",
          "Partial compatibility on policy implementation",
          "Mixed views on government role"
        ]
      }
    ]
  }
};

export const policyExamples = [
  {
    category: "Fiscal Policy",
    original: "Implement fiscal consolidation through expenditure rationalization and revenue optimization mechanisms.",
    translated: "Reduce government debt by cutting unnecessary spending and finding better ways to collect taxes.",
    impact: "This could mean fewer subsidies and social programs, but potentially lower taxes and reduced national debt in the long term."
  },
  {
    category: "Healthcare",
    original: "Establish integrated care delivery systems with enhanced interoperability frameworks and patient-centered care coordination protocols.",
    translated: "Create connected healthcare systems where hospitals, clinics, and doctors can easily share patient information and work together.",
    impact: "You would experience smoother healthcare visits with less paperwork, reduced wait times, and doctors having better access to your medical history."
  },
  {
    category: "Education",
    original: "Deploy evidence-based pedagogical methodologies within differentiated instructional frameworks to optimize learning outcomes.",
    translated: "Use teaching methods that have been proven to work, with different approaches for different types of students to help everyone learn better.",
    impact: "Students would receive more personalized education tailored to their learning style, potentially leading to better grades and engagement."
  },
  {
    category: "Environment",
    original: "Accelerate decarbonization initiatives through carbon pricing mechanisms and renewable energy transition pathways.",
    translated: "Speed up efforts to reduce carbon emissions by making companies pay for pollution and switching to clean energy sources like solar and wind.",
    impact: "You might see higher energy costs initially, but cleaner air and more green jobs, with potential long-term savings on energy bills."
  }
];