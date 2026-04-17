// Utility functions for the movie gallery app

// File validation utilities
const FileValidator = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],

  isValidImage(file) {
    if (!file) return false;
    return this.ALLOWED_TYPES.includes(file.type);
  },

  isValidSize(file) {
    if (!file) return false;
    return file.size <= this.MAX_FILE_SIZE;
  },

  validate(file) {
    if (!file) {
      return { valid: false, error: 'No file selected' };
    }

    if (!this.isValidImage(file)) {
      return {
        valid: false,
        error: `Invalid image format. Allowed: JPG, PNG, WebP, GIF. Got: ${file.type}`
      };
    }

    if (!this.isValidSize(file)) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      const maxMB = (this.MAX_FILE_SIZE / (1024 * 1024)).toFixed(1);
      return {
        valid: false,
        error: `File too large: ${sizeMB}MB. Max allowed: ${maxMB}MB`
      };
    }

    return { valid: true };
  },

  formatSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }
};

// String formatting utilities
const StringFormatter = {
  truncate(str, length = 100) {
    if (str.length > length) {
      return str.substring(0, length) + '...';
    }
    return str;
  },

  formatGenres(genresArray) {
    return genresArray.join(' | ');
  },

  formatRating(rating) {
    return rating.toFixed(1);
  },

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

// DOM utilities
const DOMHelper = {
  createElement(tag, className = '', id = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (id) element.id = id;
    return element;
  },

  setAttributes(element, attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  },

  addClass(element, className) {
    element.classList.add(className);
  },

  removeClass(element, className) {
    element.classList.remove(className);
  },

  toggleClass(element, className) {
    element.classList.toggle(className);
  },

  hasClass(element, className) {
    return element.classList.contains(className);
  }
};

// Notification/Toast utilities
class NotificationManager {
  static show(message, type = 'info', duration = 3000) {
    const notification = DOMHelper.createElement('div', `notification notification--${type}`);
    notification.textContent = message;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('notification--show'), 10);

    // Auto remove
    setTimeout(() => {
      notification.classList.remove('notification--show');
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  static success(message, duration = 3000) {
    this.show(message, 'success', duration);
  }

  static error(message, duration = 4000) {
    this.show(message, 'error', duration);
  }

  static info(message, duration = 3000) {
    this.show(message, 'info', duration);
  }

  static warning(message, duration = 3500) {
    this.show(message, 'warning', duration);
  }
}

// Movie utilities
const MovieUtils = {
  findMovieById(movieId) {
    return MOVIES.find(movie => movie.id === parseInt(movieId));
  },

  getAllMovies() {
    return MOVIES;
  },

  getMovieCount() {
    return MOVIES.length;
  },

  searchMovies(query) {
    const lowerQuery = query.toLowerCase();
    return MOVIES.filter(movie =>
      movie.title.toLowerCase().includes(lowerQuery) ||
      movie.synopsis.toLowerCase().includes(lowerQuery)
    );
  }
};

// Image utilities
const ImageUtils = {
  createPlaceholder(width = 300, height = 450, text = 'No Image') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);

    // Text
    ctx.fillStyle = '#888';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    return canvas.toDataURL();
  },

  isBase64(str) {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  }
};

// Debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
