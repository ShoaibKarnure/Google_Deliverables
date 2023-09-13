import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Papa from 'papaparse';
import csvData from './data.csv';


const QuadrantChart = () => {
  // const quadrantChartRef = useRef(null);
  const [apiD, setApiD] = useState();
  const [csvFinal, setCsvFinal] = useState('');

  // useEffect(() => {
  //   const apiData = () => {
  //     fetch(
  //       "https://script.googleusercontent.com/macros/echo?user_content_key=X7_4nZxzSBBeBIxT8S17vSRKuVabIng5cYGbnCv2SbBPOCJXbbkoDI0GC2np2Thu0synEnUix_1e3BCUefygcPj3Zg_aHPYAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA0MGqPd1-iidTFCwRrONenz88FpuLqTlaCLh6RzoFqf1P-ZXHNaoq_MuXD4x-MwkiRBOsVP33cDT0zTLt9cMLqDWWgWoOPbutz9Jw9Md8uu&lib=MYh46KwtR1PGqq2iJu_X2srTH389liFSA"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //          setApiD(data.data)
  //       });
  //   };

  //   apiData();
  // }, []);

  // useEffect(() => {
  //   const quadrantChartCanvas = quadrantChartRef.current.getContext("2d");
  //   const existingChart = Chart.getChart(quadrantChartCanvas);

  //   // Destroy the existing chart if it exists
  //   if (existingChart) {
  //     existingChart.destroy();
  //   }

  //   if (apiD) {
  //     const data = {
  //       labels: apiD.map((item) => item.store_name),
  //       datasets: [
  //         {
  //           label: "pixel_6",
  //           data: apiD.map((item) => ({
  //             x: parseFloat(item.Total_Sales),
  //             y: parseFloat(item.Quadrant_Plot),
  //             label: item.store_name,
  //           })),
  //           borderColor: "red",
  //           backgroundColor: "green",
  //         },
  //         // {
  //         //   label: "pixel_6A",
  //         //   data: apiD.map((item) => ({
  //         //     x: parseFloat(item.pixel_7_pro_cycle),
  //         //     y: parseFloat(item.pixel_7_pro),
  //         //     label: item.store_name,
  //         //   })),
  //         //   borderColor: "yellow",
  //         //   backgroundColor: "orange",
  //         // },
  //       ],
  //     };

  //     const options = {
  //       plugins: {
  //         quadrants: {
  //           topLeft: "#BAF2E9",
  //           topRight: "#B0F2B4",
  //           bottomRight: "#F2BAC9",
  //           bottomLeft: "#BAD7F2",
  //         },
  //       },
  //       tooltips: {
  //         callbacks: {
  //           label: (context) => {
  //             const storeName =
  //               data.datasets[context.datasetIndex].data[context.dataIndex]
  //                 .label;
  //             return `Store Name: ${storeName}`;
  //           },
  //         },
  //       },
  //     };

  //     const quadrants = {
  //       id: "quadrants",
  //       beforeDraw(chart, args, options) {
  //         const {
  //           ctx,
  //           chartArea: { left, top, right, bottom },
  //           scales: { x, y },
  //         } = chart;
  //         const midX = x.getPixelForValue(0);
  //         const midY = y.getPixelForValue(0);
  //         ctx.save();
  //         ctx.fillStyle = options.topLeft;
  //         ctx.fillRect(left, top, midX - left, midY - top);
  //         ctx.fillStyle = options.topRight;
  //         ctx.fillRect(midX, top, right - midX, midY - top);
  //         ctx.fillStyle = options.bottomRight;
  //         ctx.fillRect(midX, midY, right - midX, bottom - midY);
  //         ctx.fillStyle = options.bottomLeft;
  //         ctx.fillRect(left, midY, midX - left, bottom - midY);
  //         ctx.restore();
  //       },
  //     };

  //     const quadrantChart = new Chart(quadrantChartCanvas, {
  //       type: "scatter",
  //       data: data,
  //       options: options,
  //       plugins: [quadrants],
  //     });
  //   }
  // }, [apiD]);
  // useEffect(() => {
  //   if (apiD) {
  //     // Convert JSON to CSV using PapaParse
  //     const csv = Papa.unparse(apiD);
  //     setCsvFinal(csv);
  //   }
  // }, [apiD]);
  

  // useEffect(()=>{
  //   const quadrantChartCanvas = document.getElementById('quadrantChart').getContext('2d');
  //   let quadrantChart;
    
  //   const dataArr = csvFinal
  //         .trim()
  //         .split('\n')
  //         .map((row) => row.replace('\r', '').split(','))
  //         // .filter((row) => row[0] !== 'xPixel') // product filter
  //         .slice(1);
    
  //       console.log(dataArr);
    
  //       dataArr.forEach((row) => {
  //         if (row.length < 29) console.log(row);
  //       // });
    
  //       // const covered_not_covered = [...new Set(dataArr.map((row) => row[11]))];
  //       // const strategic_tiering = [...new Set(dataArr.map((row) => row[13]))];
    
  //       // console.log(strategic_tiering);
    
  //       // const select = document.createElement('select');
  //       // strategic_tiering.forEach((tier) => {
  //       // 	const option = document.createElement('option');
  //       // 	option.value = tier;
  //       // 	option.innerText = tier;
  //       // 	select.appendChild(option);
  //       // });
  //       // container.appendChild(select);
    
  //       // console.log(select.value);
    
  //       // console.log(covered_not_covered);
    
  //       // const covered_btn = document.createElement('button');
  //       // covered_btn.classList.add('btn');
  //       // covered_btn.value = 'covered';
  //       // covered_btn.innerText = 'Covered';
  //       // container.appendChild(covered_btn);
    
  //       // covered_btn.addEventListener('click', () => {
  //       // 	// console.log('covered');
  //       // 	filterData('Covered', select.value);
  //       // });
    
  //       // const not_covered_btn = document.createElement('button');
  //       // not_covered_btn.classList.add('btn');
  //       // not_covered_btn.value = 'not_covered';
  //       // not_covered_btn.innerText = 'Not Covered';
  //       // container.appendChild(not_covered_btn);
    
  //       // not_covered_btn.addEventListener('click', () => {
  //       // 	// console.log('not covered');
  //       // 	filterData('Uncovered', select.value);
  //       // });
    
  //       // function filterData(isCovered, isStrategicTiering) {
  //       // const filteredData = dataArr.filter(
  //       // (row) => row[11] === isCovered && row[13] === isStrategicTiering
  //       // );
  //       const filteredData = dataArr;
  //       const store_name = filteredData.map((row) => row[7]);
    
  //       const Cycle_Achievement = filteredData.map((row) => row[27]);
  //       const four_Cycle_Achievement = filteredData.map((row) => row[24]);
  //       console.log(store_name);
  //       console.log(Cycle_Achievement);
  //       console.log(four_Cycle_Achievement);
    
  //       const data_x_y = [];
    
  //       for (let i = 0; i < Cycle_Achievement.length; i++) {
  //         data_x_y.push({
  //           x: Cycle_Achievement[i].split('%')[0],
  //           y: four_Cycle_Achievement[i].split('%')[0],
  //         });
  //       }
  //       // console.log(data_x_y);
  //       // drawChart(data_x_y, store_name, isCovered);
  //       drawChart(data_x_y, store_name);
  //       // }
  //     });
    
  //   // function drawChart(data_x_y, store_name, isCovered) {
  //   function drawChart(data_x_y, store_name) {
  //     const data = {
  //       labels: store_name,
  //       datasets: [
  //         {
  //           label: 'Points',
  //           data: data_x_y,
  //           borderColor: 'blue',
  //           // backgroundColor:
  //           // isCovered === 'Covered' ? 'rgba(0, 0, 255, 0.5)' : 'rgba(255, 0, 0, 0.5)',
  //           backgroundColor: 'rgba(0, 125, 255, 0.5)',
  //         },
  //       ],
  //     };
    
  //     const options = {
  //       scales: {
  //         x: {
  //           ticks: {
  //             callback: function (value, index, values) {
  //               return value + '%';
  //             },
  //           },
  //         },
  //         y: {
  //           ticks: {
  //             callback: function (value, index, values) {
  //               return value + '%';
  //             },
  //           },
  //         },
  //       },
  //       plugins: {
  //         quadrants: {
  //           topLeft: 'rgba(255, 255, 255, 0.5)',
  //           topRight: 'rgba(255, 255, 255, 0.5)',
  //           bottomRight: 'rgba(255, 255, 255, 0.5)',
  //           bottomLeft: 'rgba(255, 255, 255, 0.5)',
  //         },
  //       },
  //       references: {
  //         xLine: {
  //           value: 100,
  //           borderColor: 'black',
  //           borderWidth: 1,
  //           label: {
  //             content: 'X = 100',
  //             enabled: true,
  //           },
  //         },
  //         yLine: {
  //           value: 100,
  //           borderColor: 'back',
  //           borderWidth: 1,
  //           label: {
  //             content: 'Y = 100',
  //             enabled: true,
  //           },
  //         },
  //       },
  //     };
    
  //     const quadrants = {
  //       id: 'quadrants',
  //       beforeDraw(chart, args, options) {
  //         const {
  //           ctx,
  //           chartArea: { left, top, right, bottom },
  //           scales: { x, y },
  //         } = chart;
  //         const midX = x.getPixelForValue(0);
  //         const midY = y.getPixelForValue(0);
  //         ctx.save();
  //         ctx.fillStyle = options.topLeft;
  //         ctx.fillRect(left, top, midX - left, midY - top);
  //         ctx.fillStyle = options.topRight;
  //         ctx.fillRect(midX, top, right - midX, midY - top);
  //         ctx.fillStyle = options.bottomRight;
  //         ctx.fillRect(midX, midY, right - midX, bottom - midY);
  //         ctx.fillStyle = options.bottomLeft;
  //         ctx.fillRect(left, midY, midX - left, bottom - midY);
  //         ctx.restore();
  //         // add references line here
    
  //         // add references line here
  //         const { references } = chart.options;
  //         if (references) {
  //           const { xLine, yLine } = references;
  //           if (xLine) {
  //             const { value, borderColor, borderWidth, label } = xLine;
  //             const xPixel = x.getPixelForValue(value);
  //             ctx.save();
  //             ctx.beginPath();
  //             ctx.moveTo(xPixel, top);
  //             ctx.lineTo(xPixel, bottom);
  //             ctx.strokeStyle = borderColor;
  //             ctx.lineWidth = borderWidth;
  //             ctx.stroke();
  //             ctx.restore();
  //             if (label && label.enabled) {
  //               const { content } = label;
  //               ctx.save();
  //               ctx.fillStyle = borderColor;
  //               ctx.font = '12px Arial';
  //               ctx.textAlign = 'center';
  //               ctx.textBaseline = 'bottom';
  //               ctx.fillText(content, xPixel, bottom);
  //               ctx.restore();
  //             }
  //           }
  //           if (yLine) {
  //             const { value, borderColor, borderWidth, label } = yLine;
  //             const yPixel = y.getPixelForValue(value);
  //             ctx.save();
  //             ctx.beginPath();
  //             ctx.moveTo(left, yPixel);
  //             ctx.lineTo(right, yPixel);
  //             ctx.strokeStyle = borderColor;
  //             ctx.lineWidth = borderWidth;
  //             ctx.stroke();
  //             ctx.restore();
  //             if (label && label.enabled) {
  //               const { content } = label;
  //               ctx.save();
  //               ctx.fillStyle = borderColor;
  //               ctx.font = '12px Arial';
  //               ctx.textAlign = 'right';
  //               ctx.textBaseline = 'bottom';
  //               ctx.fillText(content, right, yPixel);
  //               ctx.restore();
  //             }
  //           }
  //         }
  //       },
  //     };
  //     if (quadrantChart) {
  //       quadrantChart.destroy();
  //     }
  //     quadrantChart = new Chart(quadrantChartCanvas, {
  //       type: 'scatter',
  //       data: data,
  //       options: options,
  //       plugins: [quadrants],
  //     });
  //   }
    
  //   // console.log(filteredData);
  // },[]);

  const quadrantChartRef = useRef(null);
  useEffect(()=>{
    const quadrantChartCanvas = document.getElementById('quadrantChart').getContext('2d');
    let quadrantChart;
    fetch(csvData)
      .then((res) => res.text())
      .then((data) => {
        const dataArr = data
          .trim()
          .split('\n')
          .map((row) => row.replace('\r', '').split(','))
          // .filter((row) => row[0] !== 'xPixel') // product filter
          .slice(1);
    
        // console.log(dataArr);
    
        dataArr.forEach((row) => {
          if (row.length < 29) console.log(row);
        });
    
        // const covered_not_covered = [...new Set(dataArr.map((row) => row[11]))];
        // const strategic_tiering = [...new Set(dataArr.map((row) => row[13]))];
    
        // console.log(strategic_tiering);
    
        // const select = document.createElement('select');
        // strategic_tiering.forEach((tier) => {
        // 	const option = document.createElement('option');
        // 	option.value = tier;
        // 	option.innerText = tier;
        // 	select.appendChild(option);
        // });
        // container.appendChild(select);
    
        // console.log(select.value);
    
        // console.log(covered_not_covered);
    
        // const covered_btn = document.createElement('button');
        // covered_btn.classList.add('btn');
        // covered_btn.value = 'covered';
        // covered_btn.innerText = 'Covered';
        // container.appendChild(covered_btn);
    
        // covered_btn.addEventListener('click', () => {
        // 	// console.log('covered');
        // 	filterData('Covered', select.value);
        // });
    
        // const not_covered_btn = document.createElement('button');
        // not_covered_btn.classList.add('btn');
        // not_covered_btn.value = 'not_covered';
        // not_covered_btn.innerText = 'Not Covered';
        // container.appendChild(not_covered_btn);
    
        // not_covered_btn.addEventListener('click', () => {
        // 	// console.log('not covered');
        // 	filterData('Uncovered', select.value);
        // });
    
        // function filterData(isCovered, isStrategicTiering) {
        // const filteredData = dataArr.filter(
        // (row) => row[11] === isCovered && row[13] === isStrategicTiering
        // );
        const filteredData = dataArr;
        const store_name = filteredData.map((row) => row[7]);
    
        const Cycle_Achievement = filteredData.map((row) => row[27]);
        const four_Cycle_Achievement = filteredData.map((row) => row[24]);
        console.log(store_name);
        console.log(Cycle_Achievement);
        console.log(four_Cycle_Achievement);
    
        const data_x_y = [];
    
        for (let i = 0; i < Cycle_Achievement.length; i++) {
          data_x_y.push({
            x: Cycle_Achievement[i].split('%')[0],
            y: four_Cycle_Achievement[i].split('%')[0],
          });
        }
        // console.log(data_x_y);
        // drawChart(data_x_y, store_name, isCovered);
        drawChart(data_x_y, store_name);
        // }
      });
    
    // function drawChart(data_x_y, store_name, isCovered) {
    function drawChart(data_x_y, store_name) {
      const data = {
        labels: store_name,
        datasets: [
          {
            label: 'Points',
            data: data_x_y,
            borderColor: 'blue',
            // backgroundColor:
            // isCovered === 'Covered' ? 'rgba(0, 0, 255, 0.5)' : 'rgba(255, 0, 0, 0.5)',
            backgroundColor: 'rgba(0, 125, 255, 0.5)',
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            ticks: {
              callback: function (value, index, values) {
                return value + '%';
              },
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                return value + '%';
              },
            },
          },
        },
        plugins: {
          quadrants: {
            topLeft: 'rgba(255, 255, 255, 0.5)',
            topRight: 'rgba(255, 255, 255, 0.5)',
            bottomRight: 'rgba(255, 255, 255, 0.5)',
            bottomLeft: 'rgba(255, 255, 255, 0.5)',
          },
        },
        references: {
          xLine: {
            value: 100,
            borderColor: 'black',
            borderWidth: 1,
            label: {
              content: 'X = 100',
              enabled: true,
            },
          },
          yLine: {
            value: 100,
            borderColor: 'back',
            borderWidth: 1,
            label: {
              content: 'Y = 100',
              enabled: true,
            },
          },
        },
      };
    
      const quadrants = {
        id: 'quadrants',
        beforeDraw(chart, args, options) {
          const {
            ctx,
            chartArea: { left, top, right, bottom },
            scales: { x, y },
          } = chart;
          const midX = x.getPixelForValue(0);
          const midY = y.getPixelForValue(0);
          ctx.save();
          ctx.fillStyle = options.topLeft;
          ctx.fillRect(left, top, midX - left, midY - top);
          ctx.fillStyle = options.topRight;
          ctx.fillRect(midX, top, right - midX, midY - top);
          ctx.fillStyle = options.bottomRight;
          ctx.fillRect(midX, midY, right - midX, bottom - midY);
          ctx.fillStyle = options.bottomLeft;
          ctx.fillRect(left, midY, midX - left, bottom - midY);
          ctx.restore();
          // add references line here
    
          // add references line here
          const { references } = chart.options;
          if (references) {
            const { xLine, yLine } = references;
            if (xLine) {
              const { value, borderColor, borderWidth, label } = xLine;
              const xPixel = x.getPixelForValue(value);
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(xPixel, top);
              ctx.lineTo(xPixel, bottom);
              ctx.strokeStyle = borderColor;
              ctx.lineWidth = borderWidth;
              ctx.stroke();
              ctx.restore();
              if (label && label.enabled) {
                const { content } = label;
                ctx.save();
                ctx.fillStyle = borderColor;
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText(content, xPixel, bottom);
                ctx.restore();
              }
            }
            if (yLine) {
              const { value, borderColor, borderWidth, label } = yLine;
              const yPixel = y.getPixelForValue(value);
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(left, yPixel);
              ctx.lineTo(right, yPixel);
              ctx.strokeStyle = borderColor;
              ctx.lineWidth = borderWidth;
              ctx.stroke();
              ctx.restore();
              if (label && label.enabled) {
                const { content } = label;
                ctx.save();
                ctx.fillStyle = borderColor;
                ctx.font = '12px Arial';
                ctx.textAlign = 'right';
                ctx.textBaseline = 'bottom';
                ctx.fillText(content, right, yPixel);
                ctx.restore();
              }
            }
          }
        },
      };
      if (quadrantChart) {
        quadrantChart.destroy();
      }
      quadrantChart = new Chart(quadrantChartCanvas, {
        type: 'scatter',
        data: data,
        options: options,
        plugins: [quadrants],
      });
    }
    
    // console.log(filteredData);
  },[])
  


  return (
    <div className="container pt-10 flex justify-center items-center">
      <canvas
        id="quadrantChart"
        ref={quadrantChartRef}
      ></canvas>
    </div>
  );
};

export default QuadrantChart;
