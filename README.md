# A-B Testing
This project implements an A/B testing mechanism in a React application using Redux for state management. The application dynamically renders different components (FeatureA and FeatureB) based on the A/B test variant assigned to the user.
# Purpose
The goal of this project is to demonstrate the ability to implement A/B testing in a frontend application, allowing for experimentation and analysis of user interactions with different UI variations.
# Features
A/B Testing Implementation: Dynamically render different components based on A/B test variants.
Redux State Management: Manage A/B test state using Redux.
Component Testing: Comprehensive unit tests using Jest and React Testing Library.
# Technologies Used
React: Frontend framework used for building the user interface.
Redux: State management library to handle global state.
TypeScript: Superset of JavaScript that adds static typing.
Jest: Testing framework used for unit tests.

# Usage
The application is designed to render either FeatureA or FeatureB based on the A/B test variant provided in the Redux store.

# Rendering Components Based on Variants
To simulate the A/B test, the Redux store is preloaded with a variant ('A' or 'B'). Depending on the variant, the application will render FeatureA or FeatureB and set to local storage.
Variant A: The app will display FeatureA.
Variant B: The app will display FeatureB.

