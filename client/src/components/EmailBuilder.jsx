import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlignLeft, AlignCenter, AlignRight, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmailBuilder } from "@/hooks/useEmailBuilder";

const AlignmentButton = ({ align, currentAlign, onClick }) => {
  const icons = {
    left: <AlignLeft className="w-4 h-4" />,
    center: <AlignCenter className="w-4 h-4" />,
    right: <AlignRight className="w-4 h-4" />,
  };

  return (
    <Button
      type="button"
      variant={currentAlign === align ? "default" : "outline"}
      className="flex-1"
      onClick={onClick}
    >
      {icons[align]}
    </Button>
  );
};

const EmailBuilder = () => {
  const {
    emailData,
    imageUploadProgress,
    isLoading,
    isDownloading,
    handleChange,
    handleSelectChange,
    handleImageUpload,
    handleSave,
    handleDownload,
  } = useEmailBuilder();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "All saved data will be removed. Are you sure you want to reload?";
      return e.returnValue;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-4 bg-gray-100 gap-6">
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Email Builder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              name="title"
              value={emailData.title}
              onChange={handleChange}
              placeholder="Enter email title"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Font Size</label>
                <Select
                  value={emailData.titleFontSize}
                  onValueChange={(value) =>
                    handleSelectChange("titleFontSize", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {[16, 18, 20, 22, 24].map((size) => (
                      <SelectItem key={size} value={size.toString()}>
                        {size}px
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Color</label>
                <Input
                  type="color"
                  name="titleFontColor"
                  value={emailData.titleFontColor}
                  onChange={handleChange}
                  className="h-10"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Align</label>
                <div className="flex gap-2">
                  {["left", "center", "right"].map((align) => (
                    <AlignmentButton
                      key={align}
                      align={align}
                      currentAlign={emailData.titleAlign}
                      onClick={() => handleSelectChange("titleAlign", align)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <Textarea
              name="content"
              value={emailData.content}
              onChange={handleChange}
              placeholder="Enter email content"
              rows={6}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Font Size</label>
                <Select
                  value={emailData.contentFontSize}
                  onValueChange={(value) =>
                    handleSelectChange("contentFontSize", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {[12, 14, 16, 18, 20].map((size) => (
                      <SelectItem key={size} value={size.toString()}>
                        {size}px
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Color</label>
                <Input
                  type="color"
                  name="contentFontColor"
                  value={emailData.contentFontColor}
                  onChange={handleChange}
                  className="h-10"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Align</label>
                <div className="flex gap-2">
                  {["left", "center", "right"].map((align) => (
                    <AlignmentButton
                      key={align}
                      align={align}
                      currentAlign={emailData.contentAlign}
                      onClick={() => handleSelectChange("contentAlign", align)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Image</label>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUploadProgress > 0 && (
              <div className="text-sm text-gray-500">
                Uploading image... {imageUploadProgress}%
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                "Save Template"
              )}
            </Button>
            <Button onClick={handleDownload} variant="outline">
              {isDownloading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                "Download HTML"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Section */}
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-gray-50">
            {emailData.imageUrl && (
              <img
                src={emailData.imageUrl}
                alt="Preview"
                className="w-full h-40 object-contain mb-4 rounded"
              />
            )}
            <div
              style={{
                fontSize: `${emailData.titleFontSize}px`,
                color: emailData.titleFontColor,
                textAlign: emailData.titleAlign,
              }}
              className="font-bold mb-4"
            >
              {emailData.title || "Email Title"}
            </div>
            <div
              style={{
                fontSize: `${emailData.contentFontSize}px`,
                color: emailData.contentFontColor,
                textAlign: emailData.contentAlign,
              }}
            >
              {emailData.content || "Email content goes here..."}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailBuilder;