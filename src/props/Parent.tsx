import { ChildAsFC } from './Child';

const Parent = () => {
  return (<ChildAsFC color="red" onClick={() => { console.log('Child clicked') }} >
    Some text!
  </ChildAsFC>)
};

export default Parent;