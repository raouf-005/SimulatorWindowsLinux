// Windows Components
export {
  WindowsPopup,
  usePopupManager,
  POPUP_TYPES,
  POPUP_MESSAGES,
} from "./windows/WindowsPopup";
export {
  WindowsDesktop,
  DesktopIcon,
  DESKTOP_ICONS,
} from "./windows/WindowsDesktop";
export { WindowsTaskbar } from "./windows/WindowsTaskbar";
export { BlueScreenOfDeath } from "./windows/BlueScreen";
export { WindowsTaskManager, LinuxTaskManager } from "./windows/TaskManager";

// Linux Components
export { LinuxDesktop, LinuxIcon, LINUX_ICONS } from "./linux/LinuxDesktop";
export { LinuxTopBar } from "./linux/LinuxTopBar";
export { LinuxTerminal } from "./linux/LinuxTerminal";
export { LinuxWidgets, InfoWidget } from "./linux/LinuxWidgets";

// Shared Components
export { BudgetCounter } from "./shared/BudgetCounter";
export { Notification, NotificationStack } from "./shared/Notification";
export { SystemMonitor } from "./shared/SystemMonitor";
export { TransitionScreen } from "./shared/TransitionScreen";
export { IntroScreen } from "./shared/IntroScreen";
export { EndingScreen } from "./shared/EndingScreen";

// Effects
export {
  LaggyMouse,
  useLaggyMouse,
  useSlowdown,
  useMoneyDrain,
} from "./effects/LagEffects";

// Sound
export { useSoundManager, SOUNDS } from "./sounds/SoundManager";
