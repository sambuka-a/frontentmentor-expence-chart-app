import { BarChart, Bar, ResponsiveContainer, LabelList, Tooltip, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns';

import { weeklyExpences } from '../../mock/data';

const ExpenceChart = () => {
  const currentDate = new Date();
  const currentDay = format(currentDate, 'eee').toLocaleLowerCase();

  const data = weeklyExpences.map((item) => ({
    ...item,
    current: item.day === currentDay,
    fill: item.day === currentDay ? '#76b5bc' : '#ec775f',
  }));

  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    const borderRadius = 10;

    return <rect x={x} y={y} width={width} height={height} fill={fill} rx={borderRadius} />;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="day" axisLine={false} showGrid={false} />
          <YAxis hide={true} />
          <Tooltip
            contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
          />
          <Bar dataKey="amount" fill="#ec775f" shape={<CustomBar />}>
            <LabelList dataKey="amount" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenceChart;
