// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

function toggle(ev) {
  const background = ev.currentTarget.querySelector('[data-background]');
  const element = ev.currentTarget.querySelector('[data-element]');
  if (background.classList.contains('bg-gray-200')) {
    background.classList.remove('bg-gray-200', 'transition-colors', 'duration-500', 'ease-in-out');
    background.classList.add('transition-colors', 'duration-500', 'ease-in-out', 'bg-purple-500');
    element.classList.remove('transition-all', 'duration-500', 'ease-in-out', 'translate-x-[-7]');
    element.classList.add('transition-all', 'duration-500', 'ease-in-out', 'translate-x-7');
  } else {
    background.classList.add('bg-gray-200', 'transition-colors', 'duration-500', 'ease-in-out');
    background.classList.remove('bg-purple-500');
    element.classList.remove('transition-all', 'duration-500', 'ease-in-out', 'translate-x-7');
    element.classList.add('transition-all', 'duration-500', 'ease-in-out', 'translate-x-[-7]');
  }
}
