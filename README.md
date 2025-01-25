# **Password Strength Checker**

The Password Strength Checker is an interactive web application designed to help users evaluate the security of their passwords in real time. The tool provides insights into the robustness of a password by analyzing its length, character variety, and complexity. Additionally, it estimates how long it might take a computer to crack the password, offering users valuable feedback for creating stronger, more secure passwords.

---

## **Key Features**
- **Real-Time Feedback:** Instant analysis of the password as the user types.
- **Time to Crack Estimate:** Displays an estimated time it would take to crack the password using brute-force techniques.
- **Visual Cues:** 
  - Color-coded strength indicators (e.g., red for weak, orange for moderate, green for strong).
  - Border styling and dynamic UI updates for an intuitive user experience.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## **How It Works**
1. **Character Pool Analysis:** 
   - The tool checks the presence of lowercase letters, uppercase letters, numbers, and special characters to calculate the character pool size.
2. **Password Strength Evaluation:** 
   - Calculates the total number of possible combinations for the given password.
   - Divides the total combinations by an assumed brute-force speed (e.g., 1 billion guesses per second) to estimate the time to crack.
3. **Dynamic Styling:** 
   - Updates the background and border colors based on password strength for visual feedback.

---

## **Technologies Used**
- **Frontend:** HTML, CSS, JavaScript
- **Styling:** Dynamic CSS for live UI updates
- **Algorithm:** Custom logic for estimating password crack time based on character pool and length

---

## **Why Use This Tool?**
This Password Strength Checker empowers users by providing:
- Awareness about the security of their passwords.
- Real-time feedback to encourage stronger password practices.
- A user-friendly, visually engaging way to learn about password safety.

