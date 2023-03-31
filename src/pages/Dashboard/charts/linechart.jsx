import { useEcharts } from "@/hooks/useEcharts"

function Linechart() {
  let option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: [400, 600, 901, 934, 600, 1330, 1200, 600, 500, 920],
        type: "line",
        areaStyle: {},
        smooth: true,
      },
    ],
  }
  const [echartsRef] = useEcharts(option)
  return <div ref={echartsRef} style={{ width: "100%", height: "80%" }}></div>
}

export default Linechart
