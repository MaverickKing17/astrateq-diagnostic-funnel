# Astrateq Gadgets

Astrateq Gadgets is a **privacy-first vehicle intelligence and diagnostic framework** custom-built for Canadian road conditions, with a specific focus on Ontario & GTA freeway commuters. 

This application provides a highly polished, interactive pre-launch diagnostic tool that calculates vehicle summer and winter readiness scores without tracking your physical locations, speed logs, or reselling driver records.

## 🚀 Key Features

- **Canadian Road Readiness Analyzer**: Detailed questionnaire assessing driving behavior, vehicle types, road condition adaptation, and route exposure.
- **Dynamic Score Gauge**: Interactive visual gauge component tracking your real-time vehicle compatibility index (0 to 100).
- **Comprehensive Segment Recommendations**: Tailored summer and winter road advisories depending on vehicle specifications (e.g., FWD, AWD, SUV, Sedan, electric models).
- **The Astrateq Privacy Promise**: Active client-side sandboxed calculation ensures no automated telemetry profiles are shared with commercial auto insurers or tracking brokers.

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Theme**: *Professional Polish* (Cool slate backgrounds, deep navy branding, high-contrast sky accents)

---

## 🔒 Privacy & Safety Charter

Unlike corporate telematics OBD-II devices that constantly log lane changes, speed deltas, and absolute GPS positions, **Astrateq** evaluates readiness profile structures safely:
1. **Local-First Sandboxing**: Math execution resides locally inside secure browser scopes.
2. **Zero Commercial Data Trafficking**: No speed profiles, route coordinates, or license plates are shared or sold.
3. **Optimized for Canadians**: Custom parameters are specifically weighted for highway winter ice conditions and general GTA commute factors.
