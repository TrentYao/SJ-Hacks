
export type Resource = {
    name: string;
    type: "food" | "shelter" | "medical" | "mental";
    address: string;
    phone: string;
    neighborhood: string;
    hours: string;
  };
  
  export const SAN_JOSE_RESOURCES: Resource[] = [
    { name: "Martha's Kitchen", address: "311 Willow St", phone: "(408) 294-0130", type: "food", neighborhood: "Willow Glen", hours: "Mon-Fri 10AM-2PM" },
    { name: "Sacred Heart Community Service", address: "1381 S First St", phone: "(408) 278-2160", type: "food", neighborhood: "Downtown", hours: "Mon-Fri 9AM-4PM" },
    { name: "CityTeam Shelter", address: "580 Charles St", phone: "(408) 288-2185", type: "shelter", neighborhood: "Downtown", hours: "6PM-8AM Daily" },
    { name: "EHC LifeBuilders Shelter Hotline", address: "San Jose", phone: "(408) 278-2160", type: "shelter", neighborhood: "Citywide", hours: "24/7" },
    { name: "Valley Medical Center", address: "751 S Bascom Ave", phone: "(408) 885-5000", type: "medical", neighborhood: "Bascom", hours: "Mon-Fri 9AM-5PM" },
    { name: "Bill Wilson Center Counseling", address: "3490 The Alameda", phone: "(408) 243-0222", type: "mental", neighborhood: "Santa Clara", hours: "Mon-Fri 9AM-6PM" },
  ];