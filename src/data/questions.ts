import { Question, UserAnswers, DiagnosticResult } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How often do you drive per week?",
    subtext: "Driving frequency helps estimate exposure patterns used in your simulated awareness profile.",
    options: [
      { id: "daily", text: "Daily", subtext: "Consistent daily driving with higher cumulative exposure", weight: 15 },
      { id: "3_5_times", text: "3–5 times per week", subtext: "Regular weekly driving, typical commuter pattern", weight: 12 },
      { id: "1_2_times", text: "1–2 times per week", subtext: "Occasional driving, localized weekend errands", weight: 10 },
      { id: "rarely", text: "Rarely", subtext: "Infrequent driving, minimal weekly road exposure", weight: 8 }
    ]
  },
  {
    id: 2,
    text: "What type of driving do you do most often?",
    subtext: "Driving environment helps compare city traffic, suburban routes, highways, and mixed road conditions.",
    options: [
      { id: "highway", text: "Major highway commutes", subtext: "High-speed lanes, repetitive scenery, potential road hypnosis", weight: 12 },
      { id: "city", text: "City driving & errands", subtext: "Stop-and-go, heavy pedestrian traffic, active navigation demands", weight: 12 },
      { id: "suburban", text: "Suburban family routes", subtext: "Lower congestion, residential lanes, predictable patterns", weight: 15 },
      { id: "road_trips", text: "Long-distance road trips", subtext: "Extended hours, changing environments, cumulative physical strain", weight: 10 },
      { id: "commercial", text: "Commercial / professional driving", subtext: "Long daily shifts, strict schedules, maximum focus requirement", weight: 8 }
    ]
  },
  {
    id: 3,
    text: "When do you most often drive?",
    subtext: "Time of day helps estimate when fatigue and attention shifts may be more likely to appear.",
    options: [
      { id: "morning", text: "Morning rush hour", subtext: "High volume, high stress, morning awakening peak", weight: 12 },
      { id: "midday", text: "Mid-day / afternoon", subtext: "Clear visibility, lower congestion, post-lunch dip potential", weight: 15 },
      { id: "evening", text: "Evening rush hour", subtext: "Accumulated daily work fatigue, declining light, high traffic", weight: 10 },
      { id: "night", text: "Late night / early morning", subtext: "Circadian low, dark roads, maximum fatigue vulnerability", weight: 5 }
    ]
  },
  {
    id: 4,
    text: "How often do you drive in low-light or night conditions?",
    subtext: "Low-light exposure helps model how visibility and alertness may influence awareness patterns.",
    options: [
      { id: "always", text: "Almost every trip", subtext: "Predominantly dark or twilight driving environment", weight: 5 },
      { id: "frequently", text: "Frequently", subtext: "Regular night commutes or early morning starts", weight: 10 },
      { id: "occasionally", text: "Occasionally", subtext: "Standard daytime driver with occasional night travel", weight: 12 },
      { id: "rarely", text: "Rarely or never", subtext: "Strictly daytime driving, avoiding dark road conditions", weight: 15 }
    ]
  },
  {
    id: 5,
    text: "How would you rate your typical alertness while driving?",
    subtext: "Self-reported alertness helps estimate how you perceive your attention during typical drives.",
    options: [
      { id: "high", text: "Fully energized and alert", subtext: "No sluggishness, easily maintain crisp road focus", weight: 22 },
      { id: "moderate", text: "Mostly alert but occasionally lose focus", subtext: "Brief periods of drifting attention, quickly recovered", weight: 15 },
      { id: "sluggish", text: "Frequently feel sluggish or day-dreaming", subtext: "Mind wanders often, slow to react to visual cues", weight: 8 },
      { id: "drowsy", text: "Struggle with drowsiness on regular routes", subtext: "Yawning, heavy eyelids, hard to stay present behind the wheel", weight: 4 }
    ]
  },
  {
    id: 6,
    text: "How easily do you get distracted while driving?",
    subtext: "Distraction patterns help model attention stability across different driving contexts.",
    options: [
      { id: "focused", text: "Extremely focused / rarely distracted", subtext: "Devices stowed, passengers managed, full attention on the road", weight: 20 },
      { id: "seldom", text: "Seldom distracted / highly aware", subtext: "Occasional navigation glance, keep main attention centered", weight: 15 },
      { id: "occasionally", text: "Occasionally distracted", subtext: "Interact with audio, passengers, or system notifications", weight: 10 },
      { id: "frequently", text: "Frequently split attention", subtext: "Constantly handling devices, complex dashboard screens, or visual clutter", weight: 4 }
    ]
  },
  {
    id: 7,
    text: "How often do you drive in winter or poor weather?",
    subtext: "Poor weather exposure helps reflect Canadian driving conditions such as snow, rain, fog, and low visibility.",
    options: [
      { id: "very_often", text: "Very often", subtext: "Year-round commuter, navigate snow, slush, or heavy downpours", weight: 8 },
      { id: "sometimes", text: "Sometimes", subtext: "Drive when necessary but prefer to wait out major winter storms", weight: 12 },
      { id: "avoid", text: "Actively try to avoid poor weather", subtext: "Stay home or use transit during adverse conditions", weight: 14 },
      { id: "never", text: "Never or extremely rarely", subtext: "Drive only in ideal, dry road conditions", weight: 15 }
    ]
  },
  {
    id: 8,
    text: "How important is privacy in a driver awareness intelligence system?",
    subtext: "We are exploring local-first awareness models. Your response helps validate driver privacy requirements.",
    options: [
      { id: "extremely", text: "Extremely important", subtext: "Absolutely critical. No insurer-style monitoring or cloud surveillance", weight: 20 },
      { id: "important", text: "Important", subtext: "Highly preferred. I prefer to keep my attentional habits private", weight: 15 },
      { id: "somewhat", text: "Somewhat important", subtext: "Prefer privacy, but open to cloud-assisted safety features", weight: 10 },
      { id: "not_sure", text: "Not sure", subtext: "I do not think much about automotive data privacy", weight: 5 }
    ]
  }
];

