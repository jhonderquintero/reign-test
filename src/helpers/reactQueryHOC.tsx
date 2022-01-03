import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

/**
 * Its job is to return a react component wrapping child component with QueryClientProvider
 * @param WrappedComponent 
 * @returns <QueryClientProvider ... />
 */
export const reactQueryHOC: Function = (
  WrappedComponent: React.FC<IReactQueryHOC>
) => {
  return (props: any) => (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent {...props} queryClient={queryClient} />
    </QueryClientProvider>
  );
};

interface IReactQueryHOC {
  queryClient: QueryClient;
}
