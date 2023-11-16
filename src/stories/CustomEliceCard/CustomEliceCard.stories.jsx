import CustomEliceCard from './CustomEliceCard';
import Test from '../assets/test.jpg';

export default {
  title: 'Example/CustomEliceCard',
  component: CustomEliceCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <CustomEliceCard {...args} />;

export const BigCard = Template.bind({});
BigCard.args = {
  cards: [
    {
      size: 'large',
      tags: ['LCK', 'T1', 'LPL'],
      date: '2023. 11. 16',
      title: '지속적으로 건강하게 코딩하는법',
      src: Test,
      postId: 1,
    },
  ],
};

export const MediumCard = Template.bind({});
MediumCard.args = {
  cards: [
    {
      size: 'medium',
      tags: ['LCK', 'T1', 'LPL'],
      date: '2023. 11. 16',
      title: '지속적으로 건강하게 코딩하는법',
      src: Test,
      postId: 3,
    },
  ],
};
