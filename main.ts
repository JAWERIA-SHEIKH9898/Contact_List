

interface Contact {
    name: string;
    email: string;
}

class ContactList {
    private contacts: Contact[] = [];
    private contactListElement: HTMLElement;

    constructor(contactListElementId: string) {
        this.contactListElement = document.getElementById(contactListElementId)!;
    }

    addContact(name: string, email: string): void {
        const contact: Contact = { name, email };
        this.contacts.push(contact);
        this.render();
    }

    private render(): void {
        this.contactListElement.innerHTML = '';
        this.contacts.forEach(contact => {
            const listItem = document.createElement('li');
            listItem.textContent = `${contact.name} - ${contact.email}`;
            this.contactListElement.appendChild(listItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const addContactButton = document.getElementById('add-contact-button') as HTMLButtonElement;
    const contactList = new ContactList('Contact-list');

    addContactButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        if (name !== '' && email !== '') {
            contactList.addContact(name, email);
            nameInput.value = '';
            emailInput.value = '';
            nameInput.focus();
        }
    });
});