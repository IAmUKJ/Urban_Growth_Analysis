
# 🌍 Satellite Change Detection & Urban Growth Analytics Dashboard

An end-to-end analytics project that leverages satellite imagery to identify urban growth and visualize land-use changes through an interactive dashboard. The project combines deep learning–based change detection with business intelligence techniques to generate actionable insights from geospatial data.

---

## 📌 Project Overview

Rapid urbanization has significantly transformed land usage across the globe. Monitoring these changes is crucial for urban planning, environmental management, and infrastructure development.

This project detects changes between satellite images captured at different time periods and presents the results through an interactive analytics dashboard. It enables users to explore change metrics, compare images, and gain insights into urban growth patterns.

---

## 🚀 Key Features

- 📍 Satellite image change detection using Deep Learning
- 📊 Interactive dashboard for data visualization
- 📈 KPI tracking using IoU and Dice Score
- 🔍 Dynamic filtering by Image ID and Urban Growth
- 🗺️ Before & After satellite image comparison
- 📉 Trend analysis through multiple visualizations
- 📁 Centralized storage of analysis results
- 💡 User-friendly interface for exploring insights

---

## 🛠️ Technologies Used

### Analytics & Data Visualization
- Power BI
- Python
- Pandas
- NumPy
- Matplotlib
- OpenCV

### Machine Learning
- TensorFlow / Keras
- U-Net Architecture
- Image Segmentation

### Dashboard & Web
- React.js
- Node.js
- Express.js
- MongoDB

---

## 📊 Dashboard Insights

The Power BI dashboard provides:

- Urban Growth Distribution
- Average IoU Score
- Average Dice Score
- Growth Trend Analysis
- Image-wise Performance Metrics
- Interactive Filtering
- Satellite Image Comparison

---

## 📂 Project Structure

```
Satellite-Change-Detection/
│
├── backend/                  # Express Backend
├── frontend/                 # React Dashboard
├── satellite_change_detection_model.ipynb
├── satellite_dashboard.pbix
├── README.md
└── Dataset
```

---

## 📈 Workflow

1. Collect satellite image dataset.
2. Preprocess satellite images.
3. Train a U-Net segmentation model.
4. Generate change masks.
5. Calculate performance metrics (IoU & Dice Score).
6. Store prediction results.
7. Visualize insights through Power BI and React dashboard.

---

## 📊 Performance Metrics

The project evaluates model performance using:

- **Intersection over Union (IoU)**
- **Dice Similarity Coefficient**
- Urban Growth Percentage

These metrics help assess segmentation quality and quantify land-use changes.

---

## 💼 Business Applications

- Urban Planning
- Smart City Development
- Infrastructure Monitoring
- Disaster Assessment
- Environmental Impact Analysis
- Land Use Monitoring
- Government Planning
- Remote Sensing Analytics

---

## 📸 Dashboard Preview

> Add screenshots of:
>
> - Main Dashboard
> - Power BI Dashboard
> - Before vs After Satellite Images
> - Charts & KPIs

Example:

```
screenshots/
├── dashboard.png
├── filters.png
├── comparison.png
└── powerbi_dashboard.png
```

---

## 🎯 Future Enhancements

- Real-time satellite data integration
- Cloud deployment
- GIS map integration
- Automated report generation
- Predictive urban growth forecasting
- Advanced geospatial analytics

---

## 👨‍💻 Author

**Utkarsh Kumar Jha**

LinkedIn: *Add your profile*

GitHub: *Add your GitHub profile*

---

## ⭐ Project Highlights

- End-to-end analytics solution
- Interactive business dashboard
- Machine learning–based image segmentation
- Geospatial data visualization
- KPI-driven decision support
