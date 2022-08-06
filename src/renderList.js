export default function renderList(list, listBox) {
  console.log(list);
  const markup = list
    .map(({ flags: { svg }, name: { official } }) => {
      `<li class="country-list__item">
<img src="${svg}" alt="flag" width="30">
<h1 class="country-list__title">${official}</h1>
      </li>`;
    })
    .join('');
  console.log(markup);
  return (listBox.innerHTML = markup);
}
