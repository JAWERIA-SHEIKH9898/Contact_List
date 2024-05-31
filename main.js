var ContactList = /** @class */ (function () {
    function ContactList(contactListElementId) {
        this.contacts = [];
        this.contactListElement = document.getElementById(contactListElementId);
    }
    ContactList.prototype.addContact = function (name, email) {
        var contact = { name: name, email: email };
        this.contacts.push(contact);
        this.render();
    };
    ContactList.prototype.render = function () {
        var _this = this;
        this.contactListElement.innerHTML = '';
        this.contacts.forEach(function (contact) {
            var listItem = document.createElement('li');
            listItem.textContent = "".concat(contact.name, " - ").concat(contact.email);
            _this.contactListElement.appendChild(listItem);
        });
    };
    return ContactList;
}());
document.addEventListener('DOMContentLoaded', function () {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var addContactButton = document.getElementById('add-contact-button');
    var contactList = new ContactList('Contact-list');
    addContactButton.addEventListener('click', function () {
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        if (name !== '' && email !== '') {
            contactList.addContact(name, email);
            nameInput.value = '';
            emailInput.value = '';
            nameInput.focus();
        }
    });
});
