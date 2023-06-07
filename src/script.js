import Tooltip from './tooltip';

const form = document.querySelector('.form');
const tooltipsContent = {
  tooltipBtn: {
    title: 'Нажатие кнопочки',
    text: 'Действие выполнено!',
  },
};
const tooltip = new Tooltip();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if ('tooltipBtn' in tooltip.objTooltips) {
    tooltip.removeTooltip('tooltipBtn');
  } else {
    tooltip.showTooltip(tooltipsContent.tooltipBtn.title, tooltipsContent.tooltipBtn.text, form.querySelector('.btn'));
  }
});
