import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

export const reactQueryHOC: Function = (
  WrappedComponent: React.FC<IReactQueryHOC>
) => {
  // Its job is to return a react component wrapping child component with QueryClientProvider
  return (props: any) => (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent {...props} queryClient={queryClient} />
    </QueryClientProvider>
  );
};

interface IReactQueryHOC {
  queryClient: QueryClient;
}
