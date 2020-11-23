const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    const container = document.getElementById('characterContainer');
    container.innerHTML = "";

    charactersAPI.getFullList()
      .then(response => {
        response.data.forEach(element => {
          const characterHtml = `<div class="character-info">
          <div class="name">${element.name}</div>
          <div class="occupation">${element.occupation}</div>
          <div class="cartoon">${element.cartoon}</div>
          <div class="weapon">${element.weapon}</div>
          </div>`;
          container.innerHTML += characterHtml;
        });
      })
      .catch(e => console.log(`Error getting characters: ${e}`));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById('charSearchId').value;

    charactersAPI.getOneRegister(id)
      .then(response => console.log(response.data))
      .catch(e => console.log(`Error getting character ${id}: ${e}`));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('charDeleteId').value;

    charactersAPI.deleteOneRegister(id)
      .then(response => console.log(response.data))
      .catch(e => console.log(`Error deleting character ${id}: ${e}`));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('updateIdField').value;
    const name = document.getElementById('updateNameField').value;
    const occupation = document.getElementById('updateOccupationField').value;
    const weapon = document.getElementById('updateWeaponField').value;
    const cartoon = document.getElementById('updateCartoonField').checked;

    const characterInfo = {name, occupation, weapon, cartoon};

    charactersAPI.updateOneRegister(id, characterInfo)
      .then(response => console.log(response.data))
      .catch(e => console.log(`Error updating character: ${e}`));

    document.getElementById('edit-character-form').reset();
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('newNameField').value;
    const occupation = document.getElementById('newOccupationField').value;
    const weapon = document.getElementById('newWeaponField').value;
    const cartoon = document.getElementById('newCartoonField').checked;

    const characterInfo = {name, occupation, weapon, cartoon};

    charactersAPI.createOneRegister(characterInfo)
      .then(response => console.log(response.data))
      .catch(e => console.log(`Error getting characters: ${e}`));

    document.getElementById('new-character-form').reset();
  });
});
