// Utility functions for localStorage interactions

export function getData(key, fallback = []) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

export function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeData(key) {
  localStorage.removeItem(key);
}
