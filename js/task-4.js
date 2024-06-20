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
