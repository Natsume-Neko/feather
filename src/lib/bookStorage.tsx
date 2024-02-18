// This file contains functions for saving and fetching books from IndexedDB
// IndexedDB is used to store books because localStorage has a size limit of 5MB

// This function is used to save a book to IndexedDB
export function saveBook(bookFile: ArrayBuffer, bookName: string) {
  // This function returns a promise because IndexedDB is asynchronous
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.open('featherBooks', 1);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      // create an object store for the books, the key is the book name
      db.createObjectStore('books', {keyPath: 'bookName'});
    };
    request.onerror = (e) => {
      console.log((e.target as IDBOpenDBRequest).result);
    };
    request.onsuccess = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      const transaction = db.transaction(['books'], 'readwrite');
      const books = transaction.objectStore('books');
      const bookRequest = books.add({bookName: bookName, bookFile: bookFile});
      bookRequest.onerror = (e) => {
        reject((e.target as IDBOpenDBRequest).result);
      };
      bookRequest.onsuccess = (e) => {
        console.log('success');
        resolve();
      };
    };
  });
}

// This function is used to fetch a book from IndexedDB
export async function fetchBook(bookName: string) {
  return new Promise<ArrayBuffer | null>((resolve, reject) => {
    const request = indexedDB.open('featherBooks', 1);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      // create an object store for the books, the key is the book name
      db.createObjectStore('books', {keyPath: 'bookName'});
    };
    request.onerror = (e) => {
      console.log((e.target as IDBOpenDBRequest).result);
    };
    request.onsuccess = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      const transaction = db.transaction('books', 'readonly');
      const books = transaction.objectStore('books');
      const bookRequest = books.get(bookName);
      bookRequest.onerror = (e) => {
        resolve(null);
      };
      bookRequest.onsuccess = (e) => {
        // return the book file if it exists
        resolve(((e.target as IDBOpenDBRequest).result as any)?.bookFile);
      };
    };
  });
}