import { ProCard, StatisticCard } from "@ant-design/pro-components";
import RcResizeObserver from "rc-resize-observer";
import { useState } from "react";

const { Statistic } = StatisticCard;

export default function welcome() {
  const [responsive, setResponsive] = useState(false);

  return (
    <div
      style={{
        width: "1200px",
        minHeight: "calc(100vh - 60px)",
        margin: "0 auto",
        paddingTop: "10px",
      }}
    >
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="数据概览"
          extra="2019年9月28日 星期五"
          split={responsive ? "horizontal" : "vertical"}
          headerBordered
          bordered
        >
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: "昨日全部报客",
                    value: 234,
                    description: (
                      <Statistic
                        title="较本月平均报客"
                        value="8.04%"
                        trend="down"
                      />
                    ),
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: "本月累计报客",
                    value: 234,
                    description: (
                      <Statistic title="月同比" value="8.04%" trend="up" />
                    ),
                  }}
                />
              </ProCard>
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: "运行中实验",
                    value: "12/56",
                    suffix: "个",
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: "历史实验总数",
                    value: "134",
                    suffix: "个",
                  }}
                />
              </ProCard>
            </ProCard>
            <StatisticCard
              title="报客走势"
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                  width="100%"
                />
              }
            />
          </ProCard>
          <StatisticCard
            title="每天占比"
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                alt="大盘"
                width="100%"
              />
            }
          />
        </ProCard>
      </RcResizeObserver>
    </div>
  );
}
