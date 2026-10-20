/**
 * Blog / landing-page content for Repair Automotive.
 *
 * Generated from Repair_Automotive-Web_Content.docx — every heading, paragraph,
 * meta title and meta description below is the supplied copy, unchanged.
 *
 * Canonical paths are lower-cased and hyphenated versions of the URLs in the
 * document (e.g. /Car-Repair-Corby -> /car-repair-corby) so they work as clean,
 * case-insensitive-safe URLs.
 */
import type { Service } from "./services";

export const SITE_URL = "https://www.repairautomotive.co.uk";

export type BlogPost = {
  slug: string;
  /** Short label used in the navigation dropdown, cards and breadcrumbs */
  navLabel: string;
  /** Page H1 */
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  icon: Service["icon"];
  image: string;
  imageAlt: string;
  /** Optional link to the matching service page */
  serviceSlug?: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

const IMG = {
  garage: "https://images.unsplash.com/photo-1660064769457-eb9cd2839135",
  engineWork: "https://images.unsplash.com/photo-1632733711679-529326f6db12",
  engineClose: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
  toolbox: "https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0",
  tyre: "https://images.unsplash.com/photo-1735012314901-10b3638774a0",
};

export const homeContent = {
  metaTitle: "Corby Auto Repairs | Repair Automotive",
  metaDescription: "Get reliable Corby auto repairs from Repair Automotive. From servicing and diagnostics to mechanical and electrical repairs, we keep your vehicle road-ready.",
  sections: [
    {
      "heading": "Trusted Corby Auto Repairs for Reliable Vehicle Care",
      "paragraphs": [
        "Keeping your vehicle in good condition requires regular maintenance and professional attention when problems arise. At Repair Automotive, we provide dependable Corby auto repairs for drivers looking for quality vehicle care and reliable workmanship. From routine servicing and diagnostics to mechanical and electrical repairs, our experienced team works to identify vehicle issues and provide practical solutions.",
        "Whether your car has developed an unusual noise, dashboard warning light, starting issue, or performance problem, getting it checked early can help avoid further complications. Our Corby auto repairs service is focused on keeping your vehicle safe, dependable, and ready for everyday driving. We take the time to assess each vehicle properly and recommend the appropriate repair or maintenance work. For reliable Corby auto repairs, drivers can count on professional service and attention to detail."
      ]
    },
    {
      "heading": "Professional Auto Repairs Corby Drivers Can Trust",
      "paragraphs": [
        "Finding reliable auto repairs Corby motorists can depend on is important whenever your vehicle needs servicing or repair. At Repair Automotive, we provide professional automotive solutions designed around the condition and requirements of your vehicle.",
        "Our auto repairs Corby services cover a range of common vehicle needs, including diagnostics, servicing, mechanical repairs, electrical work, and general maintenance. We focus on identifying the actual cause of a problem rather than simply addressing the symptoms, helping customers make informed decisions about their vehicles.",
        "Whether you need routine maintenance or assistance with an unexpected vehicle problem, our team is ready to help. With dependable auto repairs Corby services, Repair Automotive helps local drivers keep their vehicles maintained, reliable, and road-ready."
      ]
    }
  ] as { heading: string; paragraphs: string[] }[],
};

export const blogs: BlogPost[] = [
  {
    slug: "car-repair-corby",
    navLabel: "Car Repair Corby",
    title: "Professional Car Repair Corby for Reliable Vehicle Care",
    metaTitle: "Car Repair Corby | Repair Automotive",
    metaDescription: "Get trusted Car Repair Corby services from Repair Automotive. We provide professional vehicle repairs, servicing, diagnostics, and electrical solutions for local drivers.",
    canonicalPath: "/car-repair-corby",
    icon: "Wrench",
    image: IMG.engineClose,
    imageAlt: "Close-up of an engine bay being serviced at Repair Automotive",
    intro: [
      "When your vehicle needs professional attention, choosing a dependable Car Repair Corby service can make all the difference. At Repair Automotive, we provide reliable vehicle repair and maintenance solutions designed to keep your car performing safely and efficiently. From routine servicing and diagnostics to mechanical and electrical repairs, our team works to identify issues and provide the right solution.",
      "Whether you are dealing with unusual noises, warning lights, starting problems, or changes in vehicle performance, our experienced technicians can inspect your car and determine what needs attention. Our Car Repair Corby service focuses on quality workmanship, clear communication, and practical solutions for local drivers. With professional Car Repair Corby services available for a range of automotive needs, you can keep your vehicle maintained and road-ready."
    ],
    sections: [
      {
        "heading": "Dependable Corby Car Repairs for Local Motorists",
        "paragraphs": [
          "Finding dependable corby car repairs is important when your vehicle requires maintenance or unexpected repairs. At Repair Automotive, we provide professional automotive services to help local motorists address vehicle problems efficiently. Our technicians assess the condition of your car before recommending suitable repair work.",
          "From mechanical faults and servicing to electrical issues and diagnostics, our corby car repairs services cover a range of common vehicle requirements. We aim to provide straightforward service while helping customers understand the work their vehicle needs. For dependable corby car repairs, Repair Automotive offers professional care focused on keeping your vehicle safe, reliable, and ready for the road."
        ]
      }
    ],
  },
  {
    slug: "car-service-corby",
    navLabel: "Car Service Corby",
    title: "Reliable Car Service Corby for Complete Vehicle Care",
    metaTitle: "Car Service Corby | Repair Automotive",
    metaDescription: "Choose reliable Car Service Corby from Repair Automotive for professional servicing, vehicle checks, diagnostics, and maintenance to keep your car road-ready.",
    canonicalPath: "/car-service-corby",
    icon: "ClipboardCheck",
    image: IMG.engineWork,
    imageAlt: "A technician servicing an engine bay at Repair Automotive",
    serviceSlug: "car-servicing",
    intro: [
      "Regular servicing plays an important role in keeping your vehicle safe, dependable, and ready for everyday driving. At Repair Automotive, we provide professional car service Corby solutions for motorists who want reliable vehicle maintenance from experienced technicians. From routine checks and oil changes to diagnostics and general maintenance, our team can assess your vehicle and identify areas that may require attention.",
      "A regular car service Corby appointment can help identify potential issues before they develop into more costly problems. Our technicians carefully inspect key vehicle components and provide practical recommendations based on your car's condition. Whether your vehicle needs routine maintenance or you have noticed a change in its performance, professional servicing can help maintain its reliability.",
      "With dependable car service Corby options available, Repair Automotive is committed to providing straightforward service and quality workmanship for local drivers."
    ],
    sections: [
      {
        "heading": "Professional Corby Car Service for Local Drivers",
        "paragraphs": [
          "Choosing the right corby car service can help you maintain your vehicle and support its long-term performance. At Repair Automotive, we provide servicing solutions designed to meet the needs of different vehicles and driving requirements. Our team focuses on thorough inspections and clear communication throughout the servicing process.",
          "From interim maintenance to more comprehensive checks, our corby car service can help keep your vehicle in good working condition. We can also identify mechanical, electrical, or performance-related concerns that may need further attention.",
          "For motorists looking for dependable corby car service, Repair Automotive provides professional vehicle care with a focus on reliability, proper maintenance, and customer service."
        ]
      }
    ],
  },
  {
    slug: "car-mechanics-corby",
    navLabel: "Car Mechanics Corby",
    title: "Experienced Car Mechanics Corby for Reliable Vehicle Repairs",
    metaTitle: "Car Mechanics Corby | Repair Automotive",
    metaDescription: "Find experienced Car Mechanics Corby at Repair Automotive for reliable servicing, diagnostics, mechanical repairs, and professional vehicle maintenance.",
    canonicalPath: "/car-mechanics-corby",
    icon: "Cog",
    image: IMG.engineWork,
    imageAlt: "A technician servicing an engine bay at Repair Automotive",
    intro: [
      "Finding dependable car mechanics Corby drivers can trust is important when your vehicle needs professional attention. At Repair Automotive, our experienced technicians provide practical repair and maintenance solutions for a wide range of vehicle requirements. Whether your car needs routine servicing, diagnostics, mechanical repairs, or electrical work, our team can inspect the issue and recommend the appropriate solution.",
      "Professional car mechanics Corby can help identify problems early and prevent minor faults from becoming more complicated. If you notice unusual noises, warning lights, starting difficulties, or changes in vehicle performance, arranging an inspection can help determine the cause. At Repair Automotive, our car mechanics Corby service focuses on careful vehicle checks, quality workmanship, and dependable automotive care."
    ],
    sections: [
      {
        "heading": "Trusted Car Mechanic Corby for Local Drivers",
        "paragraphs": [
          "Choosing an experienced car mechanic Corby can give you confidence that your vehicle is being assessed properly. Repair Automotive provides professional automotive services for motorists who need reliable repairs and maintenance. Our technicians take the time to understand the issue before carrying out suitable work.",
          "Whether you require diagnostics, servicing, mechanical repairs, or electrical assistance, an experienced car mechanic Corby can help keep your vehicle in good working condition. For reliable car mechanic Corby services, Repair Automotive is available to support local drivers with professional vehicle care and practical repair solutions."
        ]
      }
    ],
  },
  {
    slug: "corby-car-diagnostics",
    navLabel: "Corby Car Diagnostics",
    title: "Accurate Corby Car Diagnostics for Vehicle Faults",
    metaTitle: "Corby Car Diagnostics | Repair Automotive",
    metaDescription: "Get reliable Corby car diagnostics from Repair Automotive. Our professional technicians identify vehicle faults accurately and provide practical repair solutions.",
    canonicalPath: "/corby-car-diagnostics",
    icon: "Search",
    image: IMG.engineClose,
    imageAlt: "A diagnostic scan tool connected to a car engine",
    serviceSlug: "diagnostics",
    intro: [
      "When your vehicle displays a warning light or develops an unexpected performance issue, professional corby car diagnostics can help identify the underlying problem. At Repair Automotive, we use diagnostic equipment to check vehicle systems and identify potential faults, helping you understand what may need attention.",
      "Professional corby car diagnostics can be useful for a range of issues, including engine warning lights, starting problems, unusual performance, electrical faults, and other vehicle concerns. Rather than relying on guesswork, a diagnostic check can provide useful information about your vehicle's condition and help determine the appropriate next step.",
      "At Repair Automotive, our corby car diagnostics service is designed to provide local motorists with a practical way to investigate vehicle faults. Our technicians assess the diagnostic results and can explain the findings before recommending any necessary repair or maintenance work."
    ],
    sections: [
      {
        "heading": "Professional Car Diagnostic Corby Services",
        "paragraphs": [
          "A reliable car diagnostic Corby service can help drivers understand why a vehicle is experiencing problems. At Repair Automotive, our technicians carry out diagnostic checks to identify fault codes and investigate issues affecting different vehicle systems.",
          "Using professional equipment, our car diagnostic Corby service can help locate potential faults more efficiently. Whether your dashboard warning light has appeared or your vehicle is not performing as expected, a diagnostic check can provide valuable information.",
          "For dependable car diagnostic Corby services, Repair Automotive provides professional vehicle diagnostics to help local drivers identify problems and determine the appropriate repair solution."
        ]
      }
    ],
  },
  {
    slug: "engine-repair-corby",
    navLabel: "Engine Repair Corby",
    title: "Engine Repair Corby for Smooth and Reliable Driving",
    metaTitle: "Engine Repair Corby | Repair Automotive",
    metaDescription: "Engine Repair Corby by Repair Automotive. Get expert engine diagnostics, repairs, and maintenance to keep your vehicle reliable, efficient, and road-ready.",
    canonicalPath: "/engine-repair-corby",
    icon: "Cog",
    image: IMG.engineClose,
    imageAlt: "Close-up of an engine bay being serviced at Repair Automotive",
    intro: [
      "A well-maintained engine is essential for dependable vehicle performance. If you notice unusual sounds, poor acceleration, excessive smoke, warning lights, or difficulty starting your vehicle, it may be time for a professional inspection. Repair Automotive provides Engine Repair Corby services to help identify engine problems and address them with suitable repair solutions.",
      "Our technicians assess engine-related faults carefully to determine the underlying cause before recommending the necessary work. Whether your vehicle requires diagnostics, component replacement, mechanical repairs, or routine engine maintenance, professional attention can help prevent a small issue from developing into a more serious problem.",
      "With Engine Repair Corby services available for local motorists, we focus on accurate fault identification, quality workmanship, and dependable vehicle care. Our goal is to help you understand the condition of your engine and make informed decisions about the required repairs. From minor faults to more complex engine concerns, our Engine Repair Corby team can provide practical automotive support."
    ],
    sections: [
      {
        "heading": "Corby Engine Repair to Address Engine Problems",
        "paragraphs": [
          "Unexpected engine problems can affect your vehicle's performance and reliability. With professional Corby Engine Repair, drivers can have their vehicles inspected and receive suitable solutions based on the condition of the engine.",
          "At Repair Automotive, our technicians investigate engine faults and provide Corby Engine Repair for a range of mechanical concerns. Proper diagnostics can help pinpoint the source of a problem and reduce unnecessary repair work.",
          "If your vehicle requires Corby Engine Repair, our team can assess the issue and explain the recommended repair before work begins. We provide professional engine care to help local drivers maintain reliable vehicle performance."
        ]
      }
    ],
  },
  {
    slug: "clutch-repairs-corby",
    navLabel: "Clutch Repairs Corby",
    title: "Clutch Repairs Corby for Smoother Gear Changes",
    metaTitle: "Clutch Repairs Corby | Repair Automotive",
    metaDescription: "Need Clutch Repairs Corby? Repair Automotive provides professional clutch inspections, repairs, and replacements to keep your vehicle shifting smoothly.",
    canonicalPath: "/clutch-repairs-corby",
    icon: "Disc3",
    image: IMG.toolbox,
    imageAlt: "Tools used for gearbox and suspension work at Repair Automotive",
    serviceSlug: "brakes-clutches",
    intro: [
      "A faulty clutch can make driving difficult and may affect the overall performance of your vehicle. If you experience slipping, difficulty changing gears, unusual noises, or a clutch pedal that feels different, it may be time to have your vehicle inspected. Repair Automotive provides professional clutch repairs Corby drivers can rely on for a range of clutch-related problems.",
      "Our technicians assess the clutch system to identify the source of the issue and recommend the appropriate repair or replacement. Getting problems checked early can help prevent further wear and reduce the risk of more serious transmission-related issues. With reliable clutch repairs Corby, motorists can have their vehicles professionally inspected and receive practical solutions based on the condition of the clutch.",
      "Whether you need a clutch inspection, repair, or replacement, our clutch repairs Corby service focuses on dependable workmanship and careful vehicle care."
    ],
    sections: [
      {
        "heading": "Reliable Corby Clutch Repairs for Local Motorists",
        "paragraphs": [
          "When clutch problems affect your vehicle, professional corby clutch repairs can help restore smooth and comfortable driving. Repair Automotive provides clutch services for motorists experiencing common problems such as clutch slipping, stiff pedals, difficulty selecting gears, or unusual clutch noises.",
          "Our team carries out appropriate checks before recommending corby clutch repairs, helping ensure the required work addresses the actual problem. We focus on providing clear information and suitable repair solutions for each vehicle.",
          "For dependable corby clutch repairs, Repair Automotive can help assess your clutch system and determine whether repair or replacement is required. Professional attention can help maintain smooth gear changes and reliable vehicle performance."
        ]
      }
    ],
  },
  {
    slug: "emergency-car-repair-corby",
    navLabel: "Emergency Car Repair Corby",
    title: "Emergency Car Repair Corby When You Need Help Fast",
    metaTitle: "Emergency Car Repair Corby | Repair Automotive",
    metaDescription: "Need Emergency Car Repair Corby? Repair Automotive provides prompt vehicle repairs for unexpected breakdowns, faults, and urgent automotive problems.",
    canonicalPath: "/emergency-car-repair-corby",
    icon: "Wrench",
    image: IMG.garage,
    imageAlt: "A car parked inside the Repair Automotive garage bay",
    intro: [
      "Unexpected vehicle problems can happen at any time and may leave you unable to continue your journey. When your car develops a serious fault, Emergency Car Repair Corby services can provide the professional assistance you need. Repair Automotive helps local motorists deal with urgent vehicle issues, including breakdown-related faults, starting problems, warning lights, electrical failures, and other mechanical concerns.",
      "Getting a vehicle checked promptly can help identify the cause of a breakdown and determine the most suitable repair. Our technicians assess the condition of your vehicle and work to address the underlying problem where possible. With Emergency Car Repair Corby, you can get professional automotive support when an unexpected fault disrupts your plans.",
      "Whether you are dealing with a sudden mechanical issue or your vehicle has stopped working as expected, our Emergency Car Repair Corby service provides practical repair assistance for local drivers."
    ],
    sections: [
      {
        "heading": "Fast Corby Emergency Car Repair for Unexpected Breakdowns",
        "paragraphs": [
          "A sudden breakdown can be stressful, particularly when your vehicle cannot be driven safely. Corby Emergency Car Repair services can help motorists address urgent vehicle problems and understand what is required to get their car back on the road.",
          "Repair Automotive provides Corby Emergency Car Repair for a range of unexpected faults. Our technicians can inspect the vehicle, identify potential problems, and recommend the appropriate repair based on its condition.",
          "When you need Corby Emergency Car Repair, getting professional assistance quickly can help reduce disruption and prevent further vehicle damage. Repair Automotive is available to help local drivers with practical solutions for urgent automotive problems."
        ]
      }
    ],
  },
  {
    slug: "air-conditioning-repairs-corby",
    navLabel: "Air Conditioning Repairs Corby",
    title: "Air Conditioning Repairs Corby for Comfortable Driving",
    metaTitle: "Air Conditioning Repairs Corby | Repair Automotive",
    metaDescription: "Get reliable Air Conditioning Repairs Corby from Repair Automotive. We diagnose AC faults and provide professional repairs to keep your car cool and comfortable.",
    canonicalPath: "/air-conditioning-repairs-corby",
    icon: "Wind",
    image: IMG.garage,
    imageAlt: "A car interior being prepared for air conditioning service",
    serviceSlug: "air-conditioning",
    intro: [
      "A properly working air conditioning system helps keep your vehicle comfortable throughout the year. If your car's AC is blowing warm air, losing cooling power, making unusual noises, or developing unpleasant smells, it may need professional attention. Repair Automotive provides air conditioning repairs Corby for motorists experiencing a range of vehicle air conditioning problems.",
      "Our technicians can inspect the system to identify potential faults and determine the appropriate repair. Issues with refrigerant, compressors, electrical components, leaks, or other AC parts can affect cooling performance and should be checked by experienced professionals. With reliable air conditioning repairs Corby, drivers can have their vehicle's air conditioning system assessed and repaired according to its condition.",
      "Whether your AC has stopped cooling properly or you have noticed a gradual decline in performance, our air conditioning repairs Corby service can help restore comfortable airflow and dependable cooling."
    ],
    sections: [
      {
        "heading": "Restore Your Vehicle's Cooling with Corby Air Conditioning Repairs",
        "paragraphs": [
          "When your car's air conditioning is not working as expected, professional corby air conditioning repairs can help identify the cause of the problem. Repair Automotive provides automotive AC services designed to address common cooling and system-related faults.",
          "Our technicians inspect the system before recommending suitable corby air conditioning repairs, helping ensure the required work is based on the actual condition of your vehicle. From cooling issues to system faults, we can assess the problem and explain the recommended solution.",
          "For dependable corby air conditioning repairs, Repair Automotive provides professional vehicle AC care to help motorists enjoy a cooler and more comfortable driving experience."
        ]
      }
    ],
  },
  {
    slug: "wheel-alignment-corby",
    navLabel: "Wheel Alignment Corby",
    title: "Wheel Alignment Corby for Better Handling and Tyre Wear",
    metaTitle: "Wheel Alignment Corby | Repair Automotive",
    metaDescription: "Get professional Wheel Alignment Corby services from Repair Automotive. Correct wheel alignment helps improve handling, tyre wear, and driving stability.",
    canonicalPath: "/wheel-alignment-corby",
    icon: "CircleGauge",
    image: IMG.tyre,
    imageAlt: "Close-up of a car tyre being fitted at Repair Automotive",
    serviceSlug: "tyres-alignment",
    intro: [
      "Correct wheel alignment is important for maintaining stable handling, even tyre wear, and a smoother driving experience. If your vehicle pulls to one side, the steering wheel feels off-centre, or your tyres are wearing unevenly, it may be time to have the alignment checked. Repair Automotive provides professional wheel alignment Corby services to help identify and correct alignment issues.",
      "Over time, potholes, kerbs, and everyday driving can affect the alignment of your vehicle's wheels. Incorrect alignment can contribute to uneven tyre wear and may affect how your car responds on the road. Our wheel alignment Corby service is designed to assess the positioning of the wheels and make the necessary adjustments according to your vehicle's requirements.",
      "Regular alignment checks can also be useful when fitting new tyres or after suspension and steering work. With reliable wheel alignment Corby, Repair Automotive helps local motorists maintain proper vehicle handling and tyre performance."
    ],
    sections: [
      {
        "heading": "Precise Corby Wheel Alignment for Safer Driving",
        "paragraphs": [
          "If you notice changes in steering or unusual tyre wear, professional corby wheel alignment can help determine whether incorrect wheel positioning is contributing to the problem. Our technicians inspect the alignment and identify adjustments that may be required.",
          "At Repair Automotive, our corby wheel alignment service focuses on accurate checks and appropriate adjustments to support balanced handling. Proper alignment can help your tyres wear more evenly and maintain consistent contact with the road.",
          "For dependable corby wheel alignment, our team provides professional vehicle care designed to help keep your car handling smoothly and performing as expected."
        ]
      }
    ],
  },
  {
    slug: "car-battery-replacement-corby",
    navLabel: "Car Battery Replacement Corby",
    title: "Car Battery Replacement Corby for a Reliable Start Every Time",
    metaTitle: "Car Battery Replacement Corby | Repair Automotive",
    metaDescription: "Need Car Battery Replacement Corby? Repair Automotive provides reliable battery checks and replacement services to help keep your vehicle starting reliably.",
    canonicalPath: "/car-battery-replacement-corby",
    icon: "BatteryCharging",
    image: IMG.engineWork,
    imageAlt: "A technician testing a car battery and electrical system",
    serviceSlug: "batteries-electrics",
    intro: [
      "A healthy car battery is essential for starting your vehicle and keeping its electrical systems working properly. If you notice slow engine cranking, dim headlights, electrical problems, or repeated starting difficulties, it may be time to consider professional car battery replacement Corby services.",
      "At Repair Automotive, we can check your existing battery and charging system to determine whether a replacement is required. A weak or ageing battery can leave you stranded unexpectedly, particularly when it can no longer hold a sufficient charge. Getting the issue checked early can help prevent inconvenient breakdowns and starting problems.",
      "Our car battery replacement Corby service provides a practical solution when your current battery is no longer performing reliably. We assess your vehicle's requirements and provide suitable battery replacement services. With professional car battery replacement Corby, local drivers can address battery problems and maintain dependable vehicle performance."
    ],
    sections: [
      {
        "heading": "Get Reliable Corby Car Battery Replacement Without the Hassle",
        "paragraphs": [
          "A vehicle that struggles to start can be a sign that the battery needs attention. With professional corby car battery replacement, Repair Automotive can help identify battery-related problems and provide the appropriate solution.",
          "Our technicians carry out suitable checks before completing corby car battery replacement, helping ensure the battery is appropriate for your vehicle. We can also check for other electrical or charging issues that may affect battery performance.",
          "If you need corby car battery replacement, Repair Automotive provides professional battery services designed to help restore reliable starting and keep your vehicle ready for the road."
        ]
      }
    ],
  },
  {
    slug: "car-electrical-repair-corby",
    navLabel: "Car Electrical Repair Corby",
    title: "Car Electrical Repair Corby for Everyday Vehicle Problems",
    metaTitle: "Car Electrical Repair Corby | Repair Automotive",
    metaDescription: "Get professional Car Electrical Repair Corby from Repair Automotive. We diagnose and repair electrical faults, wiring, batteries, and vehicle systems.",
    canonicalPath: "/car-electrical-repair-corby",
    icon: "BatteryCharging",
    image: IMG.engineWork,
    imageAlt: "A technician testing a car battery and electrical system",
    serviceSlug: "batteries-electrics",
    intro: [
      "Modern vehicles depend on complex electrical systems for starting, lighting, charging, security, and many other essential functions. When something goes wrong, professional Car Electrical Repair Corby can help identify the fault and restore your vehicle's electrical performance. Repair Automotive provides electrical inspection and repair services for drivers experiencing issues such as starting problems, warning lights, faulty lights, battery concerns, or electrical components that are not working correctly.",
      "Electrical faults can sometimes be difficult to identify without proper diagnostic equipment. Our technicians assess the vehicle to locate potential problems and determine the appropriate repair. Whether the issue involves wiring, the battery, alternator, starter motor, lighting, or another electrical component, professional attention can help prevent further complications.",
      "With dependable Car Electrical Repair Corby, local motorists can have their vehicle checked by experienced technicians. Our Car Electrical Repair Corby service focuses on identifying the source of electrical problems and providing practical solutions based on the vehicle's condition."
    ],
    sections: [
      {
        "heading": "Reliable Corby Car Electrical Repair for Electrical Faults",
        "paragraphs": [
          "Electrical problems can affect your vehicle without warning, making reliable Corby Car Electrical Repair important when faults occur. Repair Automotive can inspect electrical systems and investigate issues affecting your vehicle's performance.",
          "Our technicians provide Corby Car Electrical Repair for a range of electrical concerns, from battery and charging problems to faulty wiring, lights, and starting systems. We focus on identifying the actual cause of the fault before recommending suitable repairs.",
          "If you require Corby Car Electrical Repair, Repair Automotive can assess your vehicle and provide professional electrical assistance to help restore reliable operation."
        ]
      }
    ],
  },
];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

/** Lightweight list for client components (keeps article copy out of the client bundle) */
export const blogNavLinks = blogs.map((b) => ({
  slug: b.slug,
  label: b.navLabel,
}));
