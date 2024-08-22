import { useSelector } from 'react-redux';
import { State } from '../store';
import FeatureA from './featureA';
import FeatureB from './featureB';

const Feature= () => {
  const variant = useSelector((state: State) => state.abTest.variant);           // useSelector allows you to extract data from the Redux store state

  return (
    <div>
      {variant === 'A' ? (
        <FeatureA />
      ) : (
        <FeatureB/>
      )}
      <p>Displayed Variant: {variant}</p>
    </div>
  );
};

export default Feature;
