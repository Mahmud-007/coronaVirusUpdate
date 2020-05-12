import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImg from "./images/corona.jpg";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    console.log(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={coronaImg}
          alt="Corona Virus Updates"
        ></img>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
