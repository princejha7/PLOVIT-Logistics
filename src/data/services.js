import airFreightIcon from "../assets/images/servicesIcon/air-freight-icon.png";
import oceanFreightIcon from "../assets/images/servicesIcon/ocean-freight-icon.png";
import customsClearanceIcon from "../assets/images/servicesIcon/customs-clearance-icon.png";
import domesticTransportationIcon from "../assets/images/servicesIcon/domestic-transportation-icon.png";
import odcProjectCargoIcon from "../assets/images/servicesIcon/odc-project-cargo-icon.png";
import supplyChainSolutionsIcon from "../assets/images/servicesIcon/supply-chain-solutions-icon.png";
import consultancyServicesIcon from "../assets/images/servicesIcon/consultancy-services-icon.png";


// service images

import airServiceImage from "../assets/images/services/air.png";
import consultancyServiceImage from "../assets/images/services/consultancy.png";
import customsServiceImage from "../assets/images/services/customs.png";
import domesticServiceImage from "../assets/images/services/domestic.png";
import oceanServiceImage from "../assets/images/services/ocean.png";
import odcServiceImage from "../assets/images/services/odc.png";
import supplyChainServiceImage from "../assets/images/services/supplyChain.png";

export const services = [
  {
    id: 1,
    title: "Air Freight",
    shortDescription:"Fast and secure worldwide air freight solutions with competitive rates and streamlined customs clearance.",

    fullDescription: `We offer a wide range of air freight solutions worldwide, partnering with multiple leading airlines, we provide competitive rates and ensure fast, secure delivery for all types of shipment packaging - including boxes, pallets, cartons, and more.
      
    <strong>Global Reach and Competitive Pricing:</strong>
      Extensive international air freight network, specializing in efficient shipments from Southeast Asia, Europe, and Middle East.

      <strong>Fast & Secure Delivery:</strong>
      Reliable, time-sensitive transportation with strict schedules and secure handling for all types of packaging.

      <strong>Streamlined Operations:</strong>
      Efficient documentation and seamless customs clearance ensure smooth, hassle-free shipments from origin to destination.
    `,

    icon: airFreightIcon,

    image:
      airServiceImage,
  },

  {
    id: 2,
    title: "Ocean Freight",
    shortDescription:
      "Reliable ocean freight solutions for timely, cost-effective, and secure shipment delivery worldwide.",

    fullDescription: `Our ocean freight solutions are optimized for efficiency and reliability, ensuring your goods are transported by sea with care and precision. We work hard to keep shipments on schedule and costs under control. With careful cargo handling and clear communication, we make sure your deliveries arrive safely and on time.

      <strong>Timely Deliveries:</strong>
      Strict adherence to schedules with minimized delays from weather, port congestion, or customs.

      <strong>Cost-Effective Solutions:</strong>
      Competitive pricing through smart route planning, cargo consolidation (LCL/FCL), and optimized operations.

      <strong>Streamlined Documentation:</strong>
      Quick, accurate paperwork and compliance with international shipping regulations for smooth customs clearance.
    `,

    icon: oceanFreightIcon,

    image:
      oceanServiceImage,
  },

  {
    id: 3,
    title: "Customs Clearance Services",
    shortDescription:
      "Expert import and export customs clearance ensuring compliance, documentation, smooth movement.",

    fullDescription: `We offer export and import clearance for both air and ocean freight at major airports and seaports across India. Clients trust us for our strong commitment to compliance with local and international trade laws and expert advisory services that simplify customs processes to avoid unnecessary costs.

      <strong>Customs Clearance:</strong> 
      We expertly manage all aspects of the import process, including precise documentation, duty assessment, and seamless coordination with customs authorities.

      <strong>Export Customs Clearance:</strong>
      We expertly manage the entire export clearance process, from preparing export documentation and securing necessary permits to liaising with customs authorities.
    `,

    icon: customsClearanceIcon,

    image:
      customsServiceImage,
  },

  {
    id: 4,
    title: "Domestic Transportation",
    shortDescription:
      "Reliable road transportation solutions across India for secure, timely, and customized cargo delivery.",

    fullDescription: `We offer reliable trucking and trailer freight services across a wide range of states, maintaining the highest quality standards. With a strong network of trusted partners and carriers, we ensure timely and secure deliveries for all types of cargo tailored to your business needs.

      <strong>Specialized door collections and door-to-door FTL services</strong>
      <strong>Flexible PTL (Part Truckload) options for smaller or shared shipments</strong>
      <strong>Personalized solutions tailored to each client's needs</strong>
      <strong>Professional assistance and support at an all-India level</strong>
    `,

    icon:
      domesticTransportationIcon,

    image:
      domesticServiceImage,
  },

  {
    id: 5,
    title: "ODC & Project Cargo Movements",
    shortDescription:
      "Specialized transportation solutions for oversized and heavy cargo with expert planning and safe delivery.",

    fullDescription: `We are equipped with efficient infrastructure and resources to handle all types of cargo across India. With specialized trailers and trucks, we provide reliable solutions for oversized and heavy cargo, prioritizing safety and timely delivery every step of the way.

      Our experienced operations team carefully plans each movement, from route assessment and vehicle selection to loading, transportation, and final delivery.

      From complex project movements to demanding heavy-haul requirements, we deliver dependable transportation solutions tailored to the specific needs of every shipment.
    `,

    icon: odcProjectCargoIcon,

    image:
      odcServiceImage,
  },

  {
    id: 6,
    title: "Supply Chain Solutions",
    shortDescription:
      "Integrated supply chain solutions with secure warehousing, inventory management, & efficient distribution",

    fullDescription: `We provide integrated supply chain solutions, optimizing your entire logistics journey with efficient and sustainable operations. Operational excellence is at the heart of our approach. Our experts support every stage of your supply chain, applying industry best practices to ensure reliable service.

      <strong>⮚ Warehousing Facilities</strong>
      <strong>⮚ Inventory Management Services</strong>

      • Operations in both ambient and temperature-controlled environments
      • Bonded & non-bonded storage options to suit diverse needs
      • Secure handling of high-value and sensitive goods
      • Efficient inbound, outbound, and last-mile transportation
    `,

    icon:
      supplyChainSolutionsIcon,

    image:
      supplyChainServiceImage,
  },

  {
    id: 7,
    title: "Consultancy Services",
    shortDescription:
      "Expert logistics consultancy for compliance, certification, documentation, customs, and international trade.",

    fullDescription: `Our consultancy services focus on compliance and certification in logistics, helping businesses navigate complex international trade regulations. We ensure your operations are efficient, lawful, and meet industry standards.

      <strong>Support in obtaining certifications such as ISO, EPR, BIS, AEO, and other industry-specific standards.</strong>
      <strong>Provide expert assistance with duty drawback consultancy and help streamline documentation and processes for certification.</strong>
      <strong>Consultancy services for ICEGATE registration and AD Code registration.</strong>

      Our expert team guides you through the entire process, ensuring smooth compliance with customs and banking requirements for hassle-free international trade operations.
    `,

    icon:
      consultancyServicesIcon,

    image:
      consultancyServiceImage,
  },
];