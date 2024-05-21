# Angular Multi-Language Support Project

This project provides a ready-to-use solution for adding multi-language support to any Angular project. It includes routing based on URL segments and integrates `ngx-translate` for internationalization (i18n). The project is configured to support English and Arabic languages, but it can be easily extended to include other languages.

## Features

- **Language Switching**: Easily switch between languages using URL segments.
- **Automatic Redirection**: Automatically redirect to the default language if no language is specified or if an unsupported language is detected.
- **Translation Management**: Seamlessly manage translations using `ngx-translate`.
- **Guard Implementation**: Ensure valid language routes with a custom guard.

## Scenarios Covered

1. **Valid Language Route**: Route `http://localhost:4200/en/home` navigates to `http://localhost:4200/en/home`.
2. **Valid Language Route**: Route `http://localhost:4200/ar/home` navigates to `http://localhost:4200/ar/home`.
3. **Missing Language**: Route `http://localhost:4200/home` navigates to `http://localhost:4200/ar/home` (default language).
4. **Root Route**: Route `http://localhost:4200/` navigates to `http://localhost:4200/ar/home` (default language).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

### Project Structure

- **Language Service**: Provides methods to switch between languages and set the initial language.
- **Language Guard**: Ensures routes have valid language prefixes and redirects to the default language if necessary.
- **Translation Files**: Located in `src/assets/i18n/`, these JSON files manage the translations for each language.

### Adding New Languages

1. **Add the language code to the supported languages** in `language.service.ts`:
    ```typescript
    private supportedLanguages = ['en', 'ar', 'newLang'];
    ```

2. **Create a new translation file** in `src/assets/i18n/` (e.g., `newLang.json`).

3. **Update your components** to include translations for the new language.

### Example Usage

#### Switching Languages

You can switch languages using the provided buttons in the header:
```html
<div>
  <button (click)="changeLanguage('en')">English</button>
  <button (click)="changeLanguage('ar')">Arabic</button>
</div>
