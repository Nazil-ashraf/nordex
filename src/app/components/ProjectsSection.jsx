"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";




// const projectsData = [
//   {
//     id: 1,
//     title: "CAT 6",
//     heading:'Category 6 U/UTP 23 Awg 4 Pair Cable',
//     description: "Project 1 description",
//     image: "/images/projects/1.png",
//     tag: "Data Cable",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "CAT 6 A",
//     description: "Project 2 description",
//     image: "/images/projects/2.png",
//     tag: "Data Cable",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "CAT 7",
//     description: "Project 3 description",
//     image: "/images/projects/3.png",
//     tag: "Data Cable",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "Patch Panel",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: "Network Accessories",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Cable Manager",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: "Network Accessories",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 7,
//     title: "Patch Card",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: "Network Accessories",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 8,
//     title: "Module & Face Plate",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: "Network Accessories",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 9,
//     title: "Indoor",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: "Fibre Optical Cable",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 10,
//     title: "Outdoor",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: "Fibre Optical Cable",
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];

let productData = [
  {
    "Photo": null,
    "Item": "Category 6 U/UTP 23 Awg 4 Pair Cable",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "image": '/images/projects/6.png',
    "Description": "Nordex Category 6 UTP cables exceed Category 6 / Class E specification. It is tested to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m.   Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "Category 6 U/UTP 23 AWG 4 Pair Cable CM PVC",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6 UTP cables exceed Category 6 /Class E specification. It is tested up to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m. Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "Category 6 F/UTP 23 AWG 4 Pair Cable Lsoh",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6 F/UTP cables exceed Category 6 / Class E specification. This cable having UL listed CM, CMX, CMR & CMP. It is tested to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m.   Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to F/UTP (Foiled Twisted Pair) cabling systems. F/UTP (Twisted Pair – overall Foil shield) cabling systems are installed for improved Alien Cross talk performance."
  },
  {
    "Photo": null,
    "Item": "Category 6 F/STP 23 AWG 4 Pair Cable Lsoh",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6 F/STP cables exceed Category 6 / Class E specification. This cable having UL listed CM, CMX, CMR & CMP. It is tested to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m.   Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to F/STP (Foiled & Shieled Twisted Pair) cabling systems. F/STP (Twisted Pair – overall Foil shield) cabling systems are installed for improved Alien Cross talk performance."
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6 U/UTP 4 PAIR 23AWG EXTERNAL CABLE",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6 UTP cables exceed Category 6 / Class E specification. It is tested to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m.Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "Category 6 S/FTP 4 Pair Elevator Travelling Cable",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "NordeX flat elevator cable is eal for connecting IP cameras inse elevators. The elevator traveling Cat6 cable exceeds Category 6/Class E specs"
  },
  {
    "Photo": null,
    "Item": "Category 6 U/UTP 24 Awg 4 Pair Cable",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6 UTP cables exceed Category 6 / Class E specification. It is tested to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m.   Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "Category 6 U/UTP 24 AWG 4 Pair Cable CM PVC",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6 UTP cables exceed Category 6 /Class E specification. It is tested up to 250 MHz frequency range and designed to support Gigabit 1000Base-T and 1000Base-Tx applications up to 100m. Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6A U/UTP 23 AWG 4 PAIR CABLE",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6A U/UTP cables exceed Category 6A/Class EA specification. It is tested to 500MHz frequency range and designed to support 10 Gigabyte applications to full 100m.   Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to U/UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6A U/UTP 23 AWG 4 PAIR CABLE CM PVC",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6A U/UTP cables exceed Category 6A/Class EA specification. It is tested to 500MHz frequency range and designed to support 10 Gigabyte applications to full 100m.   Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to U/UTP (Unshielded Twisted Pair) cabling systems."
  },
  {
    "Photo": null,
    "Item": "Category 6A F/UTP 4 Pair Cable",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6A F/UTP cables exceed Category 6A / Class EA specification. It is tested to 500 MHz frequency range and designed to support 10 Gigabyte applications to full 100 m.Extremely high pair-balance proving excellent EMC (Electro Magnetic compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to F/UTP cabling systems. F/UTP (Twisted Pair – overall Foil shield) cabling systems are installed for improved Alien Cross talk performance"
  },
  {
    "Photo": null,
    "Item": "Category 6A F/STP 4 Pair Cable",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6A F/STP cables exceed Category 6A / Class EA specification. It is tested to 500 MHz frequency range and designed to support 10 Gigabyte applications to full 100 m. Extremely high pair-balance proving excellent EMC (Electro Magnetic compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to F/STP cabling systems. F/STP (Twisted Pair – overall and indivual Foil shield) cabling systems are installed for improved Alien Cross talk performance."
  },
  {
    "Photo": null,
    "Item": "Category 6A U/UTP 4 Pair 23AWG External Cable PE E-series",
    "category": "CAT 6",
    "type": "DATA CABLES",
    "Description": "Nordex Category 6A U/UTP CMR cables exceed Category 6A/Class EA specification. It is tested to 500MHz frequency range and designed to support 10Gigabyte applications to full 100m. Extremely high pair-balance proving excellent EMC (Electro Magnetic Compatibility), minimizing radiation, maximizing noise immunity and proving high alien cross talk performance to U/UTP (Unshielded Twisted Pair) cabling systems. "
  },
  {
    "Photo": null,
    "Item": "Category 7 S/FTP 4 Pair Cable",
    "category": "CAT 7",
    "type": "DATA CABLES",
    "Description": "Nordex Category 7 S/FTP cables exceed Category 7/ Class F specification maximizing the user’s return on investment, by extending the life of the system. It is tested to 600 MHz frequency range and designed to support 10 Gigabyte applications. The cable is of a 4 pair S/FTP construction with indivual foiled pair and an overall bra offering superior performance in terms of ACR. It supports all Ethernet applications up to 1000 Base-T and CATV applications up to 862 Mhz."
  },
  {
    "Photo": null,
    "Item": "Category 7 S/FTP 4 Pair External Cable PE Sheath",
    "category": "CAT 7",
    "type": "DATA CABLES",
    "Description": "Nordex Category 7 S/FTP cables exceed Category 7/ Class F specification maximizing the user’s return on investment, by extending the life of the system. It is tested to 600 MHz frequency range and designed to support 10 Gigabyte applications. The cable is of a 4 pair S/FTP construction with indivual foiled pair and an overall bra offering superior performance in terms of ACR. It supports all ethernet for external applications."
  },
  {
    "Photo": null,
    "Item": "Cat 7 S/FTP 4 Pair Double Jacket External Cable",
    "category": "CAT 7",
    "type": "DATA CABLES",
    "Description": "Nordex Category 7 S/FTP cables exceed Category 7/ Class F specification maximizing the user’s return on investment, by extending the life of the system. It is tested to 600 MHz frequency range and designed to support 10 Gigabyte applications. The cable is of a 4 pair S/FTP construction with indivual foiled pair and an overall bra offering superior performance in terms of ACR. It supports all Ethernet for external applications "
  },
  {
    "Photo": null,
    "Item": "Category 7A S/FTP 4 Pair Cable",
    "category": "CAT 7",
    "type": "DATA CABLES",
    "Description": "Nordex Category 7A S/FTP cables exceed Category 7A/Class FA specification, maximizing the user’s return on investment, by extending the life of the system. It is tested to 1000MHz frequency range and designed to support Broadband CATV and other 10 Gigabyte applications. Data integrity is one of the most essential network requirements for many corporations, especially those located in environments that are prone to noise and electromagnetic interference such as industrial facilities and airports, as well as those running critical systems such as military installations and hospitals. S/FTP (Foil Twisted Pair - Shielded) cabling systems are installed to protect data from potentially corrupting electromagnetic interference (EMI) and improved Alien Cross talk performance.  "
  },
  {
    "Photo": null,
    "Item": "CATEGORY 8 S/FTP 4 PAIR 22 AWG CABLE",
    "category": "CAT 8",
    "type": "DATA CABLES",
    "Description": "Norden Category 8 S/FTP cables exceed Category 8/ Class II specification, maximizing the user’s return on investment, by extending the life of the system. It is tested to 2000 MHZ frequency range and designed to support networking application upto 40 Gbps."
  },
  {
    "Photo": null,
    "Item": "Category 8 S/FTP 4 Pair 22 AWG External Cable PE",
    "category": "CAT 8",
    "type": "DATA CABLES",
    "Description": "Norden Category 8 S/FTP cables exceed Category 8/ Class II specification, maximizing the user’s return on investment, by extending the life of the system. It is tested to 2000 MHZ frequency range and designed to support networking application upto 40 Gbps."
  },
  {
    "Photo": null,
    "Item": "RG 6U Coaxial Cable 75 Ohm AL Bra 60% Coverage",
    "category": "COAXIAL CABLE",
    "type": "DATA CABLES",
    "Description": "Nordex RG 6U is a common type of coaxial cable used in a we variety of resential and commercial applications.This RG 6 type cables have become the standard for CATV, has a copper-coated steel center conductor and a combination aluminum foil/aluminum bra shield, typically with low coverage about 60%. RG6 can be used as a branch cable with Standard Transmission distance up to 450m.  "
  },
  {
    "Photo": null,
    "Item": "RG 11U Coaxial Cable 75 Ohm AL Bra 95% Coverage PE UV Protective Jacket",
    "category": "COAXIAL CABLE",
    "type": "DATA CABLES",
    "Description": "Nordex RG 11U is a common type of coaxial cable used in a we variety of resential and commercial applications. This RG 11 type cables have become the standard for CATV/MATV, Broadband, HDTV and Satellite Broadcasting Transmission use, has a copper-coated steel center conductor and a combination aluminum foil/aluminum bra shield, typically with low coverage about 60%. RG 11 can be used as a trunk cable with standard Transmission distance up to 600 m. Outer jacket is made up of UV Protective PE."
  },
  {
    "Photo": null,
    "Item": "FPLR SHIELDED FIRE ALARM CABLE E- SERIES 2C*1.5MM",
    "category": "SHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The UL listed FPLR shielded fire alarm E-series cable from Nordex is suitable to be use in a vertical runs in signaling & fire alarm system. It works in high temperature levels. This cable is constructed with FR-PVC insulation and outer jacket with aluminum foil shielding that meets UL 1666 specifications. This cable complies with VW - 1 Flame Test requirements in ANSI/UL 1581.Tested as per ANSI/UL 1666 for flame propagation height of electrical and optical - Fibre Cables Installed Vertically in Shafts."
  },
  {
    "Photo": null,
    "Item": "FPLR SHIELDED FIRE ALARM CABLE E- SERIES 2C*2.5MM",
    "category": "SHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The UL listed FPLR shielded fire alarm E-series cable from Nordex is suitable to be use in a vertical runs in signaling & fire alarm system. It works in high temperature levels. This cable is constructed with FR-PVC insulation and outer jacket with aluminum foil shielding that meets UL 1666 specifications. This cable complies with VW - 1 Flame Test requirements in ANSI/UL 1581.Tested as per ANSI/UL 1666 for flame propagation height of electrical and optical - Fibre Cables Installed Vertically in Shafts."
  },
  {
    "Photo": null,
    "Item": "2 Core 14 AWG Shielded Sol Conductor Cable",
    "category": "SHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Shielded Sol Conductor Cable from NORDEX is suitable to use within Audio, Control and Instrumentation purpose. The cable is constructed with PE Insulation, 100 % Aluminium Foil – Polyester Tape Shielded and PVC or LSZH outer jacket."
  },
  {
    "Photo": null,
    "Item": "2 Core 16 AWG Shielded Sol Conductor Cable",
    "category": "SHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Shielded Sol Conductor Cable from NORDEX is suitable to use within Audio, Control and Instrumentation purpose. The cable is constructed with PE Insulation,100 % Aluminium Foil – Polyester Tape Shielded and PVC or LSZH outer jacket."
  },
  {
    "Photo": null,
    "Item": "2 Core 18 AWG Shielded Sol Conductor Cable",
    "category": "SHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Shielded Sol Conductor Cable from NORDEX is suitable to use within Audio, Control and Instrumentation purpose. The cable is constructed with PE Insulation,100 % Aluminium Foil – Polyester Tape Shielded and PVC or LSZH outer jacket."
  },
  {
    "Photo": null,
    "Item": "2 Core 22 AWG Shielded Single Strand Sol Conductor Cable",
    "category": "SHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Shielded Single strand sol Conductor Cable from NORDEX is suitable to use within Audio, Control and Instrumentation purpose. The cable is constructed with PE Insulation, 100 % Aluminium Foil – Polyester Tape Shielded and LSZH outer jacket."
  },
  {
    "Photo": null,
    "Item": "2 Core 14 AWG Unshielded Single Strand Sol Conductor Cable",
    "category": "UNSHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Unshielded single strand sol Conductor Cable from NORDEX is suitable to use within Commercial Audio Systems, Control and Instrumentation purpose. The cable is constructed with PE insulation, Nylon Rip Cord and LSZH outer jacket."
  },
  {
    "Photo": null,
    "Item": "2 CORE 16 AWG UNSHIELDED SIGNAL STRAND SOL CONDUCTOR CABLE",
    "category": "UNSHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Unshielded single strand sol Conductor Cable from NORDEX is suitable to use within Commercial Audio Systems, Control, and Instrumentation purpose. The cable is constructed with PE insulation, Nylon Rip Cord, and outer jacket."
  },
  {
    "Photo": null,
    "Item": "2 Core 18 AWG Unshielded Signal Strand Sol Conductor Cable",
    "category": "UNSHIELDED CABLE",
    "type": "DATA CABLES",
    "Description": "The Unshielded single strand sol Conductor Cable from NORDEX is suitable to use within Commercial Audio Systems, Control and Instrumentation purpose. The cable is constructed with PE insulation, Nylon Rip Cord and LSZH outer jacket"
  },
  {
    "Photo": null,
    "Item": "2 Core 22 AWG Unshielded Single Strand Sol Conductor Cable",
    "category": "CONNECTORS",
    "type": "FIBER ACCESSORIES",
    "Description": "The Unshielded single strand sol Conductor Cable from NORDEX is suitable to use within Commercial Audio Systems, Control and Instrumentation purpose. The cable is constructed with PE insulation, Nylon Rip Cord and LSZH outer jacket."
  },
  {
    "Photo": null,
    "Item": "RJ45 Connector Strain Relief Boot",
    "category": "CONNECTORS",
    "type": "FIBER ACCESSORIES",
    "Description": "This mm 6.5 / 7.0 / 7.5 / 8.0 OD, RJ45 snagless boot cover is easy to install and will protect the plug clip when cables are pulled through bundles, generally intended for any Cat5E, Cat6 , Cat6A , Cat 7 and Cta 8 patch cable. Perfect solution for preventing your release tabs from snapping off."
  },
  {
    "Photo": null,
    "Item": "CAT6/6A RJ45 SHIELDED ETHERNET COUPLER",
    "category": "CONNECTORS",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex CAT6/6A RJ45 coupler used to interconnect two CAT6 LAN cable to extend their length. The coupler is small, lightweight and Compact in design, Easy to operate, plug and play."
  },
  {
    "Photo": null,
    "Item": "Category 6 RJ45 Connector",
    "category": "CONNECTORS",
    "type": "FIBER ACCESSORIES",
    "Description": "Category 6 Connectors exceed Category 6 long lasting high-performance and full support of all present and emerging applications, including 1000BASE-T (Gigabit-Ethernet). High quality overall shield proves excellent EMC (Electro Magnetic Compatibility), minimizing radiation and maximizing noise immunity, ensures long term resistance to corrosion from humity, extreme temperatures, and airborne contaminants .The range of products includes plugs suitable for round cables with stranded or sol conductors, 24 to 26 AWG and are tested up to 250 MHz over 100 m. These are mainly used for patch-cord termination"
  },
  {
    "Photo": null,
    "Item": "Category 6a RJ45 Connector",
    "category": "CONNECTORS",
    "type": "FIBER ACCESSORIES",
    "Description": "Category 6A Connectors exceed Category 6A long lasting high performance and full support of all present and emerging applications, including 1000BASE-T (Gigabit Ethernet). High quality overall shield proves excellent EMC (Electro Magnetic Compatibility), minimizing radiation and maximizing noise immunity, ensures long term resistance to corrosion from humity, extreme temperature and airborne contaminants. The range of products_backup include plugs suitable for round cables with standard or sol conductors, 24 to 26 AWG and are tested up to 500 MHz over 100 m. These are mainly used for patch cord termination."
  },
  {
    "Photo": null,
    "Item": " SINGLE GANG FACEPLATE",
    "category": "FACEPLATE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Single Gang Faceplate with Module proves the performance needed for data communications networks and applications, including Gigabit Ethernet, with the added benefit of shielding to minimise the risk of EMI. Nordex LJ6C Modules are eal for use in floor boxes, or any application that has an industry standard LJ6C aperture. Single and dual gang face plates are available for up to four LJ6C modules in addition to panels suitable for Ackerman floor boxes. The modules are fully compliant with the ANSI/TIA Category 6 standards."
  },
  {
    "Photo": null,
    "Item": " DOUBLE GANG FACEPLATE",
    "category": "FACEPLATE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex double Gang Faceplate with Module proves the performance needed for data communications networks and applications, including Gigabit Ethernet, with the added benefit of shielding to minimise the risk of EMI. Nordex double Modules are eal for use in floor boxes, or any application that has an industry standard  aperture. Single and dual gang face plates are available for up to four  modules in addition to panels suitable for Ackerman floor boxes. The modules are fully compliant with the ANSI/TIA Category 6 standards."
  },
  {
    "Photo": null,
    "Item": "Category 6 UTP 90D Keystone Jack",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Category 6 UTP punch down keystone Jack gives optimum protection from electromagnetic interference from an outse source. These Jacks are designed to reduce the Insertion loss & alien cross talk in order to prove maximum flexibility and high performance for all 10G Ethernet applications and are available in a 90° orientation with back interconnection of Dual Style C blocks in universal pin/pair assignment. 90° orientation proves perfect termination .This is tested to 250 MHz range over 100m and supports T568 A&B wiring & easy installation. The Jack is manufactured with an integral cable strain relief. They can be installed into a number of faceplates and unloaded shuttered modules and backward Compatible with category 6/class D system components.  "
  },
  {
    "Photo": null,
    "Item": "Category 6 UTP 180D Keystone Jack Tool Less",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Category 6 tool less UTP keystone Jacks give optimum protection from electromagnetic interference from an outse source. The tool-less termination allows all eight conductors to be terminated simultaneously when the termination cap is pressed into place .These Jacks are designed to reduce the Insertion loss & alien cross talk in order to prove maximum flexibility and high performance for all 10G Ethernet applications and are available in a 180° orientation with back interconnection of Dual Style C blocks in universal pin/pair assignment.180° orientation proves perfect termination with minimum distance to the C. This is tested to 250 MHz range over 100m and supports T568 A&B wiring & easy installation. The jack is manufactured with an integral cable strain relief. They can be installed into a number of faceplates and unloaded shuttered modules.  "
  },
  {
    "Photo": null,
    "Item": "Cat 6 Shielded Keystone Jack Tool Less 180D",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Cat 6 Shielded Keystone Jack Tool Less 180D are shielded with a two part case giving optimum protection from electromagnetic interference from an outse source. The rear casing is clicked into place after shielded cable has been fed through the centre and terminated to the jack. These Jacks are designed to reduce the Insertion loss & alien cross talk in order to prove maximum flexibility and high performance for all 10G Ethernet applications and are available in a 180° orientation with back interconnection of Dual C blocks in universal pin/pair assignment.180° orientation proves perfect termination with minimum distance to the C. This is tested to 250 MHz range over 100m and supports T568 A&B wiring & easy installation. The jack is manufactured with an integral cable strain relief. They can be installed into a number of faceplates and unloaded shuttered modules and backward compatible with category 6/class D system components.  "
  },
  {
    "Photo": null,
    "Item": "Category 6A UTP 90D Keystone Jack",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Category 6A UTP punch down keystone Jack gives optimum protection from electromagnetic interference from an outse source. These Jacks are designed to reduce the Insertion loss & alien cross talk in order to prove maximum flexibility and high performance for all 10G Ethernet applications and are available in a 90° orientation with back interconnection of Dual Style C blocks in universal pin/pair assignment. 90° orientation proves perfect termination .This is tested to 500 MHz range over 100m and supports T568 A&B wiring & easy installation. The Jack is manufactured with an integral cable strain relief. They can be installed into a number of faceplates and unloaded shuttered modules and backward Compatible with category 6A/class D system components.  "
  },
  {
    "Photo": null,
    "Item": "Category 6A UTP 180D Keystone Jack Tool Less",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Category 6A tool less UTP keystone Jacks give optimum protection from electromagnetic interference from an outse source. The tool-less termination allows all eight conductors to be terminated simultaneously when the termination cap is pressed into place .These Jacks are designed to reduce the Insertion loss & alien cross talk in order to prove maximum flexibility and high performance for all 10G Ethernet applications and are available in a 180° orientation with back interconnection of Dual Style C blocks in universal pin/pair assignment.180° orientation proves perfect termination with minimum distance to the C. This is tested to 500 MHz range over 100m and supports T568 A&B wiring & easy installation. The jack is manufactured with an integral cable strain relief. They can be installed into a number of faceplates and unloaded shuttered modules.  "
  },
  {
    "Photo": null,
    "Item": "Keystone 45D Bracket ",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Bracket mounts a wall plate without back box and is commonly used as a snap in accessory for wall plates, available for keystone & fibre adaptors in 45°, 90° angled. Nordex wall plate mounting bracket inserts into the wall opening, flexible tabs bend up to secure the bracket to the opening. LJ6C angled brackets for floor boxes also available in 45° or 90°."
  },
  {
    "Photo": null,
    "Item": "Keystone 6C 45D Bracket",
    "category": "KEYSTONE",
    "type": "FIBER ACCESSORIES",
    "Description": "Bracket mounts a floor plate without back box and is commonly used as a snap in accessory for floor plates, available for keystone & fibre adaptors in 6C 45°, 90° angled. Nordex floor plate mounting bracket inserts into the wall opening, flexible tabs bend up to secure the bracket to the opening. LJ6C angled brackets for floor boxes also available in 45° or 90°."
  },
  {
    "Photo": null,
    "Item": "Face Plate Blank Cover",
    "category": "FACEPLATE",
    "type": "FIBER ACCESSORIES",
    "Description": "Blank cover fits on a wall plate, commonly uses when there is not e- nough modules to fill, available in quarter,half and full sizes.    "
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6 UTP PATCH PANEL BLANK PUNCH DOWN SHUTTERED / UN SHUTTERED",
    "category": "FACEPLATE",
    "type": "FIBER ACCESSORIES",
    "Description": "Blank UTP Punch Down patch panel from Nordex exceeds TIA and ISO component specifications, supporting network convergence protocols, delivering maximum bandwth and extended reliability for all LAN, multimedia, and Power over Ethernet applications. A rear cable management bar is supplied which acts as a stress reliever for terminated cables. All performance parameters, including NEXT, FEXT Attenuation and Return Loss are designed to meet the Cabling standard. The patch panel comes with mini cable ties, cage nuts and rear cable management bar as standard."
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6 SHIELDED PATCH PANEL BLANK/ LOADED TOOL LESS",
    "category": "FACEPLATE",
    "type": "FIBER ACCESSORIES",
    "Description": "Blank Shielded Patch Panel from Nordex exceeds TIA and ISO component specifications, supporting network convergence protocols delivering maximum bandwth and extended reliability for all LAN, multimedia, and Power over Ethernet applications. Each port is numbered and has a designated label area for clear port entification. Keystone outlets can be snapped in to the 19’’ frame without the need for tooling of any type and available in unloaded version. There is also an earth cable proved that has to be grounded for proper functioning of the shielded system. The toolless jack termination offers fast and reliable installation of shielded cable, quick and easy in termination. A rear cable management bar is supplied which acts as a stress reliever of terminated cables. All performance parameters, including NEXT, FEXT Attenuation and Return Loss are designed to meet the cabling standard. 19” 1U 24 port patch panel comes with mini cable ties, cage nuts and rear cable management bar as standard.  "
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6A UTP PATCH PANEL BLANK PUNCH DOWN SHUTTERED / UN SHUTTERED",
    "category": "FIBER PATCH PANEL",
    "type": "FIBER ACCESSORIES",
    "Description": "Blank UTP Punch Down patch panel from Nordex exceeds TIA and ISO component specifications, supporting network convergence protocols, delivering maximum bandwth and extended reliability for all LAN, multimedia, and Power over Ethernet applications. A rear cable management bar is supplied which acts as a stress reliever for terminated cables. All performance parameters, including NEXT, FEXT Attenuation and Return Loss are designed to meet the Cabling standard. The patch panel comes with mini cable ties, cage nuts and rear cable management bar as standard."
  },
  {
    "Photo": null,
    "Item": "CATEGORY 6A SHIELDED PATCH PANEL BLANK/ LOADED TOOL LESS",
    "category": "FIBER PATCH PANEL",
    "type": "FIBER ACCESSORIES",
    "Description": "Blank Shielded Patch Panel from Nordex exceeds TIA and ISO component specifications, supporting network convergence protocols delivering maximum bandwth and extended reliability for all LAN, multimedia, and Power over Ethernet applications. Each port is numbered and has a designated label area for clear port entification. Keystone outlets can be snapped in to the 19’’ frame without the need for tooling of any type and available in unloaded version. There is also an earth cable proved that has to be grounded for proper functioning of the shielded system. The toolless jack termination offers fast and reliable installation of shielded cable, quick and easy in termination. A rear cable management bar is supplied which acts as a stress reliever of terminated cables. All performance parameters, including NEXT, FEXT Attenuation and Return Loss are designed to meet the cabling standard. 19” 1U 24 port patch panel comes with mini cable ties, cage nuts and rear cable management bar as standard.  "
  },
  {
    "Photo": null,
    "Item": "Metal Cable Management",
    "category": "FIBER PATCH PANEL",
    "type": "FIBER ACCESSORIES",
    "Description": "Metal Cable Management"
  },
  {
    "Photo": null,
    "Item": "Rack Mount Fibre Optic Patch Panel",
    "category": "FIBER PATCH PANEL",
    "type": "FIBER ACCESSORIES",
    "Description": "Cable clamps on the inner surface for fixing cables. 19 rack mount. Fixed type Splice tray to access pigtails available, which is designed with plexi glass top cover PC material. Welded screw in the mdle of inner surface for splice tray or cassette It is designed for fibre optic termination. ST, SC, LC, FC, MTRJ, E2000 connector plates are available. Lockable front door on front with spring type screws. The body is made of cold rolled steel sheet, with electrostatic spraying."
  },
  {
    "Photo": null,
    "Item": "Fibre Optic Easy Front Access Compact Patch Panel",
    "category": "FIBER PATCH PANEL",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex EFA Fibre Optic Compact Patch panel is designed for fibre termination and distribution.This smart design and professional engineering proves easy installation and maintenance.  "
  },
  {
    "Photo": null,
    "Item": "Wall Mount Fibre Optic Patch Panel",
    "category": "FIBER PATCH PANEL",
    "type": "FIBER ACCESSORIES",
    "Description": "Applicable in the straight through or branch connection of internal optical cable. Available for the distribution and terminal connection of various kinds of optical fibre system. Fit for wall mounted. Rugged all metal construction for fibre protection and secure mounting. Compact design allows installation in tight areas. Separate doors for service se and user se with optional keyed locks for added security. Include fibre optic cable routing kit (grommets, cable ties, spools, strain relief bracket and /caution labels) for various cable management solutions."
  },
  {
    "Photo": null,
    "Item": "Fibre Optic Distribution Box Wall Mount Simplex 4 ports",
    "category": "FIBER DISTRIBUTION BOX",
    "type": "FIBER ACCESSORIES",
    "Description": "FTTH model of fibre optic terminal box is a newly developed for application of FTTH. This box is very light and compact, especially suitable for protective connection of fibre cables and pigtails in FTTH."
  },
  {
    "Photo": null,
    "Item": "Fibre Optic Distribution Box Wall Mount Simplex 2 ports",
    "category": "FIBER DISTRIBUTION BOX",
    "type": "FIBER ACCESSORIES",
    "Description": "FTTH model of fibre optic terminal box is a newly developed for application of FTTH. This box is very light and compact, especially suitable for protective connection of fibre cables and pigtails in FTTH."
  },
  {
    "Photo": null,
    "Item": "SC Fibre Optic Adaptor",
    "category": "FIBER OPTIC ADAPTER",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex’s fibre adaptors are available for all standard connector types in both single mode and multimode including Simplex and duplex versions. Single mode adaptors are available with either Zirconia or phosphor bronze sleeves. Zirconia sleeves prove tighter tolerances, generally required for angled physical contact (APC) connectors. Multimode adaptors are available with phosphor Bronze sleeves, which prove good performance for spherical polished connectors. The adaptor sleeve aligns the ferrules and holds them in place. The adaptors are colour coded allowing easy entification of the adaptor type. Nordex hybr Fibre optic adaptors are also available which are used to link different kinds of fibre optic connectors. Hybr Adaptor specifications and functions are same as standard fibre optic adaptors."
  },
  {
    "Photo": null,
    "Item": "LC Fibre Optic Adaptor",
    "category": "FIBER OPTIC ADAPTER",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex’s fibre adaptors are available for all standard connector types in both single mode and multimode including Simplex and duplex versions. Single mode adaptors are available with either Zirconia or phosphor bronze sleeves. Zirconia sleeves prove tighter tolerances, generally required for angled physical contact (APC) connectors. Multimode adaptors are available with phosphor Bronze sleeves, which prove good performance for spherical polished connectors. The adaptor sleeve aligns the ferrules and holds them in place. The adaptors are colour coded allowing easy entification of the adaptor type. Nordex hybr Fibre optic adaptors are also available which are used to link different kinds of fibre optic connectors. Hybr Adaptor specifications and functions are same as standard fibre optic adaptors."
  },
  {
    "Photo": null,
    "Item": "SC Fibre Pigtail",
    "category": "FIBER PIGTAIL",
    "type": "FIBER ACCESSORIES",
    "Description": "Fibre pigtails are used in permanent connections between patch panels and incoming cables / single blown fibres. Pigtails are pre-constructed with connectors. Connector options include small form factors such as LC, E2000 and MT-RJ as well as SC, FC and ST. These are based on 900?m tight buffered cores (600?m MT-RJ) and suitable for internal use only inse suitable Fibre Management Systems    "
  },
  {
    "Photo": null,
    "Item": "LC FIBRE PIGTAIL",
    "category": "FIBER PIGTAIL",
    "type": "FIBER ACCESSORIES",
    "Description": "Fibre pigtails are used in permanent connections between patch panels and incoming cables / single blown fibres. Pigtails are pre-constructed with connectors. Connector options include small form factors such as LC, E2000 and MT-RJ as well as SC, FC and ST. These are based on 900μm tight buffered cores (600μm MT-RJ) and suitable for internal use only inse suitable Fibre Management Systems"
  },
  {
    "Photo": null,
    "Item": "Category 6 U/UTP Patch Cord LSZH",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Category 6 UTP patch cords are manufactured using high quality unshielded four pair Category 6 stranded cable, and feature cable strain relief boots with a plug latch protection cap. This patch cord when used with high performance.   Each patch cord is tested with Fluke tester and indivual cover include with the report. Nordex Category 6 Patch cord is tested for transmission frequencies of up to 250 MHz."
  },
  {
    "Photo": null,
    "Item": "Category 6 F/UTP Patch Cord LSZH",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex Category 6 F/UTP patch cords are manufactured using high quality F/UTP four pair Category 6 stranded cable, and feature cable strain relief boots with a plug latch protection cap. This patch cord when used with high performance.   Each patch cord is tested with Fluke tester and indivual cover include with the report. Nordex Category 6 Patch cord is tested for transmission frequencies of up to 250 MHz."
  },
  {
    "Photo": null,
    "Item": "Category 6A U/UTP Patch Cord LSZH",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex augmented Category 6 unshielded patch cord delivers optimal transmission & networking performance with reduced Insertion loss and Alien crosstalk. This Patch cord is tested for transmission frequencies up to 500 MHZ and compatible with the 10 Gigabits applications, including the following protocols: Gigabit 1000 BASE-T; 100 BASE-T; 10 BASE-T (IEEE 802.3) 4/16 Mbps Token Ring (IEEE 802.5); 100 VG-Any LAN100 Mbps TP-PMD (ANSI X3T9.5); 55/155 Mbps ATM Voice."
  },
  {
    "Photo": null,
    "Item": "Category 6A S/ftp Patch Cord LSZH",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "Nordex augmented S/FTP patch cord delivers optimal transmission & networking performance with reduced Insertion loss and Alien crosstalk. This is fully backward compatible to Category 6 (Class E) and Category 5e (Class D) products_backup and maximizes productivity levels 10 times the data throughput of Category 6. Each patch cord is tested with Fluke tester and indivual cover include with the report. This Patch cord is tested for transmission frequencies up to 500 MHz and compatible with the 10 Gigabits applications including the following protocols: Gigabit 1000 BASE-T; 100 BASE-T; 10 BASE-T (IEEE 802.3) 4/16 Mbps Token Ring (IEEE 802.5); 100 VG-Any LAN 100 Mbps TP-PMD (ANSI X3T9.5); 55/155 Mbps ATM Voice."
  },
  {
    "Photo": null,
    "Item": "LC - LC FIBRE PATCH CORD",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "They comprise two tight buffer fibres housed within a Indivual outer jacket in OM1, OM2, OM3. OM4.051.052 multi-mode and single mode variants. Both ends are terminated with a high performance hybr or single type connector comprising of a SC, ST, FC, LC, MTRJ, E2000 connector in simplex and duplex. These are typically not ruggedized. depending on the application and a spring loaded electrical contact housed within LSHF plastic shell possible, making them suitable for internal use."
  },
  {
    "Photo": null,
    "Item": "SC-SC FIBRE PATCH CORD",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "They comprise two tight buffer fibres housed within a Indivual outer jacket in OM1, OM2. OM3. OM4. 051, 052 multi-mode and single mode variants. Both ends are terminated with a high performance hybr or single type connector comprising of a SC. ST, FC, LC. MTRJ, E2000 connector in simplex and duplex. These are typically not ruggedized, depending on the application and a spring loaded electrical contact housed within LSHF plastic shell possible, making them suitable for internal use."
  },
  {
    "Photo": null,
    "Item": "SC - LC Fibre Patch Cord",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "They comprise two tight buffer fibres housed within a Indivual outer jacket in OM1, OM2, OM3, OM4, OS1, OS2 multi-mode and single mode variants. Both ends are terminated with a high performance hybr or single type connector comprising of a SC, ST, FC, LC, MTRJ, E2000 connector in simplex and duplex. These are typically not ruggedized, depending on the application and a spring loaded electrical contact housed within LSHF plastic shell possible, making them suitable for internal use."
  },
  {
    "Photo": null,
    "Item": "SC - FC FIBRE PATCH CORD",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "They comprise two tight buffer fibres housed within a Indivual outer jacket in OM1, OM2, OM3, OM4, OS1, OS2 multi-mode and single modevariants. Both ends are terminated with a high performance hybr or single type connector comprising of a SC, ST, FC, LC, MTRJ, E2000 connector in simplex and duplex. These are typically not ruggedized, depending on the application and a spring loaded electrical contact housed within LSHF plastic shell possible, making them suitable for internal use."
  },
  {
    "Photo": null,
    "Item": "ST - ST FIBRE PATCH CORD",
    "category": "FIBER PATCHCORD",
    "type": "FIBER ACCESSORIES",
    "Description": "They comprise two tight buffer fibres housed within a Indivual outer jacket in OM1, OM2, OM3, OM4, OS1, OS2 multi-mode and single mode variants. Both ends are terminated with a high performance hybr or single type connector comprising of a SC, ST, FC, LC, MTRJ, E2000 connector in simplex and duplex. These are typically not ruggedized, depending on the application and a spring loaded electrical contact housed within LSHF plastic shell possible, making them suitable for internal use."
  },
  {
    "Photo": null,
    "Item": "FLOOR STANDING CABINET",
    "category": "FLOOR STANDING",
    "type": "CABINET",
    "Description": "The Nordex floor standing cabinets designed for communication rooms and data centers. The smart design and professional engineering prove easy installation and maintenance. Comply with EN 55032:2015/A1:2020,EN IEC 61000-3-2:2019/A1:2021,EN IEC 62368-1:2020+A11:2020,EN 61000-3-3:2013/A2:2021,EN 55035:2017/A11:2020 standards."
  },
  {
    "Photo": null,
    "Item": "Wall Mount Cabinet Single Section ",
    "category": "WALL MOUNT",
    "type": "CABINET",
    "Description": "The Easycab range of wall cabinets designed for office environment. The cabinet’s structure is welded and painted with electro static powder coated finish. Easycab available in different sizes. Comply with ANSI/EIA RS-310-D, DIN41497 part 1, IEC 297-2, DIN41497 part 7, GB/T3047, 2-92 standards."
  },
  {
    "Photo": null,
    "Item": "WALL MOUNT CABINET DOUBLE SECTION",
    "category": "WALL MOUNT",
    "type": "CABINET",
    "Description": "The Easycab range of wall cabinets designed for office environment.The cabinet’s structure is welded and painted with electro static powder coated finish. Removable se panels ensure easy installation and maintenance. Easycab available in different sizes. Comply with ANSI/ EIA RS-310-D, DIN41497 part 1, IEC 297-2, DIN41497 part 7, GB/ T3047, 2-92 standards.  "
  },
  {
    "Photo": null,
    "Item": "POWER DISTRIBUTION UNIT",
    "category": "POWER UNIT",
    "type": "POWER UNIT",
    "Description": "NORDEX Power Distribution Units are designed and manufactured for cabinets. The product is equipped with sockets meeting different systems and standards. Products can be produced accordingly to customer’s special requirement, the dimension can reach to 4600 mm. required for product installation."
  },
  {
    "Photo": null,
    "Item": "POWER DISTRIBUTION UNIT C13 / CEE 7/3",
    "category": "POWER UNIT",
    "type": "POWER UNIT",
    "Description": "NORDEX Power Distribution Units are designed and manufactured in a modularized way exclusively for cabinets. The product is equipped with supply socket modules meeting different systems and standards in the world. The series products can be produced accordingly to customers’ special requirements."
  },
  {
    "Photo": null,
    "Item": null,
    "Description": null
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProduct =
    tag === "All" ? productData : productData.filter((project) => project.type === tag);





  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filterProducts = (productData, type, category) => {
    // Step 1: Filter by type
    const filteredByType = type === "All" ? productData : productData.filter(project => project.type === type);

    // Step 2: If a type is selected, further filter by category and group by category
    if (type !== "All" && category) {
      const filteredByCategory = filteredByType.filter(project => project.category === category);
      return filteredByCategory;
    }

    // Step 3: If no category is selected, return the filtered data based on type
    return filteredByType;
  }

  const filteredByType = filterProducts(productData, tag); // Filter by type
  const filteredByCategory = filterProducts(productData, tag, 'CAT 6');

  const uniqueTags = ["All", ...new Set(productData.map((project) => project.type))];
  const uniqueCategories = [...new Set(filteredByType.map((project) => project.category))];





  return (
    <section id="Products">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        PRODUCTS
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {uniqueTags.map((tagName, index) => (
          <ProjectTag
            key={index}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {uniqueCategories.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              // key={project.id}
              title={project}
              // description={project?.Description}
              // imgUrl={project.image}
              // gitUrl={project.gitUrl}
              // previewUrl={project.previewUrl}
              filterProducts={filterProducts}
              tag={tag}
              productData={productData}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
