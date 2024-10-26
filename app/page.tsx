"use client";

import PushNotificationManager from "./components/PushNotificationManager";
import InstallPrompt from "./components/InstallPrompt";

export default function Page() {
  return (
    <div>
      <h1 className="text-lg">Gooding Tech - PWA Test</h1>
      <br />

      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
