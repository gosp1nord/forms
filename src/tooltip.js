export default class Tooltip {
  constructor() {
    this.objTooltips = {};
  }

  showTooltip(title, message, element) {
    const tooltipElement = document.createElement('div');
    tooltipElement.innerHTML = `
      <div class='block-tooltip-title'>
        <div class='tooltip-title'>${title}</div>
      </div>
      <div class='tooltip-text'>${message}</div>
      <div class='arr'></div>
    `;
    tooltipElement.classList.add('tooltip-div');
    this.objTooltips.tooltipBtn = tooltipElement;
    document.body.appendChild(tooltipElement);
    const { left, top } = element.getBoundingClientRect();
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    tooltipElement.style.left = left + element.offsetWidth / 2 - tooltipWidth / 2 + 'px';
    tooltipElement.style.top = top - tooltipHeight - 10 + 'px';
  }

  removeTooltip(key) {
    this.objTooltips[key].remove();
    delete this.objTooltips[key];
  }
}
