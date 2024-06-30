// The Context API in React provides a way to pass data through the component tree without having to pass props manually at every level. 


// 1. Theme Switching:


import React, { createContext, useContext, useState } from 'react';

// Create a context with a default theme
const ThemeContext = createContext('light');

// ThemeProvider component to wrap the entire application
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Function component using the theme context
const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// App component wrapped with ThemeProvider
const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);


// 2. User Authentication:


import React, { createContext, useContext, useState } from 'react';

// Create a context with default authentication state
const AuthContext = createContext({ isAuthenticated: false, login: () => {}, logout: () => {} });

// AuthProvider component to wrap the application
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Function component using the authentication context
const AuthComponent = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome! <button onClick={logout}>Logout</button></p>
      ) : (
        <p>Please log in <button onClick={login}>Login</button></p>
      )}
    </div>
  );
};

// App component wrapped with AuthProvider
const App = () => (
  <AuthProvider>
    <AuthComponent />
  </AuthProvider>
);



// 3. Localization:

import React, { createContext, useContext, useState } from 'react';

// Create a context with a default language
const LanguageContext = createContext('en');

// LanguageProvider component to wrap the entire application
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Function component using the language context
const LocalizedComponent = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
};

// App component wrapped with LanguageProvider
const App = () => (
  <LanguageProvider>
    <LocalizedComponent />
  </LanguageProvider>
);

// when to use context apis and when not to use
/*


Use Context API when:

Global State Management:

Use Case: When you need to manage global state that is accessed by multiple components throughout your application.
Example: User authentication state, theme preferences, language preferences.


Prop Drilling Becomes Cumbersome:
Use Case: When you find yourself passing props through multiple layers of components and it becomes cumbersome (prop drilling).
Example: Providing a theme or language preference to deeply nested components.

Configuration Settings:
Use Case: When you want to provide configuration settings to various parts of your application.
Example: Providing API endpoints, feature toggles, or other settings.

Cross-Cutting Concerns:
Use Case: When dealing with cross-cutting concerns such as logging, analytics, or performance monitoring that need to be accessed by different components.
Example: Logging user actions across the application.

Dynamic Themes or Styling:
Use Case: When you want to dynamically change the styling or theming of your application.
Example: Changing the color scheme or theme preferences.
*/




/*

Avoid using Context API when:

For Simple State:
Consider: For simple local state management within a component, using useState is often more appropriate and simpler.


Low-Level Components:
Consider: If the state or configuration is only needed in a few low-level components, passing props may be more straightforward.


Performance Concerns:
Consider: For performance-critical scenarios where using context might introduce unnecessary re-renders. In such cases, consider optimizing with memoization or other performance techniques.

Overcomplicating:
Consider: If using context makes your code more complex and harder to understand for a simple scenario, it might be better to stick with traditional prop passing.

When State is Rarely Used:
Consider: If the state is rarely used by components or only needed in a few places, introducing context might be overkill.

*/