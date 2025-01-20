# Email Builder

A modern React application for building customizable email templates with a live preview feature. Users can customize text styling, add images, and export their templates as HTML files.

## Features

- 📱 Responsive design
- 🎨 Live preview of email template
- 🖼️ Image upload support
- 🎯 Customizable text styling:
  - Font size
  - Font color
  - Text alignment
- 💾 Save templates to server
- ⬇️ Download templates as HTML files
- 🔄 Reload warning to prevent accidental data loss
- ⚡ Lazy loading for better performance
- 🎉 Toast notifications  
 
## Usage

1. **Title and Content**
   - Enter your email title and content in the respective fields
   - Customize font size, color, and alignment for both title and content

2. **Image Upload**
   - Click the file input to upload an image
   - Supported formats: All common image formats (JPEG, PNG, GIF, etc.)
   - Progress bar shows upload status

3. **Save and Download**
   - Click "Save Template" to save your template to the server
   - Click "Download HTML" to export your template as an HTML file
   - Both operations require title, content, and image to be present

## Components

### Main Components
- `App.jsx`: Root component with Suspense and toast notifications
- `EmailBuilder.jsx`: Main builder interface with form controls and preview
- `EmailBuilderSkeleton.jsx`: Loading skeleton for lazy loading

### Custom Hooks
- `useEmailBuilder`: Manages state and operations for the email builder

### UI Components (from shadcn/ui)
- Card
- Input
- Textarea
- Button
- Select
- Toaster

## Dependencies

- React
- axios (for API calls)
- sonner (for toast notifications)
- lucide-react (for icons)
- shadcn/ui (for UI components)
- Tailwind CSS (for styling)
 