export const getAllContacts = store => store.contacts;
// export const getFilteredBooks = ({contacts, filter}) => {
//     if (!filter) {
//         return contacts;
//     }

//     const normalizedFilter = filter.toLowerCase();
//     const result = contacts.filter(({ title, author }) => {
//         return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
//     })

//     return result;
// }