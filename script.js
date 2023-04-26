const wikiboxForm = document.getElementById('wikibox-form');
const wikiboxPreview = document.getElementById('wikibox-preview');

const modeToggle = document.querySelector("#mode-toggle");
const body = document.querySelector("body");

modeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

wikiboxForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(wikiboxForm);

  const wikibox = `
  <div class="wikibox">
    <div class="wikibox-header">
      <h2>${formData.get('battlename')}</h2>
      <h3>${formData.get('warname')}</h3>
    </div>
    <div class="wikibox-image">
      <img src="${URL.createObjectURL(formData.get('image'))}" alt="${formData.get('image-description')}">
      <p>${formData.get('image-description')}</p>
    </div>
    <div class="wikibox-details">
      <div class="wikibox-detail">
        <h4>Date:</h4>
        <p>${formData.get('date')}</p>
      </div>
      <div class="wikibox-detail">
        <h4>Location:</h4>
        <p>${formData.get('location')}</p>
      </div>
      <div class="wikibox-detail">
        <h4>Result:</h4>
        <p>${formData.get('result')}</p>
      </div>
      <div class="wikibox-detail">
        <h4>Belligerents:</h4>
        <p>${formData.get('belligerents-left')} vs ${formData.get('belligerents-right')}</p>
      </div>
      <div class="wikibox-detail">
        <h4>Commanders and leaders:</h4>
        <div class="wikibox-detail-leaders">
          <div>
            <h5>${formData.get('leaders-left-title') || 'Left'}</h5>
            <p>${formData.get('leaders-left') || 'N/A'}</p>
          </div>
          <div>
            <h5>${formData.get('leaders-right-title') || 'Right'}</h5>
            <p>${formData.get('leaders-right') || 'N/A'}</p>
          </div>
        </div>
      </div>
      <div class="wikibox-detail">
        <h4>Strength:</h4>
        <p>${formData.get('strength-left')} vs ${formData.get('strength-right')}</p>
      </div>
      <div class="wikibox-detail">
        <h4>Casualties and losses:</h4>
        <p>${formData.get('losses-left')} vs ${formData.get('losses-right')}</p>
      </div>
    </div>
  </div>
`;


  wikiboxPreview.innerHTML = wikibox;
});
