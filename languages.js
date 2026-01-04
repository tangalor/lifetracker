// Language translations
const translations = {
    it: {
        welcome: "LifeTracker ★",
        login: "Accedi",
        register: "Registrati",
        email: "Email",
        password: "Password",
        confirmPassword: "Conferma Password",
        loginButton: "Accedi",
        registerButton: "Registrati",
        logout: "Esci",
        loggingIn: "Accesso in corso...",
        registering: "Registrazione in corso...",
        loginSuccess: "Login effettuato con successo!",
        registerSuccess: "Registrazione completata! Controlla la tua email per confermare l'account.",
        passwordMismatch: "Le password non coincidono",
        logoutError: "Errore durante il logout: ",
        emailPlaceholder: "tua@email.com",
        passwordPlaceholder: "••••••••",
        dashboardTitle: "Area Riservata",
        dashboardText: "Benvenuto nell'area riservata! Questa sezione è visibile solo agli utenti autenticati. Qui puoi gestire il tuo account e accedere a tutte le funzionalità riservate.",
        userEmail: "Email:",
        googleLogin: "Accedi con Google",
        orDivider: "oppure",
        usePersonalEmail: "Utilizza la tua mail personale",
        menuHome: "Tracciamento",
        menuTasks: "Lista attività",
        menuCalendar: "Calendario",
        menuStats: "Statistiche",
        loadingTasks: "Caricamento attività...",
        noTasks: "Nessuna attività trovata",
        tasksSubtitle: "Ecco la lista delle attività che sono disponibili per te"
    },
    en: {
        welcome: "LifeTracker ★",
        login: "Login",
        register: "Sign Up",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        loginButton: "Login",
        registerButton: "Sign Up",
        logout: "Logout",
        loggingIn: "Logging in...",
        registering: "Signing up...",
        loginSuccess: "Login successful!",
        registerSuccess: "Registration complete! Check your email to confirm your account.",
        passwordMismatch: "Passwords do not match",
        logoutError: "Logout error: ",
        emailPlaceholder: "your@email.com",
        passwordPlaceholder: "••••••••",
        dashboardTitle: "Dashboard",
        dashboardText: "Welcome to your dashboard! This section is only visible to authenticated users. Here you can manage your account and access all reserved features.",
        userEmail: "Email:",
        googleLogin: "Sign in with Google",
        orDivider: "or",
        usePersonalEmail: "Use your personal email",
        menuHome: "Tracking",
        menuTasks: "Task List",
        menuCalendar: "Calendar",
        menuStats: "Statistics",
        loadingTasks: "Loading tasks...",
        noTasks: "No tasks found",
        tasksSubtitle: "Here is the list of activities available to you"
    }
};

// Get browser language
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('it') ? 'it' : 'en';
}

// Get current language
const currentLang = getBrowserLanguage();
const t = translations[currentLang];
