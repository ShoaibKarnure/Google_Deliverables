import React, { Component } from "react";
import Plot from "react-plotly.js";

class StateMap extends Component {
  render() {
    const { imageValue } = this.props;
    // Sample data (you should replace this with your actual data)
    function generateStateData(imageValue) {
      if (imageValue === "att") {
        return [
          {
            State: "AL",
            Sales: 1200,
            Target: 1000,
          },
          {
            State: "AR",
            Sales: 800,
            Target: 1000,
          },
          {
            State: "CO",
            Sales: 1500,
            Target: 1000,
          },
          {
            State: "CT",
            Sales: 600,
            Target: 1000,
          },
        ];
      } else if (imageValue === "bbuy") {
        return [
          {
            State: "MD",
            Sales: 1200,
            Target: 1000,
          },
          {
            State: "MA",
            Sales: 800,
            Target: 1000,
          },
          {
            State: "MI",
            Sales: 1500,
            Target: 1000,
          },
          {
            State: "MN",
            Sales: 600,
            Target: 1000,
          },
        ];
      } else {
        return [
          {
            State: "TX",
            Sales: 1200,
            Target: 1000,
          },
          {
            State: "CA",
            Sales: 800,
            Target: 1000,
          },
          {
            State: "NY",
            Sales: 1500,
            Target: 1000,
          },
          {
            State: "FL",
            Sales: 600,
            Target: 1000,
          },
        ];
      }
    }

    // Usage:
    const stateData = generateStateData(imageValue);

    // Add state names as text annotations
    const stateCoordinates = {
      AL: { lat: 32.806671, lon: -86.79113 },
      AK: { lat: 61.370716, lon: -152.404419 },
      AZ: { lat: 33.729759, lon: -111.431221 },
      AR: { lat: 34.969704, lon: -92.373123 },
      CA: { lat: 36.116203, lon: -119.681564 },
      CO: { lat: 39.059811, lon: -105.311104 },
      CT: { lat: 41.597782, lon: -72.755371 },
      DE: { lat: 39.318523, lon: -75.507141 },
      FL: { lat: 27.766279, lon: -81.686783 },
      GA: { lat: 33.040619, lon: -83.643074 },
      HI: { lat: 21.094318, lon: -157.498337 },
      ID: { lat: 44.240459, lon: -114.478828 },
      IL: { lat: 40.349457, lon: -88.986137 },
      IN: { lat: 39.849426, lon: -86.258278 },
      IA: { lat: 42.011539, lon: -93.210526 },
      KS: { lat: 38.5266, lon: -96.726486 },
      KY: { lat: 37.66814, lon: -84.670067 },
      LA: { lat: 31.169546, lon: -91.867805 },
      ME: { lat: 44.693947, lon: -69.381927 },
      MD: { lat: 39.063946, lon: -76.802101 },
      MA: { lat: 42.230171, lon: -71.530106 },
      MI: { lat: 43.326618, lon: -84.536095 },
      MN: { lat: 45.694454, lon: -93.900192 },
      MS: { lat: 32.741646, lon: -89.678696 },
      MO: { lat: 38.456085, lon: -92.288368 },
      MT: { lat: 46.921925, lon: -110.454353 },
      NE: { lat: 41.12537, lon: -98.268082 },
      NV: { lat: 38.313515, lon: -117.055374 },
      NH: { lat: 43.452492, lon: -71.563896 },
      NJ: { lat: 40.298904, lon: -74.521011 },
      NM: { lat: 34.840515, lon: -106.248482 },
      NY: { lat: 42.165726, lon: -74.948051 },
      NC: { lat: 35.630066, lon: -79.806419 },
      ND: { lat: 47.528912, lon: -99.784012 },
      OH: { lat: 40.388783, lon: -82.764915 },
      OK: { lat: 35.565342, lon: -96.928917 },
      OR: { lat: 44.572021, lon: -122.070938 },
      PA: { lat: 40.590752, lon: -77.209755 },
      RI: { lat: 41.680893, lon: -71.51178 },
      SC: { lat: 33.856892, lon: -80.945007 },
      SD: { lat: 44.299782, lon: -99.438828 },
      TN: { lat: 35.747845, lon: -86.692345 },
      TX: { lat: 31.054487, lon: -97.563461 },
      UT: { lat: 40.150032, lon: -111.862434 },
      VT: { lat: 44.045876, lon: -72.710686 },
      VA: { lat: 37.769337, lon: -78.169968 },
      WA: { lat: 47.400902, lon: -121.490494 },
      WV: { lat: 38.491226, lon: -80.95457 },
      WI: { lat: 44.268543, lon: -89.616508 },
      WY: { lat: 42.755966, lon: -107.30249 },
    };

    // Create data for the choropleth map
    const data = [
      {
        type: "choropleth",
        locations: stateData.map((state) => state.State),
        z: stateData.map((state) => (state.Sales >= state.Target ? 1 : 0)),
        locationmode: "USA-states",
        text: stateData.map((state) => state.State),
        colorscale: [
          [0, "red"],
          [1, "green"],
        ],
        colorbar: {
          title: "Sales",
        },
      },
    ];

    // Create layout for the map
    const layout = {
      geo: {
        scope: "usa",
        showland: true,
        landcolor: "white",
        showcoastlines: true,
        coastlinecolor: "black",
        showocean: true,
        oceancolor: "LightBlue",
        showlakes: true,
        lakecolor: "Blue",
      },
      title: "Sales by State",
    };

    // Add text annotations for state names
    for (const [state, coords] of Object.entries(stateCoordinates)) {
      data.push({
        type: "scattergeo",
        mode: "text",
        lon: [coords.lon],
        lat: [coords.lat],
        text: [state],
        showlegend: false,
      });
    }

    return (
      <div>
        <h2>US Sales Map</h2>
        <Plot data={data} layout={layout} />
      </div>
    );
  }
}

export default StateMap;