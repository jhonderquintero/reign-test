import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

export const reactQueryHOC: Function = (WrappedComponent: React.FC) => {
  // Its job is to return a react component wrapping child component with QueryClientProvider
  return (props: any) => (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent {...props} />
    </QueryClientProvider>
  );
};
