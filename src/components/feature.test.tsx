
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Feature from './features';
import abTestReducer from '../store/abTestStore';

jest.mock('./FeatureA', () => () => <button style={{ backgroundColor: 'blue', color: 'white' }}>Version A</button>);
jest.mock('./FeatureB', () => () => <button style={{ backgroundColor: 'green', color: 'black' }}>Version B</button>);

describe('Feature Component', () => {
  const renderWithStore = (store: ReturnType<typeof configureStore>) =>
    render(
      <Provider store={store}>
        <Feature />
      </Provider>
    );

  it('should render FeatureA when variant is A', () => {
    
    const store = configureStore({
      reducer: {
        abTest: abTestReducer,
      },
      preloadedState: {
        abTest: { variant: 'A' }, 
      } as { abTest: { variant: 'A' | 'B' } },  
    });

    const { getByText } = renderWithStore(store);

   
    expect(getByText('Version A')).toBeInTheDocument();
    expect(getByText('Displayed Variant: A')).toBeInTheDocument();
  });

  it('should render FeatureB when variant is B', () => {
    
    const store = configureStore({
      reducer: {
        abTest: abTestReducer,
      },
      preloadedState: {
        abTest: { variant: 'B' },  
      } as { abTest: { variant: 'A' | 'B' } },  
    });

    const { getByText } = renderWithStore(store);

    
    expect(getByText('Version B')).toBeInTheDocument();
    expect(getByText('Displayed Variant: B')).toBeInTheDocument();
  });
});
