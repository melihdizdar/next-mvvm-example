export const composeProviders = (providers) => ({ children }) =>
    providers.reduce(
    (AccumulatedProviders, CurrentProvider) => (
        <CurrentProvider>{AccumulatedProviders}</CurrentProvider>
    ),
    children
);