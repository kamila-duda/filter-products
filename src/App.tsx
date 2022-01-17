import React, { useEffect, useState } from "react";
import "./App.css";
import { ProductList, productList } from "./shared/product";

function App() {
  const [lowValue, setLowValue] = useState("");
  const [hightValue, setHightValue] = useState("");
  const [sortProducts, setSortProducts] = useState(productList);

  const resetProducts = () => {
    setFilters({});
    setHightValue("");
    setLowValue("");
  };

  interface Filters {
    category?: string;
    color?: string;
    size?: string;
  }

  const [filters, setFilters] = useState<Filters>();

  useEffect(() => {
    const findHigher = function (item: ProductList) {
      return item.cost >= +lowValue;
    };
    const findLower = function (item: ProductList) {
      return item.cost <= +hightValue;
    };
    let filterArray = productList.filter((item: ProductList) => {
      for (let key in filters) {
        if (
          item[key as keyof ProductList] === undefined ||
          item[key as keyof ProductList] !== filters[key as keyof Filters]
        )
          return false;
      }
      return true;
    });
    let filterByValue = [];

    if (filters) {
      if (lowValue) {
        filterByValue = filterArray.filter(findHigher);
      } else {
        filterByValue = filterArray;
      }
      if (hightValue) {
        filterByValue = filterByValue.filter(findLower);
      }
    } else {
      filterByValue = sortProducts.filter(findHigher);
    }
    setSortProducts(filterByValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, lowValue, hightValue]);
  return (
    <main className="main">
      <h1 className="tittle">Welcome to sort app</h1>
      <form className="form">
        <label htmlFor="kolory">Kolor </label>
        <select
          name="kolory"
          id="kolory"
          value={filters?.color ?? ""}
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
        >
          <option value="" disabled>
            --Wybierz kolor--
          </option>
          <option className="green" value="zielony">
            Zielony
          </option>
          <option className="blue" value="niebieski">
            Niebieski
          </option>
          <option className="red" value="czerwony">
            Czerwony
          </option>
          <option className="black" value="czarny">
            Czarny
          </option>
          <option className="pink" value="różowy">
            Różowy
          </option>
        </select>
        <div>
          Rozmiar:
          <label
            htmlFor="s"
            className={
              filters?.size === "s"
                ? "radioButton radioButtonChecked"
                : "radioButton"
            }
          >
            S
            <input
              type="radio"
              name="rozmiary"
              id="s"
              value="s"
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              checked={filters?.size === "s"}
            />
          </label>
          <label
            htmlFor="m"
            className={
              filters?.size === "m"
                ? "radioButton radioButtonChecked"
                : "radioButton"
            }
          >
            M
            <input
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              type="radio"
              name="rozmiary"
              id="m"
              value="m"
              checked={filters?.size === "m"}
            />
          </label>
          <label
            htmlFor="l"
            className={
              filters?.size === "l"
                ? "radioButton radioButtonChecked"
                : "radioButton"
            }
          >
            L
            <input
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              type="radio"
              name="rozmiary"
              id="l"
              value="l"
              checked={filters?.size === "l"}
            />
          </label>
        </div>
        <label>
          Cena od{" "}
          <input
            type="number"
            id="low"
            value={lowValue}
            onChange={(e) => setLowValue(e.target.value)}
          />{" "}
          do{" "}
          <input
            type="number"
            id="hight"
            value={hightValue}
            onChange={(e) => setHightValue(e.target.value)}
          />
        </label>
        <input
          type="button"
          value="reset all"
          onClick={() => resetProducts()}
        />
      </form>
      <div className="filtersWrapper">
        {filters &&
          Object.values(filters).map((value, index) => (
            <p
              className="filterTile"
              key={index}
              onClick={() =>
                setFilters(
                  Object.fromEntries(
                    Object.entries(filters).filter((key) => key[1] !== value) ??
                      []
                  )
                )
              }
            >
              {value}
            </p>
          ))}
      </div>
      <div className="grid">
        {sortProducts.map((item, index) => (
          <div className="card" key={index}>
            <div>
              <h2>{item.name} &rarr;</h2>
              <p>{item.cost}</p>
              <p>{item.color}</p>
              <p>rozmiar {item.size}</p>
            </div>
            <img src={item.image} className="image" alt="dress" />
          </div>
        ))}
      </div>
      {sortProducts.length < 1 && (
        <p>Przepraszamy, ale żaden z produktów nie spełnia Twoich kryteriów</p>
      )}
    </main>
  );
}

export default App;
