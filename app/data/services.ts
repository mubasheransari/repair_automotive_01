export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  icon:
    | "ClipboardCheck"
    | "Wrench"
    | "Disc3"
    | "Search"
    | "Cog"
    | "CircleGauge"
    | "Wind"
    | "BatteryCharging";
  image: string;
  imageAlt: string;
  price: string;
  duration: string;
  intro: string[];
  included: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const IMG = {
  garage: "https://images.unsplash.com/photo-1660064769457-eb9cd2839135",
  engineWork: "https://images.unsplash.com/photo-1632733711679-529326f6db12",
  engineClose: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
  toolbox: "https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0",
  tyre: "https://images.unsplash.com/photo-1735012314901-10b3638774a0",
};

export const services: Service[] = [
  {
    slug: "mot-testing",
    title: "MOT Testing",
    shortDesc:
      "DVSA-approved test centre with a same-day retest if a fault is found on the day.",
    icon: "ClipboardCheck",
    image: IMG.garage,
    imageAlt: "A car parked inside the MOT test bay at Repair Automotive",
    price: "£45",
    duration: "45–60 minutes",
    intro: [
      "Repair Automotive is a full DVSA-approved MOT testing station, meaning your test happens on-site, on our own ramp, by testers we employ directly — not sent out to a partner garage.",
      "If your car needs an advisory or a fail-item repairing, we can usually quote and fix it the same day, then retest free of charge before you leave the yard.",
    ],
    included: [
      "Full DVSA-standard 30-point test",
      "Printed VT20/VT30 certificate on the spot",
      "Plain-English explanation of any advisories",
      "Free retest within 10 working days if a repair is needed",
      "Digital reminder sent 4 weeks before renewal",
    ],
    process: [
      {
        title: "Book your slot",
        text: "Pick a same-week appointment online or by phone — most tests are booked within 48 hours.",
      },
      {
        title: "We test while you wait",
        text: "Grab a coffee in reception or drop the keys and go — most MOTs are done inside the hour.",
      },
      {
        title: "Walk-through, not just paperwork",
        text: "If anything comes up, a technician shows you the actual part before you decide what to do.",
      },
    ],
    faqs: [
      {
        q: "How early can I book my MOT?",
        a: "Up to a month before your current certificate expires, without losing any remaining days on the old one.",
      },
      {
        q: "What happens if my car fails?",
        a: "You get a full breakdown of every fail item and advisory. If you repair it with us, the retest is free.",
      },
      {
        q: "Can I wait on-site during the test?",
        a: "Yes — our reception has seating, wifi and coffee, and most tests take under an hour.",
      },
    ],
  },
  {
    slug: "car-servicing",
    title: "Car Servicing",
    shortDesc:
      "Interim, full and manufacturer-schedule services that keep your warranty intact.",
    icon: "Wrench",
    image: IMG.engineWork,
    imageAlt: "A technician servicing an engine bay at Repair Automotive",
    price: "From £129",
    duration: "2–3 hours",
    intro: [
      "We service to the exact schedule your manufacturer specifies, using the oil grade and parts your handbook calls for — which means servicing with us doesn't void a manufacturer warranty.",
      "Every service comes with a full digital health check: brakes, tyres, fluids and suspension are all inspected and photographed, so you know what's coming before it becomes a breakdown.",
    ],
    included: [
      "Manufacturer-spec oil and filter change",
      "Full digital vehicle health check with photos",
      "Brake, tyre and fluid level inspection",
      "Service book stamped or digital record updated",
      "Warranty-safe parts and documented service history",
    ],
    process: [
      {
        title: "Tell us the make, model and mileage",
        text: "We look up the exact manufacturer schedule so you only pay for the work that's actually due.",
      },
      {
        title: "Health check while it's on the ramp",
        text: "Brakes, tyres, steering and fluids get a full inspection alongside the service items.",
      },
      {
        title: "A report, not just an invoice",
        text: "You get photos and a traffic-light rating for anything that needs attention soon — no pressure to act today.",
      },
    ],
    faqs: [
      {
        q: "Will servicing with you affect my manufacturer warranty?",
        a: "No. UK law (the Block Exemption Regulation) protects your right to use an independent garage without voiding your warranty, provided we use the correct parts and specs — which we do.",
      },
      {
        q: "Interim or full service — which do I need?",
        a: "As a rule of thumb: interim every 6,000 miles, full every 12,000. We'll tell you exactly what's due when you book.",
      },
      {
        q: "Do you use genuine parts?",
        a: "Yes, OEM or genuine-equivalent parts as standard, with genuine parts available on request for warranty-sensitive vehicles.",
      },
    ],
  },
  {
    slug: "brakes-clutches",
    title: "Brakes & Clutches",
    shortDesc:
      "Pads, discs, calipers and clutch replacement, backed by a 12-month guarantee.",
    icon: "Disc3",
    image: IMG.tyre,
    imageAlt: "Close-up of a car wheel where brake work is carried out",
    price: "From £89",
    duration: "1–3 hours",
    intro: [
      "Spongy pedal, grinding noise, or a clutch that's starting to bite higher than it used to — brake and clutch wear rarely announce themselves clearly, so we measure rather than guess.",
      "Every brake job includes disc and pad measurements before and after, and every clutch replacement is inspected against the flywheel and dual-mass damper, not just swapped as a single part.",
    ],
    included: [
      "Pad, disc and caliper inspection with measurements",
      "Brake fluid condition and moisture-content check",
      "Clutch, flywheel and release-bearing assessment",
      "Torque-to-spec refitting with a documented check sheet",
      "12-month parts and labour guarantee",
    ],
    process: [
      {
        title: "Diagnose the actual noise or feel",
        text: "We road-test where safe and measure pad/disc wear rather than replacing on suspicion alone.",
      },
      {
        title: "Quote before we strip anything",
        text: "You get a fixed price for parts and labour before work starts, including if the flywheel needs attention too.",
      },
      {
        title: "Bed-in and re-check",
        text: "New brakes are bedded in and re-torqued after a short test drive before the car goes back to you.",
      },
    ],
    faqs: [
      {
        q: "How do I know if it's brakes or a wheel bearing?",
        a: "Grinding under braking is usually pads; a grinding or humming noise that changes with speed but not braking often points to a bearing. We'll confirm on the ramp before quoting.",
      },
      {
        q: "Do you replace discs every time you do pads?",
        a: "Only if they're worn below the manufacturer's minimum thickness or scored — we measure first and tell you either way.",
      },
      {
        q: "My clutch pedal feels different — is that always a full replacement?",
        a: "Not always. Sometimes it's the slave cylinder or cable adjustment. Diagnosis is part of the quote, not an upsell.",
      },
    ],
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    shortDesc:
      "Dealer-level fault-finding for warning lights, misfires and electrical faults.",
    icon: "Search",
    image: IMG.engineClose,
    imageAlt: "A diagnostic scan tool connected to a car engine",
    price: "From £65",
    duration: "30–90 minutes",
    intro: [
      "A warning light is a symptom, not a diagnosis — our equipment reads the same manufacturer-level fault data a main dealer uses, across VW Group, BMW, Ford, and most other major makes.",
      "We don't clear a code and call it fixed. Every diagnostic job ends with a written explanation of the fault, what's causing it, and what it costs to actually resolve.",
    ],
    included: [
      "Full manufacturer-level fault code read",
      "Live data analysis, not just a code lookup",
      "Written explanation of the root cause",
      "Fixed quote for the actual repair, not just the scan",
      "Fault code cleared and verified after the fix",
    ],
    process: [
      {
        title: "Plug in and pull live data",
        text: "We read stored and pending codes plus live sensor data — a code alone rarely tells the whole story.",
      },
      {
        title: "Cross-check against the symptom",
        text: "We match the fault code against what you're actually experiencing, since more than one code can share a cause.",
      },
      {
        title: "Fix, then verify",
        text: "Once repaired, we clear the code and re-run the test to confirm it doesn't return under load.",
      },
    ],
    faqs: [
      {
        q: "The engine light is on but the car drives fine — is it urgent?",
        a: "Sometimes, sometimes not. An emissions-related code can wait a few days; a misfire code shouldn't. We'll tell you which kind it is over the phone before you book in.",
      },
      {
        q: "Can you diagnose intermittent faults?",
        a: "Yes — we log live data over a test drive where needed, since some faults only show under load or at temperature.",
      },
      {
        q: "Do you diagnose hybrid and EV faults?",
        a: "We handle hybrid drivetrain diagnostics on most mainstream makes. For high-voltage EV battery faults we'll refer you to a specialist if it's outside our equipment's scope.",
      },
    ],
  },
  {
    slug: "gearbox-steering",
    title: "Gearbox & Steering",
    shortDesc:
      "Manual, auto and DSG gearbox work, plus steering and suspension repairs.",
    icon: "Cog",
    image: IMG.toolbox,
    imageAlt: "Tools used for gearbox and suspension work at Repair Automotive",
    price: "From £110",
    duration: "1–4 hours",
    intro: [
      "Clunks over speed bumps, a gearbox that hesitates to select, or steering that pulls to one side all trace back to a handful of wear points — we isolate which one before quoting.",
      "For DSG and automatic gearboxes we carry out manufacturer-interval service and adaptation resets, not just a fluid top-up, so shifting is recalibrated to how the car is actually being driven.",
    ],
    included: [
      "Suspension and steering component inspection",
      "Gearbox fluid condition check and service",
      "DSG/auto adaptation reset where applicable",
      "Track-rod and geometry check after steering work",
      "Road test before and after repair",
    ],
    process: [
      {
        title: "Isolate the noise or feel",
        text: "Clunks, vibration and pulling can all share causes — we test on the ramp and road before quoting parts.",
      },
      {
        title: "Fix the wear point, not just the symptom",
        text: "Bushes, track rod ends and mounts are replaced individually rather than as an unnecessary full assembly.",
      },
      {
        title: "Geometry and adaptation reset",
        text: "Any steering work is followed by a geometry check; gearbox work by an adaptation reset, so the fix actually holds.",
      },
    ],
    faqs: [
      {
        q: "My car pulls to one side — is that an alignment issue?",
        a: "Often yes, but it can also be uneven tyre pressure or a worn suspension bush. We check all three before booking an alignment.",
      },
      {
        q: "Do you work on DSG gearboxes?",
        a: "Yes, including the mechatronic service interval most owners aren't aware exists until it's overdue.",
      },
      {
        q: "Clunking over speed bumps — what's usually the cause?",
        a: "Most commonly a worn anti-roll bar link or top mount. Both are inexpensive fixes if caught before they wear the surrounding components.",
      },
    ],
  },
  {
    slug: "tyres-alignment",
    title: "Tyres & Alignment",
    shortDesc:
      "Supply, fitting, balancing and laser wheel alignment for every budget.",
    icon: "CircleGauge",
    image: IMG.tyre,
    imageAlt: "Close-up of a car tyre being fitted at Repair Automotive",
    price: "From £59 per tyre",
    duration: "20–40 minutes per axle",
    intro: [
      "We stock budget, mid-range and premium tyres from brands like Michelin, Continental and Goodyear, and can usually match your exact size same-day without a wait for delivery.",
      "Every fitting includes a laser alignment check — uneven tyre wear is one of the most common (and avoidable) costs we see, usually caused by alignment that's drifted out over a year or two of driving.",
    ],
    included: [
      "Free tyre size and tread-depth check",
      "Fitting, balancing and valve replacement",
      "Laser four-wheel alignment check",
      "Old tyre disposal included",
      "Tyre pressure monitoring system reset where fitted",
    ],
    process: [
      {
        title: "Check what you actually need",
        text: "We measure tread depth and wear pattern first — sometimes only one or two tyres need replacing, not all four.",
      },
      {
        title: "Fit, balance, and torque to spec",
        text: "Wheels are refitted to the manufacturer's torque setting, not just tightened by feel.",
      },
      {
        title: "Laser alignment check",
        text: "A quick alignment check catches the uneven wear pattern before it shortens the life of your new tyres.",
      },
    ],
    faqs: [
      {
        q: "Do I need to replace all four tyres at once?",
        a: "Not usually. Unless you have all-wheel drive with a manufacturer-specified tread-depth matching rule, we'll only recommend what's actually worn.",
      },
      {
        q: "How do I know if I need an alignment?",
        a: "Uneven wear across the tread, or the car pulling gently to one side, are the two most common signs. We check for free with any tyre fitting.",
      },
      {
        q: "Can you get run-flat or specialist sizes same day?",
        a: "Most sizes yes — call ahead with your registration and we'll confirm stock before you drive over.",
      },
    ],
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    shortDesc:
      "Re-gas, leak detection and full air-con system repair for all makes.",
    icon: "Wind",
    image: IMG.garage,
    imageAlt: "A car interior being prepared for air conditioning service",
    price: "From £75",
    duration: "45–90 minutes",
    intro: [
      "Air-con systems lose a small amount of refrigerant naturally every year — weak airflow or lukewarm air is usually the first sign it's due a re-gas rather than a sign of a bigger fault.",
      "Where there's an actual leak, we use UV dye and electronic leak detection to find the exact point rather than repeatedly re-gassing a system that keeps losing pressure.",
    ],
    included: [
      "System pressure test and performance check",
      "Full re-gas to manufacturer specification",
      "UV dye leak detection where needed",
      "Cabin filter check and replacement if due",
      "Antibacterial treatment for musty odours",
    ],
    process: [
      {
        title: "Test before we touch anything",
        text: "We check output temperature and system pressure to confirm it's actually a refrigerant issue.",
      },
      {
        title: "Re-gas or trace the leak",
        text: "A straightforward re-gas takes under an hour; a suspected leak gets UV dye so we can find the exact source.",
      },
      {
        title: "Confirm the fix",
        text: "We re-test output temperature before handing the car back, not just assume the re-gas has worked.",
      },
    ],
    faqs: [
      {
        q: "How often does air-con need re-gassing?",
        a: "Roughly every 2 years for most cars, as a small amount of refrigerant is lost naturally even with no fault present.",
      },
      {
        q: "Why does my air-con smell musty when it starts?",
        a: "Usually bacterial build-up on the evaporator. A cabin filter change and antibacterial treatment resolves it in most cases.",
      },
      {
        q: "Is a re-gas worth doing if there's a leak?",
        a: "Only after the leak's found and fixed — otherwise the refrigerant simply escapes again within weeks. We'll always check for leaks first.",
      },
    ],
  },
  {
    slug: "batteries-electrics",
    title: "Batteries & Electrics",
    shortDesc:
      "Battery testing and replacement, plus wiring and electrical fault-finding.",
    icon: "BatteryCharging",
    image: IMG.engineWork,
    imageAlt: "A technician testing a car battery and electrical system",
    price: "From £55",
    duration: "20–60 minutes",
    intro: [
      "Slow starting, dashboard warning lights, or a battery that's died once already are rarely random — we load-test the battery and check the alternator's charging rate before recommending a replacement.",
      "For wiring faults — flickering lights, dead sockets, or electrical gremlins that only show up sometimes — we trace the circuit rather than guessing at a fuse.",
    ],
    included: [
      "Battery load test and health percentage",
      "Alternator charging-rate check",
      "Starter motor draw test",
      "Wiring fault tracing with a multimeter, not guesswork",
      "Like-for-like battery replacement with correct coding",
    ],
    process: [
      {
        title: "Load-test before replacing",
        text: "A battery that's merely low can be recharged and retested — we only replace what's actually failed.",
      },
      {
        title: "Check what's charging it",
        text: "A worn alternator will kill a new battery just as fast as an old one, so we check the charging system too.",
      },
      {
        title: "Correct battery coding",
        text: "Modern cars need the new battery registered with the ECU — we handle this as standard, not as an extra.",
      },
    ],
    faqs: [
      {
        q: "My battery is only two years old — why has it died?",
        a: "Short journeys, cold weather and an ageing alternator can all shorten battery life regardless of age. We test all three before replacing anything.",
      },
      {
        q: "Do I need the battery 'coded' after replacement?",
        a: "On most cars built after 2010, yes — otherwise the battery management system won't charge it correctly. It's included in our fitting price.",
      },
      {
        q: "Can you find an intermittent electrical fault?",
        a: "Yes, though it can take longer than a straightforward fault — we trace the circuit with a multimeter and, where needed, over a test drive.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
