import Tooltip from '../tooltip';

test('tooltip render', () => {
  document.body.innerHTML = `
  <form class="form">
    <button class="btn" type="submit">КНОПОЧКА</button>
  </form>
  `;
  const elementBtn = document.querySelector('.btn');
  const elementTooltip = new Tooltip();
  elementTooltip.showTooltip('Нажатие кнопочки', 'Действие выполнено!', elementBtn);
  const container = document.querySelector('.tooltip-div');
  expect(container.firstElementChild.classList.contains('block-tooltip-title')).toEqual(true);
});

test('tooltip remove', () => {
  document.body.innerHTML = `
  <form class="form">
    <button class="btn" type="submit">КНОПОЧКА</button>
  </form>
  `;
  const elementBtn = document.querySelector('.btn');
  const elementTooltip = new Tooltip();
  elementTooltip.showTooltip('Нажатие кнопочки', 'Действие выполнено!', elementBtn);
  elementTooltip.removeTooltip('tooltipBtn');
  expect(document.querySelector('.tooltip-div')).toEqual(null);
});
