// Main application logic
class MovieGalleryApp {
  constructor() {
    this.currentMovieId = 1;
    this.movies = MovieUtils.getAllMovies();
    this.init();
  }

  // Initialize the application
  init() {
    this.setupEventListeners();
    this.renderMoviesGrid();
    this.renderCurrentMovie();
  }

  // Setup all event listeners
  setupEventListeners() {
    // File input change
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', (e) => this.handlePosterUpload(e));

    // Grid click delegation
    const grid = document.getElementById('moviesGrid');
    grid.addEventListener('click', (e) => this.handleMovieSelect(e));
  }

  // Render movies grid with thumbnails
  renderMoviesGrid() {
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = '';

    this.movies.forEach((movie) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `movie-thumbnail ${
        movie.id === this.currentMovieId ? 'active' : ''
      }`;
      thumbnail.dataset.movieId = movie.id;

      // Get poster from storage or use placeholder
      const posterData = posterStorage.getPoster(movie.id);
      const imageSource =
        posterData || ImageUtils.createPlaceholder(140, 210, 'No Poster');

      const img = document.createElement('img');
      img.src = imageSource;
      img.alt = movie.title;

      const overlay = document.createElement('div');
      overlay.className = 'thumbnail-overlay';
      overlay.textContent = movie.title;

      thumbnail.appendChild(img);
      thumbnail.appendChild(overlay);
      grid.appendChild(thumbnail);
    });
  }

  // Render current movie details
  renderCurrentMovie() {
    const movie = MovieUtils.findMovieById(this.currentMovieId);
    if (!movie) return;

    // Update poster
    this.updatePoster(movie.id);

    // Update info section
    this.updateMovieInfo(movie);

    // Scroll thumbnail into view
    const activeThumbnail = document.querySelector(
      `.movie-thumbnail[data-movie-id="${movie.id}"]`
    );
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Update poster image
  updatePoster(movieId) {
    const posterImage = document.getElementById('posterImage');
    const posterPlaceholder = document.getElementById('posterPlaceholder');

    const posterData = posterStorage.getPoster(movieId);

    if (posterData) {
      posterImage.src = posterData;
      posterImage.style.display = 'block';
      posterPlaceholder.style.display = 'none';
    } else {
      posterImage.style.display = 'none';
      posterPlaceholder.style.display = 'flex';
      posterPlaceholder.textContent = 'No Poster Uploaded\nClick Upload to add one';
    }
  }

  // Update movie information
  updateMovieInfo(movie) {
    const infoSection = document.getElementById('infoSection');
    infoSection.innerHTML = '';

    // Header with title and meta info
    const headerDiv = document.createElement('div');
    headerDiv.className = 'movie-header';

    const titleEl = document.createElement('h1');
    titleEl.className = 'movie-title';
    titleEl.textContent = movie.title;
    headerDiv.appendChild(titleEl);

    const metaDiv = document.createElement('div');
    metaDiv.className = 'movie-meta';

    const yearSpan = document.createElement('span');
    yearSpan.className = 'movie-year';
    yearSpan.textContent = movie.year;
    metaDiv.appendChild(yearSpan);

    const genresDiv = document.createElement('div');
    genresDiv.className = 'movie-genres';
    movie.genres.forEach((genre) => {
      const tag = document.createElement('span');
      tag.className = 'genre-tag';
      tag.textContent = genre;
      genresDiv.appendChild(tag);
    });
    metaDiv.appendChild(genresDiv);

    // Rating
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating-section';
    const ratingBox = document.createElement('div');
    ratingBox.className = 'rating-box';
    ratingBox.textContent = StringFormatter.formatRating(movie.rating);
    const ratingLabel = document.createElement('span');
    ratingLabel.className = 'rating-label';
    ratingLabel.textContent = '/10 User rating';
    ratingDiv.appendChild(ratingBox);
    ratingDiv.appendChild(ratingLabel);
    metaDiv.appendChild(ratingDiv);

    headerDiv.appendChild(metaDiv);
    infoSection.appendChild(headerDiv);

    // Synopsis
    const synopsisSection = document.createElement('div');
    synopsisSection.className = 'section';
    const synopsisTitle = document.createElement('h2');
    synopsisTitle.className = 'section-title';
    synopsisTitle.textContent = 'Synopsis';
    const synopsisContent = document.createElement('p');
    synopsisContent.className = 'section-content';
    synopsisContent.textContent = movie.synopsis;
    synopsisSection.appendChild(synopsisTitle);
    synopsisSection.appendChild(synopsisContent);
    infoSection.appendChild(synopsisSection);

    // Cast
    const castSection = document.createElement('div');
    castSection.className = 'section';
    const castTitle = document.createElement('h2');
    castTitle.className = 'section-title';
    castTitle.textContent = 'Cast';
    castSection.appendChild(castTitle);

    const castList = document.createElement('div');
    castList.className = 'cast-list';
    movie.cast.forEach((member) => {
      const castMember = document.createElement('div');
      castMember.className = 'cast-member';
      const memberName = document.createElement('div');
      memberName.className = 'cast-name';
      memberName.textContent = member.name;
      const memberRole = document.createElement('div');
      memberRole.className = 'cast-role';
      memberRole.textContent = member.role;
      castMember.appendChild(memberName);
      castMember.appendChild(memberRole);
      castList.appendChild(castMember);
    });
    castSection.appendChild(castList);
    infoSection.appendChild(castSection);

    // Director
    const directorSection = document.createElement('div');
    directorSection.className = 'director-box';
    const directorLabel = document.createElement('span');
    directorLabel.className = 'director-label';
    directorLabel.textContent = 'Director';
    const directorName = document.createElement('span');
    directorName.className = 'director-name';
    directorName.textContent = movie.director;
    directorSection.appendChild(directorLabel);
    directorSection.appendChild(directorName);
    infoSection.appendChild(directorSection);
  }

  // Handle movie selection from grid
  handleMovieSelect(event) {
    const thumbnail = event.target.closest('.movie-thumbnail');
    if (!thumbnail) return;

    const movieId = parseInt(thumbnail.dataset.movieId);
    if (movieId === this.currentMovieId) return;

    this.currentMovieId = movieId;
    this.updateMovieGrid();
    this.renderCurrentMovie();
  }

  // Update grid highlighting
  updateMovieGrid() {
    const thumbnails = document.querySelectorAll('.movie-thumbnail');
    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active');
      if (parseInt(thumb.dataset.movieId) === this.currentMovieId) {
        thumb.classList.add('active');
      }
    });
  }

  // Handle poster file upload
  async handlePosterUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file
    const validation = FileValidator.validate(file);
    if (!validation.valid) {
      NotificationManager.error(validation.error);
      event.target.value = ''; // Reset input
      return;
    }

    try {
      // Convert to Base64 and save
      const base64 = await posterStorage.fileToBase64(file);
      const saved = posterStorage.savePoster(this.currentMovieId, base64);

      if (saved) {
        // Update UI
        this.updatePoster(this.currentMovieId);
        this.renderMoviesGrid(); // Update thumbnail in grid
        NotificationManager.success(
          `Poster updated for "${
            this.movies.find((m) => m.id === this.currentMovieId).title
          }"`
        );
      } else {
        NotificationManager.error('Failed to save poster');
      }

      // Clear input
      event.target.value = '';
    } catch (error) {
      console.error('Error uploading poster:', error);
      NotificationManager.error('Error processing image');
      event.target.value = '';
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MovieGalleryApp();
});
