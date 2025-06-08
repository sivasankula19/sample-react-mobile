# 📱 Sample React Mobile App (React + Capacitor)

A starter template to build and run a **React app as a cross-platform Android app** using **Capacitor**.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sivasankula19/sample-react-mobile.git
cd sample-react-mobile
git checkout main
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## 🛠 Make Code Changes

- Modify the files inside `src/` as needed.
- Test the web version with:

```bash
npm start
```

---

## 🌿 Create a Branch for Your Feature

```bash
git checkout -b my-feature-branch
```

Make your changes, then commit:

```bash
git add .
git commit -m "Updated app content and configuration"
```

---

## ✏️ Rename App Name and ID in Capacitor Config

Edit `capacitor.config.ts`:

```ts
const config: CapacitorConfig = {
  appId: 'com.yourdomain.myapp',
  appName: 'MyApp',
  webDir: 'build',
  bundledWebRuntime: false
};
```

---

## ♻️ Remove Android Folder and Re-add

```bash
rm -rf android
npx cap add android
```

---

## 🔁 Sync Capacitor

```bash
npm run build       # Build the React app
npx cap copy        # Copy the build files to native
```

---

## 📱 Open in Android Studio

```bash
npx cap open android
```

---

## 📦 Build the APK (in Android Studio)

1. Choose a device/emulator.
2. Click **Run ▶️**
3. Or go to `Build > Build Bundle(s)/APK > Build APK`

The generated APK will be in:

```
android/app/build/outputs/apk/debug/
```

---

Happy coding! 🚀 Feel free to fork and customize further.