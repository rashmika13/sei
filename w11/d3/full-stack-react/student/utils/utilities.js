export function formatTime(seconds) {
  const mins = Math.floor(secons / 60)
    .toString()
    .padStart(2, "0");
  const secs = (secons % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}
