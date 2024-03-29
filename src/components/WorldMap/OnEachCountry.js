const OnEachCountry = (searchController) => {
  const onEachFeature = (country, layer) => {
    const name = country.properties.ADMIN;
    const confirmed = country.properties.confirmed;
    const active = country.properties.active;
    const recovered = country.properties.recovered;
    const deaths = country.properties.deaths;
    const flag = country.properties.flag;
    const ISO3 = country.properties.ISO_A3;
    layer.options.fillColor =
      "hsl(3,100%," + country.properties.colorHue + "%)";

    window.handlePopUpClick = (ISO_A3, countryName) => {
      let e = { target: { value: ISO_A3 } };
      searchController(e, countryName);
    };

    const popUpContent = `
        <div class='title'>
            <img src='${flag}' alt="${name}"/>
            <h4>${name}</h4>
        </div>
        <p>
            <span>${confirmed} Total Confirmed</span>
            <br /><span style="color: #0bc4f5">${active} Active Cases</span>
            <br /><span style="color: #2DD249">${recovered} Total Recovered</span>
            <br /><span style="color: #FF0E00">${deaths} Total Deaths</span>
        </p>
        <br /><button onclick="handlePopUpClick('${ISO3}', '${name}')">View Summary</button>
        `;

    if (confirmed !== 0) {
      layer.bindPopup(popUpContent);
    } else {
      layer.bindPopup(`
            <div class='title'>
                <h4>${name}</h4>
            </div>
            <p>
                <span>There is no data for this country</span>
            </p>
            `);
    }
  };

  return onEachFeature;
};

export default OnEachCountry;
