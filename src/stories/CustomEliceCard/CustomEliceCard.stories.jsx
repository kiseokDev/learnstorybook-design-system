import CustomEliceCard from './CustomEliceCard';
import Youtube from '../assets/youtube.svg';

export default {
  title: 'Example/CustomEliceCard',
  component: CustomEliceCard,
  tags: ['autodocs'],
};

const Template = (args) => <CustomEliceCard {...args} />;

export const BigCard = Template.bind({});
BigCard.args = {
  size: 'large',
  tags: ['LCK', 'T1', 'LPL'],
  date: '2023. 11. 16',
  title: '업무 효율을 위한 자동화 툴 추천 3가지',
  src: { Youtube },
};
