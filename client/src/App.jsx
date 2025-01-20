import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import EmailBuilderSkeleton from "@/components/skeleton/EmailBuilderSkeleton";
const EmailBuilder = lazy(() => import("@/components/EmailBuilder"));
const App = () => {
  return (
    <div className="bg-gray-400">
      <Toaster
        className="p-4"
        toastOptions={{
          className: "p-4",
          style: {
            padding: "16px",
          },
        }}
      />
      <Suspense fallback={<EmailBuilderSkeleton />}>
        <EmailBuilder />
      </Suspense>
    </div>
  );
};

export default App;
