// Доставка товару

function getShippingCost(country) {
  switch (country.toUpperCase()) {
    case "CHINA":
      return `Shipping to ${country} will cost 100 credits`;
    case "CHILE":
      return `Shipping to ${country} will cost 250 credits`;
    case "AUSTRALIA":
      return `Shipping to ${country} will cost 170 credits`;
    case "JAMAICA":
      return `Shipping to ${country} will cost 120 credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
