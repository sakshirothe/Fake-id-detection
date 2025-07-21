🛡️ Project Title: Fake ID Detection using Machine Learning
📌 Objective
To develop a machine learning model that distinguishes between real and fake user IDs on social media platforms (e.g., Instagram), using account-level data such as follower counts, post activity, verification status, etc.

📁 Dataset Used
The dataset includes features that represent common attributes of social media users. It includes:

fake – Whether the ID is fake (1) or real (0)

profile pic – Binary (1 = has profile pic, 0 = blank)

nums/username – Numeric characters in username

fullname words – Count of words in full name

name==username – Whether full name matches username

description length

external URL

private, verified

followers count, following count, posts count

has number in name, bio completeness, etc.

🧠 ML Approach Used
🔍 1. Data Preprocessing
Removed irrelevant features

Checked for null values

Converted boolean and categorical values to numeric

Scaled the dataset using StandardScaler

🤖 2. Model Training
Used Logistic Regression (a binary classification algorithm)

Split dataset into training (70%) and testing (30%)

Fitted model and evaluated using accuracy metrics

📊 3. Evaluation Metrics
Accuracy score

Confusion Matrix

Classification Report (Precision, Recall, F1-score)

🔄 Prediction Example
The model takes input like:

Follower count: 150

Following: 300

Verified: 0

Bio length: 50
And returns:

✅ Real ID
or

❌ Fake ID

💡 Tools & Libraries Used
Python (Pandas, NumPy, Scikit-learn, Seaborn, Matplotlib)

Google Colab

Tableau (for dashboard/visualization)

GitHub (for deployment)

Optional: Custom domain name (www.detectfake.in)

🌐 Website Frontend (If included)
A simple static webpage hosted on GitHub Pages or custom domain that:

Explains the project

Allows users to try sample prediction

Links to GitHub repo / Colab notebook

📈 Tableau Visualization (Optional Enhancement)
Shows real vs fake ID distribution

Insights into patterns like:

Fake IDs have low followers, high following

Fake IDs often lack profile pictures or bios

✅ Key Results
The model can detect fake IDs with decent accuracy (~85–90% in most cases)

Certain features like profile pic, verification, number in username are strong indicators

🧩 Challenges Faced
Complex dataset with noisy features

Need for feature scaling and transformation

Balancing accuracy with model simplicity

🚀 Future Improvements
Use ensemble models (Random Forest, XGBoost) for better accuracy

Create a real-time detection web app using Flask or Streamlit

Add feedback mechanism from users to improve predictions
