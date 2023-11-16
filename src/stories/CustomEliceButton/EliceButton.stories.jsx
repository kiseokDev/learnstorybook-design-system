import CustomEliceButton from './EliceButton';

export default {
  title: 'Example/CustomEliceButton',
  component: CustomEliceButton,
  tags: ['autodocs'],
};

export const AllButtons = {
  name: 'all buttons',
  render: () => (
    <>
      <CustomEliceButton type='primary' size='large'>
        primary
      </CustomEliceButton>
      <CustomEliceButton type='elice-violet' size='large'>
        elice-violet
      </CustomEliceButton>
      <br />
      <CustomEliceButton type='primary' size='medium'>
        primary
      </CustomEliceButton>
      <CustomEliceButton type='elice-violet' size='medium'>
        elice-violet
      </CustomEliceButton>
      <br />
      <CustomEliceButton type='primary' size='small'>
        primary
      </CustomEliceButton>
      <CustomEliceButton type='elice-violet' size='small'>
        elice-violet
      </CustomEliceButton>
      <br />
    </>
  ),
};
