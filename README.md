
# Angular i18n and Localization Starter

This project provides a ready-to-use, empty template for adding multi-language support to any Angular project. It includes routing based on URL segments and integrates `ngx-translate` for internationalization (i18n). The project is configured to support English and Arabic languages, but it can be easily extended to include other languages.

## Features

- **Language Switching**: Easily switch between languages using URL segments.
- **Automatic Redirection**: Automatically redirect to the default language if no language is specified or if an unsupported language is detected.
- **Translation Management**: Seamlessly manage translations using `ngx-translate`.
- **Guard Implementation**: Ensure valid language routes with a custom guard.
- **Language Toggle**: Quickly toggle between Arabic and English with a single function.

## Scenarios Covered

1. **Valid Language Route**: Route `http://localhost:4200/en/home` navigates to `http://localhost:4200/en/home`.
2. **Valid Language Route**: Route `http://localhost:4200/ar/home` navigates to `http://localhost:4200/ar/home`.
3. **Valid Language Route**: Route `http://localhost:4200/en` navigates to `http://localhost:4200/en/home`.
4. **Missing Language**: Route `http://localhost:4200/home` navigates to `http://localhost:4200/ar/home` (default language).
5. **Root Route**: Route `http://localhost:4200/` navigates to `http://localhost:4200/ar/home` (default language).
6. **Different Page**: Route `http://localhost:4200/en/page-two` navigates to `http://localhost:4200/en/page-two`.
7. **Different Page without Language**: Route `http://localhost:4200/page-two` navigates to `http://localhost:4200/ar/page-two` (default language).

## Table of Contents
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Project Structure](#project-structure)
* [Adding New Languages](#adding-new-languages)
* [Example Usage](#example-usage)
* [Language Service Methods](#language-service-methods)
* [License](#license)
* [Contributions](#contributions)
* [Author](#author)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RaydAlsayf/multi-language-support-project.git
    cd multi-language-support-project
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

- **Language Service**: Provides methods to switch between languages, toggle languages, and set the initial language.
- **Language Guard**: Ensures routes have valid language prefixes and redirects to the default language if necessary.
- **Translation Files**: Located in `src/assets/i18n/`, these JSON files manage the translations for each language.

### Adding/updating Languages

1. **Add the language code to the supported languages** in `src/app/services/language/languages.enum.ts`:
    ```typescript
    export const defaultLanguage: string = "ar";
    export const defaultLanguageDirection: string = "rtl";
    export const supportedLanguages: string[] = ["ar", "en", "newLang"];
    export const supportedLanguagesDirection : { [key: string]: string } = {
        en: "ltr",
        ar: "rtl",
        newLang: "ltr",
    };
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
  <button (click)="toggleLanguage()">Toggle Language</button>
</div>
```

## Language Service Methods

The `LanguageService` provides the following methods:

### changeLanguage(lang: string)
This method changes the current language to the specified language.

**Usage:**

```typescript
changeLanguage(lang: string) {
  this.languageService.changeLanguage(lang);
}
```

**Example:**
```html
<button (click)="changeLanguage('en')">English</button>
<button (click)="changeLanguage('ar')">Arabic</button>
```

### toggleLanguage()
This method toggles the current language between Arabic and English.

**Usage:**

```typescript
toggleLanguage() {
  this.languageService.toggleLanguage();
}
```

**Example:**
```html
<button (click)="toggleLanguage()">Toggle Language</button>
```

### NavigationService
This service is used to navigate.

**Usage:**
```typescript
navigate(route: string) {
  this.navigationService.navigate([route]);
}
```
**Example:**
```html
<a (click)="navigate('journey-one')"></a>
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributions
Contributions are welcome! Please create an issue or submit a pull request for any features or bug fixes.

## Author
Rayd Alsayf - [Rayd Alsayf](https://www.linkedin.com/in/raydalsayf/)