export function calculateDiagnosticResult(answers: UserAnswers): DiagnosticResult {
  let scoreSum = 0;
  for (const q of QUESTIONS) {
    const selectedOptId = answers[q.id];
    const option = q.options.find(o => o.id === selectedOptId);
    if (option) {
      scoreSum += option.weight;
    }
  }

  // Define min and max possible weights
  const minPossible = 47; // Sum of minimum options: 8+8+5+5+4+4+8+5 = 47
  const maxPossible = 137; // Sum of maximum options: 15+15+15+15+22+20+15+20 = 137

  const rawRatio = (scoreSum - minPossible) / (maxPossible - minPossible);
  const calculatedScore = Math.round(45 + (96 - 45) * rawRatio);
  const score = Math.max(45, Math.min(96, calculatedScore));

  // Research Cohort Classifications
  let tier: 1 | 2 | 3 = 2;
  let tierName = "Priority Evaluation Cohort";
  let tierTag = "Moderate Awareness Readiness";
  let tierDesc = "Your simulated profile shows moderate driver awareness readiness. You show standard alertness habits but have notable fatigue exposure on evening or busy commutes.";

  if (score >= 80) {
    tier = 1;
    tierName = "Founding Research Cohort";
    tierTag = "High Awareness Readiness";
    tierDesc = "Your simulated profile shows high alertness retention, proactive attention habits, and low overall fatigue risk exposure, qualifying you for the founding research cohort.";
  } else if (score < 60) {
    tier = 3;
    tierName = "Standard Simulation Queue";
    tierTag = "Attention Exposure Risk";
    tierDesc = "Your inputs suggest significant exposure to long driving hours, low-light conditions, and frequent attentional split risks. You have been aligned with our standard simulation queue.";
  }

  // Customize Fatigue Risk Awareness Profile based on Q2 (driving type)
  const q2Answer = answers[2];
  let riskProfile = "Moderate Commuting Stress Profile";
  let riskDesc = "Standard fatigue accumulation aligned with typical Canadian road conditions.";

  if (q2Answer === "highway") {
    riskProfile = "Sustained Highway Fatigue Profile";
    riskDesc = "Prone to 'highway hypnosis' and progressive attention decline on extended, high-speed routes.";
  } else if (q2Answer === "city") {
    riskProfile = "Urban Attentional Split Profile";
    riskDesc = "Frequent cognitive splitting and distraction spikes driven by high-density city traffic demands.";
  } else if (q2Answer === "suburban") {
    riskProfile = "Standard Low-Risk Comfort Profile";
    riskDesc = "Stable local attention retention with minimal acute fatigue hazards on predictable residential routes.";
  } else if (q2Answer === "road_trips") {
    riskProfile = "Long-Distance Sensory Fatigue Profile";
    riskDesc = "Elevated risk of fatigue accumulation during extended driving sessions beyond two hours.";
  } else if (q2Answer === "commercial") {
    riskProfile = "Sustained Professional Strain Profile";
    riskDesc = "Extreme daily driving exposure and cumulative fatigue risk requiring active cognitive rest management.";
  }

  // Alignment values
  const q8Answer = answers[8];
  let privacyAlignment: 'Excellent' | 'High' | 'Good' = 'High';
  if (q8Answer === "extremely") {
    privacyAlignment = 'Excellent';
  } else if (q8Answer === "not_sure") {
    privacyAlignment = 'Good';
  }

  // Map Attention Readiness to simulation profile accuracy or general fit
  const q1Answer = answers[1];
  let attentionReadiness: 'High' | 'Moderate' | 'Pending Review' = 'High';
  if (q1Answer === "rarely") {
    attentionReadiness = 'Pending Review';
  } else if (q1Answer === "1_2_times") {
    attentionReadiness = 'Moderate';
  }

  let recommendation = "Unlock your full simulated driver awareness report and research cohort eligibility by entering your email.";
  if (tier === 1) {
    recommendation = "Outstanding fit detected for our focus research cohort. Complete your profile with your email to claim your early access path.";
  } else if (tier === 3) {
    recommendation = "Attention exposure risk identified. Enter your email to receive custom focus strategies and waitlist updates.";
  }

  return {
    score,
    tier,
    tierName,
    tierTag,
    tierDesc,
    riskProfile,
    riskDesc,
    attentionReadiness,
    privacyAlignment,
    recommendation
  };
}
