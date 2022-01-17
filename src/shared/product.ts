import LightGreen from "../assets/light_green.jpg";
import Pink from "../assets/pink.jpg";
import Black from "../assets/black.jpg";
import BlackStripe from "../assets/black_stripe.jpg";
import Blue from "../assets/blue.jpg";
import BlueDots from "../assets/blue_dots.jpg";
import Green from "../assets/green.jpg";
import GreenDots from "../assets/green_dots.jpg";
import Red from "../assets/red.jpg";

export interface ProductList {
  category: string;
  name: string;
  cost: number;
  color: string;
  size: string;
  image: string;
}

export const productList: ProductList[] = [
  {
    category: "szmizjerki",
    name: "kopertowa sukienka ze wzorem",
    cost: 139.99,
    color: "niebieski",
    size: "m",
    image: BlueDots,
  },
  {
    category: "dzianinowe",
    name: "rozkloszowana sukienka z dzianiny",
    cost: 159.99,
    color: "zielony",
    size: "s",
    image: Green,
  },
  {
    category: "biznesowe",
    name: "ołówkowa sukienka z paskiem",
    cost: 139.99,
    color: "niebieski",
    size: "s",
    image: Blue,
  },
  {
    category: "dzianiowe",
    name: "ołówkowa sukienka z dzianiny",
    cost: 99.99,
    color: "czerwony",
    size: "l",
    image: Red,
  },
  {
    category: "dzianiowe",
    name: "sukienka w paski",
    cost: 159.99,
    color: "czarny",
    size: "l",
    image: BlackStripe,
  },
  {
    category: "szmizjerki",
    name: "kopertowa sukienka ze wzorem",
    cost: 139.99,
    color: "zielony",
    size: "m",
    image: GreenDots,
  },
  {
    category: "biznesowe",
    name: "rozkloszowana sukienka",
    cost: 99.99,
    color: "zielony",
    size: "l",
    image: LightGreen,
  },
  {
    category: "szmizjerki",
    name: "koszulowa sukienka z marszczeniem",
    cost: 159.99,
    color: "różowy",
    size: "m",
    image: Pink,
  },
  {
    category: "dzianiowe",
    name: "ołówkowa sukienka dzianinowa",
    cost: 99.99,
    color: "czarny",
    size: "s",
    image: Black,
  },
];
