export interface IUi {
  params?: Record<string, string>;
}

const ui = (props: IUi) => {
  console.log('ui');
  return props?.params;
}

export default ui;
