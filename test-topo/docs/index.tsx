import ui from '@test/ui';

const docs = () => {
  const result = ui({ params: { a: 1 } });
  console.log(result);
}

export default docs;
