# 📧 Email Builder  

A web application to design, preview, and manage email templates. The project has two parts:  
- **Frontend**: A React-based UI for building email templates  
- **Backend**: A Node.js server for storing and retrieving email templates  

---

## 🛠 Technologies Used  

### Frontend (React)  
- React.js  
- Tailwind CSS (for styling)  
- Axios (for API requests)  
- Toast (for notifications)  
- ShadCN/UI (for buttons, inputs, etc.)  

### Backend (Node.js + Express)  
- Express.js  
- MongoDB (for database)  
- Mongoose (to interact with MongoDB)  
- Multer (for image uploads)  
- Cloudinary (to store images)  
- Handlebars (for template rendering)  

---

## 🚀 Features  

✅ **Design emails easily** (Add text, change font size, color, alignment)  
✅ **Upload images** (Drag and drop support)  
✅ **Live preview** (See changes instantly)  
✅ **Save templates** (Stored in the database)  
✅ **Download HTML files** (Export your email template)  
✅ **Lazy loading** (Better performance)  
✅ **Toast notifications** (For better user experience)  

---

 

### 1️⃣ Install Dependencies  

#### Frontend  
```sh
cd frontend
npm install
```

#### Backend  
```sh
cd backend
npm install
```

---

## 🔑 Setup Environment Variables   
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

 

## 🌍 API Endpoints (Backend)  

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/uploadEmailConfig` | Upload a new email template |
| GET | `/api/getAllEmailTemplates` | Get all saved templates |
| GET | `/api/getEmailLayout` | Get the email layout |
| POST | `/api/renderAndDownloadTemplate` | Render and download an email template |
| POST | `/api/uploadImage` | Upload an image to Cloudinary |

---

## 📁 Folder Structure  

```
email-builder-app/
│── frontend/        # React App (UI)
│── backend/         # Node.js API
│── README.md        # Project Guide
```

---

 

