import { Question, UserAnswers, DiagnosticResult } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What type of vehicle do you drive?",
    subtext: "Different vehicle profiles require specific diagnostic communication protocols.",
    options: [
      { id: "suv", text: "SUV / crossover", subtext: "Standard family or multi-use utility vehicle", weight: 8 },
      { id: "sedan", text: "Sedan", subtext: "Traditional daily commuter or compact car", weight: 6 },
      { id: "pickup", text: "Pickup truck", subtext: "Work, commercial use, or heavy-duty hauling", weight: 9 },
      { id: "minivan", text: "Minivan", subtext: "Family transit, high-occupancy driving", weight: 7 },
      { id: "hybrid_ev", text: "EV or hybrid", subtext: "Electric motor or dual-propulsion battery system", weight: 10 },
      { id: "other", text: "Other", subtext: "Classic, commercial van, or custom vehicle", weight: 5 }
    ]
  },
  {
    id: 2,
    text: "What year range is your vehicle?",
    subtext: "Helps us assess vehicle communication bus (CAN bus) type and privacy compatibility.",
    options: [
      { id: "2021_2026", text: "2021–2026", subtext: "Modern telematics-equipped, complex digital network", weight: 12 },
      { id: "2016_2020", text: "2016–2020", subtext: "Standard digital connectivity, transitioning bus speeds", weight: 15 },
      { id: "2011_2015", text: "2011–2015", subtext: "Analog-digital hybrid, critical age for physical component wear", weight: 18 },
      { id: "2006_2010", text: "2006–2010", subtext: "Standard CAN bus interface, high diagnostic utility potential", weight: 16 },
      { id: "older", text: "Older than 2006", subtext: "Vintage or early OBD-II standard, high interest in smart retrofit", weight: 11 }
    ]
  },
  {
    id: 3,
    text: "How often do you drive on highways or major routes?",
    subtext: "This helps us understand your high-speed risk exposure and commuting context.",
    options: [
      { id: "daily", text: "Daily", subtext: "I drive on highways almost every day", weight: 15 },
      { id: "several_week", text: "Several times per week", subtext: "I drive on highways a few times per week", weight: 12 },
      { id: "few_month", text: "A few times per month", subtext: "I drive on highways occasionally", weight: 8 },
      { id: "rarely", text: "Rarely", subtext: "I rarely drive on highways", weight: 4 }
    ]
  },
  {
    id: 4,
    text: "Which driving context best describes you?",
    subtext: "Canadian weather, infrastructure, and traffic density heavily affect driving stress.",
    options: [
      { id: "gta", text: "GTA commuter", subtext: "High-density multi-lane highway travel, winter slush, frequent stops", weight: 15 },
      { id: "family", text: "Family driver", subtext: "Suburban roads, school zones, weekend trips, multi-passenger focus", weight: 12 },
      { id: "road_trip", text: "Summer road-trip driver", subtext: "Long distances, gravel access roads, heat stress, variable remote routes", weight: 14 },
      { id: "long_distance", text: "Long-distance highway driver", subtext: "Inter-provincial transit, high speed, fatigue risk, commercial routes", weight: 15 },
      { id: "mixed", text: "Mixed city and highway driver", subtext: "Balanced urban driving and weekend highway escapes", weight: 11 }
    ]
  },
  {
    id: 5,
    text: "How confident are you in your current vehicle readiness?",
    subtext: "Your subjective peace of mind is as important as telemetry signals.",
    options: [
      { id: "very_confident", text: "Very confident", subtext: "Never worry about unexpected dashboard lights or mechanical failure", weight: 5 },
      { id: "somewhat_confident", text: "Somewhat confident", subtext: "Mostly fine, but occasionally worry during long trips or winter storms", weight: 12 },
      { id: "not_sure", text: "Not sure", subtext: "Uncertain about hidden fault codes or true vehicle condition", weight: 18 },
      { id: "concerned", text: "Concerned", subtext: "Active dashboard lights, old battery, or upcoming repairs needed", weight: 22 }
    ]
  },
  {
    id: 6,
    text: "Which concern matters most to you?",
    subtext: "Astrateq Gadgets' validation program will prioritize software updates for top concerns.",
    options: [
      { id: "warning_lights", text: "Warning lights and diagnostics", subtext: "Demystifying engine, battery, or brake fault codes immediately", weight: 15 },
      { id: "road_trip", text: "Road-trip reliability", subtext: "Knowing the vehicle is stable before entering spotty signal areas", weight: 12 },
      { id: "privacy", text: "Privacy and data control", subtext: "Keeping vehicle metrics local without sending speed logs to insurers", weight: 18 },
      { id: "family_safety", text: "Family driving confidence", subtext: "Ensuring the vehicle is robust and safe for loved ones", weight: 14 },
      { id: "compatibility", text: "Vehicle compatibility", subtext: "Verifying whether pre-launch hardware fits older or import models", weight: 10 }
    ]
  },
  {
    id: 7,
    text: "How important is privacy in a vehicle intelligence system?",
    subtext: "We are exploring local-first storage. Your response helps validate this requirement.",
    options: [
      { id: "extremely", text: "Extremely important", subtext: "Absolutely critical. No insurer-style monitoring or surveillance", weight: 20 },
      { id: "important", text: "Important", subtext: "Highly preferred. I prefer to keep my driving habits private", weight: 15 },
      { id: "somewhat", text: "Somewhat important", subtext: "Prefer privacy, but open to some cloud features", weight: 8 },
      { id: "not_sure", text: "Not sure", subtext: "I do not think much about modern automotive telematics privacy", weight: 4 }
    ]
  }
];

