export const composeProviders = (providersWithProps) => ({ children }) =>
    providersWithProps.reduceRight(
        (acc, { Provider, props = {} }) => (
            <Provider {...props}>{acc}</Provider>
        ),
        children
    );