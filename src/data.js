export const profile = {
  name: "Abdul-Samad Owoseni",
  title: "Data Analyst & Data Engineering Enthusiast",
  location: "Lagos, Nigeria",
  phone: "0904 454 6360",
  email: "abdussamadowoseni28@gmail.com",
  linkedin: "https://linkedin.com/in/abdul-samad-owoseni",
  resumeUrl: "/Abdul-Samad_Owoseni_CV.pdf",
  summary:
    "Data Science student at the University of Lagos with hands-on experience in Python, data analytics, and machine learning fundamentals. My practical skills have been built through self-learning, community programs including the Mentor To Job Bootcamp and Data Science Nigeria (DSN), and real-world freelance projects. I have a growing interest in artificial intelligence, automation, and emerging AI tools, and I enjoy working on innovative, problem-solving projects. I am looking for an internship where I can contribute to AI-focused work, collaborate with a technical team, and keep growing in a fast-paced environment.",
  keywords: ["Data Analytics", "Data Engineering", "Python", "SQL", "ETL/ELT Pipelines", "Tableau"],
  roles: [
    "Data Analyst",
    "Data Engineering Enthusiast",
    "BI Dashboard Builder",
    "ETL Pipeline Developer",
    "Aspiring Data Scientist",
  ],
};

export const highlights = [
  {
    title: "ETL & Pipelines",
    text: "Designed Python + PostgreSQL pipelines that cut manual data prep time by ~40%.",
  },
  {
    title: "Dashboards & BI",
    text: "Built interactive Tableau, Power BI, and Excel dashboards used for real executive reporting.",
  },
  {
    title: "Forecasting & Analysis",
    text: "Built a Prophet-based forecasting model, improving accuracy 15% over manual baselines.",
  },
];

export const stats = [
  { value: "40%", label: "Less manual data prep time" },
  { value: "60%", label: "Faster manual analysis time" },
  { value: "15%", label: "Better forecast accuracy" },
  { value: "5+", label: "Reporting datasets maintained" },
];

export const proficiency = [
  { skill: "SQL", level: 90 },
  { skill: "Python (Pandas/NumPy)", level: 85 },
  { skill: "Tableau", level: 85 },
  { skill: "ETL / Pipeline Design", level: 80 },
  { skill: "Excel / Power BI", level: 78 },
  { skill: "Machine Learning (in progress)", level: 45 },
];

export const experience = [
  {
    role: "Data Coordinator / Analyst",
    org: "Elevvo Tech",
    period: "2024 – 2025",
    points: [
      "Designed and deployed an end-to-end ELT pipeline using Python and PostgreSQL to ingest, clean, and transform multi-source datasets, reducing manual data prep time by ~40%.",
      "Built interactive KPI dashboards in Tableau and Excel tracking sales performance, customer behavior, and operational metrics across departments.",
      "Wrote optimized SQL queries (PostgreSQL & MySQL) for reporting on sales trends, product performance, and customer segmentation, improving reporting efficiency for stakeholders.",
      "Automated recurring data wrangling workflows using Pandas and NumPy, enabling faster turnaround on monthly business intelligence reports.",
      "Maintained data integrity across 5+ reporting datasets by implementing validation checks and transformation logic via Python scripts.",
    ],
  },
  {
    role: "Data Analyst (Freelance)",
    org: "Independent Clients",
    period: "2024 – Present",
    points: [
      "Developed an Employee Performance Dashboard by building a SQL-to-Excel reporting pipeline that surfaced productivity KPIs and workforce trends for management decision-making.",
      "Cleaned, standardized, and modelled raw employee records using Power Query and SQL ETL workflows, enabling reliable trend analysis across quarterly performance cycles.",
      "Delivered visual BI reports that directly informed staffing and resource allocation strategies for clients.",
    ],
  },
];

export const projects = [
  {
    name: "Retail Sales Data Pipeline",
    stack: "Python · PostgreSQL · SQL ETL · Pandas",
    year: "2025",
    points: [
      "Built a modular ETL pipeline that extracts raw CSV sales data, applies transformation logic (deduplication, type casting, aggregation), and loads cleaned data into a PostgreSQL database.",
      "Parameterized the pipeline for reusability across multiple product categories and date ranges.",
      "Created automated summary reports from the pipeline output using Pandas, reducing manual analysis time by ~60%.",
    ],
  },
  {
    name: "Sales Forecasting Model",
    stack: "Python · Prophet · Pandas · Matplotlib",
    year: "2025",
    points: [
      "Developed a time-series forecasting model using Facebook Prophet to predict 90-day sales trends from historical transaction data.",
      "Improved forecast accuracy by 15% over manual baseline estimates through feature engineering and hyperparameter tuning.",
      "Visualized forecast outputs and confidence intervals with Matplotlib for clear stakeholder communication.",
    ],
  },
  {
    name: "E-Commerce Analytics Dashboard",
    stack: "Tableau · SQL · Excel",
    year: "2024",
    points: [
      "Designed a multi-page Tableau dashboard tracking revenue, customer acquisition, and product-level KPIs, enabling real-time business monitoring.",
      "Integrated data from 3 sources (CRM, transactions, inventory) using SQL joins and prepared a clean data model for Tableau consumption.",
      "Dashboard adopted by client for weekly executive reporting.",
    ],
  },
  {
    name: "Data Quality Audit Tool",
    stack: "Python · Great Expectations · SQL",
    year: "2025 – Ongoing",
    points: [
      "Building a lightweight data profiling and validation tool using Python and Great Expectations to automatically flag null rates, schema drift, and outliers in pipeline inputs.",
      "Designed to run as a pre-ingestion check before any ETL load, ensuring downstream data reliability.",
    ],
  },
];

export const education = {
  degree: "B.Sc. Applied Science — Data Science Major",
  school: "University of Lagos (UNILAG)",
  period: "Expected Graduation: 2028",
  courses: "Data Structures & Algorithms, Database Systems, Statistical Modelling, Business Intelligence",
};

export const skills = {
  "Languages & Query": ["Python (Pandas, NumPy, Matplotlib, Seaborn, Prophet)", "SQL (Advanced)"],
  "Data Engineering": ["ETL/ELT Pipeline Design", "PostgreSQL", "MySQL", "Power Query", "SQL-based data modelling"],
  "Data Visualization": ["Tableau", "Power BI", "Excel Dashboards", "Matplotlib", "Seaborn"],
  "Analytics & Modelling": ["Forecasting", "KPI Design", "Business Intelligence", "Statistical Analysis"],
  "In Progress": ["Apache Airflow", "dbt", "Great Expectations", "Scikit-learn (ML)", "Google BigQuery"],
};

export const certifications = [
  "Tableau Data Analyst — Tableau",
  "Python for Data Science",
  "SQL (Intermediate) — HackerRank",
  "DataCamp Associate Data Engineer",
  "Data Analysis Using Excel — Mentor To Job Bootcamp",
  "Data Analysis Using Tableau — Mentor To Job Bootcamp",
  "Google Data Analytics Professional Certificate — In Progress (Google / Coursera)",
];
