import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const useEmailBuilder = () => {
    const [emailData, setEmailData] = useState({
        title: "",
        content: "",
        titleFontSize: "20",
        titleFontColor: "#000000",
        titleAlign: "center",
        contentFontSize: "16",
        contentFontColor: "#000000",
        contentAlign: "left",
        imageUrl: "",
    });

    const [imageUploadProgress, setImageUploadProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const baseURL = import.meta.env.VITE_API_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setEmailData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await axios.post(
                `${baseURL}/api/uploadImage`,
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setImageUploadProgress(progress);
                    },
                }
            );
            setEmailData((prev) => ({
                ...prev,
                imageUrl: response.data.imageUrl,
            }));
            toast.success("Image uploaded successfully");
        } catch (error) {
            toast.error("Failed to upload image");
        }
    };

    const handleSave = async () => {
        if (!emailData.title || !emailData.content) {
            toast.error("Please fill in all fields before saving(title and content)");
            return;
        }
        if (!emailData.imageUrl) {
            toast.error("Please upload an image before saving");
            return;
        }
        try {
            setIsLoading(true);
            await axios.post(`${baseURL}/api/uploadEmailConfig`, emailData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success("Email template saved successfully!");
        } catch (error) {
            toast.error("Failed to save template");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = async () => {
        if (!emailData.title || !emailData.content) {
            toast.error("Please fill in all fields before downloading(title and content)");
            return;
        }
        if (!emailData.imageUrl) {
            toast.error("Please upload an image before downloading");
            return;
        }
        try {
            setIsDownloading(true);
            const response = await axios.post(
                `${baseURL}/api/renderAndDownloadTemplate`,
                emailData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    responseType: "blob",
                }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = "email-template.html";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            toast.success("Template downloaded successfully");
        } catch (error) {
            toast.error("Failed to download template");
        } finally {
            setIsDownloading(false);
        }
    };

    return {
        emailData,
        imageUploadProgress,
        isLoading,
        isDownloading,
        handleChange,
        handleSelectChange,
        handleImageUpload,
        handleSave,
        handleDownload,
    };
};