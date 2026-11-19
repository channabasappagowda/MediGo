
# 🏥 Medigo

### AI-Assisted Doctor Appointment Booking Platform

Medigo is an AI-assisted healthcare platform that helps patients find suitable doctors and coordinate appointments through a conversational interface.

Instead of manually searching through doctors and medical specializations, users can describe their symptoms naturally. Medigo's AI pipeline analyzes the symptoms, identifies the relevant medical specialization, matches the patient with an available doctor, and helps coordinate an appointment.

---

## ✨ Features

- 🤖 **AI-Powered Symptom Analysis**
  - Understands symptoms described in natural language.
  - Identifies the relevant medical specialization.

- 👨‍⚕️ **Intelligent Doctor Matching**
  - Matches patients with suitable doctors based on analyzed symptoms.
  - Uses doctor availability and specialization data.

- 📅 **Appointment Coordination**
  - Helps coordinate available appointment time slots.

- 🔐 **User Authentication**
  - Secure signup and login.
  - JWT-based authentication.

- 📧 **Email OTP Verification**
  - Sends OTP verification emails during signup.
  - Activates the account after successful verification.

- 👤 **User Profile**
  - Profile management for patients.

- 💬 **Conversational AI Interface**
  - Patients can interact with the healthcare assistant through chat instead of filling multiple forms.

- 🗄️ **MongoDB Database**
  - Stores user, doctor and appointment information.

- 🔌 **Service-Based Architecture**
  - Frontend, backend and AI services are separated for independent development and scaling.

---

## 🧠 AI Agent Architecture

Medigo uses three specialized Python-based AI agents powered by Google Gemini through direct API integration.

```text
                       Patient
                          |
                          v
                  React Frontend
                   Chat Interface
                          |
                          v
                  Node.js Backend
                   Express API
                          |
                          v
                 Python AI Service
                      FastAPI
                          |
                          v
                    AI Agent Layer
                          |
              +-----------+-----------+
              |           |           |
              v           v           v
        Symptom       Doctor       Booking
        Analyzer      Matcher    Coordinator
              |           |           |
              +-----------+-----------+
                          |
                          v
                  Google Gemini
                    (AI Model)

                          |
                          v
                       MongoDB
              +-----------+-----------+
              |           |           |
              v           v           v
            Users      Doctors   Appointments
```

---

## 🛠️ Technologies Used

| Component | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| AI Service | Python, FastAPI |
| AI Agents | Python-based specialized agents |
| AI Model | Google Gemini API |
| Database | MongoDB |
| Authentication | JWT |
| Email Verification | OTP-based email verification |

---

## ⚙️ Project Architecture

Medigo follows a service-based architecture with three application layers:

- **Frontend:** Provides the patient-facing interface and conversational chat experience.
- **Backend:** Handles API requests, authentication, user profiles and application operations.
- **AI Service:** Processes symptom descriptions, identifies relevant specializations, matches doctors and assists with appointment coordination.

MongoDB stores the application's user, doctor and appointment data.

---

## 👨‍💻 Author

**Channabasappa Gowda B S**
