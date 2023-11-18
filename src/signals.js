import { signal } from "@preact/signals-react";

export const startMenuOpen = signal(false);
export const toggleStartMenu = () => {
  searchMenuOpen.value = false;
  startMenuOpen.value = !startMenuOpen.value;
};

export const searchMenuOpen = signal(false);
export const toggleSearchMenu = () => {
  startMenuOpen.value = false;
  searchMenuOpen.value = !searchMenuOpen.value;
};

export const fileExplorerOpen = signal(false);
export const fileExplorerSize = signal("small");
export const fileExplorerMinimized = signal(false);

export const toggleFileExplorer = () => {
  startMenuOpen.value = false;
  searchMenuOpen.value = false;
  fileExplorerOpen.value = !fileExplorerOpen.value;
};

export const MinimizeFileExplorer = () => {
  fileExplorerMinimized.value = true;
  fileExplorerOpen.value = false;
};

export const toggleFileExplorerSize = () => {
  startMenuOpen.value = false;
  searchMenuOpen.value = false;
  fileExplorerSize.value =
    fileExplorerSize.value === "small" ? "large" : "small";
};

export const fileExplorerIconHandle = () => {
  startMenuOpen.value = false;
  searchMenuOpen.value = false;
  if (fileExplorerOpen.value) {
    fileExplorerMinimized.value = true;
    toggleFileExplorer();
  } else {
    toggleFileExplorer();
  }
};

export const openFileExplorer = () => {
  startMenuOpen.value = false;
  searchMenuOpen.value = false;
  fileExplorerOpen.value = true;
  fileExplorerMinimized.value = false;
};

export const closeFileExplorer = () => {
  startMenuOpen.value = false;
  searchMenuOpen.value = false;
  fileExplorerOpen.value = false;
  fileExplorerMinimized.value = false;
};
