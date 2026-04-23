import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export const loginWithEmail = async (credentials) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      credentials.email, 
      credentials.password
    );
    // Return standard backend response contract expected by rules
    return {
      success: true,
      message: "Login successful",
      data: userCredential.user
    };
  } catch (error) {
    // Normalize Firebase error
    throw {
      success: false,
      message: error.message || "An error occurred during login",
      errorCode: error.code || "AUTH_ERROR"
    };
  }
};
