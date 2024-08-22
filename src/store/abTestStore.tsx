import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ABTestState = {
  variant: 'A' | 'B';
};

const getInitialVariant = (): 'A' | 'B' => {                          // Check if a variant is already stored in localStorage
  const storedVariant = localStorage.getItem('abTestVariant');
  if (storedVariant === 'A' || storedVariant === 'B') {
    return storedVariant;
  }

  const newVariant: 'A' | 'B' = Math.random() > 0.5 ? 'A' : 'B';    // Randomly assign a variant and store it in localStorage
  localStorage.setItem('abTestVariant', newVariant);
  return newVariant;
};

const initialState: ABTestState = {
  variant: getInitialVariant(),
};

const abTestSlice = createSlice({
  name: 'abTest',
  initialState,
  reducers: {
    setVariant: (state, action: PayloadAction<'A' | 'B'>) => {
      state.variant = action.payload;
      localStorage.setItem('abTestVariant', action.payload);       // Update the variant in localStorage to ensure consistency
    },
  },
});

export const { setVariant } = abTestSlice.actions;
export default abTestSlice.reducer;