export function calculateDiagnosticResult(answers: UserAnswers): DiagnosticResult {
  let scoreSum = 0;
  // Calculate raw weighted sum
  for (const q of QUESTIONS) {
    const selectedOptId = answers[q.id];
    const option = q.options.find(o => o.id === selectedOptId);
    if (option) {
      scoreSum += option.weight;
    }
  }

  // Raw maximum sum possible: 10 + 18 + 15 + 15 + 22 + 18 + 20 = 118
  // Let's normalize it to a beautiful dashboard score between 55 and 96
  // (We don't want 0 or 100 as they are outliers that feel less custom/personal).
  const maxPossible = 118;
  const rawRatio = scoreSum / maxPossible;
  
  // Custom formula to land elegantly between 45 and 92 (to make it feel highly realistic and believable)
  const calculatedScore = Math.round(45 + (92 - 45) * rawRatio);
  const score = Math.max(45, Math.min(92, calculatedScore));

  // Determine Classifications based on requested ranges:
  // High Readiness: 80–94, Moderate: 60–79, Needs Attention: 40–59
  let tier: 1 | 2 | 3 = 2;
  let tierName = "Priority Evaluation Cohort";
  let tierTag = "Moderate Readiness";
  let tierDesc = "Your profile shows a moderate-high readiness score, placing you in our priority evaluation cohort for early hardware and feature compatibility matching.";
  
  if (score >= 80) {
    tier = 1;
    tierName = "Founding Early Allocation";
    tierTag = "High Readiness";
    tierDesc = "Your profile shows strong, top-tier alignment with Astrateq Gadgets' pre-launch priorities and hardware communication standards.";
  } else if (score < 60) {
    tier = 3;
    tierName = "Standard Validation Queue";
    tierTag = "Needs Attention";
    tierDesc = "Your profile suggests higher mechanical/driving stress or complex retrofitting required. You've been placed in our Standard Validation Queue.";
  }

  // Customize Risk Profile based on driving context (Q4) and highway (Q3)
  const q4Answer = answers[4];
  const q3Answer = answers[3];
  
  let riskProfile = "Moderate Summer Readiness";
  let riskDesc = "Elevated mechanical stress risks during high-speed highway segments. Normal city operations remain within safe ranges.";

  if (q4Answer === "gta") {
    riskProfile = "High Commuter Congestion Profile";
    riskDesc = "Prone to stop-and-go thermal stress on Ontario 400-series highways. Slush and salt risk during seasonal shifts.";
  } else if (q4Answer === "family") {
    riskProfile = "Balanced Family Safety Profile";
    riskDesc = "Localized driving context with lower sustained speed stress. Heavy focus on short-trip battery and alternator health.";
  } else if (q4Answer === "road_trip") {
    riskProfile = "High Thermal & Distance Stress Profile";
    riskDesc = "Long stretches of highway and variable remote roads. Higher vulnerability to cooling and sensor calibration issues.";
  } else if (q4Answer === "long_distance") {
    riskProfile = "Severe Highway Wear Profile";
    riskDesc = "Sustained high-velocity mechanical strain. Rapid battery discharge rates and critical focus on real-time oil and sensor health.";
  } else if (q4Answer === "mixed") {
    riskProfile = "Moderate Mixed-Use Profile";
    riskDesc = "Balanced highway speed exposure and city idle times. Subject to standard GTA transition conditions.";
  }

  // Custom compatibility and privacy signals based on vehicle year (Q2) and privacy preference (Q7)
  const q2Answer = answers[2];
  let compatibilityConfidence: 'High' | 'Moderate' | 'Pending Review' = 'High';
  if (q2Answer === "older") {
    compatibilityConfidence = 'Pending Review';
  } else if (q2Answer === "2011_2015" || q2Answer === "2006_2010") {
    compatibilityConfidence = 'Moderate';
  }

  const q7Answer = answers[7];
  let privacyAlignment: 'Excellent' | 'High' | 'Good' = 'High';
  if (q7Answer === "extremely") {
    privacyAlignment = 'Excellent';
  } else if (q7Answer === "not_sure") {
    privacyAlignment = 'Good';
  }

  let recommendation = "Unlock your full readiness report and founding cohort eligibility summary by entering your email.";
  if (tier === 1) {
    recommendation = "Outstanding fit detected. Complete your profile with your email to claim your founding early allocation badge.";
  } else if (tier === 3) {
    recommendation = "Compatibility evaluation required. Enter your email to receive custom hardware retrofit suggestions and waitlist updates.";
  }

  return {
    score,
    tier,
    tierName,
    tierTag,
    tierDesc,
    riskProfile,
    riskDesc,
    compatibilityConfidence,
    privacyAlignment,
    recommendation
  };
}
