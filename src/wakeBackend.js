const API_BASE = import.meta.env.VITE_API_URL; 

// Ping function to wake the backend
async function wakeBackend() {
  try {
    await fetch(`${API_BASE}/api/AboutMe`);
    console.log("Backend awake ✅");
  } catch (err) {
    console.error("Backend ping failed ❌", err);
  }
}

wakeBackend();
setInterval(wakeBackend, 10 * 60 * 1000);
