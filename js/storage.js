// localStorage management for movie posters
class PosterStorage {
  constructor(storagePrefix = 'poster_') {
    this.prefix = storagePrefix;
  }

  // Save movie poster as Base64 to localStorage
  savePoster(movieId, base64Data) {
    try {
      const key = `${this.prefix}${movieId}`;
      localStorage.setItem(key, base64Data);
      console.log(`Poster saved for movie ${movieId}`);
      return true;
    } catch (error) {
      console.error(`Error saving poster for movie ${movieId}:`, error);
      return false;
    }
  }

  // Get movie poster from localStorage
  getPoster(movieId) {
    try {
      const key = `${this.prefix}${movieId}`;
      return localStorage.getItem(key);
    } catch (error) {
      console.error(`Error retrieving poster for movie ${movieId}:`, error);
      return null;
    }
  }

  // Clear poster from localStorage
  clearPoster(movieId) {
    try {
      const key = `${this.prefix}${movieId}`;
      localStorage.removeItem(key);
      console.log(`Poster cleared for movie ${movieId}`);
      return true;
    } catch (error) {
      console.error(`Error clearing poster for movie ${movieId}:`, error);
      return false;
    }
  }

  // Check if poster exists
  hasPoster(movieId) {
    try {
      const key = `${this.prefix}${movieId}`;
      return localStorage.getItem(key) !== null;
    } catch (error) {
      console.error(`Error checking poster for movie ${movieId}:`, error);
      return false;
    }
  }

  // Get all stored posters keys
  getAllPosterKeys() {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          keys.push(key);
        }
      }
      return keys;
    } catch (error) {
      console.error('Error getting all poster keys:', error);
      return [];
    }
  }

  // Convert File object to Base64 string
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  // Get storage size usage
  getStorageSize() {
    try {
      let totalSize = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          const value = localStorage.getItem(key);
          totalSize += key.length + value.length;
        }
      }
      return totalSize;
    } catch (error) {
      console.error('Error calculating storage size:', error);
      return 0;
    }
  }
}

// Create global instance
const posterStorage = new PosterStorage();
