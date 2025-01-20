import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkeletonLine = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const EmailBuilderSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-4 bg-gray-100 gap-6">
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Email Builder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <SkeletonLine className="h-4 w-16" />
            <SkeletonLine className="h-10 w-full" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <SkeletonLine className="h-4 w-16 mb-2" />
                <SkeletonLine className="h-10 w-full" />
              </div>
              <div>
                <SkeletonLine className="h-4 w-16 mb-2" />
                <SkeletonLine className="h-10 w-full" />
              </div>
              <div>
                <SkeletonLine className="h-4 w-16 mb-2" />
                <div className="flex gap-2">
                  <SkeletonLine className="h-10 flex-1" />
                  <SkeletonLine className="h-10 flex-1" />
                  <SkeletonLine className="h-10 flex-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <SkeletonLine className="h-4 w-20" />
            <SkeletonLine className="h-32 w-full" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <SkeletonLine className="h-4 w-16 mb-2" />
                <SkeletonLine className="h-10 w-full" />
              </div>
              <div>
                <SkeletonLine className="h-4 w-16 mb-2" />
                <SkeletonLine className="h-10 w-full" />
              </div>
              <div>
                <SkeletonLine className="h-4 w-16 mb-2" />
                <div className="flex gap-2">
                  <SkeletonLine className="h-10 flex-1" />
                  <SkeletonLine className="h-10 flex-1" />
                  <SkeletonLine className="h-10 flex-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <SkeletonLine className="h-4 w-16" />
            <SkeletonLine className="h-10 w-full" />
          </div>
          <div className="flex gap-2">
            <SkeletonLine className="h-10 w-32" />
            <SkeletonLine className="h-10 w-32" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-gray-50 space-y-4">
            <SkeletonLine className="h-40 w-full rounded" />
            <SkeletonLine className="h-8 w-3/4 mx-auto" />
            <div className="space-y-2">
              <SkeletonLine className="h-4 w-full" />
              <SkeletonLine className="h-4 w-full" />
              <SkeletonLine className="h-4 w-3/4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailBuilderSkeleton
